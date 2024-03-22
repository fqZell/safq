import { NavLink, useParams } from "react-router-dom";
import cartBasket from "../assets/cartBasket.svg";
import PRODUCTS from "../data/products";

const SingleProductPage = () => {

    const { id } = useParams();
    // eslint-disable-next-line react/prop-types
    const product = PRODUCTS.find(product => product.id === parseInt(id));
  
    if(!product) {
      return <h2>Такого продукта нет</h2>
    }

  return (
        <>
        
        <div className="container single-product">

            <NavLink to={"/product"} className="back">Назад</NavLink>

            <div className="cart">
                    <img src={product.preview} alt="Продукт" />

                    <div className="cart-title">
                        <p>{product.title}</p>

                        <div className="cart-total">
                            Цена:<br></br>{product.price}
                            <button><img src={cartBasket} alt="basket" /></button>
                        </div>
                    </div>
            </div>
        </div>
        
        </>
  )
}

export default SingleProductPage