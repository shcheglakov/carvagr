import styles from "./header.module.scss"
import { LogoHeader } from "../../ui/icons/logo_header"
import { useState } from "react"
import { Consultation } from "../consultation/consultation";

export const Header = () => {
    const [isActiveModel, setIsActiveModel] = useState(false);

    const selectModelWindow = () => {
        setIsActiveModel(prev => !prev);
    }

    return (
        <nav className={styles.header_container}>
            <ul className={styles.header_ul_container}>
                <li className={styles.header_logo_container}>
                    <LogoHeader color="#000000"/>
                </li>
                <div className={styles.header_nav_container}>
                    <li>Услуги</li>
                    <li>Кейсы</li>
                    <li>Отзывы</li>
                    <li>Премиущества</li>
                    <li>Риски</li>
                    <li>FAQ</li>
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
    )
}