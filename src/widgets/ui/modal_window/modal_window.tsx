import type React from "react";
import styles from "./modal_window.module.scss";

interface ModalWindowType {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

export const ModalWindow = ({isOpen, onClose, children}:ModalWindowType) => {
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    if (!isOpen) return null

    return (
        <>
            <div className={styles.overlay} onClick={handleOverlayClick}></div>
            <div className={styles.container}>
                <button className={styles.close_button} onClick={onClose}>×</button>
                {children}
            </div>
        </>
    )
}