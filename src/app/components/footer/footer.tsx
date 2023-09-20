'use client'

import React from "react"
import Link from 'next/link';
import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
} from "@reach/menu-button";
import * as gtag from "../../../../lib/gtag";
import { CaretDown, CaretUp } from "../icons";

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

const locales = ["en", "de"];

export const Footer = () => {
    const router = useRouter()
    const pathname = usePathname()
    const currentLocale = pathname.replace(/^\//, '');
    const validLocale = locales.includes(currentLocale) ? currentLocale : "en";
    let languageNames = new Intl.DisplayNames([validLocale], { type: "language" });


    const handleLocaleChange = (locale: string) => {
        gtag.event({
            action: `Locale: ${locale}`,
            category: "Language change"
        })
        if (currentLocale !== locale) {
            router.push(locale)
        }
    }

    return (
        <footer className="bg-black pt-64">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between xl:px-0 border-t border-slate-600">
                <div className="flex flex-col gap-4 md:order-2 max-w-[100px] lg:items-end">

                    <div className="language-selector">
                        <p className="font-bold">Language</p>
                        <div className="text-black">
                            <Menu>

                                {({ isExpanded }) => (
                                    <>
                                        <MenuButton>
                                            <span>
                                                {locales.includes(currentLocale) ? languageNames.of(currentLocale) : ""}
                                            </span>
                                            {isExpanded ? <CaretUp /> : <CaretDown />}
                                        </MenuButton>
                                        <MenuList>
                                            {locales.map((locale, index) => (
                                                <MenuItem key={index} onSelect={() => handleLocaleChange(locale)}>{languageNames.of(locale)}</MenuItem>
                                            ))}
                                        </MenuList>
                                    </>
                                )}

                            </Menu>
                        </div>
                    </div>

                    <div className="inline-flex gap-6">
                        {socialLinks.map((item, index) => (
                            <Link key={index} href={item.href} className="" >
                                {item.icon}
                            </Link>
                        ))}
                    </div>

                </div>
                <div className="mt-8 md:order-1 md:mt-0 flex flex-col gap-6">
                    <Link href="https://foundation.mozilla.org/" target="_blank" rel="nofollow noreferrer">
                        <span className="sr-only">Mozilla Foundation</span>
                        <Image
                            height={32}
                            width={110}
                            className="w-auto h-4 lg:h-6"
                            src="/mozilla-logo-wordmark.svg"
                            alt="Mozilla Foundation"
                        />
                    </Link>
                    <p className="max-w-[36em]">
                        Portions of this content are ©1998–{new Date().getFullYear()} by individual mozilla.org contributors. Content available under a <Link className="underline hover:text-primary" href="https://www.mozilla.org/en-US/foundation/licensing/website-content/" target="_blank" rel="noreferrer noopener">Creative Commons license</Link>.
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