import React from 'react'

function AboutHeroStatement() {
    return (
        <div>
            <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
                    <p className="text-xl max-w-3xl mx-auto mb-10">
                        Founded in 2020, we began as a passionate team focused on delivering high-quality products to your doorstep.
                        Today, we proudly serve thousands of customers around the globe with the same dedication and care.
                    </p>

                    <div className="flex justify-center mb-12">
                        <img
                            src="/mission.jpg"
                            alt="Our journey"
                            className="w-full max-w-md rounded-xl shadow-lg"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">2020</h3>
                            <p>Founded with a mission to simplify quality shopping for everyone.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">2022</h3>
                            <p>Expanded globally and reached 10,000+ happy customers.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">2025</h3>
                            <p>Launched our eco-friendly product line and grew our team worldwide.</p>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Join us on our journey</h2>
                        <p className="mb-6">Be part of something meaningful. Explore our products and mission today.</p>
                        <a
                            href="/products"
                            className="inline-block px-6 py-3 bg-teal-600 text-white rounded-full text-lg font-medium hover:bg-teal-700 transition"
                        >
                            Explore Products
                        </a>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AboutHeroStatement