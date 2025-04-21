import React from 'react'

function CTA() {

    return (

        <div>

            <section className="relative bg-gradient-to-r from-blue-800 to-teal-600 text-white py-20">

                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Services</h1>
                    <p className="text-xl max-w-2xl mx-auto mb-8">
                        Beyond products - we offer exceptional services to enhance your shopping experience
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="/services" className="px-8 py-3 bg-white text-blue-800 rounded-full font-bold hover:bg-gray-100">
                            Explore Services
                        </a>
                        <a href="/contact" className="px-8 py-3 border border-white rounded-full font-bold hover:bg-white hover:text-blue-800">
                            Contact Us
                        </a>
                    </div>
                </div>
                
            </section>

        </div>

    )

}

export default CTA