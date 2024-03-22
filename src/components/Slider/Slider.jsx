import { useState } from "react"
import arrow from "../../assets/arrow.svg";
import Slide from "./Slide/Slide";

import slide1 from "../../assets/slide1.png";

const initialItemState = [
    {
        id: 1,
        background: "#FFF",
        title: "Первый в мире магазин брендовой одежды",
        sabtitle: "*по продажам, среди конкурентов",
        banner: slide1,
        button: {
            url: "/",
            text: "К покупкам"
        }
    },
    {
        id: 2,
        background: "#FFF",
        title: "Adidas Stan Smith",
        banner: "https://voronezh.streetfoot.ru/wp-content/uploads/2019/02/adidas-Stan-Smith-2014-00.jpg",
        button: {
            url: "/",
            text: "Купить сейчас"
        }
    },
    {
        id: 3,
        background: "#FFF",
        title: "Nike Air Force One",
        banner: "https://kazan.streetfoot.ru/wp-content/uploads/2021/02/nike-air-force-1-low-pixel-triple-belye-35-39.jpg",
        button: {
            url: "/",
            text: "Купить сейчас"
        }
    },
]

const Slider = () => {

    const [items, setItems] = useState(initialItemState);
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = setCurrentIndex.bind(this, currentIndex >= items.length - 1 ? 0 : currentIndex + 1);

    return (
        <>
        <div className="container">
            <div className="slider-container">

                <div className="slider">

                    <div className="slide active">

                        <Slide slide={items[currentIndex]} />

                    </div>

                    <button onClick={next} className="slider-arrow">
                        <img src={arrow} alt="arrow" />
                    </button>

                </div>

            </div>
        </div>
        </>
    )
}

export default Slider;