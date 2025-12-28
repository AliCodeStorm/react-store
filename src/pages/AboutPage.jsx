import React from 'react'
import AboutHeroStatement from '../components/AboutRealated/AboutHeroStatement'
import CostomerSpport from '../components/AboutRealated/CostomerSpport'
import FaqsQestion from '../components/FAQS/FaqsQestion'
import LogoSections from '../components/LogosSections/LogoSections'
import Testimonials from '../components/FAQS/Testimonials'

function AboutPage() {
    
    return (

        <div>

            <AboutHeroStatement />
            <CostomerSpport />
            <FaqsQestion />
            <LogoSections/>
            <Testimonials/>
        </div>

    )
}

export default AboutPage