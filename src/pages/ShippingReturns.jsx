import React from 'react';

export default function ShippingReturns() {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Shipping & Returns</h1>

            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Policy</h2>
                <p className="text-gray-600">
                    We strive to offer a reliable and fast shipping experience. Below are the details of our shipping policy:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">Shipping Methods</h3>
                <p className="text-gray-600">
                    We provide various shipping options to accommodate your needs. You can choose from the following:
                </p>
                <ul className="list-disc ml-6 text-gray-600">
                    <li><strong>Standard Shipping</strong>: Delivery within 5-7 business days. Free on orders over $50.</li>
                    <li><strong>Expedited Shipping</strong>: Delivery within 2-3 business days. Available for an additional fee.</li>
                    <li><strong>Overnight Shipping</strong>: Delivery the next business day. Available for an additional fee.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">Shipping Charges</h3>
                <p className="text-gray-600">
                    Shipping charges are calculated at checkout based on your location and the shipping method selected.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">Order Processing Time</h3>
                <p className="text-gray-600">
                    Orders are processed within 1-2 business days after payment is confirmed. Orders placed on weekends or holidays will be processed the next business day.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">International Shipping</h3>
                <p className="text-gray-600">
                    We offer international shipping to select countries. Please be aware that customs duties, taxes, and import fees may apply depending on the destination country.
                </p>

                <div className="mt-6">
                    <img src="/images/shipping-carrier.png" alt="Shipping Carrier Logos" className="w-full h-auto" />
                </div>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Return & Exchange Policy</h2>
                <p className="text-gray-600">
                    We want you to be completely satisfied with your purchase. If you're not satisfied, you can return or exchange the items according to the following terms:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">Return Eligibility</h3>
                <p className="text-gray-600">
                    To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">Time Frame for Returns</h3>
                <p className="text-gray-600">
                    You may return items within 30 days of receiving them. After 30 days, we can’t offer a refund or exchange.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">Return Process</h3>
                <p className="text-gray-600">
                    To initiate a return, please contact our customer service team at <a href="mailto:support@company.com" className="text-blue-600">support@company.com</a> with your order number and the reason for the return. Once approved, you will receive instructions on how to return your items.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">Exchanges</h3>
                <p className="text-gray-600">
                    If you would like to exchange your product for a different size or color, you can do so within 30 days of receiving your order. Please follow the same steps for initiating a return, but request an exchange instead.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">Non-Returnable Items</h3>
                <p className="text-gray-600">
                    Some items are non-returnable, including:
                </p>
                <ul className="list-disc ml-6 text-gray-600">
                    <li>Gift cards</li>
                    <li>Downloadable software products</li>
                    <li>Some health and personal care items</li>
                </ul>

                <div className="mt-6">
                    <img src="/images/return-policy.png" alt="Return Policy Image" className="w-full h-auto" />
                </div>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Policy</h2>
                <p className="text-gray-600">
                    Refunds are processed to the original payment method once the returned items have been received and inspected. Please allow up to 7 business days for the refund to be processed. Refunds may take longer if there are any issues with the return.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">Shipping Charges for Returns</h3>
                <p className="text-gray-600">
                    You will be responsible for paying your own shipping costs for returning your item, unless the return is due to an error on our part (e.g., damaged or incorrect item). If you receive a refund, the cost of return shipping will be deducted from your refund.
                </p>

                <div className="mt-6">
                    <img src="/images/refund-policy.png" alt="Refund Policy Image" className="w-full h-auto" />
                </div>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Service</h2>
                <p className="text-gray-600">
                    Our customer service team is here to assist you with any questions or concerns regarding shipping, returns, or exchanges. Feel free to reach out to us:
                </p>
                <p className="text-gray-600 mt-2">
                    Email: <a href="mailto:support@company.com" className="text-blue-600">support@company.com</a>
                </p>
                <p className="text-gray-600 mt-2">
                    Phone: (123) 456-7890
                </p>
                <p className="text-gray-600 mt-2">
                    We are available Monday to Friday, 9:00 AM to 5:00 PM EST.
                </p>
            </section>
        </div>
    );
}
