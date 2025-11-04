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

    return(
        <div className={styles.formblock_container}>
            <h1>Хотите осмотреть или<br/>купить б/у автомобиль?</h1>
            <h2>Мы подберем для вас оптимальное предложение на рынке<br/>с гарантией технической и юридической чистоты</h2>
            
            <div className={styles.formblock_form_container}>
                <div className={styles.cars_animation_container_seamless}>
                    <div className={styles.carouselSeamless}>
                        
                        <img src={Bmw} alt="Bmw" className={styles.carImageSeamless} />
                        <img src={Tesla} alt="Tesla" className={styles.carImageSeamless} />
                        <img src={Cx5} alt="Cx5" className={styles.carImageSeamless} />
                        <img src={Elantra} alt="Elantra" className={styles.carImageSeamless} />
                        <img src={Li7} alt="Li7" className={styles.carImageSeamless} />
                        <img src={Range} alt="Cx5" className={styles.carImageSeamless} />
                        <img src={Civic} alt="Elantra" className={styles.carImageSeamless} />
                        <img src={Mers} alt="Mers" className={styles.carImageSeamless} />
                        
                        
                        <img src={Bmw} alt="Bmw" className={styles.carImageSeamless} />
                        <img src={Tesla} alt="Tesla" className={styles.carImageSeamless} />
                        <img src={Cx5} alt="Cx5" className={styles.carImageSeamless} />
                        <img src={Elantra} alt="Elantra" className={styles.carImageSeamless} />
                        <img src={Li7} alt="Li7" className={styles.carImageSeamless} />
                        <img src={Range} alt="Cx5" className={styles.carImageSeamless} />
                        <img src={Civic} alt="Elantra" className={styles.carImageSeamless} />
                        <img src={Mers} alt="Mers" className={styles.carImageSeamless} />
                    </div>
                </div>


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
                <form action="" className={styles.formblock_form__form}>
                    <div className={`${styles.formblock_form__form_input_container} ${styles.formblock_form__form_input_container_1}`}>
                        <p>Марка и модель</p>
                        <input type="text" placeholder="Hyundai Solaris 2017" name="marka" className={styles.formblock_form__form_input}/>
                    </div>
                    <div className={`${styles.formblock_form__form_input_container} ${styles.formblock_form__form_input_container_2}`}>
                        <p>Как вас зовут?</p>
                        <input type="text" placeholder="Иван Иванов" name="fio" className={styles.formblock_form__form_input}/>
                    </div>
                    <div className={`${styles.formblock_form__form_input_container} ${styles.formblock_form__form_input_container_3}`}>
                        <p>Номер телефона</p>
                        <input type="text" placeholder="+7" name="number" className={styles.formblock_form__form_input}/>
                    </div>
                    <button type="submit" className={styles.formblock_form__form_input_container_4}>Проконсультироваться</button>
                </form>
            </div>
        </div>
    )
}