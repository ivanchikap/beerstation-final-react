import React, {lazy, Suspense, useEffect, useState} from 'react';
import {Route, Navigate, Routes} from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Spinner from "./components/Spinner";
import fetchApi from "./helpers/fetchApi";
import {ProductsContext} from "./context/ProductsContext";
import {InfoContext} from "./context/InfoContext";
import {ShopContext} from "./context/ShopContext";

//lazy
const RootLayout = lazy(() => import("./layouts/RootLayout"))
const NotFound = lazy(() => import("./pages/NotFound"))
const Error = lazy(() => import("./pages/Error"))
const ProductModalPage = lazy(() => import("./pages/ProductModalPage"))

function App() {
    const [products, setProducts] = useState([]);
    const [shop, setShop] = useState('shopTeteriv') //localstorageGet
    let apiUrl = `http://localhost:4000/${shop}`;
    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    useEffect(() => {
        const getInfo = async () => {
            try {
                setLoading(true)
                const allInfo = await fetchApi.fetchInfo(apiUrl)
                const {generalInfo, products: allProducts} = allInfo
                setInfo(generalInfo)
                setProducts(allProducts)
            } catch (e) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }
        getInfo()
    }, [apiUrl])

    return (
        <ShopContext.Provider value={{shop, setShop}}>
            <InfoContext.Provider value={{info, setInfo}}>
                <ProductsContext.Provider value={{products, setProducts}}>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path='/' element={<RootLayout loading={loading} error={error} errorElement={<Error/>}/>}>
                                <Route path='products/alcohol' element={<ProductPage type='alcohol'/>}
                                       errorElement={<Error/>}/>
                                <Route path='products/appetizer' element={<ProductPage type='appetizer'/>}
                                       errorElement={<Error/>}/>
                                <Route path='products/ba' element={<ProductPage type='ba'/>} errorElement={<Error/>}/>
                                <Route path='products/souvenirs' element={<ProductPage type='souvenirs'/>}
                                       errorElement={<Error/>}/>
                                <Route path='products/discounts' element={<ProductPage type='discounts'/>}
                                       errorElement={<Error/>}/>
                                <Route path='products/:id' element={<ProductModalPage/>} errorElement={<Error/>}/>
                                <Route path='*' element={<Navigate to='/404' replace={true}/>} errorElement={<Error/>}/>
                                <Route path='/404' element={<NotFound/>} errorElement={<Error/>}/>
                            </Route>
                        </Routes>
                    </Suspense>
                </ProductsContext.Provider>
            </InfoContext.Provider>
        </ShopContext.Provider>
    );
}

export default App;