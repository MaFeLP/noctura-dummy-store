const CustomerReviews = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
            <div className="space-y-4">
                <div className="border-b pb-4">
                    <div className="flex items-center mb-1">
                        <div className="flex text-yellow-400">
                            ★★★★★
                        </div>
                        <span className="ml-2 font-medium">Amazing sleep technology!</span>
                    </div>
                    <p className="text-gray-600">The temperature control is a game changer for hot sleepers like me. Best purchase I've made this year!</p>
                    <p className="text-gray-500 text-sm mt-1">Sarah K. - Verified Purchase</p>
                </div>
                <div className="border-b pb-4">
                    <div className="flex items-center mb-1">
                        <div className="flex text-yellow-400">
                            ★★★★☆
                        </div>
                        <span className="ml-2 font-medium">Great with HomeKit</span>
                    </div>
                    <p className="text-gray-600">Love being able to warm up my pillow before bedtime using Siri shortcuts. The speaker could be better though.</p>
                    <p className="text-gray-500 text-sm mt-1">Michael T. - Verified Purchase</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;