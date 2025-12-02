import styles from "./contactInfo.module.scss"
import { PhoneIcon, MailIcon, MapPinIcon, DocumentIcon, BadgeIcon } from "./icons.tsx"

export const ContactInfo = () => {
    const contactItems = [
        // {
        //     id: 1,
        //     icon: <UserIcon />,
        //     title: "ИП",
        //     value: "Айвазян Ашот Арсенович",
        //     description: "Индивидуальный предприниматель"
        // },
        {
            id: 2,
            icon: <MapPinIcon />,
            title: "Адрес",
            value: "20098, Республика Татарстан (Татарстан) Респ.",
            details: "г. Казань, ул. Ленина, дом 1,808",
            type: "address"
        },
        {
            id: 3,
            icon: <PhoneIcon />,
            title: "Телефон",
            value: "8-926-333-81-12",
            link: "tel:89263338112",
            type: "phone"
        },
        {
            id: 4,
            icon: <MailIcon />,
            title: "Эл. почта",
            value: "avtopodboris@mail.ru",
            link: "mailto:avtopodboris@mail.ru",
            type: "email"
        },
        {
            id: 5,
            icon: <DocumentIcon />,
            title: "ИНН",
            value: "775122111536",
            description: "Идентификационный номер налогоплательщика"
        },
        {
            id: 6,
            icon: <BadgeIcon />,
            title: "ОГРНИП",
            value: "323774600011471",
            description: "Основной государственный регистрационный номер"
        }
    ];

    const handleClick = (link?: string, type?: string) => {
        console.log(type)
        if (link) {
            window.open(link, '_blank');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Реквизиты компании</h2>
                <p>Вся информация для связи и официальных документов</p>
            </div>
            
            <div className={styles.contact_grid}>
                {contactItems.map((item) => (
                    <div 
                        key={item.id} 
                        className={`${styles.contact_card} ${item.type ? styles[`type_${item.type}`] : ''}`}
                        onClick={() => handleClick(item.link, item.type)}
                    >
                        <div className={styles.card_icon}>
                            {item.icon}
                        </div>
                        <div className={styles.card_content}>
                            <div className={styles.card_header}>
                                <span className={styles.card_title}>{item.title}</span>
                                {item.type && (
                                    <span className={`${styles.card_badge} ${styles[`badge_${item.type}`]}`}>
                                        {item.type === 'phone' ? 'Позвонить' : 
                                         item.type === 'email' ? 'Написать' : 
                                         item.type === 'address' ? 'На карте' : ''}
                                    </span>
                                )}
                            </div>
                            <div className={styles.card_value}>{item.value}</div>
                            {item.details && (
                                <div className={styles.card_details}>{item.details}</div>
                            )}
                            {item.description && (
                                <div className={styles.card_description}>{item.description}</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className={styles.footer}>
                <p>© {new Date().getFullYear()} Автоподбор. Все права защищены.</p>
                <p className={styles.footer_note}>Юридическая информация актуальна на текущую дату</p>
            </div>
        </div>
    )
}