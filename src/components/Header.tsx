import {useSelector} from "react-redux";
import {RootState} from "../store";

function Header(props: { handlePageChange: (page: string) => void }) {
    const cartItems = useSelector((state: RootState) => state.cart.totalQuantity);

    return (
        <nav className="bg-indigo-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* TODO: insert logo here */}
                <h1 className="text-xl font-bold">Noctura Sleep</h1>
                <div className="flex space-x-4">
                    <button className="hover:text-indigo-200" onClick={() => props.handlePageChange("home")}>Home</button>
                    <button className="hover:text-indigo-200" onClick={() => props.handlePageChange("shop")}>Shop</button>
                    <button className="hover:text-indigo-200" onClick={() => props.handlePageChange("about")}>About</button>
                    <button className="hover:text-indigo-200" onClick={() => props.handlePageChange("contact")}>Contact</button>
                </div>
                <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium" onClick={() => props.handlePageChange("cart")}>
                    Cart ({ cartItems })
                </button>
            </div>
        </nav>
    );
}

export default Header;
