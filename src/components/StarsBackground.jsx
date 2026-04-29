import React, { useMemo } from 'react';

const StarsBackground = () => {
    // Memoize the stars to prevent re-generating on every render
    const stars = useMemo(() => {
        return Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 0.5,
            delay: Math.random() * 5,
            duration: 3 + Math.random() * 4
        }));
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] bg-[#0a0a0a] overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full bg-white opacity-0 animate-twinkle"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDelay: `${star.delay}s`,
                        animationDuration: `${star.duration}s`
                    }}
                />
            ))}
        </div>
    );
};

export default StarsBackground;
