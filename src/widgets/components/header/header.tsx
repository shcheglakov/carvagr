import styles from "./header.module.scss"
import { LogoHeader } from "../../ui/icons/logo_header"
import { useState } from "react"
import { Consultation } from "../consultation/consultation";

interface HeaderProps {
    scrollToWhatChecked: () => void; // Исправлено
    scrollToServices: () => void;    // Исправлено
    scrollToAboutUs: () => void;     // Исправлено
}

export const Header = ({scrollToWhatChecked, scrollToServices, scrollToAboutUs} : HeaderProps) => {
    const [isActiveModel, setIsActiveModel] = useState(false);

    const selectModelWindow = () => {
        setIsActiveModel(prev => !prev);
    }

    return (
        <header>
            <nav className={styles.header_container}>
                <ul className={styles.header_ul_container}>
                    <li className={styles.header_logo_container}>
                        <LogoHeader color="#000000"/>
                    </li>
                    <div className={styles.header_nav_container}>
                        {/* <li>Услуги</li>
                        <li>Кейсы</li>
                        <li>Отзывы</li>
                        <li>Премиущества</li>
                        <li>Риски</li>
                        <li>FAQ</li> */}
                        <li onClick={scrollToWhatChecked}>Об осмотре</li>  {/* Исправлено */}
                        <li onClick={scrollToServices}>Услуги</li>         {/* Исправлено */}
                        <li onClick={scrollToAboutUs}>Отзывы</li>          {/* Исправлено */}
                    </div>
                    <div className={styles.header_cons_button}>
                        <button onClick={selectModelWindow}>Проконсультироваться</button>
                    </div>
                </ul>
                <Consultation 
                    isOpen={isActiveModel} 
                    onClose={selectModelWindow}
                />
            </nav>
        </header>
    )
}