import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./UI/TabButton";
import pilarSmartCity from "@/data/pilarSmartCity";
import { Swiper, SwiperSlide } from "swiper/react";
const AboutSection = () => {
    const [tab, setTab] = useState("governance");
    const [isPending, startTransition] = useTransition();
    const handleChange = (id) => {
        startTransition(() => {
            console.log("Tab changed to:", id);
            setTab(id);
        });
    };

    return (
        <section className="mt-10">
            <div className="relative flex flex-col items-center">
                <div className="z-20 flex flex-col items-center">
                    <h1 className="py-8 text-[#343F52] text-4xl sm:text-5xl lg:text-5xl font-sans text-center relative mx-auto">
                        Tentang Kami
                        <div className="border-[3px] border-[#FAB758] w-24 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-2"></div>
                    </h1>

                    <p className="w-2/4 sm:w-3/4 text-center pt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora, animi similique, id enim quisquam facilis cum
                        hic aliquam deserunt, laborum quod ad velit culpa quos
                        corrupti. Quidem ut minima explicabo!
                    </p>
                </div>

                <Image
                    src="/image/Mask group.png"
                    alt="alt"
                    width={200}
                    height={200}
                    className="w-24  sm:w-52 absolute right-14"
                />
            </div>
            <div className="md:grid md:grid-cols-2 gap-5 py-16 px-4 items-center">
                <div className="">
                    <p className="text-base lg:text-lg">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dignissimos est officiis ratione exercitationem,
                        voluptatibus fugiat maiores illo suscipit minima ipsum
                        aspernatur, odit voluptate nemo. Tempora officia enim
                        voluptates repudiandae repellat!
                    </p>
                </div>
                <Image
                    src="/image/about-image.png"
                    alt="alt"
                    width={500}
                    height={378.5}
                />
            </div>

            <div className="bg-[#C7E8F9] bg-opacity-30 relative">
                <div className="hidden sm:flex pt-20 flex-wrap gap-4 items-center justify-center">
                    {pilarSmartCity.map((value, index) => (
                        <TabButton
                            key={index}
                            icon={value.icon}
                            selectTab={() => {
                                handleChange(value.id);
                            }}
                            active={tab === value.id}
                        >
                            {value.title}{" "}
                        </TabButton>
                    ))}
                </div>
                <div className="mt-16 ms-2 sm:ms-10 pt-8">
                    {pilarSmartCity.find((t)=>t.id==tab).content}
                </div>
                <Image
                    src="/image/background-pilar.png"
                    className="relative bottom-0"
                    alt="alt"
                    width={1359.56}
                    height={169.51}
                />
            </div>
        </section>
    );
};

export default AboutSection;
