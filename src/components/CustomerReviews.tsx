import reviewsData from '../data/reviews.json';
import React, {useEffect, useRef} from "react";

interface CustomerReviewsProps {
    isHomepage: boolean;
}

const CustomerReviews: React.FunctionComponent<CustomerReviewsProps> = (props: CustomerReviewsProps) => {
    const {isHomepage} = props;
    const reviewsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isHomepage && reviewsRef.current) {
            const scroll = () => {
                reviewsRef.current!.scrollLeft += 1;
                if (reviewsRef.current!.scrollLeft >= reviewsRef.current!.scrollWidth - reviewsRef.current!.clientWidth) {
                    reviewsRef.current!.scrollLeft = 0;
                }
            };
            const interval = setInterval(scroll, 50);
            return () => clearInterval(interval);
        }
    }, [isHomepage]);

    return (
        <div className={`bg-white p-6 ${!isHomepage && 'rounded-lg shadow-md'} mt-6`}>
            {!isHomepage && <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>}
            <div
                className={`space-y-4 ${isHomepage ? 'flex overflow-x-auto space-y-0 space-x-4 scrollbar-hide' : ''}`}
                ref={reviewsRef}
            >
                {reviewsData.map((review, index) => (
                    <div key={index}
                         className={`p-4 rounded-lg shadow-md ${isHomepage ? 'min-w-[300px] flex-shrink-0' : ''}`}>
                        <div className="flex items-center mb-1">
                            <div className="flex text-yellow-400">
                                {'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}
                            </div>
                            <span className="ml-2 font-medium">{review.title}</span>
                        </div>
                        <p className="text-gray-600">{review.content}</p>
                        <p className="text-gray-500 text-sm mt-1">{review.author} - Verified Purchase</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerReviews;
