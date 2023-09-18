'use client'

import React from "react"
import Image from "next/image";

export const HeroBanner = () => {
    return (
        <div className={`bg-black text-white section section--xl`}>
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
                                    <span>Alte Münze</span>
                                    <span>Berlin</span>
                                </span>
                            </div>
                        </div>
                        <div className="event-info-col">
                            <span>Date</span>
                            <span className={`event-info-heading`}>
                                <span>October</span>
                                <span>12-16 2023</span>
                            </span>
                            <p>What if the internet was yours to reinvent? Mozilla invites you to shape its destiny and celebrate voices working on a more ethical, responsible, and inclusive internet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}