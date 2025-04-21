import React from 'react';

function SidebarHorizontal() {
    
    return (

        <div className="flex justify-between items-center p-4 bg-white shadow-sm mb-6 rounded-xl">

            <span className="text-sm text-gray-600">Sort By:</span>

            <select className="px-3 py-2 border rounded-lg text-sm">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
            </select>

        </div>

    );

}

export default SidebarHorizontal;
