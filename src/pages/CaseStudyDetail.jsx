// src/pages/CaseStudyPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import caseStudies from '../data/caseStudiesData';

const CaseStudyPage = () => {
  const { slug } = useParams();  // Get the slug from the URL params
  const caseStudy = caseStudies.find(cs => cs.slug === slug);  // Find the case study by slug

  if (!caseStudy) {
    return <div>Case Study Not Found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{caseStudy.title}</h1>
      {/* Display logo */}
      <img src={caseStudy.logo} alt={`${caseStudy.title} Logo`} className="h-12 my-4" />
      
      {/* Main Image */}
      <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-80 object-cover mt-4" />
      
      {/* Description */}
      <p className="mt-4 text-lg">{caseStudy.description}</p>

      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Detailed Breakdown</h3>
        <p className="text-gray-700 whitespace-pre-line">{caseStudy.details}</p>
      </div>
      
      {/* Results */}
      <h3 className="mt-6 text-xl font-semibold">Key Results:</h3>
      <p>{caseStudy.results}</p>

      {/* Additional Images */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudy.additional_images.map((image, index) => (
          <img key={index} src={image} alt={`Additional image ${index + 1}`} className="w-full h-64 object-cover" />
        ))}
      </div>
      
      {/* Optional FontAwesome icons */}
      <div className="mt-8 flex space-x-4">
        <i className="fas fa-check-circle text-green-500"></i>
        <i className="fas fa-cogs text-blue-500"></i>
        <i className="fas fa-users text-yellow-500"></i>
      </div>
    </div>
  );
};

export default CaseStudyPage;
