import React, { useEffect, useRef } from 'react';

const BackgroundCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width, height;
        const fireflies = [];

        const init = () => {
            const dpr = window.devicePixelRatio || 1;
            width = window.innerWidth;
            height = window.innerHeight;
            
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            const numFireflies = width < 768 ? 35 : 65;
            fireflies.length = 0;

            for (let i = 0; i < numFireflies; i++) {
                fireflies.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 2.5 + 1,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    opacity: 0,
                    targetOpacity: Math.random() * 0.6 + 0.2,
                    fadeSpeed: 0.003 + Math.random() * 0.006,
                    fading: Math.random() > 0.5,
                    glowSize: Math.random() * 15 + 10,
                    noiseOffset: Math.random() * 1000
                });
            }
        };

        const drawFirefly = (f) => {
            if (f.opacity <= 0) return;

            // Radial gradient for bloom effect
            const gradient = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.glowSize);
            gradient.addColorStop(0, `rgba(255, 255, 200, ${f.opacity * 0.8})`);
            gradient.addColorStop(0.3, `rgba(106, 101, 102, ${f.opacity * 0.3})`);
            gradient.addColorStop(1, 'rgba(10, 10, 10, 0)');

            ctx.beginPath();
            ctx.arc(f.x, f.y, f.glowSize, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();

            // Core of the firefly
            ctx.beginPath();
            ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity})`;
            ctx.fill();
        };

        const update = () => {
            fireflies.forEach(f => {
                // Organic movement
                f.noiseOffset += 0.005;
                f.vx += Math.sin(f.noiseOffset) * 0.01;
                f.vy += Math.cos(f.noiseOffset * 0.8) * 0.01;

                // Friction
                f.vx *= 0.99;
                f.vy *= 0.99;

                f.x += f.vx;
                f.y += f.vy;

                // Screen wrap
                if (f.x < -f.glowSize) f.x = width + f.glowSize;
                if (f.x > width + f.glowSize) f.x = -f.glowSize;
                if (f.y < -f.glowSize) f.y = height + f.glowSize;
                if (f.y > height + f.glowSize) f.y = -f.glowSize;

                // Pulsing Opacity
                if (f.fading) {
                    f.opacity -= f.fadeSpeed;
                    if (f.opacity <= 0) {
                        f.fading = false;
                        if (Math.random() > 0.8) {
                            f.x = Math.random() * width;
                            f.y = Math.random() * height;
                        }
                    }
                } else {
                    f.opacity += f.fadeSpeed;
                    if (f.opacity >= f.targetOpacity) {
                        f.fading = true;
                        f.targetOpacity = Math.random() * 0.6 + 0.2;
                    }
                }
            });
        };

        const render = () => {
            ctx.fillStyle = '#0a0a0a';
            ctx.fillRect(0, 0, width, height);

            update();
            fireflies.forEach(drawFirefly);

            animationFrameId = requestAnimationFrame(render);
        };

        const handleResize = () => {
            init();
        };

        init();
        render();

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ willChange: 'transform' }}
        />
    );
};

export default BackgroundCanvas;

