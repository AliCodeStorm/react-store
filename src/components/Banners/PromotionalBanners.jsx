import React from 'react'

function PromotionalBanners() {
    
    return (

        <div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl p-8 flex flex-col items-center justify-between shadow-lg hover:shadow-xl transition-all">
                        <div className="w-full">
                            <h3 className="text-3xl font-extrabold leading-tight mb-4">Summer Sale</h3>
                            <p className="text-lg mb-6">Up to 50% off on select items!</p>
                            <button className="bg-black text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition">
                                Shop Now
                            </button>
                        </div>
                        <div className="w-full mt-6">
                            <img src="/image1.jpg" alt="Summer Sale" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl p-8 flex flex-col items-center justify-between shadow-lg hover:shadow-xl transition-all">
                        <div className="w-full">
                            <h3 className="text-3xl font-extrabold leading-tight mb-4">Winter Collection</h3>
                            <p className="text-lg mb-6">Cozy and stylish items for the season!</p>
                            <button className="bg-black text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition">
                                Explore Now
                            </button>
                        </div>
                        <div className="w-full mt-6">
                            <img src="/image2.jpg" alt="Winter Collection" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-red-400 to-red-600 text-white rounded-xl p-8 flex flex-col items-center justify-between shadow-lg hover:shadow-xl transition-all">
                        <div className="w-full">
                            <h3 className="text-3xl font-extrabold leading-tight mb-4">Black Friday Deals</h3>
                            <p className="text-lg mb-6">Massive discounts across all categories!</p>
                            <button className="bg-black text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition">
                                Grab Now
                            </button>
                        </div>
                        <div className="w-full mt-6">
                            <img src="/image3.jpg" alt="Black Friday Deals" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-xl p-8 flex flex-col items-center justify-between shadow-lg hover:shadow-xl transition-all">
                        <div className="w-full">
                            <h3 className="text-3xl font-extrabold leading-tight mb-4">New Year Sale</h3>
                            <p className="text-lg mb-6">Start the year with amazing discounts!</p>
                            <button className="bg-black text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition">
                                Shop New Year Deals
                            </button>
                        </div>
                        <div className="w-full mt-6">
                            <img src="/image4.jpg" alt="New Year Sale" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )

}

export default PromotionalBanners
