import React from 'react'

function LogoSections() {

    return (

        <div>

            <section className="py-12 bg-gray-50 text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-6">As seen on</h3>
                <div className="flex flex-wrap justify-center gap-10 items-center">
                    <img src="/TechCrunch.jpg" alt="TechCrunch" className="h-10 grayscale opacity-60 hover:opacity-100 transition" />
                    <img src="/forbes.png" alt="Forbes" className="h-10 grayscale opacity-60 hover:opacity-100 transition" />
                    <img src="/nyt.png" alt="NY Times" className="h-10 grayscale opacity-60 hover:opacity-100 transition" />
                    <img src="/bbc.png" alt="BBC" className="h-10 grayscale opacity-60 hover:opacity-100 transition" />
                </div>
            </section>

        </div >

    )
    
}

export default LogoSections