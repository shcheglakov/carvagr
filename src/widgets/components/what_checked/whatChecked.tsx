import styles from "./whatChecked.module.scss"

import Akpp from "../../../assets/icons/akpp.png"
import Documents from "../../../assets/icons/documents.png"
import Dvs from "../../../assets/icons/dvs.png"
import Glase from "../../../assets/icons/glase.png"

export const WhatChecked = () => {
    return(
        <div className={styles.container}>
            <button className={styles.discription_view}>
                Об осмотре
            </button>
            <h1>Что мы осматриваем</h1>
            <div className={styles.specifications_view}>
                <div className={styles.specification_container}>
                    <div className={styles.specification_icon}>
                        <img src={Akpp} alt="Akpp" />
                    </div>
                    <h2>Кузов</h2>
                </div>
                <div className={styles.specification_container}>
                    <div className={styles.specification_icon}>
                        <img src={Documents} alt="Documents" />
                    </div>
                    <h2>Двигатель</h2>
                </div>
                <div className={styles.specification_container}>
                    <div className={styles.specification_icon}>
                        <img src={Dvs} alt="Dvs" />
                    </div>
                    <h2>АКПП</h2>
                </div>
                <div className={styles.specification_container}>
                    <div className={styles.specification_icon}>
                        <img src={Glase} alt="Glase" />
                    </div>
                    <h2>Подвеска</h2>
                </div>
                <div className={styles.specification_container}>
                    <div className={styles.specification_icon}>
                        <img src={Akpp} alt="Akpp" />
                    </div>
                    <h2>Документы</h2>
                </div>
                <div className={styles.specification_container}>
                    <div className={styles.specification_icon}>
                        <img src={Akpp} alt="Akpp" />
                    </div>
                    <h2>Остекление</h2>
                </div>
                <div className={styles.specification_container}>
                    <div className={styles.specification_icon}>
                        <img src={Akpp} alt="Akpp" />
                    </div>
                    <h2>Безопасность</h2>
                </div>
            </div>
        </div>
    )
}