import {useState} from "react";

interface CardState {
    number: string,
    expiry: string,
    cvv: string,
}

const PaymentType = (props: { method: string }) => {
    const [iban, setIban] = useState<string>();
    const [card, setCard] = useState<CardState>({number: "", expiry: "", cvv: ""});

    const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setCard({
            ...card,
            [name]: value
        });
    }

    switch (props.method) {
        case 'paypaypay':
            // For PayPayPay, show nothing
            return null;

        case 'immediate-insolvency':
            // For Immediate Insolvency, show IBAN field
            return (
                <div className="mt-4">
                    <label className="block text-gray-700 mb-2" htmlFor="iban">IBAN</label>
                    <input
                        type="text"
                        id="iban"
                        name="iban"
                        value={iban}
                        onChange={(e) => setIban(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required={true}
                        placeholder="Enter your IBAN"
                    />
                </div>
            );

        case 'disastercard':
            // For DisasterCard, show card number, expiry date, and CVV fields
            return (
                <div className="mt-4 space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="cardNumber">Card Number</label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={card.number}
                            onChange={handleCardChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required={true}
                            placeholder="XXXX XXXX XXXX XXXX"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="expiryDate">Expiry Date</label>
                            <input
                                type="text"
                                id="expiryDate"
                                name="expiryDate"
                                value={card.expiry}
                                onChange={handleCardChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required={true}
                                placeholder="MM/YY"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="cvv">CVV</label>
                            <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={card.cvv}
                                onChange={handleCardChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required={true}
                                placeholder="XXX"
                            />
                        </div>
                    </div>
                </div>
            );

        default:
            return null;
    }
};

export default PaymentType;
