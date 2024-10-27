"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";

const navbarLink = [
    {
        title: "Tentang Kami",
        path: "#about",
    },
    {
        title: "Layanan",
        path: "#service",
    },
    {
        title: "Blog",
        path: "#blog",
    },
];

const NavbarSection = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolTop = window.scrollY;
            if (scrolTop > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled ? "bg-white shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="flex flex-wrap w-full items-center justify-between mx-auto p-4">
                <div className="flex gap-4 items-center">
                    <Link href={"/"} className="">
                        <Image
                            src="/image/logo.png"
                            alt="alt"
                            width={60}
                            height={60}
                        />
                    </Link>
                    <div className="menu hidden md:block md:w-auto" id="navbar">
                        <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
                            {navbarLink.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        href={link.path}
                                        title={link.title}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="text-black flex items-center px-3 py-2 rounded border border-black"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="text-black flex items-center px-3 py-2 rounded border border-black"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="hidden sm:block">
                    <div className="flex  items-center justify-center h-[57px] w-[170px] cursor-pointer rounded-xl bg-[#3A9DC2] text-center hover:text-white">
                        <NavLink href={"#contact"} title={"Hubungi Kami"} />
                    </div>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navbarLink} /> : null}
        </nav>
    );
};

export default NavbarSection;
