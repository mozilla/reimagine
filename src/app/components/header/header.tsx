'use client'

import React from "react"
import { Popover } from '@headlessui/react'
import Link from 'next/link';
import Image from "next/image";
import { HeaderProps } from "./types";

export const Header: React.FC<HeaderProps> = ({ navigation }) => {
    return (
        <div className="sticky top-0 z-50 w-full ">

            <Popover className="relative bg-black">
                <div className="px-4 sm:px-6 container container--xl">
                    <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link href="/">
                                <span className="sr-only">Reimagine</span>
                                <Image
                                    height={70}
                                    width={70}
                                    className="w-auto h-6 md:h-8"
                                    src="/mozilla-logo.svg"
                                    alt="Mozilla Foundation"
                                />
                            </Link>
                        </div>
                        <Popover.Group as="nav" className="space-x-10 md:flex">
                            {
                                navigation.map((item, index) => (
                                    <Link key={index} href={`#${item.slug}`} className="text-base font-bold text-gray-900 hover:underline">
                                        {item.text}
                                    </Link>
                                ))
                            }
                        </Popover.Group>
                    </div>
                </div>


            </Popover>

        </div>
    )
}