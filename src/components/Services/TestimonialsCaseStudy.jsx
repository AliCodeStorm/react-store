import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import caseStudies from '../../data/caseStudiesData';
import testimonials from '../../data/testimonialsData';

function TestimonialsCaseStudy() {
    return (
        <div>
            <section className="py-16 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>

                    {/* Testimonials Section */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {testimonials.map(testimonial => (
                            <div key={testimonial.id} className="bg-gray-800 p-8 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h4 className="font-bold">{testimonial.name}</h4>
                                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                                    </div>
                                </div>
                                <p className="mb-4 italic">"{testimonial.quote}"</p>
                                <div className="flex text-yellow-400">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <i key={i} className="fas fa-star"></i>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Case Studies Section */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {caseStudies.map(caseStudy => (
                            <Link
                                key={caseStudy.id}
                                to={`/case-studies/${caseStudy.slug}`}  // Use slug in the route
                                className="group"
                            >
                                <div className="relative overflow-hidden rounded-lg h-64">
                                    <img
                                        src={caseStudy.image}
                                        alt={caseStudy.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition">
                                                {caseStudy.title}
                                            </h3>
                                            <p className="text-gray-300">{caseStudy.results}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TestimonialsCaseStudy;
