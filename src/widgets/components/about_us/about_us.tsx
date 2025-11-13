import styles from "./about_us.module.scss"

import Camry from "../../../assets/carusel_images/Camry.jpg"
import Cayenne from "../../../assets/carusel_images/Caeyen.jpg"
//import Jetta from "../../../assets/carusel_images/Jetta.jpg"
import Octavia from "../../../assets/carusel_images/Octavia.jpg"
import Tiguan from "../../../assets/carusel_images/Tiguan.jpg"
import Carousel from "../carusel/carusel"
import { forwardRef } from "react"
// import X6 from "../../../assets/carusel_images/x6.jpg"

interface AboutUsProps {

}

export const AboutUs =  forwardRef<HTMLDivElement, AboutUsProps>((props, ref) => {
    console.log(props)
  const carouselItems = [
    {
      id: 1,
      image: Tiguan,
      avtor: 'Иван Иванов',
      auto: 'Volkswagen Tiguan',
      description: 'Компактный кроссовер с отличной управляемостью и комфортным салоном. Идеален для городских поездок и путешествий.'
    },
    {
      id: 2,
      image: Cayenne,
      avtor: 'Петр Сидоров',
      auto: 'Porsche Cayenne',
      description: 'Роскошный SUV с спортивным характером. Мощный двигатель и премиальная отделка салона.'
    },
    {
      id: 3,
      image: Camry,
      avtor: 'Алексей Петров',
      auto: 'Camry',
      description: 'Легендарный немецкий внедорожник с инновационными технологиями и непревзойденным качеством сборки.'
    },
    {
      id: 4,
      image: Tiguan,
      avtor: 'Мария Козлова',
      auto: 'Volkswagen Tiguan R-Line',
      description: 'Спортивная версия популярного кроссовера с агрессивным дизайном и улучшенными характеристиками.'
    },
    {
      id: 5,
      image: Octavia,
      avtor: 'Дмитрий Смирнов',
      auto: 'Octavia',
      description: 'Мощнейшая версия Cayenne с двигателем V8 и эксклюзивным оснащением для настоящих ценителей скорости.'
    }
  ];

    return(
        <div className={styles.overflow_container} ref={ref}>
            <button className={styles.reviews_button}>Отзывы</button>
            <h1>Вот что говорят о нас<br/> наши клиенты</h1>
            <Carousel 
                items={carouselItems} 
                autoPlay={true}
                interval={5000}
            />
        </div>
    )
})