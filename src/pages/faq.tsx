import React, {useState} from 'react';
import {ChevronDown, ChevronUp} from 'lucide-react';
import faqItems from '../data/faqItems.tsx';

interface FAQProps {
    navigateHome: () => void;
    navigateContact: () => void;
}

const FAQ: React.FunctionComponent<FAQProps> = (props: FAQProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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
