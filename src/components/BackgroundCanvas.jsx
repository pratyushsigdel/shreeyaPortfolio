import React, { useEffect, useRef } from 'react';

const BackgroundCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Configuration
        let width, height;

        const stars = [];
        const particles = [];

        const init = () => {
            const dpr = window.devicePixelRatio || 1;
            width = window.innerWidth;
            height = window.innerHeight;
            
            // Scale number of elements based on screen size
            const numStars = width < 768 ? 80 : 150;
            const numParticles = width < 768 ? 30 : 60;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            stars.length = 0;
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 1.5 + 0.5,
                    opacity: Math.random(),
                    speed: 0.005 + Math.random() * 0.01,
                    direction: Math.random() > 0.5 ? 1 : -1
                });
            }

            particles.length = 0;
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    baseX: Math.random() * width,
                    baseY: Math.random() * height,
                    size: Math.random() * 4 + 2,
                    color: Math.random() > 0.5 ? 'rgba(106, 101, 102, 0.3)' : 'rgba(255, 255, 255, 0.2)',
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    phase: Math.random() * Math.PI * 2,
                    amplitude: Math.random() * 50 + 20
                });
            }
        };

        const draw = (time) => {
            ctx.clearRect(0, 0, width, height);

            // Draw Stars (Twinkling)
            stars.forEach(star => {
                star.opacity += star.speed * star.direction;
                if (star.opacity > 1 || star.opacity < 0) {
                    star.direction *= -1;
                }
                
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.8})`;
                ctx.fill();
            });

            // Draw Particles (Floating)
            particles.forEach(p => {
                p.phase += 0.005;
                p.x = p.baseX + Math.sin(p.phase) * p.amplitude;
                p.y = p.baseY + Math.cos(p.phase * 0.7) * p.amplitude;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleResize = () => {
            init();
        };

        init();
        draw();

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (canvasRef.current) {
            canvasRef.current.style.opacity = 1;
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] bg-[#0a0a0a] pointer-events-none transition-opacity duration-1000"
            style={{ willChange: 'transform', opacity: 0 }}
        />
    );
};

export default BackgroundCanvas;
