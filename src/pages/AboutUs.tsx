import React, {useState} from 'react';
import ContactOptions from "../components/ContactOptions.tsx";
import {toast} from "react-toastify";

interface AboutUsProps {
    navigateHome: () => void;
}

const ContactForm: React.FunctionComponent<AboutUsProps> = (props: AboutUsProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        toast.success(
            <div>
                <p>Your message has not been sent! We will reply to you :P</p>
            </div>,
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }
        );

        props.navigateHome();
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">About Us</h1>
            <p className="mb-6 text-gray-700">
                At Noctura Pillow, we are dedicated to providing the best sleep experience with our innovative pillow
                designs. Our mission is to ensure you wake up refreshed and ready to take on the day.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-noctura-blue text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Send Message
                </button>
            </form>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Options</h2>
                <ContactOptions showSocialMedia={false} showHeader={false}/>
            </div>
        </div>
    );
};

export default ContactForm;