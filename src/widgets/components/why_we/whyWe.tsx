import { AuctionIcon } from "../../ui/icons/auction"
import { GoodIcon } from "../../ui/icons/good"
import { HumanIcon } from "../../ui/icons/human"
import { ReportIcon } from "../../ui/icons/report"
import { TimeIcon } from "../../ui/icons/time"
import styles from "./whyWe.module.scss"

export const WhyWe = () => {
    const items = [
        {
            id: "1",
            icon: <TimeIcon color="#000000"/>,
            title: "Экономия времени",
            description: "Вы тратите не более двух часов времени на подбор вашего авто"
        },
        {
            id: "2",
            icon: <AuctionIcon color="#000000"/>,
            title: "Обоснованный торг",
            description: "В 95% случаев потраченные на нас средства окупаются благодаря торгу"
        },
        {
            id: "3",
            icon: <GoodIcon color="#000000"/>,
            title: "Никаких изнурительных поездок",
            description: "Вы не ездите на осмотр заведомо дефектных авто"
        },
        {
            id: "4",
            icon: <HumanIcon color="#000000"/>,
            title: "Только частные продавцы и проверенные ОД",
            description: "Работая с частными продавцами и проверенными ОД, мы находим отличные авто"
        },
        {
            id: "5",
            icon: <AuctionIcon color="#000000"/>,
            title: "Отличные авто для вас",
            description: "Благодаря просмотру многих вариантов и квалифицированным специалистам, мы находим лучшие автомобили для вас"
        },
        {
            id: "6",
            icon: <ReportIcon color="#000000"/>,
            title: "Отчеты по автомобилям",
            description: "Получаете каждый день отчеты о проверенных авто"
        },
    ]

    return (
        <div className={styles.container}>
            <h1>Для чего нужны наши услуги</h1>
            <div className={styles.items_container}>
                {items.map((item) => (
                    <div id={item.id} className={styles.item_container}>
                        {item.icon}
                        <div className={styles.text_block}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}