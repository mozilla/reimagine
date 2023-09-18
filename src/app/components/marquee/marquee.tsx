'use client'

import React from "react"
import "@reach/tabs/styles.css";

export const Marquee = () => {


    return (
        <div id="info" className={`bg-white text-black section section--xl`}>
            <div className="container container--xl">
                <div className="marquee">
                    <div className="marquee__row" role="marquee">
                        {[1, 2, 3, 4].forEach((item, index) => (
                            <div key={index} className="marquee-item js-marquee-item">
                                <div className="marquee-item-text">
                                    Free Tickets
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}