'use client'

import React, { useState } from "react"
import Link from 'next/link';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import { Event, Talk } from "./types";

import {
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
} from "@reach/menu-button";

import * as gtag from "../../../../lib/gtag";
import { CaretDown, CaretUp } from "../icons";
import "@reach/tabs/styles.css";
import "@reach/menu-button/styles.css";

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

interface EventsListProps {
    events: Event[];
    misc: {
        buttonText: string;
        inviteOnlyText: string;
    };
}

export const EventsList = ({ events, misc }: EventsListProps) => {
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
                        {({ isExpanded }) => (
                            <>
                                <MenuButton>
                                    <span>
                                        {`${currentEvent.day}, ${currentEvent.date}`}
                                    </span>
                                    {isExpanded ? <CaretUp /> : <CaretDown />}
                                </MenuButton>
                                <MenuList>
                                    {events.map((event, index) => (
                                        <MenuItem key={index} onSelect={() => handleTabsChange(index)}>{`${event.day}, ${event.date}`}</MenuItem>
                                    ))}
                                </MenuList>
                            </>
                        )}
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
                                                    <Link className={`btn btn-primary`} onClick={() => handleTalkClick(talk)} href={talk.url} target="_blank" rel="noreferrer noopener">{misc.ticketButtonText}</Link>
                                                )}
                                                {talk.inviteOnly && (
                                                    <p className={`event-talk-invite-only`}>[{misc.inviteOnlyText}]</p>
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