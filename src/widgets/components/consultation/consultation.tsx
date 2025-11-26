import styles from "./consultation.module.scss"

// interface ConsultationType {
    
// }

export const Consultation = () => {
    return(
        <form className={styles.container}>
            <h1>Оставить заявку на консультацию!</h1>
            <div className={styles.input_container}>
                <p>Как вас зовут?</p>
                <input type="text" placeholder="Иван Иванов"/>
            </div>
            <div className={styles.input_container}>
                <p>Номер телефона</p>
                <input type="text" placeholder="+7"/>
            </div>
            <button type="submit" className={styles.button_submit}>Проконсультироваться</button>
        </form>     
    )
}