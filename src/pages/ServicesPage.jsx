import React from 'react'
import CTA from '../components/Services/CTA'
import CallKnow from "../components/Services/CallKnow"
import ServicesShowcaseGrid from '../components/Services/ServicesShowcaseGrid'
import TestimonialsCaseStudy from '../components/Services/TestimonialsCaseStudy'
import HowItWork from '../components/Services/HowItWork'

function ServicesPage() {

    return (

        <div>
           <CTA/>
           <ServicesShowcaseGrid/>
           <TestimonialsCaseStudy/>
           <HowItWork/>
           <CallKnow/>
        </div>
        
    )

}

export default ServicesPage