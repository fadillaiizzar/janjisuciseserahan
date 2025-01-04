import Paragraf from "../../Elements/Text/Paragraf";

export default function ServFooter() {
    const listNav = [
        { name: "Kontak" , textcolor: "text-ccream" , fontsize: "text-xl" , h: "h-auto" },
        { name: "Perhatian" , textcolor: "text-ccream" , mt: "mt-2" , href: "#attention" },
        { name: "Kontak" , textcolor: "text-ccream" , href: "#kontak" },
    ];
    
    return(
        <div className="flex flex-col lg:text-center mt-5 sm:mt-0">
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
                        h={item.h}
                    >
                        {item.name}
                    </Paragraf>
                )
            ))}
        </div>
    );
}