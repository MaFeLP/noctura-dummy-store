import {CouponState} from "./Checkout.tsx";

const OrderSummary = (props: {
    subtotal: number,
    couponStatus: CouponState,
    shipping: number,
    total: string,
    tax: number
}) => {
    return (<>
        <div className="mb-8 bg-gray-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Order Summary</h2>
            <div className="space-y-2">
                <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-800">${props.subtotal.toFixed(2)}</span>
                </div>
                {props.couponStatus.isValid && (
                    <div className="flex justify-between text-green-600">
                        {props.couponStatus.coupon?.type === "percent" && (<>
                            <span>Discount ({props.couponStatus.coupon?.value}%)</span>
                            <span>-${(props.subtotal * (props.couponStatus.coupon?.value / 100)).toFixed(2)}</span>
                        </>)}
                        {props.couponStatus.coupon?.type === "const" && (<>
                            <span>Discount (${props.couponStatus.coupon?.value})</span>
                            <span>-${props.couponStatus.coupon?.value}</span>
                        </>)}
                    </div>
                )}
                <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-800">${props.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-800">${props.tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${props.total}</span>
                </div>
            </div>
        </div>

        <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium"
        >
            Complete Order
        </button>
    </>);
}

export default OrderSummary;