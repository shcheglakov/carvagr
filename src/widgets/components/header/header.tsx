import styles from "./header.module.scss"
import { LogoHeader } from "../../ui/icons/logo_header"
import { useState } from "react"
import { Consultation } from "../consultation/consultation";
import { ModalWindow } from "../../ui/modal_window/modal_window";

interface HeaderProps {
    scrollToWhatChecked: () => void;
    scrollToServices: () => void;
    scrollToAboutUs: () => void;
    scrollToWhyWe: () => void;
}

export const Header = ({scrollToWhatChecked, scrollToServices, scrollToAboutUs, scrollToWhyWe} : HeaderProps) => {
    const [isActiveModel, setIsActiveModel] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const selectModelWindow = () => {
        setIsActiveModel(prev => !prev);
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    }

    const handleNavClick = (scrollFunction: () => void) => {
        scrollFunction();
        setIsMobileMenuOpen(false);
    }

    return (
        <header>
            <nav className={styles.header_container}>
                <div className={styles.header_ul_container}>
                    <div className={styles.header_mobile_left}>
                        <button 
                            className={styles.burger_menu}
                            onClick={toggleMobileMenu}
                            aria-label="Открыть меню"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className={styles.header_logo_container}>
                            <LogoHeader color="#000000"/>
                        </div>
                    </div>

                    <div className={`${styles.header_nav_container} ${isMobileMenuOpen ? styles.nav_open : ''}`}>
                        <li onClick={() => handleNavClick(scrollToWhatChecked)}>Об осмотре</li>
                        <li onClick={() => handleNavClick(scrollToServices)}>Услуги</li>
                        <li onClick={() => handleNavClick(scrollToWhyWe)}>Почему мы?</li>
                        <li onClick={() => handleNavClick(scrollToAboutUs)}>Отзывы</li>
                    </div>

                    <div className={styles.header_cons_button}>
                        <button onClick={selectModelWindow}>Проконсультироваться</button>
                    </div>

                    {isMobileMenuOpen && (
                        <div 
                            className={styles.mobile_overlay}
                            onClick={toggleMobileMenu}
                        />
                    )}
                </div>
                {isActiveModel ?
                    <ModalWindow isOpen={isActiveModel} onClose={selectModelWindow}>
                        <Consultation />
                    </ModalWindow>
                : null
                }
            </nav>
        </header>
    )
}