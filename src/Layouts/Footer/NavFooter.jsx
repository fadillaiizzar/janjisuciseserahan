import Paragraf from "../../Elements/Text/Paragraf";

export default function NavFooter() {
    const listNav = [
        { name: "Profile" , textcolor: "text-ccream" , fontsize: "text-xl" },
        { name: "Beranda" , textcolor: "text-ccream" , mt: "mt-2", href: "#beranda" },
        { name: "Tentang Kami" , textcolor: "text-ccream" , href: "#about" },
        { name: "Sukses" , textcolor: "text-ccream" , href: "#sukses" },
    ];

    return (
        <div className="flex flex-col lg:text-center">
            {listNav.map((item, index) => (
                item.href ? (
                    <a
                        key={index}
                        href={item.href}
                        className={`${item.textcolor} ${item.mt || ""}`}
                    >
                        <Paragraf 
                            textcolor={item.textcolor} 
                            fontsize={item.fontsize}
                        >
                            {item.name}
                        </Paragraf>
                    </a>
                ) : (
                    <Paragraf
                        key={index}
                        textcolor={item.textcolor}
                        fontsize={item.fontsize}
                        mt={item.mt}
                    >
                        {item.name}
                    </Paragraf>
                )
            ))}
        </div>
    );
}
