import { useState, useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import gsap from "gsap";
import { useMediaQuery } from "usehooks-ts";

import Link from "next/link";
import Burger from "../Buttons/Burger";

// Links to be displayed in the header
const nav_links: Array<{ label: string; link: string }> = [
    {
        label: "About me",
        link: "/about",
    },
    {
        label: "Projects",
        link: "/projects",
    },
    {
        label: "Contact",
        link: "/contact",
    },
];

const Header = () => {
    const headerRef = useRef<HTMLElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const matches = useMediaQuery("(max-width: 768px)");

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.to(".letters span", {
                opacity: 0,
                duration: 0.2,
                stagger: 0.15,
            });
            tl.to(".letters", {
                width: 0,
            });
            tl.to(
                ".dot",
                {
                    opacity: 1,
                },
                ">0.5"
            );
        }, headerRef);

        return () => ctx.clear();
    });

    return (
        <header className={`header`} ref={headerRef}>
            <nav className="nav wrapper">
                <Link href="/" className="logo">
                    <span className="word">
                        <span className="first-letter">C</span>

                        <span className="letters">
                            <span>r</span>
                            <span>i</span>
                            <span>s</span>
                            <span>t</span>
                            <span>i</span>
                            <span>a</span>
                            <span>n</span>
                        </span>
                    </span>
                    <span className="word">
                        <span className="first-letter">C</span>

                        <span className="letters">
                            <span>o</span>
                            <span>p</span>
                            <span>p</span>
                            <span>a</span>
                            <span>r</span>
                            <span>i</span>
                        </span>
                    </span>

                    <span className="dot">.</span>
                </Link>

                <Burger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />

                <div
                    className={`nav-list-wrapper ${
                        isOpen && matches ? "--active" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                >
                    <ul className="nav-list">
                        {nav_links.map((link, i) => {
                            return (
                                <li key={i} className="nav-item">
                                    <Link href={link.link} className="nav-link">
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
