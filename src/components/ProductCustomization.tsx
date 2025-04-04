import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store";
import {cartActions, CartItem, CartItemOptions} from "../store/cartSlice.ts";
import {v4 as uuidV4} from 'uuid';
import {toast} from 'react-toastify';

interface ProductState {
    name: string;
    basePrice: number;
    image: string;
    description: string;
    options: CartItemOptions;
}

interface ProductCustomizationProps {
    setPage: (page: string) => void;
}

const ProductCustomization: React.FunctionComponent<ProductCustomizationProps> = (props: ProductCustomizationProps) => {
    // Product state
    const [product, setProduct] = useState<ProductState>({
        name: "The Noctura Pillow",
        basePrice: 99.99,
        image: "/api/placeholder/500/300",
        description: "Experience the ultimate sleep innovation with the Noctura Pillow. Designed for perfect comfort and advanced sleep technology.",
        options: {
            temperature: null,
            smartHome: false,
            filling: "medium",
            bedding: "cotton",
            speaker: false
        }
    });

    const dispatch = useDispatch.withTypes<AppDispatch>()();

    // Price calculations
    const calculateTotal = () => {
        let total = product.basePrice;

        if (product.options.temperature) {
            total += product.options.temperature === "both" ? 49.99 : 29.99;
        }

        if (product.options.smartHome) {
            total += 39.99;
        }

        if (product.options.filling === "comfy") {
            total += 10.00;
        } else if (product.options.filling === "hard") {
            total += 15.00;
        }

        if (product.options.bedding === "silk") {
            total += 29.99;
        } else if (product.options.bedding === "bamboo") {
            total += 19.99;
        }

        if (product.options.speaker) {
            total += 59.99;
        }

        return total;
    };

    // Option selection handlers
    const handleTemperatureChange = (value: string | null) => {
        setProduct({
            ...product,
            options: {
                ...product.options,
                temperature: value
            }
        });
    };

    const handleSmartHomeChange = () => {
        setProduct({
            ...product,
            options: {
                ...product.options,
                smartHome: !product.options.smartHome
            }
        });
    };

    const handleFillingChange = (value: string) => {
        setProduct({
            ...product,
            options: {
                ...product.options,
                filling: value
            }
        });
    };

    const handleBeddingChange = (value: string) => {
        setProduct({
            ...product,
            options: {
                ...product.options,
                bedding: value
            }
        });
    };

    const handleSpeakerChange = () => {
        setProduct({
            ...product,
            options: {
                ...product.options,
                speaker: !product.options.speaker
            }
        });
    };

    // Handle adding to cart
    const handleAddToCart = () => {
        // Create a cart item from the product
        const cartItem: CartItem = {
            id: uuidV4().toString(),
            name: product.name,
            price: calculateTotal(),
            quantity: 1,
            totalPrice: calculateTotal(),
            options: product.options,
        };

        // Dispatch the action to add the item to cart
        dispatch(cartActions.addItemToCart(cartItem));

        // Show toast notification
        toast.success(
            <div>
                <p>Item added to cart!</p>
                <div className="flex space-x-2 mt-2">
                    <button
                        className="bg-noctura-blue text-white px-4 py-2 rounded"
                        onClick={() => props.setPage('cart')}
                    >
                        Go to Cart
                    </button>
                    <button
                        className="text-noctura-blue border-noctura-blue px-4 py-2 rounded"
                        onClick={() => props.setPage('checkout')}
                    >
                        Checkout
                    </button>
                </div>
            </div>,
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }
        );
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-2xl font-bold text-indigo-600 mt-2">${calculateTotal().toFixed(2)}</p>
            <p className="mt-4 text-gray-600">{product.description}</p>

            <div className="mt-8 space-y-6">
                {/* Temperature Control */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Temperature Control</h3>
                    <div className="flex space-x-4">
                        <button
                            className={`px-4 py-2 border rounded-md ${product.options.temperature === null ? 'bg-indigo-100 border-indigo-500' : 'bg-white'}`}
                            onClick={() => handleTemperatureChange(null)}
                        >
                            None
                        </button>
                        <button
                            className={`px-4 py-2 border rounded-md ${product.options.temperature === "cooler" ? 'bg-indigo-100 border-indigo-500' : 'bg-white'}`}
                            onClick={() => handleTemperatureChange("cooler")}
                        >
                            Cooler (+$29.99)
                        </button>
                        <button
                            className={`px-4 py-2 border rounded-md ${product.options.temperature === "heater" ? 'bg-indigo-100 border-indigo-500' : 'bg-white'}`}
                            onClick={() => handleTemperatureChange("heater")}
                        >
                            Heater (+$29.99)
                        </button>
                        <button
                            className={`px-4 py-2 border rounded-md ${product.options.temperature === "both" ? 'bg-indigo-100 border-indigo-500' : 'bg-white'}`}
                            onClick={() => handleTemperatureChange("both")}
                        >
                            Both (+$49.99)
                        </button>
                    </div>
                </div>

                {/* Smart Home Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Smart Home Support</h3>
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={product.options.smartHome}
                            onChange={handleSmartHomeChange}
                            className="h-5 w-5 text-indigo-600"
                        />
                        <span>Siri and HomeKit Support (+$39.99)</span>
                    </label>
                </div>

                {/* Filling Type */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Filling Type</h3>
                    <div className="flex space-x-4">
                        <button
                            className={`px-4 py-2 border rounded-md ${product.options.filling === "comfy" ? 'bg-indigo-100 border-indigo-500' : 'bg-white'}`}
                            onClick={() => handleFillingChange("comfy")}
                        >
                            Comfy (+$10.00)
                        </button>
                        <button
                            className={`px-4 py-2 border rounded-md ${product.options.filling === "medium" ? 'bg-indigo-100 border-indigo-500' : 'bg-white'}`}
                            onClick={() => handleFillingChange("medium")}
                        >
                            Medium (Standard)
                        </button>
                        <button
                            className={`px-4 py-2 border rounded-md ${product.options.filling === "hard" ? 'bg-indigo-100 border-indigo-500' : 'bg-white'}`}
                            onClick={() => handleFillingChange("hard")}
                        >
                            Hard (+$15.00)
                        </button>
                    </div>
                </div>

                {/* Bedding Material */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Bedding Material</h3>
                    <div className="flex space-x-4">
                        <button
                            className={`px-4 py-2 border rounded-md ${product.options.bedding === "cotton" ? 'bg-indigo-100 border-indigo-500' : 'bg-white'}`}
                            onClick={() => handleBeddingChange("cotton")}
                        >
                            Cotton (Standard)
                        </button>
                        <button
                            className={`px-4 py-2 border rounded-md ${product.options.bedding === "silk" ? 'bg-indigo-100 border-indigo-500' : 'bg-white'}`}
                            onClick={() => handleBeddingChange("silk")}
                        >
                            Silk (+$29.99)
                        </button>
                        <button
                            className={`px-4 py-2 border rounded-md ${product.options.bedding === "bamboo" ? 'bg-indigo-100 border-indigo-500' : 'bg-white'}`}
                            onClick={() => handleBeddingChange("bamboo")}
                        >
                            Bamboo (+$19.99)
                        </button>
                    </div>
                </div>

                {/* Built-in Speaker */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Built-in Speaker</h3>
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={product.options.speaker}
                            onChange={handleSpeakerChange}
                            className="h-5 w-5 text-indigo-600"
                        />
                        <span>Premium Sound Speaker (+$59.99)</span>
                    </label>
                </div>

                {/* Add to Cart Button */}
                <button
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-indigo-700 transition duration-200"
                    onClick={handleAddToCart}
                >
                    Add to Cart - ${calculateTotal().toFixed(2)}
                </button>
            </div>
        </div>
    );
};

export default ProductCustomization;
