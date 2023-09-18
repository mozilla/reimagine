'use client'

import React from "react"
import { gsap } from "gsap";
import "@reach/tabs/styles.css";

/**
 * Convert this code to ReactJS

 function initMarquee() {

        // Kill other animations
        animations.forEach( animation => animation.progress( 0 ).kill() )

        // Marquee speed (pixels per second)
        let velocity = 80;

        let offset    = 0
        let itemWidth = 0
        let rowWidth  = 0

        let marqueeItems = gsap.utils.toArray( '.js-marquee-item' )

        // Calculate row width
        marqueeItems.forEach( e => {
            rowWidth += e.getBoundingClientRect().width
        } )

        // Animation Loop
        marqueeItems.forEach( ( e, i ) => {

            // Reset item positions
            gsap.set( e, { x: 0 } )

            itemWidth = e.getBoundingClientRect().width

            let tl = new gsap.timeline( { repeat: -1 } );

            // Animate item to end of row
            tl.to( e, {
                ease: "none",
                duration: ((rowWidth - offset - itemWidth) / velocity),
                x: (rowWidth - offset - itemWidth),
            } );

            // Send item to beginning
            tl.to( e, {
                ease: "none",
                duration: 0,
                x: ((offset + itemWidth) * -1)
            } )

            // Animate to original position
            tl.to( e, {
                ease: "none",
                duration: ((offset + itemWidth) / velocity),
                x: 0
            } )

            // Increment offset
            offset += itemWidth

            animations.push( tl )
        } )
    }

    let animations = []

    initMarquee()

    var timer

    function handleResize() {
        clearTimeout( timer )
        timer = setTimeout( initMarquee, 500 )
    }

    window.addEventListener( 'resize', handleResize )

 */

export const Marquee = () => {


    return (
        <div id="info" className={`bg-white text-black section section--xl`}>
            <div className="marquee">
                <div className="marquee__row" role="marquee">
                    {Array.from({ length: 6 }, (_, index) => (
                        <div key={index} className="marquee__item js-marquee-item">
                            <div className="marquee__item-text">
                                Free Tickets
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}