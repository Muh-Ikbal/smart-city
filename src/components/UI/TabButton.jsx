import React from "react";
import Image from "next/image";

const TabButton = ({ selectTab, active, children, icon }) => {
    const isActive = active ? "bg-[#3A9DC2] text-white" : "bg-white";

    return (
        <button
            onClick={selectTab}
            className={`${isActive} flex items-center gap-2 justify-center h-16 w-52 border-b-8 border-b-[#3A9DC2] rounded-md border-[1px]`}
        >
            <Image src={icon} alt="alt" width={33} height={33} />
            {children}
        </button>
    );
};

export default TabButton;
