'use client'

import React from "react"
import Image from "next/image";

export const HeroBanner = ({ heroInfo }) => {
    return (
        <div id="hero-banner" className={`bg-black text-white section section--xl`}>
            <div className="container container--sm">
                <div className={`flex flex-col gap-12 lg:gap-16`}>
                    <Image
                        height={490}
                        width={792}
                        className="w-full"
                        src="/hero-banner.png"
                        alt="Reclaim the internet"
                    />
                    <div className="event-info">
                        <div className="event-info-col">
                            <div className={`max-w-fit text-right`}>
                                <span>Location</span>
                                <span className={`event-info-heading`}>
                                    <span dangerouslySetInnerHTML={{ __html: heroInfo.eventLocation }} />
                                </span>
                            </div>
                        </div>
                        <div className="event-info-col">
                            <span>Date</span>
                            <span className={`event-info-heading`}>
                                <span dangerouslySetInnerHTML={{ __html: heroInfo.eventDate }} />
                            </span>
                            {heroInfo.eventDescription && <p>{heroInfo.eventDescription}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}