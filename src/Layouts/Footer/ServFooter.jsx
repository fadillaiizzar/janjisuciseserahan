import Paragraf from "../../Elements/Text/Paragraf";
import { Link } from "react-router-dom";

export default function ServFooter() {
    const listNav = [
        { name: "Kontak" , textcolor: "text-ccream" , fontsize: "text-xl" , h: "h-auto" },
        { name: "Perhatian" , textcolor: "text-ccream" , mt: "mt-2" , link: "/perhatian#perhatian" },
        { name: "Kontak" , textcolor: "text-ccream" , link: "/kontak#kontak" },
    ];
    
    return(
        <div className="flex flex-col lg:text-center mt-5 sm:mt-0">
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
                        h={item.h}
                    >
                        {item.name}
                    </Paragraf>
                )
            ))}
        </div>
    );
}