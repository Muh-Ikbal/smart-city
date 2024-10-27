import Image from "next/image";
import localFont from "next/font/local";
import Hero from "../components/Hero";
import NavbarSection from "@/components/NavbarSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-white font-sans">
            <NavbarSection/>
            <Hero />
            <AboutSection/>
        </main>
    );
}
