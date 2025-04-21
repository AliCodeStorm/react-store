import React from 'react';

export default function TermsAndConditions() {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Terms and Conditions</h1>

            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
                <p className="text-gray-600">
                    Welcome to [Your Website Name]! By accessing or using our website (the "Service"), you agree to comply with and be bound by these Terms and Conditions. These terms apply to all visitors, users, and others who access or use the Service. Please read them carefully before using the Service.
                </p>
                <p className="text-gray-600 mt-2">
                    If you do not agree with any part of these terms, please do not use our website.
                </p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Use of the Website</h2>
                <p className="text-gray-600">
                    By using our website, you agree to use the site in accordance with these Terms. You will not use the website for any unlawful purposes, including but not limited to:
                </p>
                <ul className="list-disc ml-6 text-gray-600">
                    <li>Engaging in any activity that violates local, state, or national laws</li>
                    <li>Attempting to breach the security or integrity of the website</li>
                    <li>Uploading or transmitting harmful or unlawful content</li>
                </ul>
                <p className="text-gray-600 mt-4">
                    We reserve the right to suspend or terminate your access to the website if we believe that you have violated these terms or engaged in unlawful conduct.
                </p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Intellectual Property</h2>
                <p className="text-gray-600">
                    All content on this website, including but not limited to text, graphics, logos, images, videos, and software, is the property of [Your Website Name] or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-600 mt-4">
                    You are granted a limited, non-exclusive, non-transferable license to access and use the website for personal and non-commercial purposes. You may not reproduce, distribute, or otherwise exploit any of the content for commercial purposes without express written permission from us.
                </p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Account Registration</h2>
                <p className="text-gray-600">
                    In order to access certain features of the website, you may be required to create an account. You agree to provide accurate and complete information when registering and to update such information as necessary.
                </p>
                <p className="text-gray-600 mt-4">
                    You are responsible for maintaining the confidentiality of your account login credentials and for all activities that occur under your account. If you suspect any unauthorized use of your account, you agree to notify us immediately.
                </p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Conduct</h2>
                <p className="text-gray-600">
                    You agree that you will not:
                </p>
                <ul className="list-disc ml-6 text-gray-600">
                    <li>Engage in any abusive or harassing behavior toward other users</li>
                    <li>Attempt to gain unauthorized access to the website or its related systems</li>
                    <li>Post or share any content that is illegal, offensive, or harmful to others</li>
                    <li>Use the website for any fraudulent activities or to transmit spam</li>
                </ul>
                <p className="text-gray-600 mt-4">
                    Failure to adhere to these conduct guidelines may result in the suspension or termination of your access to the website.
                </p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
                <p className="text-gray-600">
                    To the fullest extent permitted by applicable law, [Your Website Name] and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website.
                </p>
                <p className="text-gray-600 mt-4">
                    In no event shall our total liability exceed the amount paid by you, if any, for accessing the website.
                </p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Privacy Policy</h2>
                <p className="text-gray-600">
                    Our Privacy Policy explains how we collect, use, and protect your personal information. By using the website, you consent to the collection and use of your information as outlined in our Privacy Policy.
                </p>
                <p className="text-gray-600 mt-4">
                    You can review our Privacy Policy <a href="/privacy" className="text-blue-600">here</a>.
                </p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Modifications</h2>
                <p className="text-gray-600">
                    We reserve the right to modify, update, or remove any portion of these Terms and Conditions at any time. Any changes will take effect immediately upon posting to the website. It is your responsibility to review these Terms periodically to stay informed of any changes.
                </p>
                <p className="text-gray-600 mt-4">
                    Continued use of the website after any changes signifies your acceptance of those changes.
                </p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Governing Law</h2>
                <p className="text-gray-600">
                    These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles. Any disputes arising under or in connection with these terms shall be resolved in the courts of [Your Jurisdiction].
                </p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                <p className="text-gray-600">
                    If you have any questions or concerns regarding these Terms and Conditions, please contact us at <a href="mailto:support@company.com" className="text-blue-600">support@company.com</a>.
                </p>
            </section>
        </div>
    );
}
