import Header from './components/Header';
import Footer from './components/Footer';
import ProductInfo from './components/ProductInfo';
import ProductCustomization from './components/ProductCustomization';
import CustomerReviews from './components/CustomerReviews';
import {useState} from "react";
import ShoppingCart from "./components/ShoppingCart.tsx";

function SPRouter(props: { page: string, handlePageChange: any }) {
    switch (props.page) {
        case "shop":
            return <ProductCustomization />;
        case "cart":
            return (<>
                <ShoppingCart onClose={() => {}} />
            </>);
        default:
            return (<>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Product Image and Info */}
                    <div className="md:w-1/2">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img
                                src="/api/placeholder/500/300"
                                alt="Noctura Pillow"
                                className="w-full rounded-lg"
                            />
                            <ProductInfo />
                        </div>
                    </div>

                    {/* Product Customization and Reviews */}
                    <div className="md:w-1/2">
                        <ProductCustomization />

                        <CustomerReviews />
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

            <main className="container mx-auto py-8 px-4 min-h-[60vh]">
                <SPRouter page={page} handlePageChange={setPage} />
            </main>

            <Footer />
        </div>
    );
};

export default App;
