import React from 'react'

function ContactFrom() {
    return (
        <div>
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">

                        <div className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-xl">
                            <h2 className="text-4xl font-bold mb-8 text-teal-700">Send Us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">

                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                </div>

                                <div>

                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                                        placeholder="How can we help?"
                                    />

                                </div>

                                <div>

                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                                        placeholder="Your message here..."
                                    ></textarea>

                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
                                >
                                    Send Message
                                </button>

                            </form>
                        </div>

                        <div className="lg:w-1/2 space-y-10">
                            <div className="h-96 w-full overflow-hidden rounded-2xl shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2152566274666!2d-73.98784492452539!3d40.74844097138978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1712345678901"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
                                <div className="flex items-start">
                                    <div className="bg-teal-100 p-3 rounded-full mr-4">
                                        <i className="fas fa-map-marker-alt text-teal-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Address</h3>
                                        <p>123 Store Street<br />New York, NY 10001</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-teal-100 p-3 rounded-full mr-4">
                                        <i className="fas fa-phone-alt text-teal-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Phone</h3>
                                        <p>+1 (555) 123-4567</p>
                                        <p className="text-sm text-gray-500">Mon–Fri: 9AM–6PM EST</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-teal-100 p-3 rounded-full mr-4">
                                        <i className="fas fa-envelope text-teal-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                                        <p>support@yourstore.com</p>
                                        <p>sales@yourstore.com</p>
                                    </div>
                                </div>

                                {/* Live Chat */}
                                <div className="flex items-start">
                                    <div className="bg-teal-100 p-3 rounded-full mr-4">
                                        <i className="fas fa-headset text-teal-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Live Chat</h3>
                                        <p>Available 24/7</p>
                                        <a href="#chat" className="text-teal-600 hover:underline text-sm">Start Chat</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ContactFrom