import { useState } from "react";
import IconRadio from "../../../Elements/Icon/IconRadio";
import TextProject from "../TextProject";
import BoxRiview from "./BoxRiview";

export default function Riview() {
    const listRiview = [
        {
            name: "kami berkomitmen untuk menjadikan setiap momen spesial Anda lebih berkesan dengan sentuhan terbaik kami",
            imgRiview: "/image/jewelrybox.png",
            text: "dilla"
        },
        {
            name: "kami berkomitmen untuk menjadikan setiap momen spesial Anda lebih berkesan dengan sentuhan terbaik kami",
            text: "dillo"
        },
        {
            name: "kami berkomitmen untuk menjadikan setiap momen spesial Anda lebih berkesan dengan sentuhan terbaik kami",
            imgRiview: "/image/jewelrybox.png",
            text: "dilli"
        },
        {
            name: "kami berkomitmen untuk menjadikan setiap momen spesial Anda lebih berkesan dengan sentuhan terbaik kami",
            imgRiview: "/image/jewelrybox.png",
            text: "fatur"
        },
        {
            name: "kami berkomitmen untuk menjadikan setiap momen spesial Anda lebih berkesan dengan sentuhan terbaik kami",
            text: "fator"
        },
        {
            name: "kami berkomitmen untuk menjadikan setiap momen spesial Anda lebih berkesan dengan sentuhan terbaik kami",
            imgRiview: "/image/jewelrybox.png",
            text: "fatir"
        },
        {
            name: "kami berkomitmen untuk menjadikan setiap momen spesial Anda lebih berkesan dengan sentuhan terbaik kami",
            imgRiview: "/image/jewelrybox.png",
            text: "izza"
        },
        {
            name: "kami berkomitmen untuk menjadikan setiap momen spesial Anda lebih berkesan dengan sentuhan terbaik kami",
            text: "izzo"
        },
        {
            name: "kami berkomitmen untuk menjadikan setiap momen spesial Anda lebih berkesan dengan sentuhan terbaik kami",
            imgRiview: "/image/jewelrybox.png",
            text: "izzi"
        },
    ]

    const [currentPage, setCurrentPage] = useState(0);
    const displayRiview = listRiview.slice(currentPage *3, currentPage * 3 + 3);

    return(
        <div>
            <TextProject 
                textheading="Review Eksklusif Dari Project Janji Suci Seserahan"
            >
                Para pelanggan kami memberikan tinjauan tentang kualitas dan keunggulan layanan seserahan yang ditawarkan oleh Janji Suci Seserahan. Review ini mencakup pengalaman pelanggan, detail tentang pilihan paket, serta kesan keseluruhan dari proyek ini, memberikan gambaran yang lebih jelas bagi calon pelanggan yang tertarik
            </TextProject>

            <div className="px-10 text-ccream mt-8">
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {displayRiview.map((item, index) => (
                            <BoxRiview key={index} imgRiview={item.imgRiview} text={item.text}>
                                {item.name}
                            </BoxRiview>
                        ))}
                    </div>
                </div>

                <div className="text-cmaroon flex justify-center mt-8 cursor-pointer gap-2">
                    {[0, 1, 2].map((index) => (
                        <div key={index} className={`transition-opacity duration-300 ${currentPage === index ? "opacity-100" : "opacity-50"}`} onClick={() => setCurrentPage(index)}>
                            <IconRadio/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}