import { useState } from "react"
import styles from "./aboutServices.module.scss"
import { SelectionCar } from "../selection_car/selection_car"
import { ViewCar } from "../view_car/view_car"

export const AboutServices = () => {
    const [isActiveService, setIsActiveService] = useState(0)
    
    const handleSwitchService = (status: number) => {
        setIsActiveService(status)
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.buttons_container}>
                <button 
                    type="button" 
                    onClick={() => handleSwitchService(0)}
                    style={{
                        backgroundColor: isActiveService === 0 ? '#D5D7DA1A' : '#151515'
                    }}
                >
                    Подбор
                </button>
                <button 
                    type="button" 
                    onClick={() => handleSwitchService(1)}
                    style={{
                        backgroundColor: isActiveService === 1 ? '#D5D7DA1A' : '#151515'
                    }}
                >
                    Осмотр
                </button>
            </div>
            {isActiveService === 0 ?
                <SelectionCar />
            :
                <ViewCar />
            }
            
        </div>
    )
}