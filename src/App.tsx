import Header from './components/Header';
import Footer from './components/Footer';
import ProductInfo from './components/ProductInfo';
import ProductCustomization from './components/ProductCustomization';
import CustomerReviews from './components/CustomerReviews';
import {useState} from "react";
import ShoppingCart from "./components/ShoppingCart.tsx";
import Checkout from "./components/Checkout.tsx";
import Shop from "./pages/Shop.tsx";
import HomePage from "./pages/Homepage.tsx";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from "./pages/AboutUs.tsx";
import FAQ from "./pages/faq.tsx";
import Shipping from "./pages/Shipping.tsx";

interface SPRouterProps {
    page: string;
    handlePageChange: (page: string) => void;
}

const SPRouter: React.FunctionComponent<SPRouterProps> = (props: SPRouterProps) => {
    switch (props.page) {
        case "shop":
            return <Shop setPage={props.handlePageChange}/>;
        case "cart":
            return (<>
                <ShoppingCart checkout={() => props.handlePageChange("checkout")}/>
            </>);
        case "checkout":
            return <Checkout navigateHome={() => props.handlePageChange("home")}/>;
        case "about":
            return <AboutUs navigateHome={() => props.handlePageChange("home")}/>;
        case "faq":
            return <FAQ navigateHome={() => props.handlePageChange("home")}
                        navigateContact={() => props.handlePageChange("about")}/>;
        case "shipping":
            return <Shipping/>
        default:
            return (<>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img
                                src="/img/noctura%20pillow%202.png"
                                alt="Noctura Pillow"
                                className="w-full rounded-lg"
                            />
                            <ProductInfo />
                        </div>
                    </div>

                    {/* Product Customization and Reviews */}
                    <div className="md:w-1/2">
                        <ProductCustomization setPage={props.handlePageChange}/>

                        <CustomerReviews isHomepage={false}/>
                    </div>
                </div>
            </>);
    }
}

const App = () => {
    const [page, setPage] = useState("home");

    return (
        <div className="min-h-screen bg-gray-50">
            <Header handlePageChange={setPage}/>

            {/* Add Homepage Component when page === 'Home' */}
            {page === "home" && (
                <HomePage/>
            ) || (
                <main className="container mx-auto py-8 px-4 min-h-[60vh]">
                    <SPRouter page={page} handlePageChange={setPage}/>
                </main>
            )}

            <Footer setPage={setPage}/>
            <ToastContainer/>
        </div>
    );
};

export default App;
