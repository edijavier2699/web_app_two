import React from 'react';
import '../styles/newsletter.css';
import { NewsletterForm } from '../forms/newsletterForm'; // Asegúrate de que este archivo esté en TypeScript también

// Si no hay props que pasar al componente, no es necesario definir interfaces
export const Newsletter: React.FC = () => {
    return (
        <section className="newsletter-bg mx-[20px] md:mx-[80px] md:h-[496px] py-[48px] px-[16px]  rounded-xl flex flex-col justify-center text-white px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl mb-[24px] sm:text-4xl md:text-[60px] font-bold text-center">Join Our Newsletter</h2>
            <p className="m sm:text-lg mb-[46px] sm:mb-[24px] md:text-[20px]  text-center">
                Stay up to date with Tokunize. Update, invest, learn and more.
            </p>
            <div className="md:mx-auto">
                <NewsletterForm />
            </div>
        </section>
    );
};
