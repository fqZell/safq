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
        banner: "https://cross-city.ru/upload/iblock/348/adidas-stan-smith-belye_img.jpg",
        button: {
            url: "/",
            text: "Купить сейчас"
        }
    },
    {
        id: 3,
        background: "#FFF",
        title: "Nike Air Force one by fqZell",
        banner: "https://kicksmania.ru/wp-content/uploads/2022/06/nike-air-force-1-low-white.jpg",
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
        </>
    )
}

export default Slider;