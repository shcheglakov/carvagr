import { useState } from "react"
import styles from "./aboutServices.module.scss"

interface AboutServicesProps {
    status: number
}

export const AboutServices = () => {
    const [isActiveService, setIsActiveService] = useState(0)
    
    const handleSwitchService = ({status}:AboutServicesProps) => {
        setIsActiveService(status)
    }
    return (
        <div className={styles.container}>
            <div className={styles.buttons_container}>
                <button>Подбор</button>
                <button>Осмотр</button>
            </div>
            {isActiveService === 0 ?
                <div className={styles.text_block}>
                    Подбор
                </div>
            :
                <div className={styles.text_block}>
                    Осмотр
                </div>
            }
            
        </div>
    )
}