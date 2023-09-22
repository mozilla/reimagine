'use client'

import React from "react"
import Image from "next/image";
import { HeroInfo } from "./types"

export const HeroBanner = ({ heroInfo }: {heroInfo: HeroInfo}) => {
    return (
        <div id="hero-banner" className={`bg-black text-white section section--hero-xl`}>
            <div className="container container--md">
                <div className={`flex flex-col gap-12 lg:gap-16`}>
                    <Image
                        height={490}
                        width={792}
                        className="w-full lg:w-9/12 lg:ml-[15rem]"
                        src="/hero-banner.png"
                        alt="Reclaim the internet"
                    />
                    <div className="event-info pt-10">
                        <div className="event-info-col">
                            <div className={`max-w-fit text-right`}>
                                <span>Location</span>
                                <span className={`event-info-heading event-info-text`}>
                                    <span dangerouslySetInnerHTML={{ __html: heroInfo.eventLocation }} />
                                </span>
                            </div>
                        </div>
                        <div className="event-info-col">
                            <span className={`event-info-heading`}>
                            <span>Date</span>
                                <div className={`event-info-text`}>
                                    <span dangerouslySetInnerHTML={{ __html: heroInfo.eventDate }} />
                                </div>
                            </span>
                            {heroInfo.eventDescription && <p>{heroInfo.eventDescription}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}