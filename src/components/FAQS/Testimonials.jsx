import React from 'react'

function Testimonials() {
    return (
        <div>
            <section className="py-16 bg-white text-gray-800">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-teal-50 p-6 rounded-xl shadow">
                            <i className="fas fa-quote-left text-teal-500 text-2xl mb-4"></i>
                            <p className="text-gray-700 mb-4">"Absolutely love the products! Great quality and quick delivery."</p>
                            <div className="font-semibold">— Sarah A., New York</div>
                        </div>
                        <div className="bg-teal-50 p-6 rounded-xl shadow">
                            <i className="fas fa-quote-left text-teal-500 text-2xl mb-4"></i>
                            <p className="text-gray-700 mb-4">"Customer support is fantastic. They helped me resolve an issue within minutes."</p>
                            <div className="font-semibold">— Omar R., Dubai</div>
                        </div>
                        <div className="bg-teal-50 p-6 rounded-xl shadow">
                            <i className="fas fa-quote-left text-teal-500 text-2xl mb-4"></i>
                            <p className="text-gray-700 mb-4">"I've recommended this store to all my friends. Five stars!"</p>
                            <div className="font-semibold">— Priya S., London</div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Testimonials