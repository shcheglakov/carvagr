import styles from "./formBlock.module.scss"
import Bmw from "../../../../public/cars_animation/bmw.png"
import Tesla from "../../../../public/cars_animation/tesla.png"
import Cx5 from "../../../../public/cars_animation/cx5.png"
import Elantra from "../../../../public/cars_animation/elantra.png"
import Li7 from "../../../../public/cars_animation/li7.png"
import Range from "../../../../public/cars_animation/range.png"
import Civic from "../../../../public/cars_animation/civic.png"
import Mers from "../../../../public/cars_animation/mers.png"

import { useState, useRef, useEffect } from "react"

export const FormBlock = () => {
    const [radioSelect, setRadioSelect] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);

    const selecteRadioButton = (number: number) => {
        setRadioSelect(number)
    }

    // Определяем мобильное устройство
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Оптимизация анимации для мобильных устройств
    useEffect(() => {
        if (carouselRef.current && isMobile) {
            carouselRef.current.style.animationDuration = '45s';
        }
    }, [isMobile]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Обработка отправки формы
        console.log('Form submitted', { radioSelect });
    }

    return(
        <div className={styles.formblock_container}>
            <h1>Хотите осмотреть или<br/>купить б/у автомобиль?</h1>
            <h2>Мы подберем для вас оптимальное предложение на рынке<br/>с гарантией технической и юридической чистоты</h2>
            
            <div className={styles.formblock_form_container}>
                <div className={styles.cars_animation_container_seamless}>
                    <div 
                        className={styles.carouselSeamless}
                        ref={carouselRef}
                    >
                        {/* Первый набор машин */}
                        <img src={Bmw} alt="BMW" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Tesla} alt="Tesla" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Cx5} alt="Mazda CX-5" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Elantra} alt="Hyundai Elantra" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Li7} alt="Li7" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Range} alt="Range Rover" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Civic} alt="Honda Civic" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Mers} alt="Mercedes" className={styles.carImageSeamless} loading="lazy" />
                        
                        {/* Дубликат для бесшовной анимации */}
                        <img src={Bmw} alt="BMW" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Tesla} alt="Tesla" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Cx5} alt="Mazda CX-5" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Elantra} alt="Hyundai Elantra" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Li7} alt="Li7" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Range} alt="Range Rover" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Civic} alt="Honda Civic" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Mers} alt="Mercedes" className={styles.carImageSeamless} loading="lazy" />
                    </div>
                </div>

                <h1>Оставь заявку, чтобы сохранить<br/>свою выгоду!</h1>
                
                <div className={styles.formblock_form_container__radio_container}>
                   <button 
                        onClick={() => selecteRadioButton(0)}
                        className={`${styles.radio_button} ${
                            radioSelect === 0 ? styles.radio_active : styles.radio_inactive
                        }`}
                    >
                        Осмотр
                    </button> 
                    <button 
                        onClick={() => selecteRadioButton(1)}
                        className={`${styles.radio_button} ${
                            radioSelect === 1 ? styles.radio_active : styles.radio_inactive
                        }`}
                    >
                        Подбор
                    </button>
                </div>
                
                <form onSubmit={handleSubmit} className={styles.formblock_form__form}>
                    <div className={`${styles.formblock_form__form_input_container} ${styles.formblock_form__form_input_container_1}`}>
                        <p>Марка и модель</p>
                        <input 
                            type="text" 
                            placeholder="Hyundai Solaris 2017" 
                            name="marka" 
                            className={styles.formblock_form__form_input}
                            required
                        />
                    </div>
                    <div className={`${styles.formblock_form__form_input_container} ${styles.formblock_form__form_input_container_2}`}>
                        <p>Как вас зовут?</p>
                        <input 
                            type="text" 
                            placeholder="Иван Иванов" 
                            name="fio" 
                            className={styles.formblock_form__form_input}
                            required
                        />
                    </div>
                    <div className={`${styles.formblock_form__form_input_container} ${styles.formblock_form__form_input_container_3}`}>
                        <p>Номер телефона</p>
                        <input 
                            type="tel" 
                            placeholder="+7" 
                            name="number" 
                            className={styles.formblock_form__form_input}
                            required
                            pattern="\+7[0-9]{10}"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className={styles.formblock_form__form_input_container_4}
                    >
                        Проконсультироваться
                    </button>
                </form>
            </div>
        </div>
    )
}