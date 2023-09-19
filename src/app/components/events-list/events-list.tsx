'use client'

import React, { useState } from "react"
import Link from 'next/link';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";

import {
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuPopover,
    MenuLink,
} from "@reach/menu-button";

import * as gtag from "../../../../lib/gtag";
import "@reach/tabs/styles.css";
import "@reach/menu-button/styles.css";

interface Talk {
    time: string;
    name: string;
    content: string;
    url?: string;
    inviteOnly?: boolean;
}

interface Event {
    day: string;
    date: string;
    talks: Talk[];
}

const eventColors = [
    "bg-primary",
    "bg-secondary",
    "bg-tertiary",
    "bg-quaternary",
    "bg-gray"
]

const getColorIndex = (eventCount: number) => {
    return eventCount % eventColors.length;
};

const events: Event[] = [
    {
        "day": "Thursday",
        "date": "October 12",
        "talks": [
            {
                "time": "11am - 5pm",
                "name": "General Admission Exhibition",
                "content": "Embark on an immersive journey to reinvent your contribution to a collective utopia, and feel the beauty of the community.",
                "url": "https://blog.mozilla.org/en/mozilla/is-the-future-of-the-web-open/"
            }
        ]
    },
    {
        "day": "Friday",
        "date": "October 13",
        "talks": [
            {
                "time": "11am - 5pm",
                "name": "General Admission Exhibition",
                "content": "Embark on an immersive journey to reinvent your contribution to a collective utopia, and feel the beauty of the community.",
                "url": "https://blog.mozilla.org/en/mozilla/is-the-future-of-the-web-open/"
            },
            {
                "time": "7pm - 11pm",
                "name": "Rise25 Award Show",
                "content": "Mozilla is honoring 25 game changers who will help shape the future of an internet that is more open, ethical and inclusive.",
                "inviteOnly": true
            }
        ]
    },
    {
        "day": "Saturday",
        "date": "October 14",
        "talks": [
            {
                "time": "11am - 5pm",
                "name": "General Admission Exhibition",
                "content": "Embark on an immersive journey to reinvent your contribution to a collective utopia, and feel the beauty of the community.",
                "url": "https://blog.mozilla.org/en/mozilla/is-the-future-of-the-web-open/"
            },
            {
                "time": "7pm - 11pm",
                "name": "Foundations of the Future Web: An Evening for Developers",
                "content": "The Mozilla Innovation team invites you to talks from developers pushing the boundaries of what the web can do through new, decentralized, and open protocols, projects, and applications.",
                "inviteOnly": true
            }
        ]
    },
    {
        "day": "Sunday",
        "date": "October 15",
        "talks": [
            {
                "time": "11am - 5pm",
                "name": "General Admission Exhibition",
                "content": "Embark on an immersive journey to reinvent your contribution to a collective utopia, and feel the beauty of the community.",
                "url": "https://blog.mozilla.org/en/mozilla/is-the-future-of-the-web-open/"
            },
            {
                "time": "7pm - 11pm",
                "name": "Privacy Not Included",
                "content": "Nulla facilisi. Maecenas bibendum mauris non leo malesuada feugiat quis id nunc. Nulla facilisi. Maecenas bibendum mauris non leo malesuada feugiat quis id nunc.",
                "inviteOnly": true
            }
        ]
    },
    {
        "day": "Monday",
        "date": "October 16",
        "talks": [
            {
                "time": "11am - 5pm",
                "name": "General Admission Exhibition",
                "content": "Embark on an immersive journey to reinvent your contribution to a collective utopia, and feel the beauty of the community.",
                "url": "https://blog.mozilla.org/en/mozilla/is-the-future-of-the-web-open/"
            },
            {
                "time": "7pm - 11pm",
                "name": "CTRL: Celebrating People Who Challenge The Default",
                "content": "How does one challenge their industry? A mix of inspiring tech, culture, or fashion challengers will gather and celebrate the release of a book dedicated to them, CTRL.",
                "inviteOnly": true
            }
        ]
    },
];

export const EventsList = () => {
    const defaultTabIndex = 0;
    const [tabIndex, setTabIndex] = useState(defaultTabIndex);
    const currentEvent = events[tabIndex];

    const handleTabsChange = (index: number) => {
        setTabIndex(index);
    };

    const handleTalkClick = (talk: Talk) => {
        gtag.event({
            action: talk.name,
            category: "Ticket link click"
        })
    }

    if (!events || events.length === 0) {
        return null;
    }

    return (
        <div id="agenda" className={`${eventColors[getColorIndex(tabIndex)]} text-black section section--xl`}>
            <div className="container container--xl">

                <div className="flex justify-center lg:hidden mb-6">
                    <Menu>
                        <MenuButton>
                            <span>
                                {`${currentEvent.day}, ${currentEvent.date}`}
                            </span>
                            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.25 1.75L6.5 7L11.75 1.75" stroke="#9595A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </MenuButton>
                        <MenuList>
                            {events.map((event, index) => (
                                <MenuItem key={index} onSelect={() => handleTabsChange(index)}>{`${event.day}, ${event.date}`}</MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </div>

                <Tabs defaultIndex={defaultTabIndex} orientation="vertical" index={tabIndex} onChange={handleTabsChange}>
                    <TabList>
                        {events.map((event, index) => (
                            <Tab key={index}>
                                <span className={`event-tab flex flex-col items-end`}>
                                    <span className={`event-tab-day`}>{event.day}</span>
                                    <span className={`event-tab-date`}>{event.date}</span>
                                </span>
                            </Tab>
                        ))}
                    </TabList>

                    <TabPanels>
                        {events.map((event, index) => (
                            <TabPanel key={index}>
                                <span className={`event-talks flex flex-col items-start`}>
                                    {event.talks.map((talk, index) => (
                                        <div key={index} className={`event-talk`}>
                                            <span className="event-talk-time">{talk.time}</span>
                                            <div className="event-talk-inner">
                                                <h3 className={`event-talk-name`}>{talk.name}</h3>
                                                <p>{talk.content}</p>
                                                {talk.url && (
                                                    <Link className={`btn btn-primary`} onClick={() => handleTalkClick(talk)} href={talk.url} target="_blank" rel="noreferrer noopener">Get the tickets</Link>
                                                )}
                                                {talk.inviteOnly && (
                                                    <p className={`event-talk-invite-only`}>[Invite Only]</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </span>
                            </TabPanel>
                        ))}
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    )
}