'use client'

import React from "react"
import Image from "next/image";
import "@reach/tabs/styles.css";

export const EventLocation = () => {

    return (
        <div id="info" className={`bg-white text-black section section--xl`}>
            <div className="container container--xl">
                <div>

                </div>
                <div className="event-location">
                    <div className="event-location-col">
                        <div className="event-location-direction">
                            <h4>Getting there</h4>
                            <p>Based in the middle of Berlin, Alte Münze is easily reachable by public transport. The metro lines U5 (Rotes Rathaus) and U2 (Klosterstraße) are only a short walk away. U-bahn and S-bahn Alexanderplatz also offer a wide range of transportation options only 10 minutes away from the venue.</p>
                        </div>
                        <div className="event-location-direction">
                            <h4>Accessibility</h4>
                            <p>Alte Münze is a wheelchair accessible space. For the publicly accessible exhibition, please note that the first room installation will feature flashing lights, and the third room may potentially present sensitivity issues for individuals with epilepsy. We strongly recommend that attendees exercise discretion and take into consideration any personal sensitivities or health concerns.</p>
                        </div>
                    </div>
                    <div className="event-location-col">
                        <Image
                            height={836}
                            width={566}
                            className="w-full"
                            src="/map.jpg"
                            alt="Alte Münze"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}