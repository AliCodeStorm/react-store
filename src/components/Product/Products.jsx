import React from 'react'
import { useState, useEffect } from 'react';
import SidebarHorizontal from '../Sidebars/SidebarHorizontal'
import SidebarVertical from '../Sidebars/SidebarVertical'
import ProductGrid from '../Cards/ProductGrid'
import allProducts from '../../data/Products'

function Products() {

    const [filterState, setFilterState] = useState({
        category: '',
        priceRange: [0, 500],
    });

    const [filteredProducts, setFilteredProducts] = useState(allProducts);

    useEffect(() => {

        const { category, priceRange } = filterState;
        const filtered = allProducts.filter((product) => {
            const matchesCategory = category ? product.category === category : true;
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
            return matchesCategory && matchesPrice;
        });
        setFilteredProducts(filtered);

    }, [filterState]);

    const handleFilterChange = (e) => {

        const { name, value } = e.target;

        if (name === 'category') {
            setFilterState((prev) => ({ ...prev, category: value }));
        } else if (name === 'priceRange') {
            const rangeValue = value.split(',').map((val) => parseInt(val, 10)); // Split and convert to numbers
            setFilterState((prev) => ({ ...prev, priceRange: rangeValue }));
        }

    };

    return (

        <div>
            <section className="py-10 px-4 lg:px-8 bg-gray-50 min-h-screen">
                <div className="flex flex-col lg:flex-row gap-6">
                    <SidebarVertical
                        filterState={filterState}
                        handleFilterChange={handleFilterChange}
                    />
                    <div className="flex-1">
                        <SidebarHorizontal />
                        <ProductGrid products={filteredProducts} />
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Products;