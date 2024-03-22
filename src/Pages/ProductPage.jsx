import { useState } from "react";
import search from "../assets/search.svg";
import Product from "../components/Product/Product";
import PRODUCTS from "../data/products";
import Filter from "../components/Filter/Filter";

const ProductPage = () => {

    const [products, setProducts] = useState(PRODUCTS);
    const [query, setQuery] = useState("");
    const [sorting, setSorting] = useState('popular')
    const [category, setCategory] = useState("");

    const filteredProducts = products.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));

    const onChangeQuery = (event) => {
        setQuery(event.target.value);
    }

    const handleSortingChange = (event) => {
        setSorting(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const resetFilters = () => {
        setQuery("");
        setSorting("popular");
        setCategory("");
    };

    const sortProducts = (sorting, products) => {
        switch (sorting) {
          case 'price-asc':
            return [...products].sort((a, b) => a.price - b.price);
          case 'price-desc':
            return [...products].sort((a, b) => b.price - a.price);
          case 'name-asc':
            return [...products].sort((a, b) => a.title.localeCompare(b.title));
          case 'name-desc':
            return [...products].sort((a, b) => b.title.localeCompare(a.title));
          default:
            return products;
        }
    };

    const filterByCategory = (category, products) => {
        if (category === "") {
            return products;
        } else {
            return products.filter((product) => product.category === category);
        }
    };

    const sortedAndFilteredProducts = filterByCategory(
        category,
        sortProducts(sorting, filteredProducts)
    );
    return (
        <>

            <div className="container">

                <div className="CartProduct-container">

                    <div className="CartProduct-header">

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

                        <Filter sorting={sorting} handleSortingChange={handleSortingChange} />

                        <div className="category">
                            <select value={category} onChange={handleCategoryChange}>
                                <option value="">Все категории</option>
                                <option value="Футболки">Футболки</option>
                                <option value="Кроссовки">Кроссовки</option>
                                <option value="Верхняя одежда">Верхняя одежда</option>
                            </select>
                        </div>

                    </div>

                    <div className="carts">
                    {
                        sortedAndFilteredProducts.length ?
                        sortedAndFilteredProducts.map((product) => {
                                return (
                                    <Product key={product.id} product={product} />
                                );
                            })

                            :

                            <h2>По вашему запросу "{query}" ничего не найдено!</h2>
                    }
                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default ProductPage;