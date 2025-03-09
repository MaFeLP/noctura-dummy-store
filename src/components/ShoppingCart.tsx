import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {cartActions} from '../store/cartSlice.ts';
import {AppDispatch, RootState} from '../store';

interface ShoppingCartProps {
    onClose: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
    const dispatch = useDispatch.withTypes<AppDispatch>()();

    const handleRemoveItem = (id: string) => {
        dispatch(cartActions.removeItemFromCart(id));
    };

    const handleClearCart = () => {
        dispatch(cartActions.clearCart());
    };

    return (
        <div className="bg-opacity-50 z-50 flex flex-col gap-5 justify-center items-start overflow-y-auto">
            <h2 className="text-2xl font-bold">Your Shopping Cart</h2>
            <div className="max-w-2xl w-full">
                {cartItems.length === 0 ? (
                    <p className="text-center py-8 text-gray-500">Your cart is empty</p>
                ) : (
                    <>
                    <div className="">
                        {cartItems.map((item) => (
                            <div key={item.id} className="border-b pb-4 pt-4 flex justify-between">
                                <div>
                                    <h3 className="font-medium">{item.name}</h3>
                                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                    <div className="text-sm text-gray-600 mt-1">
                                        <p>Options:</p>
                                        <ul className="ml-4 list-disc">
                                            {item.options.temperature && (
                                                <li>Temperature: {item.options.temperature}</li>
                                            )}
                                            {item.options.smartHome && <li>Smart Home: Yes</li>}
                                            <li>Filling: {item.options.filling}</li>
                                            <li>Bedding: {item.options.bedding}</li>
                                            {item.options.speaker && <li>Speaker: Yes</li>}
                                        </ul>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium"><span className="math-inline">{item.totalPrice.toFixed(2)}</span>
                                    </p>
                                    <button
                                        onClick={() => handleRemoveItem(item.id)}
                                        className="text-red-600 text-sm mt-2 hover:text-red-800"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>))}
                    </div>
                    <div className="mt-6 pt-4">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold">Total Amount:</span>
                            <span className="font-bold text-xl">{totalAmount.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <button
                            onClick={handleClearCart}
                            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                        >
                            Clear Cart
                        </button>
                        <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
                            Checkout
                        </button>
                    </div>
                    </>
                    )
                }
            </div>
        </div>
    )
}

export default ShoppingCart;