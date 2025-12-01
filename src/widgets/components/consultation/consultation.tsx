import { useState } from "react"
import styles from "./consultation.module.scss"
import { envConfig } from "../../../config/env"

interface FormData {
    type?: string,
    name?: string,
    phone?: string,
}

export const Consultation = () => {
    const [isLoading, setIsLoading] = useState(false)
    // const [statusMessage, setStatusMessage] = useState('')
    const [formData, setFormData] = useState<FormData>({
        type: '',
        name: '',
        phone: '',
    })
    const { BOT_TOKEN, CHAT_ID} = envConfig

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const sendToTelegram = async (data: FormData) => {
        const type = 'Консультация'
        const message = `
            📬 Новая заявка с сайта:

💬 Услуга: ${type}
👤 Имя: ${data.name}
📱 Телефон: ${data.phone || 'не указан'}

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
        // if (!BOT_TOKEN || !CHAT_ID) {
        //     setStatusMessage('❌ Ошибка конфигурации. Пожалуйста, свяжитесь с администратором.');
        //     return;
        // }
            
        setIsLoading(true);
        // setStatusMessage('');
    
        const type = 'Консультация'
    
        try {
            const success = await sendToTelegram(formData);
            
            if (success) {
                //setStatusMessage('✅ Сообщение отправлено в Telegram!');
                setFormData({ name: '', phone: '', type: type});
            } else {
                //setStatusMessage('❌ Ошибка отправки. Попробуйте позже.');
            }

        } catch (error) {
            //setStatusMessage('❌ Произошла ошибка при отправке');
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <h1>Оставить заявку на консультацию!</h1>
            <div className={styles.input_container}>
                <p>Как вас зовут?</p>
                <input 
                    required
                    type="text" 
                    placeholder="Иван Иванов"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.input_container}>
                <p>Номер телефона</p>
                <input 
                    required
                    type="text" 
                    placeholder="+7"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="^\+?[0-9\s\-\(\)]+$"
                />
            </div>
            <button type="submit" className={styles.button_submit} disabled={isLoading}>Проконсультироваться</button>
        </form>     
    )
}