import Paragraf from "../../Elements/Text/Paragraf";
import { Link } from "react-router-dom";

export default function QuickFooter() {
    const listNav = [
        { name: "Layanan" , textcolor: "text-ccream" , fontsize: "text-xl" },
        { name: "Pilihan Unggulan" , textcolor: "text-ccream" , mt: "mt-2" , link: "/#unggul" },
        { name: "Layanan" , textcolor: "text-ccream" , link: "/layanan#layanan" },
        { name: "Project" , textcolor: "text-ccream" , link: "/project" },
    ];
    
    return(
        <div className="flex flex-col lg:text-center mt-5 cust2:mt-0">
            {listNav.map((item, index) => (
                item.link ? (
                    <Link 
                        key={index} 
                        to={item.link} 
                        className={`${item.textcolor} ${item.mt || ""}`}
                    >
                        <Paragraf 
                            textcolor={item.textcolor} 
                            fontsize={item.fontsize}
                        >
                            {item.name}
                        </Paragraf>
                    </Link>
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