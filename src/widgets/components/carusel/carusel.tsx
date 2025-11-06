import React, { useState, useEffect } from 'react';
import styles from './carusel.module.scss';

interface CarouselItem {
  id: number;
  image: string;
  avtor: string;
  auto: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ 
  items, 
  autoPlay = false, 
  interval = 3000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Автопрокрутка
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, currentIndex]);

  // Функция для вычисления индекса слайда с учетом циклической природы
  const getSlideIndex = (offset: number): number => {
    return (currentIndex + offset + items.length) % items.length;
  };

  // Функция для определения класса слайда
  const getSlideClass = (offset: number): string => {
    if (offset === 0) return `${styles.slide} ${styles.center}`;
    if (offset === -2) return `${styles.slide} ${styles.farLeft}`;
    if (offset === -1) return `${styles.slide} ${styles.left}`;
    if (offset === 1) return `${styles.slide} ${styles.right}`;
    if (offset === 2) return `${styles.slide} ${styles.farRight}`;
    return styles.slide;
  };

  if (items.length === 0) {
    return <div className={styles.container}>Нет данных для отображения</div>;
  }

  // Создаем массив из 5 слайдов для отображения
  const visibleSlides = [-2, -1, 0, 1, 2].map(offset => ({
    offset,
    index: getSlideIndex(offset),
    className: getSlideClass(offset)
  }));

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Кнопка назад */}
        <button 
          className={`${styles.button} ${styles.prev}`} 
          onClick={prevSlide}
          aria-label="Предыдущий слайд"
        >
          ‹
        </button>

        {/* Слайды */}
        <div className={styles.slides}>
          {visibleSlides.map(({ offset, index, className }) => (
            <div key={offset} className={className}>
              <div className={styles.imageContainer}>
                <img 
                  src={items[index].image} 
                  alt={`${items[index].auto} - ${items[index].avtor}`}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.auto}>{items[index].auto}</h3>
                <p className={styles.avtor}>Автор: {items[index].avtor}</p>
                {offset === 0 && (
                  <p className={styles.description}>{items[index].description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка вперед */}
        <button 
          className={`${styles.button} ${styles.next}`} 
          onClick={nextSlide}
          aria-label="Следующий слайд"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Carousel;