import type React from "react";
import styles from "./modal_window.module.scss";
import { useEffect } from "react";

interface ModalWindowType {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    maxWidth?: string; // Добавим проп для гибкости
    maxHeight?: string;
}

export const ModalWindow = ({isOpen, onClose, children, maxWidth = "440px", maxHeight = "90vh"}: ModalWindowType) => {
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    // Добавляем обработчик Escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Блокируем скролл body когда модальное окно открыто
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.modal_root}>
            <div className={styles.overlay} onClick={handleOverlayClick}></div>
            <div 
                className={styles.container}
                style={{
                    '--max-width': maxWidth,
                    '--max-height': maxHeight,
                } as React.CSSProperties}
            >
                <button 
                    className={styles.close_button} 
                    onClick={onClose}
                    aria-label="Закрыть модальное окно"
                >
                    ×
                </button>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}