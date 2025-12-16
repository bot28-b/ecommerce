import React from 'react';

const Marquee = () => {
    const items = [
        "⚡ Flash Sale: 50% Off Top Brands",
        "🚚 Free Shipping on Orders Over $50",
        "💳 5% Cashback on Credit Cards",
        "🏷️ Best Deals on Electronics",
        "📦 Easy 30-Day Returns",
        "🎧 New Audio Gear Dropping Soon"
    ];

    return (
        <div className="bg-brand-darkBlue text-white py-2 overflow-hidden relative z-20 border-b border-gray-700">
            <div className="flex animate-scroll whitespace-nowrap">
                {/* Double the items to create seamless loop */}
                {[...items, ...items, ...items].map((item, index) => (
                    <span key={index} className="mx-8 font-bold text-sm tracking-wide uppercase flex items-center gap-2">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
