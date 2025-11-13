import styles from "./whatChecked.module.scss"
import { forwardRef } from "react"

import Akpp from "../../../assets/icons/akpp.png"
import Documents from "../../../assets/icons/documents.png"
import Dvs from "../../../assets/icons/dvs.png"
import Glase from "../../../assets/icons/glase.png"
import Comp from "../../../assets/icons/comp.png"
import Cyzov from "../../../assets/icons/cyzov.png"
import Podves from "../../../assets/icons/podves.png"

interface WhatCheckedProps {
  // Убираем ref из пропсов
}

export const WhatChecked = forwardRef<HTMLDivElement, WhatCheckedProps>((props, ref) => {
    return(
        <div className={styles.container} ref={ref}>
            <button className={styles.discription_view}>
                Об осмотре
            </button>
            <h1>Что мы проверяем</h1>
            <div className={styles.specifications_view}>
                <div className={styles.specification_container}>
                    <div className={styles.specification_icon}>
                        <img src={Cyzov} alt="Cyzov" />
                    </div>
                    <h2>Кузов</h2>
                </div>
                <div className={styles.specification_container}>
                    <div className={styles.specification_icon}>
                        <img src={Dvs} alt="Dvs" />
                    </div>
                    <h2>Двигатель</h2>
                </div>
                <div className={styles.specification_container}>
                    <div className={styles.specification_icon}>
                        <img src={Akpp} alt="Akpp" />
                    </div>
                    <h2>АКПП</h2>
                </div>
                <div className={styles.specification_container}>
                    <div className={styles.specification_icon}>
                        <img src={Podves} alt="Podves" />
                    </div>
                    <h2>Подвеска</h2>
                </div>
                <div className={styles.specification_container}>
                    <div className={styles.specification_icon}>
                        <img src={Documents} alt="Documents" /> {/* Исправлен alt */}
                    </div>
                    <h2>Документы</h2>
                </div>
                <div className={styles.specification_container}>
                    <div className={styles.specification_icon}>
                        <img src={Glase} alt="Glase" />
                    </div>
                    <h2>Остекление</h2>
                </div>
                <div className={styles.specification_container}>
                    <div className={styles.specification_icon}>
                        <img src={Comp} alt="Comp" />
                    </div>
                    <h2>Диагностика</h2>
                </div>
            </div>
        </div>
    )
})