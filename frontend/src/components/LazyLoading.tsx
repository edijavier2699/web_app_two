import { useState, useEffect, useRef } from 'react';

interface LazyVideoProps {
    src: string;
}

const LazyVideo = ({ src }: LazyVideoProps) => {
    const videoRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <div ref={videoRef} className="video-container">
            {isVisible && (
                <video
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full rounded-lg"
                >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video.
                </video>
            )}
        </div>
    );
};

export default LazyVideo;
