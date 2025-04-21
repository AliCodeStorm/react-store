import React from 'react'
import ProductCard from './ProductCard'
import products from '../../data/FeatureProducts';

function FeatureProducts() {
    return (

        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Best Sellers</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {products.filter(p => p.isBestSeller).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>

    );
}

export default FeatureProducts
