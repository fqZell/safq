import sneakers from "../../assets/sneakers.png";
import shirt from "../../assets/shirt.png";
import cap from "../../assets/cap.png";
import jeans from "../../assets/jeans.png";
import sweatshirt from "../../assets/sweatshirt.png";
import jackets from "../../assets/jackets.png";

const Categories = () => {
    return (
        <>
            <div className="categories-container">

            <h2>Популярные Категории</h2>

            <div className="categories">

                <div className="categories-card">
                    <img src={sneakers} alt="sneakers" />
                    <h3>Кроссовки</h3>
                </div>

                <div className="categories-card">
                    <img src={shirt} alt="shirt" />
                    <h3>Футболки</h3>
                </div>

                <div className="categories-card">
                    <img src={cap} alt="cap" />
                    <h3>Бейсболки</h3>
                </div>

                <div className="categories-card">
                    <img src={jeans} alt="jeans" />
                    <h3>Джинсы</h3>
                </div>

                <div className="categories-card">
                    <img src={sweatshirt} alt="sweatshirt" />
                    <h3>Свитшоты</h3>
                </div>

                <div className="categories-card">
                    <img src={jackets} alt="jackets" />
                    <h3>Куртки</h3>
                </div>

            </div>

            </div>
        </>
    )
}

export default Categories;