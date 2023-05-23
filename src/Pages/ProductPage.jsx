import { useState } from "react";
import search from "../assets/search.svg";
import Product from "../components/Product/Product";
import PRODUCTS from "../data/products";

const ProductPage = () => {

    const [products, setProducts] = useState(PRODUCTS);
    const [query, setQuery] = useState("");

    const filteredProducts = products.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));

    const onChangeQuery = (event) => {
        setQuery(event.target.value);
    }

    return (
        <>
            <div className="CartProduct-container">

                <div className="CartProduct-header">
                    <h1>Все товары</h1>

                    <div class="search-form">
                        <div class="search-box">
                        <button type="submit"><img src={search} alt="Поиск"/></button>
                        <input
                            value={query}
                            onChange={(e) => onChangeQuery(e)}
                            type="text" 
                            placeholder="Поиск..." 
                        />
                        </div>
                    </div>
                </div>

                <div className="carts">
                {
                    filteredProducts.length ?
                        filteredProducts.map((product) => {
                            return (
                                <Product key={product.id} product={product} />
                            );
                        })

                        :

                        <h2>По вашему запросу "{query}" ничего не найдено!</h2>
                }
                </div>
                
            </div>
        </>
    )
}

export default ProductPage;