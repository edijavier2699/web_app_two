import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

// define types for reviews
interface Review {
    reviewText: string;
    username: string;
    location: string;
    companyName: string;
    rating: number;
}
// for benefits item
interface BenefitItem {
    value: string;
    description: string;
}

// single review card component 
const ReviewCard: React.FC<Review> = ({ reviewText, username, location, companyName, rating }) => {
    // Función para renderizar estrellas según la calificación
    const showStars = (starsQuantity: number) => {
        return Array.from({ length: starsQuantity }, (_, index) => (
            <StarIcon key={index} className="h-5 w-5 text-[#A0CC29]" />
        ));
    };

    return (
        <article className="m-4 p-4 py-[80px] md:p-6 w-full md:py-[80px] md:w-[80%] lg:w-[60%] mx-auto text-center bg-white rounded-lg">
            <div className="flex items-center justify-center space-x-1 mb-4">
                {showStars(rating)}
            </div>
            <p className="font-medium text-lg md:text-2xl text-[#667085] mb-4 md:mb-6">"{reviewText}"</p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex items-center space-x-4">
                    <img
                        className="h-16 w-16 rounded-full object-cover border-2 border-gray-300"
                        alt="review-user-image"
                        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <div className="text-left">
                        <p className="font-semibold text-gray-800 text-base md:text-lg">{username}</p>
                        <p className="text-gray-500 text-sm">{location}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <img
                        className="h-16 w-16 rounded-full object-cover border-2 border-gray-300"
                        alt="company-logo"
                        src="https://static.vecteezy.com/system/resources/previews/001/191/989/original/circle-logo-png.png"
                    />
                    <p className="font-semibold text-lg md:text-2xl text-gray-800">{companyName}</p>
                </div>
            </div>
        </article>
    );
};

// component to show a single benefit
const Benefit: React.FC<BenefitItem> = ({ value, description }) => {
    return (
        <article className="flex flex-col items-center px-4 py-4 md:border-r border-gray-150 last:border-r-0 w-full md:w-auto">
            <span className="text-[#A0CC28] font-extrabold text-5xl md:text-7xl">{value}</span>
            <p className="mt-2 text-lg md:text-xl text-[#667085] font-medium text-center">{description}</p>
        </article>
    );
};

// Show the list of all the benefits
const Benefits: React.FC = () => {
    const benefits: BenefitItem[] = [
        { value: '8%', description: 'MAX. annual return' },
        { value: '$50M', description: 'Funded in real estate' },
        { value: '4K+', description: 'Global customers' }
    ];

    return (
        <section className="flex flex-col items-center py-10 px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">Maximise Your Property Investments</h2>
            <p className="font-medium text-base md:text-lg text-[#667085] mb-8 text-center">
                All the tools you need to invest, earn, and grow your real estate portfolio
            </p>
            <div className="flex flex-wrap justify-center gap-6">
                {benefits.map((benefit, index) => (
                    <Benefit
                        key={index}
                        value={benefit.value}
                        description={benefit.description}
                    />
                ))}
            </div>
        </section>
    );
};

// Dummy data
const reviewData: Review[] = [
    {
        reviewText: "I have been using this product for a few weeks now, and I'm really satisfied with the quality. The performance exceeded my expectations. Highly recommend!",
        username: "James T",
        location: "London",
        companyName: "Circooles",
        rating: 4
    }
    // Add more reviews if it is required
];

// Show the benefits and reviews
export const Reviews: React.FC = () => {
    return (
        <section className="flex flex-col items-center px-4">
            {reviewData.map((item, index) => (
                <ReviewCard 
                    key={index}
                    reviewText={item.reviewText}
                    username={item.username}
                    location={item.location}
                    companyName={item.companyName}
                    rating={item.rating}
                />
            ))}
            <Benefits />
        </section>
    );
};

