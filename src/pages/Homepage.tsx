import {ChevronDown} from 'lucide-react';
import CustomerReviews from "../components/CustomerReviews.tsx";

export default function HomePage() {
    const scrollToContent = () => {
        const contentSection = document.getElementById('feature-list');
        if (contentSection) {
            contentSection.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div className="relative w-full">
            {/* Hero Section with Full Screen Image */}
            <div className="relative h-screen w-full flex flex-col items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0 bg-gray-900">
                    <img
                        src="/img/noctura%20pillow%202.png"
                        alt="Noctura Pillow"
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wider">
                        The Noctura Pillow
                    </h1>
                </div>

                <button
                    onClick={scrollToContent}
                    className="absolute bottom-16 text-white animate-bounce transition-all hover:text-gray-300 cursor-pointer z-10"
                    aria-label="Scroll down"
                >
                    <ChevronDown size={48}/>
                </button>
            </div>

            <section id="feature-list" className="bg-white p-12">
                <div className="mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-6 md:mb-0 md:mr-6">
                        <img
                            src="/img/cross_section.jpg"
                            alt="Noctura Pillow Cross Section"
                            className="w-full"
                            width="2048"
                            height="2048"
                        />
                    </div>
                    <div className="md:w-2/3">
                        <h2 className="text-3xl font-bold mb-6">Features</h2>
                        <div className="text-lg text-gray-700">
                            Sleep isn’t just rest&mdash;it’s recovery, relaxation, and rejuvenation. The Noctura Pillow
                            is
                            designed to transform your nights with cutting-edge technology, all while maintaining the
                            plush
                            comfort you love.
                            <br/><br/>

                            🔊 <b>Built-in Speaker System</b><br/>
                            Immerse yourself in a world of sound without disturbing your partner. The seamlessly
                            integrated
                            speakers let you listen to music, white noise, or guided meditations&mdash;all while keeping
                            the
                            pillow soft and cozy.
                            <br/><br/>

                            🌡️ <b>Heating & Cooling System</b><br/>
                            No more flipping your pillow to find the perfect temperature. With customizable heating and
                            cooling settings, the Noctura Pillow keeps you comfortable in every season.
                            <br/><br/>

                            🗣️ <b>Siri Integration</b><br/>
                            Need to set an alarm, play a podcast, or check the weather? Just ask. With built-in Siri
                            support, your pillow listens, so you can stay relaxed and hands-free

                            <br/><br/>
                            <hr/>
                            <br/>

                            The Noctura Pillow represents the pinnacle of sleep technology, designed to provide the
                            perfect
                            night's sleep through customizable options and smart features. Our revolutionary design
                            combines
                            comfort with technology to enhance your sleep experience.

                            <ul className="list-disc pl-5 space-y-2">
                                <li>Ergonomic design for proper neck and spine alignment</li>
                                <li>Hypoallergenic materials</li>
                                <li>Easy to clean and maintain</li>
                                <li>1-year warranty</li>
                                <li>30-day satisfaction guarantee</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 p-12">
                <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-2/3">
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-700 text-justify">
                            Sleep Better, Make a Difference <br/><br/>

                            At Noctura, we believe that a great night’s sleep shouldn’t come at the expense of our
                            planet&mdash;or those in need. That’s why the Noctura Pillow is designed with eco-friendly
                            materials wherever possible, reducing waste and minimizing our environmental impact. Every
                            pillow is crafted with sustainability in mind, ensuring that your comfort supports a
                            healthier world. <br/><br/>

                            But we’re not stopping there. For every 500 pillows sold, we donate one to hospitals,
                            rehabilitation centers, or institutions where quality sleep can make a real difference.
                            Whether it’s aiding patient recovery or supporting healthcare workers, your purchase helps
                            bring rest to those who need it most. <br/><br/>

                            By choosing Noctura, you’re not just investing in smarter sleep&mdash;you’re joining a
                            movement
                            for a greener, more compassionate future. Rest easy, knowing your pillow does more than
                            support your head&mdash;it supports the world.
                        </p>
                    </div>
                    <div className="md:w-1/3 mt-6 md:mt-0 md:ml-6">
                        <img
                            src="/img/harold.jpg"
                            width="1000"
                            height="525"
                            alt="Harold"
                            className="w-full rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </section>

            <section id="customer-reviews" className="bg-white p-12">
                <h2 className="text-3xl font-bold mb-6">What our Customers Say</h2>
                <CustomerReviews isHomepage={true}/>
            </section>
        </div>
    );
}