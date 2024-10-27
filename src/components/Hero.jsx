import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="">
            <div
                className="grid grid-cols-1 sm:grid-cols-12 w-full h-screen sm:h-auto overflow-hidden pt-5 sm:pt-4 lg:pt0 bg-cover sm:bg-contain"
                style={{
                    backgroundImage: "url('/image/hero-left.png')",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="sm:col-span-5 flex flex-col justify-center p-8 mt-5 lg:mt-2">
                    <h1 className="text-[#343F52]  drop-shadow-lg font-sans mb-6 text-4xl sm:text-5xl lg:text-6xl">
                        Layanan Smart City
                    </h1>
                    <p className="text-black mb-6 font-sans">
                        Smart City adalah konsep kota yang memanfaatkan
                        teknologi dan data untuk meningkatkan kualitas hidup
                        warganya, meningkatkan efisiensi layanan kota, dan
                        mengelola sumber daya secara lebih berkelanjutan.
                    </p>
                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button className="bg-[#3A9DC2] text-white py-2 px-6 rounded-lg hover:bg-[#20586c]">
                            Produk &rarr;
                        </button>
                        <button className="bg-[#3A9DC2] text-white  py-2 px-6 rounded-lg hover:bg-[#20586c]">
                            Mitra &rarr;
                        </button>
                    </div>
                </div>

                <div className=" none sm:block sm:col-span-7 place-self-end relative">
                    <div className="overflow-hidden ">
                        <Image
                            src="/image/hero-circle.png"
                            className="hidden sm:block absolute top-5 right-40"
                            alt="alt"
                            width={150}
                            height={150}
                        />
                        <Image
                            src="/image/hero.png"
                            alt="alt"
                            width={1200}
                            height={500}
                            className=" object-contain relative z-20 top-10 hidden sm:block"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
