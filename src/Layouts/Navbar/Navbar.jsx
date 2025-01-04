import { useState } from "react";
import ListNav from "./ListNav";

export default function Navbar() {
    const navItems = [
        { link: "/" ,  name: "Beranda" , spanicon: "cottage"},
        { link: "/layanan" ,  name: "Layanan" , spanicon: "heart_plus"},
        { link: "/project" ,  name: "Project" , spanicon: "tactic"},
        { link: "/perhatian" ,  name: "Perhatian" , spanicon: "pulse_alert"},
        { link: "/kontak" ,  name: "Kontak" , spanicon: "contacts_product"},
    ];

    const [menuOpen , setMenuOpen] = useState(false);
    const iconmenu = () => {
        setMenuOpen(!menuOpen);
    }

    return(
        <>
            <div className="hidden md:flex justify-center px-10">
                <ul className="bg-cmaroon text-ccream shadow-2xl font-semibold flex gap-4 py-3 px-12 rounded-tl-full rounded-br-full">
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
                <ul className="bg-cmaroon text-ccream text-lg text-center w-full font-semibold flex flex-col gap-4 py-6 px-12 rounded-lg shadow-xl">
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