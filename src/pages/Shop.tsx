import React from "react";
import ProductInfo from "../components/ProductInfo.tsx";
import ProductCustomization from "../components/ProductCustomization.tsx";
import CustomerReviews from "../components/CustomerReviews.tsx";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ShopProps {
    setPage: (page: string) => void;
}

const Shop: React.FunctionComponent<ShopProps> = (props: ShopProps) => {
    return (<>
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <Carousel showThumbs={false} infiniteLoop autoPlay>
                        <div>
                            <img
                                src="/img/noctura%20pillow%202.png"
                                alt="Noctura Pillow 2"
                                className="w-full rounded-lg"
                                width="1024"
                                height="1024"
                            />
                        </div>
                        <div>
                            <img
                                src="/img/noctura%20pillow%201.png"
                                alt="Noctura Pillow 1"
                                className="w-full rounded-lg"
                                width="1024"
                                height="1024"
                            />
                        </div>
                        <div>
                            <img
                                src="/img/cross_section.jpg"
                                alt="Cross Section of the Pillow"
                                className="w-full rounded-lg"
                                width="2048"
                                height="2048"
                            />
                        </div>
                        <div>
                            <img
                                src="/img/noctura%20pillow%203.png"
                                alt="Noctura Pillow 3"
                                className="w-full rounded-lg"
                                width="1024"
                                height="1024"
                            />
                        </div>
                    </Carousel>
                    <ProductInfo/>
                </div>
            </div>

            {/* Product Customization and Reviews */}
            <div className="md:w-1/2">
                <ProductCustomization setPage={props.setPage}/>

                <CustomerReviews isHomepage={false}/>
            </div>
        </div>
    </>);
}

export default Shop;
