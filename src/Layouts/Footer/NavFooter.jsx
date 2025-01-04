import Paragraf from "../../Elements/Text/Paragraf";
import { Link } from 'react-router-dom';

export default function NavFooter() {
    const listNav = [
        { name: "Profile" , textcolor: "text-ccream" , fontsize: "text-xl" },
        { name: "Beranda" , textcolor: "text-ccream" , mt: "mt-2", link: "/#beranda" },
        { name: "Tentang Kami" , textcolor: "text-ccream" , link: "/#about" },
        { name: "Sukses" , textcolor: "text-ccream" , link: "/#sukses" },
    ];

    return (
        <div className="flex flex-col lg:text-center">
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
