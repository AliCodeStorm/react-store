const categories = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    price: 54,
    image: "/category1.jpg",
    images: [
      "/category1.jpg",
      "/category2.jpg",
      "/category3.jpg"
    ],
    description: "Explore the latest gadgets and devices. From smartphones to laptops, we have everything tech. Upgrade your lifestyle with smart electronics. Top brands at great prices. Discover innovation today."
  },
  {
    id: 2,
    name: "Men's Fashion",
    slug: "mens-fashion",
    price: 30,
    image: "/category2.jpg",
    images: [
      "/category2.jpg",
      "/category3.jpg",
      "/category4.jpg"
    ],
    description: "Style up with trendy men’s apparel. Casual to formal wear, all in one place. Jackets, jeans, t-shirts, and more. Stay ahead with fresh looks. Fashion that fits your vibe."
  },
  {
    id: 3,
    name: "Women's Fashion",
    slug: "womens-fashion",
    price: 45,
    image: "/category3.jpg",
    images: [
      "/category3.jpg",
      "/category4.jpg",
      "/category5.jpg"
    ],
    description: "Discover elegant and trendy styles. Dresses, tops, and accessories for every occasion. Look your best every day. From classic to bold looks. Fashion designed for confidence."
  },
  {
    id: 4,
    name: "Home & Living",
    slug: "home-living",
    price: 60,
    image: "/category4.jpg",
    images: [
      "/category4.jpg",
      "/category5.jpg",
      "/category6.jpg"
    ],
    description: "Transform your home into a haven. Furniture, decor, and home essentials. Comfortable, stylish, and functional living. Make your space truly yours. Affordable upgrades await."
  },
  {
    id: 5,
    name: "Home & Living",
    slug: "home-living",
    price: 40,
    image: "/category4.jpg",
    images: [
      "/category4.jpg",
      "/category5.jpg",
      "/category6.jpg"
    ],
    description: "All your home improvement needs. Revamp your interiors with ease. Practical and decorative items available. Choose from top-rated home products. Cozy, smart living solutions."
  },
  {
    id: 6,
    name: "Beauty & Health",
    slug: "beauty-health",
    price: 25,
    image: "/category5.jpg",
    images: [
      "/category5.jpg",
      "/category6.jpg",
      "/category7.jpg"
    ],
    description: "Glow inside and out. Skincare, wellness, and personal care items. Trusted beauty products from top brands. Stay healthy and confident. Your self-care starts here."
  },
  {
    id: 7,
    name: "Sports & Fitness",
    slug: "sports-fitness",
    price: 50,
    image: "/category6.jpg",
    images: [
      "/category6.jpg",
      "/category7.jpg",
      "/category8.jpg"
    ],
    description: "Gear up for greatness. Gym wear, accessories, and equipment. Stay active and fit at home or outside. Products built for performance. Let’s move better, together."
  },
  {
    id: 8,
    name: "Books",
    slug: "books",
    price: 15,
    image: "/category7.jpg",
    images: [
      "/category7.jpg",
      "/category8.jpg",
      "/category9.jpg"
    ],
    description: "Feed your imagination and mind. From fiction to self-help and study guides. Thousands of titles to explore. Affordable and inspiring reads. Escape into a world of stories."
  },
  {
    id: 9,
    name: "Toys & Games",
    slug: "toys-games",
    price: 20,
    image: "/category8.jpg",
    images: [
      "/category8.jpg",
      "/category9.jpg",
      "/category10.jpg"
    ],
    description: "Fun for all ages! Educational and entertaining toys. Board games, action figures, and puzzles. Perfect gifts for kids. Bring joy and laughter home."
  },
  {
    id: 10,
    name: "Automotive",
    slug: "automotive",
    price: 80,
    image: "/category9.jpg",
    images: [
      "/category9.jpg",
      "/category10.jpg",
      "/category11.jpg"
    ],
    description: "Take care of your ride. Accessories, tools, and cleaning gear. Car care made simple. Stay safe and stylish on the road. Quality products for every vehicle."
  },
  {
    id: 11,
    name: "Men's T-Shirts",
    slug: "mens-fashion",
    price: 25,
    image: "/category10.jpg",
    images: [
      "/category10.jpg",
      "/category11.jpg",
      "/category12.jpg"
    ],
    description: "Comfy and stylish tees for every guy. Graphic, plain, and statement designs. Perfect for daily wear. Soft fabrics, great fit. Essential style, everyday price."
  },
  {
    id: 12,
    name: "Groceries",
    slug: "groceries",
    price: 10,
    image: "/category11.jpg",
    images: [
      "/category11.jpg",
      "/category12.jpg",
      "/category13.jpg"
    ],
    description: "Daily essentials delivered to you. Fresh, packaged, and organic products. Shop your kitchen needs here. Easy shopping for busy lives. From pantry to doorstep."
  },
  {
    id: 13,
    name: "Women's Dresses",
    slug: "womens-fashion",
    price: 55,
    image: "/category12.jpg",
    images: [
      "/category12.jpg",
      "/category13.jpg",
      "/category14.jpg"
    ],
    description: "Chic, classy, and comfy dresses. Perfect for parties, work, or lounging. Styles that speak elegance. Curated fashion for women. Every dress tells a story."
  },
  {
    id: 14,
    name: "Kitchenware",
    slug: "home-living",
    price: 35,
    image: "/category13.jpg",
    images: [
      "/category13.jpg",
      "/category14.jpg",
      "/category15.jpg"
    ],
    description: "Cook like a pro with premium tools. Utensils, cookware, and storage items. Smart gadgets for smart kitchens. Style meets utility. Make cooking a joy."
  },
  {
    id: 15,
    name: "Groceries",
    slug: "groceries",
    price: 18,
    image: "/category14.jpg",
    images: [
      "/category14.jpg",
      "/category15.jpg",
      "/category16.jpg"
    ],
    description: "Fresh and essential grocery items. Stock up on what matters. Great deals daily. Reliable and fast delivery. Everything your family needs."
  },
  {
    id: 16,
    name: "Groceries",
    slug: "groceries",
    price: 22,
    image: "/category15.jpg",
    images: [
      "/category15.jpg",
      "/category16.jpg",
      "/category17.jpg"
    ],
    description: "Fill your cart with freshness. From fruits to dairy and beyond. Trusted brands and best prices. Your daily needs, sorted. Shop smart and easy."
  },
  {
    id: 17,
    name: "Kitchenware",
    slug: "home-living",
    price: 40,
    image: "/category16.jpg",
    images: [
      "/category16.jpg",
      "/category17.jpg",
      "/category18.jpg"
    ],
    description: "Upgrade your kitchen setup. Non-stick pans, knives, organizers. Quality tools for every chef. Cook with ease and style. Function meets design."
  },
  {
    id: 18,
    name: "Kitchenware",
    slug: "home-living",
    price: 45,
    image: "/category17.jpg",
    images: [
      "/category17.jpg",
      "/category18.jpg",
      "/category19.jpg"
    ],
    description: "Daily kitchen essentials in one spot. Designed to make cooking simpler. Durable, modern, and practical. For beginner cooks to pros. Make every meal special."
  },
  {
    id: 19,
    name: "Decor & Accessories",
    slug: "home-living",
    price: 30,
    image: "/category18.jpg",
    images: [
      "/category18.jpg",
      "/category19.jpg",
      "/category20.jpg"
    ],
    description: "Add charm to every corner. Wall art, vases, and lighting. Style up your space with ease. Little details, big impact. Home decor made simple."
  },
  {
    id: 20,
    name: "Dairy",
    slug: "groceries",
    price: 15,
    image: "/category19.jpg",
    images: [
      "/category19.jpg",
      "/category20.jpg",
      "/category21.jpg"
    ],
    description: "Creamy, fresh dairy products. Milk, cheese, yogurt & more. Daily nutrition in every sip. Store-fresh and delivered fast. Taste the farm freshness."
  },
  {
    id: 21,
    name: "Groceries",
    slug: "groceries",
    price: 25,
    image: "/category20.jpg",
    images: [
      "/category20.jpg",
      "/category21.jpg",
      "/category22.jpg"
    ],
    description: "Pantry full? Let’s refill! Snacks, drinks, grains, and more. Always fresh and affordable. Weekly deals and essentials. Save more on your shop."
  },
  {
    id: 22,
    name: "Groceries",
    slug: "groceries",
    price: 20,
    image: "/category21.jpg",
    images: [
      "/category21.jpg",
      "/category22.jpg",
      "/category23.jpg"
    ],
    description: "Shopping made smarter. Pick your essentials in clicks. Trusted quality, fast delivery. From your fridge to your table. Every bite counts."
  },
  {
    id: 23,
    name: "Women's Shoes",
    slug: "womens-fashion",
    price:78,
    image: "/category22.jpg",
    images: [
      "/category22.jpg",
      "/category23.jpg",
      "/category24.jpg"
    ],
    description: "Step into comfort and style. Heels, flats, sneakers, and sandals. Shoes that fit every mood. Elevate your outfit instantly. Fashion starts at your feet."
  }
];

export default categories;
