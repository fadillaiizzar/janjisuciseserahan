import { useState } from "react";
import ListNav from "./ListNav";

export default function Navbar() {
    const navItems = [
        { link: "https://socialse.vercel.app" ,  name: "Layanan" , spanicon: "heart_plus"},
        { link: "https://socialse.vercel.app" ,  name: "Project" , spanicon: "tactic"},
        { link: "https://socialse.vercel.app" ,  name: "Perhatian" , spanicon: "pulse_alert"},
        { link: "https://socialse.vercel.app" ,  name: "Kontak" , spanicon: "contacts_product"},
    ];

    const [menuOpen , setMenuOpen] = useState(false);
    const iconmenu = () => {
        setMenuOpen(!menuOpen);
    }

    return(
        <>
            <div className="hidden md:flex justify-center px-10">
                <ul className="bg-cmaroon text-ccream font-semibold flex gap-4 border-2 py-3 px-12 rounded-tl-full rounded-br-full">
                    {navItems.map((item, index) => (
                        <ListNav key={index} link={item.link}>
                            {item.name}
                        </ListNav>
                    ))}
                </ul>
            </div>

            <div className="flex md:hidden justify-end mr-10 cursor-pointer" onClick={iconmenu}>
                <span className="material-symbols-outlined text-3xl">
                    filter_list
                </span>
            </div>

            <div className={`${menuOpen ? "block" : "hidden"} flex md:hidden px-10 mt-8`}>
                <ul className="bg-cmaroon text-ccream text-lg text-center w-full font-semibold flex flex-col gap-4 border-2 py-6 px-12 rounded-lg">
                    {navItems.map((item, index) => (
                        <ListNav key={index} link={item.link} spanicon={item.spanicon}>
                            {item.name}
                        </ListNav>
                    ))}
                </ul>
            </div>
        </>
    );
}