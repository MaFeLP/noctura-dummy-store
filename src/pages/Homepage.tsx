import {ChevronDown} from 'lucide-react';

export default function HomePage() {
    const scrollToContent = () => {
        const contentSection = document.getElementById('content-section');
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

            <div id="content-section" className="bg-white p-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Experience the Difference</h2>
                    <p className="text-lg text-gray-700">
                        Welcome to the future of rest and relaxation. The Noctura Pillow combines innovative design with
                        premium materials to provide you with the most comfortable sleep experience.
                    </p>
                </div>
            </div>

            <div className="bg-gray-100 p-12">
                <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-2/3">
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-700 text-justify">
                            Sleep Better, Make a Difference <br/><br/>

                            At Noctura, we believe that a great night’s sleep shouldn’t come at the expense of our
                            planet—or those in need. That’s why the Noctura Pillow is designed with eco-friendly
                            materials wherever possible, reducing waste and minimizing our environmental impact. Every
                            pillow is crafted with sustainability in mind, ensuring that your comfort supports a
                            healthier world. <br/><br/>

                            But we’re not stopping there. For every 500 pillows sold, we donate one to hospitals,
                            rehabilitation centers, or institutions where quality sleep can make a real difference.
                            Whether it’s aiding patient recovery or supporting healthcare workers, your purchase helps
                            bring rest to those who need it most. <br/><br/>

                            By choosing Noctura, you’re not just investing in smarter sleep—you’re joining a movement
                            for a greener, more compassionate future. Rest easy, knowing your pillow does more than
                            support your head—it supports the world.
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
            </div>

            {/*
              - Mission
              - Features
              - User Reviews
              - Cross Section
             */}
        </div>
    );
}