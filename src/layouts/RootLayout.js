import {NavLink, Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Totop from "../components/Totop";
import CategoriesItem from "../components/CategoriesItem";
import Error from "../pages/Error";
import Spinner from "../components/Spinner";
import React, {useContext} from "react";
import {ProductsContext} from "../context/ProductsContext";
import Shop from "../components/Shop";

const RootLayout = ({error, loading}) => {
    const {products} = useContext(ProductsContext)
    let prodTypes = [];
    const productTypesAll = products.map(prod => prod.type);
    [...prodTypes] = new Set(productTypesAll);
    const discountedProducts = products.filter((product) => product.discount)


    const sectionStyle = discountedProducts?.length > 0 ? "section section--nopading mt-6" : "section section--nopading";

    return (
        <>

            <Shop />

            <Header />

            <main>
                {error && <Error externalError={error}/>}
                {loading && !error && <Spinner/>}
                <div className={sectionStyle}>
                    <div className="container">
                        {!error && !loading && products?.length > 0 && (<nav className="categories">
                            {prodTypes && prodTypes?.length > 0 && (
                                prodTypes?.map((type) => <CategoriesItem key={type} type={type}/>)
                            )}
                            {discountedProducts?.length > 0 && (
                                <NavLink to='products/discounts' className="cat-card-discount">
                                    <p className="cat-card-discount__text">Наявні акційні пропозиції</p>
                                    <div className="cat-card-discount__bottom">
                                        <h3>Зверніть увагу!</h3>
                                    </div>
                                </NavLink>
                            )}
                        </nav>)}
                    </div>
                </div>

                <Outlet/>

            </main>

            <Footer/>

            <Totop/>

        </>
    )
}

export default RootLayout