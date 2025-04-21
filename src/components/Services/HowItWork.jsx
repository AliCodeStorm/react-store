import React from 'react'
import processSteps from '../../data/HowItWork'

function HowItWork() {
    return (
        <div>
            <section className="py-16 container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
                <div className="relative">
                    <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

                    {processSteps.map((step, i) => (
                        <div
                            key={i}
                            className={`mb-12 flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                        >
                            <div className="md:w-5/12 mb-6 md:mb-0 px-4">
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-blue-100 text-blue-800 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                                            {i + 1}
                                        </div>
                                        <h3 className="text-xl font-bold">{step.title}</h3>
                                    </div>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>
                            <div className="md:w-2/12 flex justify-center">
                                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white shadow-lg">
                                    <i className={step.icon}></i>
                                </div>
                            </div>
                            <div className="md:w-5/12 px-4">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="rounded-lg shadow-md w-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default HowItWork