import React from 'react';
import '../styles/newsletter.css';
import { NewsletterForm } from '../forms/newsletterForm'; // Asegúrate de que este archivo esté en TypeScript también

// Si no hay props que pasar al componente, no es necesario definir interfaces
export const Newsletter: React.FC = () => {
    return (
        <section className="newsletter-bg newsletterSection h-auto max-h-[400px] w-full space-y-5 py-8 rounded-xl flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">Join Our Newsletter</h3>
            <p className="text-base sm:text-lg md:text-xl font-medium text-center">
                Stay up to date with Tokunize. Update, invest, learn and more.
            </p>
            <NewsletterForm />
        </section>
    );
};
