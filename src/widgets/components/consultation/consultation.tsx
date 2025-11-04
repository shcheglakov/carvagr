import type React from "react";
import styles from "./consultation.module.scss"

interface ConsultationType {
    isOpen: boolean;
    onClose: () => void;
}

export const Consultation = ({isOpen, onClose}:ConsultationType) => {
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
        onClose();
        }
    };

    if (!isOpen) return null

    return(
        <>
            <div className={styles.overlay} onClick={handleOverlayClick}/>
            <form className={styles.container}>
                <button className={styles.close_button} onClick={onClose}>
                    ×
                </button>
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
        </>
        
    )
}