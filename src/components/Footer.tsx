const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">Noctura Sleep</h3>
                        <p>Revolutionizing your sleep experience one night at a time.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-indigo-300">About Us</a></li>
                            <li><a href="#" className="hover:text-indigo-300">FAQ</a></li>
                            <li><a href="#" className="hover:text-indigo-300">Shipping Policy</a></li>
                            <li><a href="#" className="hover:text-indigo-300">Returns</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <p>Email: support@nocturasleep.com</p>
                        <p>Phone: (555) 123-4567</p>
                        <div className="flex space-x-4 mt-4">
                            <button className="hover:text-indigo-300">Facebook</button>
                            <button className="hover:text-indigo-300">Instagram</button>
                            <button className="hover:text-indigo-300">Twitter</button>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-700 text-center">
                    <p>© 2025 Noctura Sleep. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
