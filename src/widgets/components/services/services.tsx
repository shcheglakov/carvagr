import { SelectionIcon } from "../../ui/icons/selection_icon"
import { ViewIcon } from "../../ui/icons/view_icon"
import styles from "./services.module.scss"

export const Services = () => {
    return (
        <div className={styles.container}>
            <button className={styles.description_button}>Услуги</button>
            <div className={styles.title_container}>
                <h1>Выполняем осмотр <br/>и подбираем авто</h1>
                <h2>Услуга подбора включает в себя тщательный осмотр автомобилей, анализ их состояния и помощь в выборе подходящей модели, соответствующей вашим требованиям.</h2>
            </div>
            <div className={styles.services_container}>
                <div className={styles.service_1}>
                    <h3>Осмотр</h3>
                    <h4>Наш автоэксперт становится вашими глазами и ушами. Он тщательно проверяет каждый узел автомобиля, тестирует его в движении и дает четкое заключение: «брать» или «бежать». Вы покупаете с полным пониманием реального состояния авто.</h4>
                    <h5>1999₽</h5>
                    <div className={styles.icon_box}>
                        <ViewIcon color="#D5D7DA"/>
                    </div>
                </div>

                <div className={styles.service_2}>
                    <h3>Подбор</h3>
                    <h4>На основе ваших пожеланий и бюджета мы проведем глубинную аналитику рынка, отсеем рисковые варианты и представим вам на выбор несколько лучших автомобилей. Вы получите готовый список проверенных предложений без лишней траты времени и нервов.</h4>
                    <h5>16999₽</h5>
                    <div className={styles.icon_box}>
                        <SelectionIcon color="#282829"/>
                    </div>
                </div>
            </div>
        </div>
    )
}