"use client"

import Image from "next/image";
import Containers from "../containers"
import Link from "next/link";
import { useState } from "react";
import { easeInOut, motion, useMotionValueEvent, useScroll } from "framer-motion";

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
                    width: scrolled ? "65%" : "100%",
                    y: scrolled ? "10%" : "0%"
                }}
                transition={{
                    duration: 0.1,
                    ease:linear
                }}
                className="fixed inset-x-0 top-0 mx-auto flex  max-w-4xl items-center justify-between py-2 px-4">


                <Image className="rounded-full cursor-pointer h-11 w-9" src={"/logo.png"} alt="Logo" width={100} height={100} />


                <div className="flex flex-center ">

                    {Navitems.map((item, index) => {
                        return <Link className=" relative  px-2 py-1 text-sm" key={index} href={item.href}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => {
                                setHovered(null);
                            }}
                        >

                            {hovered === index && (
                                <motion.span className="absolute inset-0 rounded-mg h-full w-full bg-neutral-100 dark:bg-neutral-200"
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