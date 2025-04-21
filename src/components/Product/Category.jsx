import React, { useState } from 'react';
import categories from '../../data/Categories';
import CategoryGrid from '../Cards/CategoriesGrid';

function Category() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const handleFilterChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(6);
  };

  const filteredCategories = activeCategory === "all"
    ? categories
    : categories.filter(category => category.slug === activeCategory);

  const categoriesToShow = filteredCategories.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => prev + 5);
  };

  return (
    <section className="py-12 bg-white">

      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Shop by Category</h2>

        <div className="flex flex-wrap justify-center gap-3 mb-8">

          {["all", "electronics", "mens-fashion", "womens-fashion", "home-living", "beauty-health"].map(cat => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition
                ${activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {cat === 'all' ? 'All Categories' : cat.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </button>
          ))}

        </div>

        <CategoryGrid categories={categoriesToShow} />

        {filteredCategories.length > visibleCount && (

          <div className="text-center mt-8">

            <button
              onClick={loadMore}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Load More
            </button>

          </div>
        )}

      </div>

    </section>
  );
}

export default Category;
