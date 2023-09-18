'use client'

import React from "react"
import Link from 'next/link';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { LanguageSelector } from "../language-selector"

const navigation = [
    { name: 'Website Privacy Notice', href: 'https://mozilla.org/privacy/websites/' },
    { name: 'Cookies', href: 'https://www.mozilla.org/privacy/websites/#cookies' },
    { name: 'Legal', href: 'https://www.mozilla.org/about/legal/terms/mozilla/' },
]

const socialLinks = [
    {
        href: "https://www.youtube.com/user/Mozilla",
        title: "YouTube",
        icon: <FontAwesomeIcon icon={faYoutube} className="" />,
    },
    {
        href: "https://twitter.com/mozilla",
        title: "Twitter",
        icon: <FontAwesomeIcon icon={faTwitter} className="" />,
    },
];

export const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    {socialLinks.map((item, index) => (
                        <Link key={index} href={item.href} className="" >
                            {item.icon}
                        </Link>
                    ))}

                    <LanguageSelector />
                </div>
                <div className="mt-8 md:order-1 md:mt-0 flex flex-col gap-6">
                    <Link href="https://foundation.mozilla.org/" target="_blank" rel="nofollow noreferrer">
                        <span className="sr-only">Mozilla Foundation</span>
                        <Image
                            height={32}
                            width={110}
                            className="w-auto h-4 lg:h-6"
                            src="/mozilla-logo.svg"
                            alt="Mozilla Foundation"
                        />
                    </Link>
                    <p className="max-w-[36em]">
                        Visit Mozilla Corporation’s not-for-profit parent, the <Link className="underline hover:text-primary" href="https://foundation.mozilla.org/" target="_blank" rel="nofollow noreferrer">Mozilla Foundation</Link>. Portions of this content are ©1998–2022 by individual mozilla.org contributors. Content available under a <Link className="underline hover:text-primary" href="https://www.mozilla.org/en-US/foundation/licensing/website-content/" target="_blank" rel="noreferrer noopener">Creative Commons license</Link>.
                    </p>
                    <nav className="flex gap-6" role="navigation">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} className="underline hover:text-primary">
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    )
}