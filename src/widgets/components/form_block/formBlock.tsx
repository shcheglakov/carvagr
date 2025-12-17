import styles from "./formBlock.module.scss"
import Bmw from "../../../assets/cars_images/bmw.png"
import Tesla from "../../../assets/cars_images/tesla.png"
import Cx5 from "../../../assets/cars_images/cx5.png"
import Elantra from "../../../assets/cars_images/elantra.png"
import Li7 from "../../../assets/cars_images/li7.png"
import Range from "../../../assets/cars_images/brown_range.png"
import Civic from "../../../assets/cars_images/civic.png"
import Mers from "../../../assets/cars_images/mers.png"

import React, { useEffect, useState } from "react"
import { checkEnvConfig, envConfig } from "../../../config/env"

interface FormData {
    type?: string,
    phone: string,
    name?: string,
    car?: string
}

export const FormBlock = () => {
    const [radioSelect, setRadioSelect] = useState(0);
    const [statusMessage, setStatusMessage] = useState('');
    const [configStatus, setConfigStatus] = useState<{ isValid: boolean; errors: string[] } | null>(null);
    const [isMobile, setIsMobile] = useState(false)
    
    console.log(statusMessage)
    console.log(configStatus)

    const [formData, setFormData] = useState<FormData>({
        type: '',
        phone: '',
        name: '',
        car: '',
    })

    const [isLoading, setIsLoading] = useState(false);
    
    const { BOT_TOKEN, CHAT_ID } = envConfig;

    useEffect(() => {
        const status = checkEnvConfig();
        setConfigStatus(status);

        // В режиме разработки показываем статус конфигурации
        if (import.meta.env.DEV && !status.isValid) {
            console.warn('Конфигурация не настроена:', status.errors);
        }

        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Обычно 768px - breakpoint для мобильных
        };

        checkMobile();

        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const selecteRadioButton = (number: number) => {
        setRadioSelect(number)
    }

    const sendToTelegram = async (data: FormData) => {
        const type = radioSelect === 0 ? 'Осмотр' : 'Подбор'
        const message = `
            📬 Новая заявка с сайта:

💬 Услуга: ${type}
👤 Имя: ${data.name}
📱 Телефон: ${data.phone || 'не указан'}
🏎 Машина: ${data.car}

⏰ Время: ${new Date().toLocaleString()}
        `;

        try {
            const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: 'HTML'
                })
            });
            const result = await response.json();
            return result.ok;
        } catch (error) {
            console.error('Ошибка отправки в Telegram:', error);
            return false;
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Проверка наличия токена
        if (!BOT_TOKEN || !CHAT_ID) {
            setStatusMessage('❌ Ошибка конфигурации. Пожалуйста, свяжитесь с администратором.');
            return;
        }
        
        setIsLoading(true);
        setStatusMessage('');

        const type = radioSelect === 0 ? 'Осмотр' : 'Подбор'

        try {
            const success = await sendToTelegram(formData);
        
            if (success) {
                setStatusMessage('✅ Сообщение отправлено в Telegram!');
                setFormData({ name: '', phone: '', type: type, car: ''});
            } else {
                setStatusMessage('❌ Ошибка отправки. Попробуйте позже.');
            }
        } catch (error) {
            console.log(error)
            setStatusMessage('❌ Произошла ошибка при отправке');
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <div className={styles.formblock_container}>
            <h1>Хотите осмотреть или<br/>купить б/у автомобиль?</h1>
            <h2>Carvagr подберет оптимальное предложение на рынке<br/>с гарантией технической и юридической чистоты</h2>
            
            <div className={styles.formblock_form_container}>
                {isMobile ? null : 
                    <div className={styles.cars_animation_container_seamless}>
                        <div className={styles.carouselSeamless}>
                            {[Bmw, Tesla, Cx5, Elantra, Li7, Range, Civic, Mers].map((car, index) => (
                                <React.Fragment key={index}>
                                    <img 
                                        src={car} 
                                        alt={`Car ${index + 1}`} 
                                        className={styles.carImageSeamless} 
                                        loading="lazy"
                                    />
                                </React.Fragment>
                            ))}
                            {[Bmw, Tesla, Cx5, Elantra, Li7, Range, Civic, Mers].map((car, index) => (
                                <React.Fragment key={`dup-${index}`}>
                                    <img 
                                        src={car} 
                                        alt={`Car ${index + 1}`} 
                                        className={styles.carImageSeamless} 
                                        loading="lazy"
                                    />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                }

                <h1>Оставь заявку, чтобы сохранить<br/>свою выгоду!</h1>
                <div className={styles.formblock_form_container__radio_container}>
                   <button 
                        onClick={() => selecteRadioButton(0)}
                        style={{ 
                            backgroundColor: radioSelect === 0 ? '#D5D7DA1A' : '#151515' 
                        }}
                        className={radioSelect === 0 ? styles.active : styles.inactive}
                    >
                        Осмотр
                    </button> 
                    <button 
                        onClick={() => selecteRadioButton(1)}
                        style={{ 
                            backgroundColor: radioSelect === 1 ? '#D5D7DA1A' : '#151515' 
                        }}
                        className={radioSelect === 1 ? styles.active : styles.inactive}
                    >
                        Подбор
                    </button>
                </div>
                <form onSubmit={handleSubmit} className={styles.formblock_form__form}>
                    <div className={`${styles.formblock_form__form_input_container} ${styles.formblock_form__form_input_container_1}`}>
                        <p>Марка и модель</p>
                        <input 
                            required
                            type="text" 
                            placeholder="Hyundai Solaris 2017" 
                            name="car" 
                            className={styles.formblock_form__form_input}
                            value={formData.car}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={`${styles.formblock_form__form_input_container} ${styles.formblock_form__form_input_container_2}`}>
                        <p>Как вас зовут?</p>
                        <input
                            required 
                            type="text" 
                            placeholder="Иван Иванов" 
                            name="name" 
                            className={styles.formblock_form__form_input}
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={`${styles.formblock_form__form_input_container} ${styles.formblock_form__form_input_container_3}`}>
                        <p>Номер телефона</p>
                        <input
                            required
                            type="text" 
                            placeholder="+7" 
                            name="phone" 
                            className={styles.formblock_form__form_input}
                            value={formData.phone}
                            onChange={handleChange}
                            pattern="^\+?[0-9\s\-\(\)]+$"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className={styles.formblock_form__form_input_container_4}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Отправка...' : "Проконсультироваться"}
                    </button>
                </form>
            </div>
        </div>
    )
}