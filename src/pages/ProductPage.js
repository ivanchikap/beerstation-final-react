import Product from "../components/Product";
import Section from "../components/Section";
import {useEffect, useMemo, useRef} from "react";
import {useContext} from "react";
import {ProductsContext} from "../context/ProductsContext";

const ProductPage = ({type}) => {
    const {products: allProducts} = useContext(ProductsContext)
    const ref = useRef(null);

    let products = useMemo(() => [], []);
    let title = '';
    switch (type) {
        case 'alcohol':
            title = 'Сьогодні на кранах';
            products = allProducts.filter((product) => product.type === type);
            break;
        case 'ba':
            title = 'Б/А пиво та соки';
            products = allProducts.filter((product) => product.type === type);
            break;
        case 'appetizer':
            title = 'Смаколики';
            products = allProducts.filter((product) => product.type === type);
            break;
        case 'souvenirs':
            title = 'Сувеніри';
            products = allProducts.filter((product) => product.type === type);
            break;
        case 'discounts':
            title = 'Акційні товари';
            products = allProducts.filter((product) => product.discount)
            break;
        default:
            title = 'Wrong type of ProductPage'
    }


    useEffect(() => {
        ref.current?.scrollIntoView({
            block: "start",
            behavior: 'smooth',
        });

    }, [products])

    return (
        <div ref={ref}>
            <Section title={title}>
                <div className="filter">
                    <div className="filter__sort">
                        <div className="filter__sort-direction down">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M240 96h64a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm0 128h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm256 192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-256-64h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm-64 0h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"/>
                            </svg>
                        </div>
                        <label className="filter__sort-by">
                            Сортувати за:
                            <select className="filter__select" name="sort-select">
                                <option value="price">Ціною</option>
                                <option value="abv">Міцністю</option>
                                <option value="ibu">Гіркотою</option>
                                <option value="density">Щільністю</option>
                            </select>
                        </label>
                    </div>
                    <label className="filter__input">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512">
                            <path
                                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
                        </svg>
                        <input type="text" name="search" placeholder="знайди улюблене пиво"/>
                    </label>

                    <label className="filter__filter">
                        Тип пива:
                        <select className="filter__select" name="filter-select">
                            <option value="light-filtered">Світле фільтроване</option>
                            <option value="light-nonfiltered">Світле нефільтроване</option>
                            <option value="dark-filtered">Темне фільтроване</option>
                            <option value="cider">Сидр</option>
                        </select>
                    </label>
                </div>
                <div className="main__info">
                    {products.map((product => <Product key={product.name} prod={product}/>))}
                </div>
            </Section>
        </div>

    );
};

export default ProductPage;