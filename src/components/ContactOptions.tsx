import React from "react";

interface ContactOptionsProps {
    showSocialMedia: boolean;
    showHeader: boolean;
}

const ContactOptions: React.FunctionComponent<ContactOptionsProps> = (props: ContactOptionsProps) => {
    return <div>
        {props.showHeader && <h3 className="text-lg font-bold mb-4">Contact Us</h3>}
        <p><a className="hover:text-indigo-300" href="mailto:support@noctura-pillow.store">Email:
            support@noctura-pillow.store</a></p>
        <p><a className="hover:text-indigo-300" href="tel:+15550173">Phone (North America): +1 (555)
            0173</a></p>
        <p><a className="hover:text-indigo-300" href="tel:+4952116391643">Phone (Europe): +49 521
            16391643</a></p>
        {props.showSocialMedia &&
            <div className="flex space-x-4 mt-4">
                <a className="hover:text-indigo-300" href="https://www.instagram.com/noctura.pillow/">Instagram</a>
                <a className="hover:text-indigo-300" href="https://www.tiktok.com/@noctura.pillow">TikTok</a>
            </div>
        }
    </div>;
}

export default ContactOptions;
