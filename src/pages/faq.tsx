import React, {useState} from 'react';
import {ChevronDown, ChevronUp} from 'lucide-react';

interface FAQProps {
    navigateHome: () => void;
    navigateContact: () => void;
}

interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

const FAQ: React.FunctionComponent<FAQProps> = (props: FAQProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems: FAQItem[] = [
        {
            question: "What makes the Noctura Pillow different from other pillows?",
            answer: (
                <>
                    <p>
                        The Noctura Pillow combines cutting-edge technology with comfort in ways traditional pillows
                        simply can't match. Our pillow features:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Built-in speakers for music, white noise, or guided meditations</li>
                        <li>Temperature control with both heating and cooling options</li>
                        <li>Smart home integration with Siri and HomeKit support</li>
                        <li>Ergonomic design that properly supports your neck and spine</li>
                        <li>Customizable firmness options to match your sleeping preferences</li>
                    </ul>
                </>
            )
        },
        {
            question: "How do I clean my Noctura Pillow?",
            answer: (
                <p>
                    The Noctura Pillow features a removable, machine-washable cover that can be cleaned on a gentle
                    cycle with cold water. The interior technology core should never be submerged in water - simply spot
                    clean with a damp cloth as needed. We recommend washing the cover every 1-2 months for optimal
                    hygiene.
                </p>
            )
        },
        {
            question: "What is the battery life of the Noctura Pillow?",
            answer: (
                <p>
                    On a full charge, the Noctura Pillow's battery lasts approximately 8-10 hours when using audio
                    features, and 6-8 hours when using temperature control features. The pillow can be used while
                    charging, and a full charge takes approximately 2 hours. The battery is designed to maintain
                    performance for at least 1,000 charge cycles.
                </p>
            )
        },
        {
            question: "Is the Noctura Pillow compatible with all sleeping positions?",
            answer: (
                <p>
                    Yes! The Noctura Pillow is designed to accommodate all sleeping styles - back, side, and stomach
                    sleepers. The customizable filling options (comfy, medium, or hard) allow you to select the perfect
                    support level for your preferred sleeping position. For side sleepers, we typically recommend the
                    medium or hard filling for proper neck alignment.
                </p>
            )
        },
        {
            question: "What materials are used in the Noctura Pillow?",
            answer: (
                <>
                    <p>
                        We use only premium, hypoallergenic materials in our pillows:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Outer cover: 100% cotton (standard), silk, or bamboo depending on your selection</li>
                        <li>Inner lining: Moisture-wicking, breathable fabric that houses the technology components</li>
                        <li>Filling: Hypoallergenic memory foam or down alternative that's adjustable to your
                            preference
                        </li>
                        <li>Electronic components: Enclosed in BPA-free, medical-grade silicone for safety</li>
                    </ul>
                </>
            )
        },
        {
            question: "What is your return policy?",
            answer: (
                <p>
                    We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your Noctura
                    Pillow within 30 days of purchase, you can return it for a full refund. We also provide a 1-year
                    warranty against manufacturing defects. Please note that customized pillow options (like
                    monogramming) may affect return eligibility.
                </p>
            )
        },
        {
            question: "How do I connect my pillow to my smart home system?",
            answer: (
                <>
                    <p>
                        Connecting your Noctura Pillow to your smart home is simple:
                    </p>
                    <ol className="list-decimal pl-5 mt-2 space-y-1">
                        <li>Download the Noctura Sleep app from the App Store or Google Play</li>
                        <li>Turn on your pillow and enable Bluetooth on your phone</li>
                        <li>Follow the in-app instructions to pair your pillow</li>
                        <li>Once paired, use the app to connect to your smart home system (HomeKit, etc.)</li>
                        <li>You can now control your pillow using voice commands through Siri</li>
                    </ol>
                </>
            )
        },
        {
            question: "Can multiple people use the same Noctura Pillow?",
            answer: (
                <p>
                    While the Noctura Pillow can be used by different people, we recommend each person have their own
                    pillow for optimal comfort and hygiene. The app allows you to create different user profiles if you
                    do share a pillow, which will save individual preferences for temperature, sound settings, and
                    firmness levels.
                </p>
            )
        },
        {
            question: "How does the Noctura Pillow impact the environment?",
            answer: (
                <p>
                    Environmental responsibility is a core value at Noctura. Our pillows use eco-friendly materials
                    whenever possible, and our packaging is 100% recyclable. Our manufacturing facilities use renewable
                    energy sources, and we offset our carbon footprint through verified environmental projects.
                    Additionally, for every 500 pillows sold, we donate one to hospitals or healthcare facilities in
                    need.
                </p>
            )
        },
        {
            question: "How do I update the firmware on my Noctura Pillow?",
            answer: (
                <p>
                    Firmware updates are pushed automatically through the Noctura Sleep app. When a new update is
                    available, you'll receive a notification. Simply ensure your pillow is charged at least 50%, connect
                    it to the app, and follow the prompts to install the update. Updates typically take 5-10 minutes and
                    add new features or improve existing functionality.
                </p>
            )
        }
    ];

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h1>
            <p className="mb-8 text-gray-700">
                Find answers to the most common questions about the Noctura Pillow. If you can't find what you're
                looking for, please don't hesitate to
                <a href="#" onClick={() => props.navigateContact()}
                   className="text-noctura-blue hover:text-indigo-300"> contact our support team</a>.
            </p>

            <div className="space-y-4">
                {faqItems.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                            className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors duration-200"
                            onClick={() => toggleQuestion(index)}
                            aria-expanded={openIndex === index}
                        >
                            <span className="font-medium text-gray-800">{item.question}</span>
                            {openIndex === index ? (
                                <ChevronUp className="text-gray-500" size={20}/>
                            ) : (
                                <ChevronDown className="text-gray-500" size={20}/>
                            )}
                        </button>

                        {openIndex === index && (
                            <div className="px-6 py-4 bg-white">
                                <div className="text-gray-700">
                                    {item.answer}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
