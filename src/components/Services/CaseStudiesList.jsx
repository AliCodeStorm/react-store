import React from 'react';
import caseStudies from '../../data/caseStudiesData'; 
import { Link } from 'react-router-dom';

const CaseStudiesList = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((study) => (
          <Link to={`/case-studies/${study.slug}`} key={study.id}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                {/* Optional: show logo */}
                <div className="flex items-center space-x-2 mb-2">
                  {study.logo && (
                    <img src={study.logo} alt={`${study.title} Logo`} className="h-6" />
                  )}
                  <h3 className="text-xl font-semibold">{study.title}</h3>
                </div>

                <p className="text-gray-600 text-sm">{study.results}</p>

                {/* ✅ Details preview */}
                {study.details && (
                  <p className="text-gray-500 text-sm mt-2">
                    {study.details[0].length > 150
                      ? study.details[0].slice(0, 150) + '...'
                      : study.details[0]}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesList;
