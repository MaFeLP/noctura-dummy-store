import ProductInfo from "../components/ProductInfo.tsx";
import ProductCustomization from "../components/ProductCustomization.tsx";
import CustomerReviews from "../components/CustomerReviews.tsx";
import React from "react";

interface ShopProps {
    setPage: (page: string) => void;
}

const Shop: React.FunctionComponent<ShopProps> = (props: ShopProps) => {
    return (<>
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <img
                        src="/img/noctura%20pillow%202.png"
                        alt="Noctura Pillow"
                        className="w-full rounded-lg"
                    />
                    <ProductInfo/>
                </div>
            </div>

            {/* Product Customization and Reviews */}
            <div className="md:w-1/2">
                <ProductCustomization setPage={props.setPage}/>

                <CustomerReviews/>
            </div>
        </div>
    </>);
}

export default Shop;
