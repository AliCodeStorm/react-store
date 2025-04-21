import React from 'react'

function SidebarVertical({ filterState, handleFilterChange }) {

    return (

        <div className="bg-white p-4 rounded-lg shadow-sm w-full lg:w-72">
            <h2 className="text-xl font-semibold mb-4">Filter</h2>

            <div className="mb-4">

                <label className="block text-sm font-medium text-gray-600">Category</label>

                <select
                    name="category"
                    value={filterState.category}
                    onChange={handleFilterChange}
                    className="w-full mt-2 p-2 border rounded-md"
                >
                    <option value="">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Home">Home</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Sports">Sports</option>
                    <option value="Toys">Toys</option>
                </select>

            </div>
            
            <div className="mb-4">

                <label className="block text-sm font-medium text-gray-600">Price Range</label>

                <select
                    name="priceRange"
                    value={filterState.priceRange.join(',')} 
                    onChange={handleFilterChange}
                    className="w-full mt-2 p-2 border rounded-md"
                >
                    <option value="0,500">All Prices</option>
                    <option value="0,50">Under $50</option>
                    <option value="50,100">$50 to $100</option>
                    <option value="100,200">$100 to $200</option>
                    <option value="200,500">$200 to $500</option>
                    <option value="500,9999">Above $500</option>

                </select>

            </div>

        </div>

    );
    
}

export default SidebarVertical;
