import React from 'react'

function NewsletterSignup() {
    return (

        <div>

            <section className="py-16 bg-gray-900 text-white">
                
                <div className="container mx-auto text-center max-w-2xl">
                    <h2 className="text-3xl font-bold mb-4">Get 10% Off Your First Order</h2>
                    <p className="mb-6 text-lg">Subscribe to our newsletter for exclusive deals and updates.</p>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-grow px-4 py-3 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <button className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded font-bold text-white">
                            Subscribe
                        </button>
                    </div>
                </div>

            </section>

        </div>

    )

}

export default NewsletterSignup