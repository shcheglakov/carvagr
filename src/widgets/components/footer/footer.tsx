import { LogoHeader } from "../../ui/icons/logo_header"
import styles from "./footer.module.scss"

export const Footer = () => {
    return (
        <div className={styles.overflow}>
            <div className={styles.container}>
                <LogoHeader color="#ffffff"/>
                <div className={styles.info_container}>
                    <h1>Услуги</h1>
                    <a href="">Подбор автомобиля</a>
                    <a href="">Выездная диагностика</a>
                    <a href="">Диагностика автомобиля перед покупкой</a>
                    <a href="">Эксперт на день</a>
                </div>
                <div className={styles.info_container}>
                    <h1>О компании</h1>
                    <a href="">Контактная информация</a>
                    <a href="">Согласие на обработку персональных данных</a>
                </div>
                <div className={styles.info_container}>
                    <h1>Контакты</h1>
                    <a href="">Telegram</a>
                    <a href="">What's App</a>
                    <a href="">Mail</a>
                </div>
            </div>
        </div>
    )
}