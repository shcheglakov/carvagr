import styles from "./services.module.scss"

export const Services = () => {
    return (
        <div className={styles.container}>
            <button className={styles.description_button}>Услуги</button>
            <div className={styles.title_container}>
                <h1>Выполняем осмотр и подбираем авто</h1>
                <h2>Услуга подбора включает в себя тщательный осмотр автомобилей, анализ их состояния и помощь в выборе подходящей модели, соответствующей вашим требованиям.</h2>
            </div>
            <div className={styles.services_container}>
                <div className={styles.service_1}>
                    <div className={styles.service_1_discription}>
                        <h3>Осмотр</h3>
                        <h4>Что входит в услуги подбора</h4>
                        <p>Цена</p>
                    </div>
                </div>

                <div className={styles.service_2}>
                    <div className={styles.service_2_discription}>
                        <h3>Подбор</h3>
                        <h4>то входит в услуги подбора</h4>
                        <p>Цена</p>
                    </div>
                </div>
            </div>
        </div>
    )
}