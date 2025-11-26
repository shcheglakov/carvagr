import styles from "./formBlock.module.scss"
import Bmw from "../../../../public/cars_animation/bmw.png"
import Tesla from "../../../../public/cars_animation/tesla.png"
import Cx5 from "../../../../public/cars_animation/cx5.png"
import Elantra from "../../../../public/cars_animation/elantra.png"
import Li7 from "../../../../public/cars_animation/li7.png"
import Range from "../../../../public/cars_animation/range.png"
import Civic from "../../../../public/cars_animation/civic.png"
import Mers from "../../../../public/cars_animation/mers.png"

import { useState } from "react"

export const FormBlock = () => {
    const [radioSelect, setRadioSelect] = useState(0);

    const selecteRadioButton = (number: number) => {
        setRadioSelect(number)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Обработка отправки формы
        console.log('Form submitted', { radioSelect });
    }

    return(
        <div className={styles.formblock_container}>
            <div className={styles.hero_content}>
                <div className={styles.title_container}>
                    <h1>Хотите осмотреть или купить б/у автомобиль?</h1>
                    <div className={styles.highlight_line}></div>
                </div>
                <h2>Мы подберем для вас оптимальное предложение на рынке с гарантией технической и юридической чистоты</h2>
            </div>
            
            <div className={styles.formblock_form_container}>
                {/* Слайдер виден только на десктопе */}
                <div className={styles.cars_animation_container_seamless}>
                    <div className={styles.carouselSeamless}>
                        <img src={Bmw} alt="BMW" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Tesla} alt="Tesla" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Cx5} alt="Mazda CX-5" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Elantra} alt="Hyundai Elantra" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Li7} alt="Li7" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Range} alt="Range Rover" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Civic} alt="Honda Civic" className={styles.carImageSeamless} loading="lazy" />
                        <img src={Mers} alt="Mercedes" className={styles.carImageSeamless} loading="lazy" />
                        
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

                <div className={styles.form_header}>
                    <div className={styles.form_icon}>🚗</div>
                    <h1>Оставь заявку, чтобы сохранить свою выгоду!</h1>
                </div>
                
                <div className={styles.formblock_form_container__radio_container}>
                   <button 
                        onClick={() => selecteRadioButton(0)}
                        className={`${styles.radio_button} ${
                            radioSelect === 0 ? styles.radio_active : ''
                        }`}
                    >
                        <span className={styles.radio_icon}>🔍</span>
                        Осмотр
                    </button> 
                    <button 
                        onClick={() => selecteRadioButton(1)}
                        className={`${styles.radio_button} ${
                            radioSelect === 1 ? styles.radio_active : ''
                        }`}
                    >
                        <span className={styles.radio_icon}>🎯</span>
                        Подбор
                    </button>
                </div>
                
                <form onSubmit={handleSubmit} className={styles.formblock_form__form}>
                    <div className={`${styles.formblock_form__form_input_container} ${styles.formblock_form__form_input_container_1}`}>
                        <div className={styles.input_label}>
                            <span className={styles.label_icon}>🚙</span>
                            <p>Марка и модель</p>
                        </div>
                        <input 
                            type="text" 
                            placeholder="Например: Hyundai Solaris 2017" 
                            name="marka" 
                            className={styles.formblock_form__form_input}
                            required
                        />
                    </div>
                    
                    <div className={styles.input_row}>
                        <div className={`${styles.formblock_form__form_input_container} ${styles.formblock_form__form_input_container_2}`}>
                            <div className={styles.input_label}>
                                <span className={styles.label_icon}>👤</span>
                                <p>Ваше имя</p>
                            </div>
                            <input 
                                type="text" 
                                placeholder="Иван Иванов" 
                                name="fio" 
                                className={styles.formblock_form__form_input}
                                required
                            />
                        </div>
                        
                        <div className={`${styles.formblock_form__form_input_container} ${styles.formblock_form__form_input_container_3}`}>
                            <div className={styles.input_label}>
                                <span className={styles.label_icon}>📱</span>
                                <p>Телефон</p>
                            </div>
                            <input 
                                type="tel" 
                                placeholder="+7 (___) ___-__-__" 
                                name="number" 
                                className={styles.formblock_form__form_input}
                                required
                            />
                        </div>
                    </div>
                    
                    <button 
                        type="submit" 
                        className={styles.submit_button}
                    >
                        <span className={styles.button_icon}>💬</span>
                        Получить консультацию
                    </button>
                    
                    <div className={styles.form_footer}>
                        <p>📞 Мы перезвоним в течение 15 минут</p>
                    </div>
                </form>
            </div>
        </div>
    )
}