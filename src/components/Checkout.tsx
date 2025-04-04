import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import OrderSummary from "./OrderSummary.tsx";
import PaymentType from "./PaymentType.tsx";
import {cartActions} from "../store/cartSlice";
import {toast} from "react-toastify";

interface Coupon {
    type: "percent" | "const";
    value: number;
}

type CouponCode = "SAVE10" | "WELCOME20" | "FREESHIP" | "FLASH50";

type AvailableCoupons = {
    [code in CouponCode]: Coupon;
};

export interface CouponState {
    isValid: boolean;
    message: string;
    coupon: Coupon | null;
}

interface CheckoutProps {
    navigateHome: () => void;
}

const CheckoutForm: React.FunctionComponent<CheckoutProps> = (props: CheckoutProps) => {
    const availableCoupons: AvailableCoupons = {
        'SAVE10': {type: "percent", value: 10},
        'WELCOME20': {type: "percent", value: 20},
        'FREESHIP': {type: "const", value: 9.99},
        'FLASH50': {type: "percent", value: 50},
    };

    // State for form fields
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        country: 'US',
        city: '',
        zipCode: '',
        couponCode: '',
        paymentMethod: '',
    });

    // State for coupon validation and discount
    const [couponStatus, setCouponStatus] = useState<CouponState>({
        isValid: false,
        message: '',
        coupon: null,
    });

    const [tax,] = useState(0);
    // TODO handle tax changes
    const [shipping,] = useState(9.99);
    const subtotal = useSelector((state: RootState) => {
        let total = 0;
        for (const item of state.cart.items) {
            total += item.totalPrice;
        }
        return total;
    });

    const dispatch = useDispatch();

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Reset coupon status when coupon input changes
        if (name === 'couponCode') {
            setCouponStatus({
                isValid: false,
                message: '',
                coupon: null,
            });
        }
    };

    // Validate coupon code
    const validateCoupon = () => {
        const {couponCode} = formData;
        if (!couponCode) {
            setCouponStatus({
                isValid: false,
                message: 'Please enter a coupon code',
                coupon: null,
            });
            return;
        }

        // @ts-expect-error Checks if Coupon code is valid
        const appliedCouponCode: Coupon | null = availableCoupons[couponCode];
        if (appliedCouponCode) {
            if (appliedCouponCode.type === "percent") {
                setCouponStatus({
                    isValid: true,
                    message: `Coupon applied! ${appliedCouponCode.value}% discount`,
                    coupon: appliedCouponCode
                });
            } else {
                setCouponStatus({
                    isValid: true,
                    message: `Coupon applied! -$${appliedCouponCode.value} discount`,
                    coupon: appliedCouponCode
                });
            }
        } else {
            setCouponStatus({
                isValid: false,
                message: 'Invalid coupon code',
                coupon: null,
            });
        }
    };

    // Calculate total with discount
    const calculateTotal = () => {
        let total = subtotal;
        if (couponStatus.coupon) {
            if (couponStatus.coupon.type === "percent") {
                total -= total * (couponStatus.coupon.value / 100);
            } else {
                total -= couponStatus.coupon.value;
            }
        }
        return (total + shipping + tax).toFixed(2);
    };

    // Handle form submission
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(cartActions.clearCart());
        const orderNumber = Math.floor(Math.random() * 1000000);
        toast.success(`Order #${orderNumber} submitted successfully! Don't check your inbox, if you don't want to be disappointed!`);
        props.navigateHome();
    };

    // Render payment method specific fields based on selected payment method
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Checkout</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Shipping Address</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="address">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="country">Country</label>
                                <select
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                >
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="AU">Australia</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="city">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="zipCode">Zip Code</label>
                                <input
                                    type="text"
                                    id="zipCode"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="payment" className="flex flex-row">
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-700">Payment Method</h2>
                        <div className="space-y-2">
                            <div>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="paypaypay"
                                        checked={formData.paymentMethod === 'paypaypay'}
                                        onChange={handleInputChange}
                                        className="mr-2"
                                        required
                                    />
                                    <span className="text-gray-700">PayPayPay</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="immediate-insolvency"
                                        checked={formData.paymentMethod === 'immediate-insolvency'}
                                        onChange={handleInputChange}
                                        className="mr-2"
                                    />
                                    <span className="text-gray-700">Immediate Insolvency</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="disastercard"
                                        checked={formData.paymentMethod === 'disastercard'}
                                        onChange={handleInputChange}
                                        className="mr-2"
                                    />
                                    <span className="text-gray-700">DisasterCard</span>
                                </label>
                            </div>
                        </div>

                        <PaymentType method={formData.paymentMethod}/>
                    </div>
                    <div className="grow"/>
                    <div className="w-24">
                        <img src="/img/untrusted.png" alt="untrusted shops logo"/>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Coupon Code</h2>
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            id="couponCode"
                            name="couponCode"
                            value={formData.couponCode}
                            onChange={handleInputChange}
                            className="flex-grow p-2 border border-gray-300 rounded"
                            placeholder="Enter coupon code"
                        />
                        <button
                            type="button"
                            onClick={validateCoupon}
                            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                        >
                            Apply
                        </button>
                    </div>
                    {couponStatus.message && (
                        <p className={`mt-2 text-sm ${couponStatus.isValid ? 'text-green-600' : 'text-red-600'}`}>
                            {couponStatus.message}
                        </p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                        Try codes: SAVE10, WELCOME20, FREESHIP, FLASH50
                    </p>
                </div>

                <OrderSummary tax={tax} shipping={shipping} couponStatus={couponStatus} total={calculateTotal()}
                              subtotal={subtotal}/>
            </form>
        </div>
    );
};

export default CheckoutForm;
