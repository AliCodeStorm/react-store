import React from 'react'

function CallKnow() {

    return (

        <div>

            <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500 text-white">

                <div className="container mx-auto px-4 text-center">

                    <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Experience?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Our team is standing by to help you get the most from our services
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">

                        <a
                            href="/contact"
                            className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100"
                        >
                            Contact Our Team
                        </a>

                        <a
                            href="tel:+15551234567"
                            className="px-8 py-3 border border-white rounded-full font-bold hover:bg-white hover:text-blue-600"
                        >
                            <i className="fas fa-phone mr-2"></i> Call Now
                        </a>

                    </div>

                </div>

            </section>
        </div>

    )
    
}

export default CallKnow