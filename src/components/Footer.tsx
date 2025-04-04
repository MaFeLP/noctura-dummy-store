import ContactOptions from "./ContactOptions.tsx";
import React from "react";

interface FooterProps {
    setPage: (page: string) => void;
}

const Footer: React.FunctionComponent<FooterProps> = (props: FooterProps) => {
    return (
        <footer className="text-white py-8 mt-12 bg-noctura-blue">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">Noctura Pillow</h3>
                        <p>Revolutionizing your sleep experience one night at a time.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-indigo-300" onClick={() => props.setPage('about')}>About
                                Us</a></li>
                            <li><a href="#" className="hover:text-indigo-300"
                                   onClick={() => props.setPage('faq')}>FAQ</a></li>
                            <li><a href="#" className="hover:text-indigo-300" onClick={() => props.setPage('shipping')}>Shipping
                                Policy</a></li>
                            <li><a href="#" className="hover:text-indigo-300"
                                   onClick={() => props.setPage('return')}>Returns</a></li>
                        </ul>
                    </div>
                    <ContactOptions showSocialMedia={true} showHeader={true}/>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-700 text-center">
                    <p>© 2025 Noctura Pillow. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
