"use client"

import Image from "next/image";
import Containers from "../containers"
import Link from "next/link";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {
    const Navitems = [
        {
            title: "About",
            href: "/about"
        },
        {
            title: "Projects",
            href: "/projects"
        },
        {
            title: "Contact",
            href: "/contact"
        },
        {
            title: "Blog",
            href: "/blog"
        }
    ];

    const [hovered, setHovered] = useState<number | null>(null);
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 20) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    });







    return (
        <Containers>
            <motion.nav
                animate={{
                    boxShadow: scrolled ? "var(--shadow-element)" : "none",
                    width: scrolled ? "50%" : "70%",
                    y: scrolled ? 6 : 0
                }}
                transition={{
                    duration: 0.2,
                    ease: "linear"
                }}
                className="fixed inset-x-0 top-0 mx-auto flex max-w-5xl items-center justify-between py-3 px-4 rounded-full bg-white/80 backdrop-blur-md z-50">


                <Image className="rounded-full cursor-pointer h-11 w-9" src={"/logo.png"} alt="Logo" width={100} height={100} />


                <div className="flex items-center justify-center">
                    {Navitems.map((item, index) => {
                        return <Link className="relative px-2 py-1 text-sm" key={index} href={item.href}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => {
                                setHovered(null);
                            }}
                        >

                            {hovered === index && (
                                <motion.span className="absolute inset-0 rounded-md h-full w-full bg-neutral-100 dark:bg-neutral-200"
                                    layoutId="hovered-span"
                                />
                            )}
                            <span className="relative z-11">
                                {item.title}
                            </span>
                        </Link>


                    })}
                </div>
            </motion.nav>
        </Containers>
    )
}