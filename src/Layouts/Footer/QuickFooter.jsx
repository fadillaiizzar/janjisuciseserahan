import Paragraf from "../../Elements/Text/Paragraf";

export default function QuickFooter() {
    const listNav = [
        { name: "Layanan" , textcolor: "text-ccream" , fontsize: "text-xl" },
        { name: "Best Seller" , textcolor: "text-ccream" , mt: "mt-2" , href: "#best" },
        { name: "Layanan" , textcolor: "text-ccream" , href: "#layanan" },
        { name: "Project" , textcolor: "text-ccream" , href: "#project" },
    ];
    
    return(
        <div className="flex flex-col lg:text-center mt-5 cust2:mt-0">
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