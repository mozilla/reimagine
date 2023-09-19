'use client'

import React from "react"
import Image from "next/image";
import "@reach/tabs/styles.css";

export const EventLocation = ({ eventInfo }) => {

    const directions = eventInfo?.directions || [];

    return (
        <div id="info" className={`bg-white text-black section section--xl`}>
            <div className="container container--xl">
                <div className="flex flex-col lg:flex-row lg:justify-between mb-16 lg:mb-32 gap-8 lg:gap-16">
                    <div className="flex flex-col prose">
                        <h3 className="type-heading-2">{eventInfo.venueName}</h3>
                        <p className="text-xl">{eventInfo.venueDescription}</p>
                    </div>
                    <div>
                        <strong>
                            <span dangerouslySetInnerHTML={{ __html: eventInfo.venueLocation }} />
                        </strong>
                    </div>
                </div>
                <div className="event-location">
                    {directions && directions?.length > 0 && (
                        <div className="event-location-col">
                            {directions.map((direction, index) => (
                                <div key={index} className="event-location-direction">
                                    {direction?.title && <h4>{direction.title}</h4>}
                                    {direction?.content && <p dangerouslySetInnerHTML={{ __html: direction.content }} />}
                                </div>
                            ))}
                        </div>
                    )}
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