import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
    return (
        <div className="p-2 bg-[#3A9DC2] bg-opacity-70 relative">
            <ul className="flex flex-col py-4 items-center xl:hidden text-white">
                {links.map((link, index) => (
                    <div key={index}>
                        <li>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                        <div className="h-[1px] w-full absolute left-0 bg-white"></div>
                    </div>
                ))}
                <li>
                    <div className="flex mt-3  items-center justify-center h-[57px] w-[170px] cursor-pointer rounded-xl bg-[#3A9DC2] text-center hover:text-white">
                        <NavLink href={"#contact"} title={"Hubungi Kami"} />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default MenuOverlay;
