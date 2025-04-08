import React from 'react';
import {AlertCircle, RotateCcw, Truck} from 'lucide-react';

const ShippingAndReturns: React.FunctionComponent = () => {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Shipping & Returns Policy</h1>

            {/* Shipping Section */}
            <section className="mb-8">
                <div className="flex items-center mb-4">
                    <Truck className="text-noctura-blue mr-2" size={24}/>
                    <h2 className="text-xl font-semibold">Shipping Information</h2>
                </div>

                <div className="pl-8 space-y-4">
                    <div>
                        <h3 className="font-medium text-gray-800">Processing Time</h3>
                        <p className="text-gray-700">
                            All orders are processed within 1-2 business days after payment confirmation.
                            Orders placed on weekends or holidays will be processed on the next business day.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium text-gray-800">Shipping Methods & Timeline</h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li><strong>Standard Shipping:</strong> 3-5 business days ($9.95)</li>
                            <li><strong>Express Shipping:</strong> 1-2 business days ($19.95)</li>
                            <li><strong>International Shipping:</strong> 7-14 business days (varies by destination)</li>
                        </ul>
                        <p className="mt-2 text-gray-700">
                            Shipping times are estimated and begin from the date of shipment, not the order date.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium text-gray-800">Tracking Information</h3>
                        <p className="text-gray-700">
                            Once your order ships, you will receive a confirmation email with tracking information.
                            You can track your package at any time through your account dashboard or via the link in
                            your shipping confirmation email.
                        </p>
                    </div>
                </div>
            </section>

            {/* Returns Section */}
            <section className="mb-8">
                <div className="flex items-center mb-4">
                    <RotateCcw className="text-noctura-blue mr-2" size={24}/>
                    <h2 className="text-xl font-semibold">Returns & Refunds</h2>
                </div>

                <div className="pl-8 space-y-4">
                    <div>
                        <h3 className="font-medium text-gray-800">Return Policy</h3>
                        <p className="text-gray-700">
                            We offer a 30-day satisfaction guarantee on all Noctura Pillow products. If you're not
                            completely
                            satisfied with your purchase, you may return it within 30 days of delivery for a full refund
                            of the
                            purchase price.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium text-gray-800">Return Process</h3>
                        <ol className="list-decimal pl-5 text-gray-700 space-y-2">
                            <li>Contact our customer support team to initiate a return</li>
                            <li>Receive a Return Merchandise Authorization (RMA) number</li>
                            <li>Package your item securely with all original packaging</li>
                            <li>Include the RMA number on the outside of the package</li>
                            <li>Ship the item back using a trackable shipping method</li>
                        </ol>
                    </div>

                    <div>
                        <h3 className="font-medium text-gray-800">Refund Processing</h3>
                        <p className="text-gray-700">
                            Once we receive and inspect your return, we will process your refund within 5-7 business
                            days.
                            Refunds will be issued to the original payment method used for the purchase.
                        </p>
                    </div>
                </div>
            </section>

            {/* Humorous Section */}
            <section className="mb-8 p-4">
                <h3 className="font-semibold text-gray-800 mb-2">The Fine Print</h3>
                <p>
                    In the unlikely event that our imaginary warehouse runs out of our non-existent inventory,
                    we promise to not ship you anything with the utmost urgency! Our team of highly trained
                    pretend logistics experts will ensure that your order doesn't arrive with impressive efficiency.
                </p>
                <p className="mt-2">
                    Should you be dissatisfied with the product you never received, our returns department
                    (which consists entirely of this paragraph) will happily accept the return of nothing and
                    refund the zero dollars you were charged. We're that committed to customer satisfaction!
                </p>
                <p className="text-gray-700 italic mt-2">
                    Remember: The best part about our shipping policy is that you'll never have to anxiously track a
                    package,
                    and the best part about our return policy is you'll never need to find a box or print a shipping
                    label!
                </p>
            </section>

            {/* Disclaimer Section */}
            <section className="mb-8 bg-yellow-50 p-4 border-l-4 border-yellow-400 rounded">
                <div className="flex items-start">
                    <AlertCircle className="text-yellow-500 mr-3 mt-1 flex-shrink-0" size={20}/>
                    <div>
                        <h3 className="font-bold text-yellow-800">Important Disclosure</h3>
                        <p className="text-yellow-800 mt-1">
                            Please be aware that the Noctura Pillow website is an educational project and demonstration
                            only. Despite the realistic policies outlined above:
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-yellow-800 space-y-1">
                            <li>No actual products will be shipped to customers</li>
                            <li>No payment processing occurs on this website</li>
                            <li>No customer information is stored or processed</li>
                            <li>No returns will be accepted as no products are shipped</li>
                        </ul>
                        <p className="text-yellow-800 mt-2">
                            This website serves as a prototype and educational tool to demonstrate e-commerce user
                            experience and interface design. All product information, pricing, and policies are
                            fictional.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShippingAndReturns;
