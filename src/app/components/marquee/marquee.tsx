'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "@reach/tabs/styles.css";

export const Marquee = () => {
    const animationsRef = useRef([]);
    const marqueeRowRef = useRef(null);

    useEffect(() => {
        const initMarquee = () => {
            // Kill other animations
            // @ts-ignore
            animationsRef.current.forEach((animation) => animation.progress(0).kill());

            // Marquee speed (pixels per second)
            const velocity = 80;

            let offset = 0;
            let itemWidth = 0;
            let rowWidth = 0;

            const marqueeItems = Array.from(
                // @ts-ignore
                marqueeRowRef.current.querySelectorAll(".js-marquee-item")
            );

            // Calculate row width
            marqueeItems.forEach((e) => {
                // @ts-ignore
                rowWidth += e.getBoundingClientRect().width;
            });

            // Animation Loop
            marqueeItems.forEach((e, i) => {
                // Reset item positions
                // @ts-ignore
                gsap.set(e, { x: 0 });

                // @ts-ignore
                itemWidth = e.getBoundingClientRect().width;

                // @ts-ignore
                const tl = new gsap.timeline({ repeat: -1 });

                // Animate item to end of row
                tl.to(e, {
                    ease: "none",
                    duration: (rowWidth - offset - itemWidth) / velocity,
                    x: rowWidth - offset - itemWidth,
                });

                // Send item to beginning
                tl.to(e, {
                    ease: "none",
                    duration: 0,
                    x: (offset + itemWidth) * -1,
                });

                // Animate to the original position
                tl.to(e, {
                    ease: "none",
                    duration: (offset + itemWidth) / velocity,
                    x: 0,
                });

                // Increment offset
                offset += itemWidth;

                // @ts-ignore
                animationsRef.current.push(tl);
            });
        };

        // @ts-ignore
        let resizeTimer;

        const handleResize = () => {
            // @ts-ignore
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(initMarquee, 500);
        };

        // Initialize the marquee animations
        initMarquee();

        // Handle window resize
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div id="free-ticket" className={`bg-black text-white section section--xl overflow-hidden`}>
            <div className="marquee">
                <div
                    className="marquee-row"
                    role="marquee"
                    ref={marqueeRowRef}
                >
                    {Array.from({ length: 12 }, (_, index) => (
                        <div key={index} className="marquee-item js-marquee-item">
                            <div className="marquee-item-text">Free Tickets</div>
                            <svg width="72" height="74" viewBox="0 0 72 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M71.9773 37.8324L36.1818 73.6278L0.386361 37.8324L8.55397 29.5937L30.1804 51.2202L30.1804 0.545448L42.1832 0.545447L42.1832 51.2202L63.7741 29.5937L71.9773 37.8324Z" fill="white" />
                            </svg>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
