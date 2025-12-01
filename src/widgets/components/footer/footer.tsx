import { useState } from "react"
import { LogoHeader } from "../../ui/icons/logo_header"
import styles from "./footer.module.scss"
import { ModalWindow } from "../../ui/modal_window/modal_window"
import { ViewCar } from "../services/view_car/view_car"
import { SelectionCar } from "../services/selection_car/selection_car"
import { ContactInfo } from "../contactInfo/contactInfo"
import { useNavigate } from "react-router"

export const Footer = () => {
    const navigation = useNavigate();

    const [isOpenSelectedWin, setIsOpenSelectedWin] = useState(false)
    const [isOpenInspectionWin, setIsOpenInspectionWin] = useState(false)
    const [isOpenInfoWin, setIsOpenInfoWin] = useState(false);

    const selectModelSelectedWindow = () => {
        setIsOpenSelectedWin(prev => !prev);
    }

    const selectModelInspectionWindow = () => {
        setIsOpenInspectionWin(prev => !prev);
    }

    const selectModelInfoWindow = () => {
        setIsOpenInfoWin(prev => !prev);
    }

    const handleOpenTg = () => {
        window.open(`https://t.me/carvagrauto`)
    }

    const handleOpenWA = () => {
        window.open(`https://wa.me/9263338112`)
    }

    const handleOpenMail = () => {
        window.open(`mailto:avtopodboris@mail.ru`)
    }

    const handleOpenPolitice = () => {
        navigation(`/personaldata`)
    }

    return (
        <footer className={styles.overflow}>
            {isOpenInfoWin ?
                <ModalWindow isOpen={isOpenInfoWin} onClose={selectModelInfoWindow}>
                    <ContactInfo />
                </ModalWindow>
            : null}

            {isOpenInspectionWin ?
                <ModalWindow isOpen={isOpenInspectionWin} onClose={selectModelInspectionWindow}>
                    <ViewCar />
                </ModalWindow>
            : null}

            {isOpenSelectedWin ?
                <ModalWindow isOpen={isOpenSelectedWin} onClose={selectModelSelectedWindow}>
                    <SelectionCar />
                </ModalWindow>
            : null}


            <div className={styles.container}>
                <LogoHeader color="#ffffff"/>
                <div className={styles.info_container}>
                    <h1>Услуги</h1>
                    <button onClick={selectModelSelectedWindow}>Подбор автомобиля</button>
                    <button onClick={selectModelInspectionWindow}>Диагностика автомобиля перед покупкой</button>
                </div>
                <div className={styles.info_container}>
                    <h1>О компании</h1>
                    <button onClick={selectModelInfoWindow}>Контактная информация</button>
                    <button onClick={handleOpenPolitice}>Политика конфиденциальности</button>
                </div>
                <div className={styles.info_container}>
                    <h1>Контакты</h1>
                    <button onClick={handleOpenTg}>Telegram</button>
                    <button onClick={handleOpenWA}>What's App</button>
                    <button onClick={handleOpenMail}>Mail</button>
                </div>
            </div>
        </footer>
    )
}