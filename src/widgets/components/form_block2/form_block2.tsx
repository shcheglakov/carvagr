import styles from "./form_block2.module.scss"

export const FormBlock2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <h1>Выбор автомобиля вашей <br/>мечты начинается с одного клика.</h1>
                <form action="" className={styles.form}>
                    <div className={styles.input_container}>
                        <p>Номер телефона</p>
                        <input type="text" placeholder="+7" />
                    </div>
                    <button>Оставить заявку</button>
                </form>
                <p>Нажимая на кнопку, вы даете согласие на обработку персональных данных, разрешенных для передачи</p>
            </div>
        </div>
    )
}