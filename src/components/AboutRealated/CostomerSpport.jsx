import React from 'react'

function CostomerSpport() {

    return (

        <div>
            
            <section className="py-16 bg-teal-600 text-white">

                <div className="container mx-auto px-4">

                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="p-4 hover:scale-105 transition-transform duration-300">
                            <i className="fas fa-users text-5xl mb-3"></i>
                            <div className="text-4xl font-bold mb-1 mt-2">10K+</div>
                            <div className="text-lg font-medium mb-1">Happy Customers</div>
                            <p className="text-sm text-white/80">Trusted by thousands across the globe for our reliable service.</p>
                        </div>
                        
                        <div className="p-4 hover:scale-105 transition-transform duration-300">
                            <i className="fas fa-box-open text-5xl mb-3"></i>
                            <div className="text-4xl font-bold mb-1 mt-2">500+</div>
                            <div className="text-lg font-medium mb-1">Products Available</div>
                            <p className="text-sm text-white/80">A wide range of carefully curated products to choose from.</p>
                        </div>

                        <div className="p-4 hover:scale-105 transition-transform duration-300">
                            <i className="fas fa-headset text-5xl mb-3"></i>
                            <div className="text-4xl font-bold mb-1 mt-2">24/7</div>
                            <div className="text-lg font-medium mb-1">Customer Support</div>
                            <p className="text-sm text-white/80">We’re here anytime you need us—day or night.</p>
                        </div>

                        <div className="p-4 hover:scale-105 transition-transform duration-300">
                            <i className="fas fa-check-circle text-5xl mb-3"></i>
                            <div className="text-4xl font-bold mb-1 mt-2">100%</div>
                            <div className="text-lg font-medium mb-1">Satisfaction Guarantee</div>
                            <p className="text-sm text-white/80">We stand behind our products and your experience.</p>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
    
}

export default CostomerSpport