import { useState, useEffect, useRef } from 'react';

interface LazyVideoProps {
    src: string;
}

const LazyVideo = ({ src }: LazyVideoProps) => {
    // ref para el div que observa la visibilidad
    const containerRef = useRef<HTMLDivElement | null>(null);
    // ref para el video
    const videoRef = useRef<HTMLVideoElement | null>(null);
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

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const handleVideoEnd = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };

    return (
        <div ref={containerRef} className="video-container">
            {isVisible && (
                <video
                    ref={videoRef}
                    loop
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    className="w-full rounded-lg"
                    onEnded={handleVideoEnd}
                >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video.
                </video>
            )}
        </div>
    );
};

export default LazyVideo;
