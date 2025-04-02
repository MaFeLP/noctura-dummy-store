import {useSelector} from "react-redux";
import {RootState} from "../store";
import {useState} from 'react';

function Header(props: { handlePageChange: (page: string) => void }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cartItems = useSelector((state: RootState) => state.cart.totalQuantity);

    return (
        <nav className="text-white p-4 bg-noctura-blue">
            <div className="container mx-auto flex justify-between items-center">
                <button className="flex flex-row items-center" onClick={() => props.handlePageChange("home")}>
                    <img className="text-xl max-w-10" width="1600" height="1600" src="/img/favicon.png" alt=""/>
                    <h1 className="text-xl font-bold ml-5">Noctura Sleep</h1>
                </button>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex md:flex-row md:space-x-4">
                    <button className="hover:text-indigo-200" onClick={() => props.handlePageChange("home")}>Home</button>
                    <button className="hover:text-indigo-200" onClick={() => props.handlePageChange("shop")}>Shop</button>
                    <button className="hover:text-indigo-200" onClick={() => props.handlePageChange("about")}>About</button>
                    <button className="hover:text-indigo-200" onClick={() => props.handlePageChange("contact")}>Contact</button>
                </div>
                <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium" onClick={() => props.handlePageChange("cart")}>
                    Cart ({ cartItems })
                </button>
            </div>
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-indigo-600 bg-opacity-95 flex flex-col items-center justify-center z-50">
                    <button onClick={() => setIsMenuOpen(false)}
                            className="absolute top-4 right-4 text-white focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <button className="text-2xl text-white mb-4" onClick={() => {
                        props.handlePageChange("home");
                        setIsMenuOpen(false);
                    }}>Home
                    </button>
                    <button className="text-2xl text-white mb-4" onClick={() => {
                        props.handlePageChange("shop");
                        setIsMenuOpen(false);
                    }}>Shop
                    </button>
                    <button className="text-2xl text-white mb-4" onClick={() => {
                        props.handlePageChange("about");
                        setIsMenuOpen(false);
                    }}>About
                    </button>
                    <button className="text-2xl text-white mb-4" onClick={() => {
                        props.handlePageChange("contact");
                        setIsMenuOpen(false);
                    }}>Contact
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Header;
