const allProducts = [
    {
        id: 1,
        name: 'Smart Watch',
        category: 'Electronics',
        price: 99.99,
        image: '/react-store/watch.jpg',
        images: [
            '/watch.jpg',
            '/watch-side.jpg',
            '/watch-back.jpg',
        ],
        description: 'Stay connected and on track with this stylish smart watch. Track your steps, heart rate, and notifications on the go. Durable design with a sleek touchscreen display. Long battery life and waterproof. Perfect for fitness and daily use.',
    },
    {
        id: 2,
        name: 'Sneakers',
        category: 'Fashion',
        price: 59.99,
        image: '/react-store/shoes.jpg',
        description: 'Step up your style with these ultra-comfortable sneakers. Designed for everyday wear and athletic performance. Breathable material with cushioned soles. Modern design that suits any outfit. Great for both sports and casual outings.',
    },
    {
        id: 3,
        name: 'Wireless Earbuds',
        category: 'Electronics',
        price: 49.99,
        image: '/react-store/earbuds.jpg',
        description: 'Enjoy crystal-clear sound with these compact wireless earbuds. Perfect for music, calls, and workouts. Comes with a portable charging case. Lightweight and ergonomically designed. Noise reduction ensures a focused listening experience.',
    },
    {
        id: 4,
        name: 'Winter Jacket',
        category: 'Fashion',
        price: 120.99,
        image: '/react-store/jacket.jpg',
        description: 'Stay warm and stylish with this premium winter jacket. Insulated for maximum comfort in cold weather. Designed with durable, wind-resistant fabric. Features multiple pockets and a cozy hood. A must-have for the chilly season.',
    },
    {
        id: 5,
        name: 'Coffee Machine',
        category: 'Home',
        price: 89.99,
        image: '/react-store/coffee-machine.jpg',
        description: 'Brew your perfect cup every morning with this coffee machine. Simple one-touch operation with multiple brew sizes. Sleek, compact design fits any kitchen. Easy to clean and energy-efficient. A coffee lover’s daily companion.',
    },
    {
        id: 6,
        name: 'Smartphone',
        category: 'Electronics',
        price: 799.99,
        image: '/react-store/smartphone.jpg',
        description: 'Experience blazing performance with this modern smartphone. Stunning display, powerful camera, and fast processor. Supports all major apps and games smoothly. Sleek design with long battery life. Your all-in-one digital assistant.',
    },
    {
        id: 7,
        name: 'LED Lamp',
        category: 'Home',
        price: 29.99,
        image: '/react-store/lamp.jpg',
        description: 'Brighten your room with this stylish LED lamp. Energy-saving and long-lasting light source. Adjustable brightness for reading or ambiance. Modern design suits desks, nightstands, or offices. Easy touch control and compact build.',
    },
    {
        id: 8,
        name: 'Jeans',
        category: 'Fashion',
        price: 39.99,
        image: '/react-store/jeans.jpg',
        description: 'Classic jeans with a modern fit for everyday comfort. Made from soft, durable denim that moves with you. Features a timeless look that works for any occasion. Easy to pair with shirts or jackets. Available in multiple sizes and washes.',
    },
    {
        id: 9,
        name: 'Bluetooth Speaker',
        category: 'Electronics',
        price: 69.99,
        image: '/react-store/speaker.jpg',
        description: 'Enjoy your music anywhere with this portable Bluetooth speaker. Delivers rich, clear sound and deep bass. Connects easily to your phone or laptop. Compact and travel-friendly. Ideal for parties, picnics, or indoor relaxation.',
    },
    {
        id: 10,
        name: 'Leather Jacket',
        category: 'Fashion',
        price: 179.99,
        image: '/react-store/leather-jacket.jpg',
        description: 'Add edge to your wardrobe with this premium leather jacket. Crafted from high-quality material for a sleek look. Comfortable inner lining and sturdy zippers. Great for layering and versatile styling. A timeless fashion staple.',
    },

    {
        id: 11,
        name: 'Electric Kettle',
        category: 'Home',
        price: 35.99,
        image: '/react-store/kettle.jpg',
        description: 'Boil water quickly with this modern electric kettle. Features auto shut-off and boil-dry protection. Sleek stainless steel body adds style to your kitchen. Compact, lightweight, and easy to clean. Perfect for tea, coffee, or instant meals.',
    },
    {
        id: 12,
        name: 'Smart TV',
        category: 'Electronics',
        price: 399.99,
        image: '/react-store/smart-tv.jpg',
        description: 'Immerse yourself in entertainment with this Smart TV. Ultra HD display and powerful speakers included. Access apps, streaming, and games in one device. Sleek, frameless design blends into any room. Voice control and smart home ready.',
    },
    {
        id: 13,
        name: 'Sneaker Backpack',
        category: 'Fashion',
        price: 39.99,
        image: '/react-store/backpack.jpg',
        description: 'Carry your gear in style with this sneaker backpack. Designed to hold shoes and essentials neatly. Water-resistant and lightweight material. Multiple compartments for convenience. Perfect for gym, travel, or school use.',
    },
    {
        id: 14,
        name: 'Cordless Vacuum',
        category: 'Home',
        price: 149.99,
        image: '/react-store/vacuum.jpg',
        description: 'Clean with ease using this powerful cordless vacuum. Lightweight design for maneuverability. Long battery life for whole-house cleaning. Works on all surfaces—carpet, tile, or wood. Bagless design makes maintenance simple.',
    },
    {
        id: 15,
        name: 'Smart Home Hub',
        category: 'Electronics',
        price: 129.99,
        image: '/react-store/smart-home-hub.jpg',
        description: 'Control your smart devices from one hub. Compatible with Alexa, Google Assistant, and more. Sleek touchscreen interface with voice command. Automate lights, security, and thermostats. Easy setup and secure connectivity.',
    },
    {
        id: 16,
        name: 'Wool Sweater',
        category: 'Fashion',
        price: 89.99,
        image: '/react-store/sweater.jpg',
        description: 'Stay warm and stylish with this cozy wool sweater. Soft, breathable material for all-day comfort. Classic fit that pairs with jeans or trousers. Available in multiple colors and sizes. Ideal for chilly days or layering.',
    },
    {
        id: 17,
        name: 'Coffee Grinder',
        category: 'Home',
        price: 24.99,
        image: '/react-store/grinder.jpg',
        description: 'Grind fresh beans for the perfect cup every time. Compact and efficient for home use. Adjustable grind settings for different brews. Easy to clean with removable parts. Essential tool for coffee lovers.',
    },
    {
        id: 18,
        name: 'Digital Camera',
        category: 'Electronics',
        price: 499.99,
        image: '/react-store/camera.jpg',
        description: 'Capture life’s moments in stunning detail. High-resolution sensor and fast autofocus. Great for photography and vlogging. Compact design with intuitive controls. Share instantly via built-in Wi-Fi.',
    },
    {
        id: 19,
        name: 'Fashionable Watch',
        category: 'Fashion',
        price: 109.99,
        image: '/react-store/fashion-watch.jpg',
        description: 'Elevate your outfit with this sleek watch. Elegant design with a modern twist. Durable strap and water-resistant build. Ideal for formal or casual wear. A timeless accessory for any wardrobe.',
    },
    {
        id: 20,
        name: 'Air Purifier',
        category: 'Home',
        price: 159.99,
        image: '/react-store/air-purifier.jpg',
        description: 'Breathe easier with this advanced air purifier. Removes dust, pollen, smoke, and odors. Quiet operation for bedrooms or offices. HEPA filtration ensures clean air circulation. A must-have for allergy sufferers.',
    },

    {
        id: 21,
        name: 'Smart LED Bulb',
        category: 'Home',
        price: 19.99,
        image: '/react-store/smart-bulb.jpg',
        description: 'Light up your space with this smart LED bulb. Control brightness and color using an app. Schedule on/off times easily. Works with Alexa and Google Assistant. Energy-efficient and long-lasting.',
    },
    {
        id: 22,
        name: 'Gaming Mouse',
        category: 'Electronics',
        price: 49.99,
        image: '/react-store/gaming-mouse.jpg',
        description: 'Level up your gaming with this precision mouse. Adjustable DPI and RGB lighting. Ergonomic design for long sessions. Customizable buttons for better control. Plug and play with fast response.',
    },
    {
        id: 23,
        name: 'Portable Charger',
        category: 'Electronics',
        price: 29.99,
        image: '/react-store/portable-charger.jpg',
        description: 'Stay powered on the go with this portable charger. High-capacity battery for multiple charges. Dual USB ports for convenience. Compact and travel-friendly. Essential for emergencies and travel.',
    },
    {
        id: 24,
        name: 'T-shirt',
        category: 'Fashion',
        price: 19.99,
        image: '/react-store/tshirt.jpg',
        description: 'Classic cotton T-shirt for everyday wear. Soft, breathable, and comfortable. Slim-fit design with stylish look. Available in multiple colors and sizes. Easy to pair with jeans or shorts.',
    },
    {
        id: 25,
        name: 'Winter Boots',
        category: 'Fashion',
        price: 89.99,
        image: '/react-store/boots.jpg',
        description: 'Stay warm and dry with these winter boots. Insulated lining for cold weather. Waterproof outer shell resists snow. Durable soles for excellent grip. Stylish enough for everyday wear.',
    },
    {
        id: 26,
        name: 'Electric Blanket',
        category: 'Home',
        price: 69.99,
        image: '/react-store/electric-blanket.jpg',
        description: 'Cozy up with this heated electric blanket. Adjustable temperature settings. Soft and comfortable fabric. Built-in auto shut-off for safety. Ideal for winter nights and cozy naps.',
    },
    {
        id: 27,
        name: 'Smart Door Lock',
        category: 'Home',
        price: 199.99,
        image: '/react-store/smart-lock.jpg',
        description: 'Secure your home with this smart door lock. Keyless entry via app or code. Compatible with most smart home systems. Easy installation on standard doors. Enhanced safety with remote access.',
    },
    {
        id: 28,
        name: 'Noise Cancelling Headphones',
        category: 'Electronics',
        price: 129.99,
        image: '/react-store/noise-cancelling-headphones.jpg',
        description: 'Block out distractions with premium ANC. Comfortable for long listening sessions. High-quality sound with deep bass. Bluetooth connectivity and long battery life. Foldable design for travel.',
    },
    {
        id: 29,
        name: 'Gaming Headset',
        category: 'Electronics',
        price: 79.99,
        image: '/react-store/gaming-headset.jpg',
        description: 'Immerse in your games with this headset. Crisp sound and deep bass. Built-in mic with noise cancellation. Comfortable fit with adjustable headband. Compatible with PC, Xbox, and PS.',
    },
    {
        id: 30,
        name: 'Smart Fitness Band',
        category: 'Electronics',
        price: 49.99,
        image: '/react-store/fitness-band.jpg',
        description: 'Track your health and fitness goals. Heart rate, steps, sleep monitoring. Lightweight and water-resistant. Syncs with smartphone apps. Long-lasting battery and quick charging.',
    },

    {
        id: 31,
        name: 'Yoga Mat',
        category: 'Home',
        price: 25.99,
        image: '/react-store/yoga-mat.jpg',
        description: 'Durable and non-slip yoga mat. Perfect for yoga, pilates, and workouts. Cushioned for joint support. Lightweight and easy to carry. Easy to clean and long-lasting.',
    },
    {
        id: 32,
        name: 'Skincare Set',
        category: 'Fashion',
        price: 39.99,
        image: '/react-store/skincare-set.jpg',
        description: 'Complete skincare set for glowing skin. Includes cleanser, toner, serum, and moisturizer. Suitable for all skin types. Travel-friendly sizes. Dermatologist recommended.',
    },
    {
        id: 33,
        name: 'Electric Toothbrush',
        category: 'Home',
        price: 49.99,
        image: '/react-store/electric-toothbrush.jpg',
        description: 'Advanced electric toothbrush for deep cleaning. Multiple brushing modes for sensitivity. Long battery life and quick charge. Replaceable brush heads. Encourages better oral hygiene.',
    },
    {
        id: 34,
        name: 'Designer Sunglasses',
        category: 'Fashion',
        price: 149.99,
        image: '/react-store/sunglasses.jpg',
        description: 'Stylish designer sunglasses with UV protection. Durable frame with comfortable fit. Timeless design for any outfit. Perfect for sunny days and vacations. Comes with protective case.',
    },
    {
        id: 35,
        name: 'Smart Thermostat',
        category: 'Home',
        price: 120.99,
        image: '/react-store/smart-thermostat.jpg',
        description: 'Save energy with this smart thermostat. Programmable and remotely controllable. Compatible with most HVAC systems. Sleek touchscreen interface. Learns your temperature preferences.',
    },
    {
        id: 36,
        name: 'Fitness Tracker',
        category: 'Electronics',
        price: 79.99,
        image: '/react-store/fitness-tracker.jpg',
        description: 'Track steps, calories, and workouts. Monitor sleep and heart rate. Stylish band with a sleek screen. Water-resistant and lightweight. Syncs with your smartphone easily.',
    },
    {
        id: 37,
        name: 'Smart Scale',
        category: 'Home',
        price: 99.99,
        image: '/react-store/smart-scale.jpg',
        description: 'Measure weight, BMI, body fat, and more. Syncs with fitness apps via Bluetooth. Sleek design fits any bathroom. Stores data for multiple users. Encourages a healthier lifestyle.',
    },
    {
        id: 38,
        name: 'Laptop Stand',
        category: 'Electronics',
        price: 39.99,
        image: '/react-store/laptop-stand.jpg',
        description: 'Ergonomic design reduces neck strain. Adjustable height and angle. Sturdy build for all laptop sizes. Foldable and portable for travel. Helps improve airflow and cooling.',
    },
    {
        id: 39,
        name: 'LED Desk Lamp',
        category: 'Home',
        price: 34.99,
        image: '/react-store/led-desk-lamp.jpg',
        description: 'Modern LED lamp with adjustable brightness. Touch controls and flexible neck. Ideal for reading or desk work. Energy-efficient and eye-friendly. Sleek design suits any décor.',
    },
    {
        id: 40,
        name: 'Classic Watch',
        category: 'Fashion',
        price: 129.99,
        image: '/react-store/classic-watch.jpg',
        description: 'Elegant timepiece with timeless appeal. Stainless steel casing and leather strap. Accurate quartz movement. Water-resistant and durable. Perfect for formal or casual wear.',
    },

    {
        id: 41,
        name: 'Yoga Ball',
        category: 'Sports',
        price: 19.99,
        image: '/react-store/yoga-ball.jpg',
        description: 'Perfect for home workouts and exercises. Improves balance and core strength. Made with durable, anti-burst material. Easy to inflate and store. Ideal for yoga, pilates, and stretching.',
    },
    {
        id: 42,
        name: 'Tennis Racket',
        category: 'Sports',
        price: 69.99,
        image: '/react-store/tennis-racket.jpg',
        description: 'High-quality racket for both beginners and professionals. Lightweight design for better control. Ergonomic grip for comfort. Durable strings and strong frame. Ideal for recreational and competitive play.',
    },
    {
        id: 43,
        name: 'Toy Robot',
        category: 'Toys',
        price: 29.99,
        image: '/react-store/toy-robot.jpg',
        description: 'Fun and interactive toy for kids. Can move, make sounds, and perform simple tasks. Perfect for imaginative play and learning. Safe, non-toxic materials. Requires batteries for operation.',
    },
    {
        id: 44,
        name: 'Action Figure',
        category: 'Toys',
        price: 14.99,
        image: '/react-store/action-figure.jpg',
        description: 'Collectible action figure with detailed design. Perfect for display or play. Made with durable plastic and high-quality paint. Includes movable parts for added playability. Great gift for collectors.',
    },
    {
        id: 45,
        name: 'Face Cream',
        category: 'Beauty',
        price: 25.99,
        image: '/react-store/face-cream.jpg',
        description: 'Hydrating face cream with nourishing ingredients. Helps moisturize and smooth the skin. Suitable for all skin types. Lightweight and non-greasy formula. Ideal for daily use in your skincare routine.',
    },
    {
        id: 46,
        name: 'Shampoo',
        category: 'Beauty',
        price: 9.99,
        image: '/react-store/shampoo.jpg',
        description: 'Gentle shampoo for healthy, shiny hair. Infused with natural ingredients for soft and smooth texture. Helps to cleanse and hydrate the scalp. Free from harmful chemicals. Suitable for all hair types.',
    }

];

export default allProducts;