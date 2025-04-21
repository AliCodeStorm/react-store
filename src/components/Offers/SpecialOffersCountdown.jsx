import React, { useEffect, useState } from 'react';
import { useCart } from "../../context/CartContext";
import flashSaleProducts from '../../data/FlashSaleProducts';

function SpecialOffersCountdown() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 12,
        minutes: 30,
        seconds: 45,
    });

    const { addToCart } = useCart();

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                let { hours, minutes, seconds } = prevTime;

                if (seconds > 0) {
                    seconds--;
                } else {
                    if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                    } else {
                        if (hours > 0) {
                            hours--;
                            minutes = 59;
                            seconds = 59;
                        }
                    }
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <section className="bg-gray-100 text-black py-8">
                <div className="container mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-4 uppercase">FLASH SALE</h3>

                    <div className="flex justify-center gap-6 mb-6">
                        <div className="bg-black/20 px-6 py-4 rounded-lg shadow-lg">
                            <div className="text-3xl font-mono font-extrabold">{timeLeft.hours}</div>
                            <div className="text-xs">HOURS</div>
                        </div>
                        <div className="bg-black/20 px-6 py-4 rounded-lg shadow-lg">
                            <div className="text-3xl font-mono font-extrabold">{timeLeft.minutes}</div>
                            <div className="text-xs">MINUTES</div>
                        </div>
                        <div className="bg-black/20 px-6 py-4 rounded-lg shadow-lg">
                            <div className="text-3xl font-mono font-extrabold">{timeLeft.seconds}</div>
                            <div className="text-xs">SECONDS</div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {flashSaleProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-lg">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                <div className="p-4">
                                    <h4 className="text-lg font-semibold">{product.name}</h4>
                                    <p className="text-sm text-gray-700">{product.price}</p>

                                    <button
                                        onClick={() => addToCart(product)}
                                        className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-700 hover:text-white transition">
                        <a href="/products">Shop Now</a>
                    </button>
                </div>
            </section>
        </div>
    );
}

export default SpecialOffersCountdown;
