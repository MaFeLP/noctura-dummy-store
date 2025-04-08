import {ChevronDown} from 'lucide-react';
import CustomerReviews from "../components/CustomerReviews.tsx";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {useState} from 'react';

export default function HomePage() {
    const scrollToContent = () => {
        const contentSection = document.getElementById('feature-list');
        if (contentSection) {
            contentSection.scrollIntoView({behavior: 'smooth'});
        }
    };

    // State for the MaiLab disclaimer popup
    const [showNameDisclaimer, setShowNameDisclaimer] = useState(false);
    const [showHeaderDisclaimer, setShowHeaderDisclaimer] = useState(false);

    // Sleep and learning data for the chart
    const sleepData = [
        {name: '4 Hours', memoryRetention: 30, problemSolving: 25, creativity: 20},
        {name: '6 Hours', memoryRetention: 50, problemSolving: 45, creativity: 40},
        {name: '8 Hours', memoryRetention: 85, problemSolving: 80, creativity: 75},
        {name: '9+ Hours', memoryRetention: 95, problemSolving: 90, creativity: 90},
    ];

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
                    <div className="md:w-2/3">
                        <h2 className="text-3xl font-bold mb-6">Features</h2>
                        <div className="text-lg text-gray-700">
                            Sleep isn't just rest&mdash;it's recovery, relaxation, and rejuvenation. The Noctura Pillow
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
                    <div className="md:w-1/3 mb-6 md:mb-0 md:mr-6">
                        <img
                            src="/img/cross_section.jpg"
                            alt="Noctura Pillow Cross Section"
                            className="w-full"
                            width="2048"
                            height="2048"
                        />
                    </div>
                </div>
            </section>

            {/* New Influencer Section */}
            <section className="bg-gray-50 p-12">
                <div className="max-w-8xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center relative flex justify-center">
                        <div
                            className="cursor-pointer border-b border-dotted border-gray-500 text-center"
                            onMouseEnter={() => setShowHeaderDisclaimer(true)}
                            onMouseLeave={() => setShowHeaderDisclaimer(false)}
                            onClick={() => setShowHeaderDisclaimer(!showHeaderDisclaimer)}
                        >
                            Endorsed by MaiLab<sup>*</sup>
                        </div>

                        {/* Header Disclaimer Popup */}
                        {showHeaderDisclaimer && (
                            <div
                                className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-72 bg-white p-3 rounded shadow-lg text-sm text-gray-700 border border-gray-300">
                                <p><strong>Disclaimer:</strong> This endorsement is fictional and created solely for
                                    educational purposes as part of a school project. MaiLab has not made these
                                    statements nor endorsed this product.</p>
                                <div
                                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-white border-r border-b border-gray-300"></div>
                            </div>
                        )}
                    </h2>

                    <div className="flex flex-col md:flex-row items-center mb-8">
                        <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
                            <div
                                className="relative rounded-full overflow-hidden shadow-lg border-4 border-blue-500 w-64 h-64 mx-auto">
                                <img
                                    src="/img/mai_lab.jpg"
                                    alt="MaiLab"
                                    className="w-full h-full object-cover"
                                    width="3872"
                                    height="2581"
                                />
                            </div>
                            <div className="relative">
                                <h3 className="text-xl font-semibold text-center mt-4 group">
                                    <span
                                        className="cursor-pointer border-b border-dotted border-gray-500"
                                        onMouseEnter={() => setShowNameDisclaimer(true)}
                                        onMouseLeave={() => setShowNameDisclaimer(false)}
                                        onClick={() => setShowNameDisclaimer(!showNameDisclaimer)}
                                    >
                                        MaiLab<sup>*</sup>
                                    </span>

                                    {/* Name Disclaimer Popup */}
                                    {showNameDisclaimer && (
                                        <div
                                            className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-72 bg-white p-3 rounded shadow-lg text-sm text-gray-700 border border-gray-300">
                                            <p><strong>Disclaimer:</strong> This endorsement is fictional and created
                                                solely for educational purposes as part of a school project. MaiLab has
                                                not made these statements nor endorsed this product.</p>
                                            <div
                                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-white border-r border-b border-gray-300"></div>
                                        </div>
                                    )}
                                </h3>
                                <p className="text-gray-600 text-center">Science Communicator & Sleep Advocate</p>
                            </div>
                        </div>

                        <div className="md:w-2/3">
                            <blockquote className="text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4 py-2">
                                "The science is clear: you learn only when you sleep. The Noctura Pillow is the perfect
                                tool to optimize your sleep quality, which directly impacts your cognitive performance.
                                As someone dedicated to both science and education, I cannot recommend this product
                                enough."
                            </blockquote>

                            <p className="text-gray-700 mt-6">
                                MaiLab is known for her science-based approach to education and learning. As a
                                passionate advocate for proper sleep hygiene, she explains that quality sleep is not
                                just beneficial but essential for memory consolidation, problem-solving abilities, and
                                creative thinking.
                            </p>

                            <p className="text-gray-700 mt-4 font-semibold">
                                "Studies consistently show that sleep is when our brains process information from the
                                day and convert short-term memories into long-term knowledge. Without adequate sleep,
                                this process is impaired, limiting our ability to learn effectively."
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 mb-8">
                        <h3 className="text-2xl font-semibold mb-6 text-center">The Sleep-Learning Connection</h3>
                        <p className="text-gray-700 text-center max-w-4xl mx-auto mb-8">
                            Multiple studies have demonstrated the critical relationship between sleep duration and
                            cognitive performance. The data below shows how different aspects of learning are affected
                            by sleep duration:
                        </p>

                        <div className="h-96 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={sleepData}
                                    margin={{top: 20, right: 30, left: 20, bottom: 5}}
                                >
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="name"/>
                                    <YAxis label={{value: 'Performance (%)', angle: -90, position: 'insideLeft'}}/>
                                    <Tooltip/>
                                    <Legend/>
                                    <Bar dataKey="memoryRetention" name="Memory Retention" fill="#8884d8"/>
                                    <Bar dataKey="problemSolving" name="Problem Solving" fill="#82ca9d"/>
                                    <Bar dataKey="creativity" name="Creativity" fill="#ffc658"/>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        <p className="text-gray-700 text-center mt-6">
                            MaiLab recommends the Noctura Pillow because its innovative features create the optimal
                            environment for quality sleep, directly contributing to improved learning outcomes.
                        </p>
                    </div>

                    {/* Footnote */}
                    <div className="mt-12 pt-4 border-t border-gray-300 text-sm text-gray-500">
                        <p><sup>*</sup> This content is fictional and created for educational purposes only. All
                            endorsements, quotes, and claims attributed to MaiLab are fictional and part of a school
                            project simulation.</p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 p-12">
                <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-2/3">
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-700 text-justify">
                            Sleep Better, Make a Difference <br/><br/>

                            At Noctura, we believe that a great night's sleep shouldn't come at the expense of our
                            planet&mdash;or those in need. That's why the Noctura Pillow is designed with eco-friendly
                            materials wherever possible, reducing waste and minimizing our environmental impact. Every
                            pillow is crafted with sustainability in mind, ensuring that your comfort supports a
                            healthier world. <br/><br/>

                            But we're not stopping there. For every 500 pillows sold, we donate one to hospitals,
                            rehabilitation centers, or institutions where quality sleep can make a real difference.
                            Whether it's aiding patient recovery or supporting healthcare workers, your purchase helps
                            bring rest to those who need it most. <br/><br/>

                            By choosing Noctura, you're not just investing in smarter sleep&mdash;you're joining a
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
