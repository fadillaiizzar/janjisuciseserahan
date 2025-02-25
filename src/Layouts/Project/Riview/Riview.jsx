import { useState } from "react";
import IconRadio from "../../../Elements/Icon/IconRadio";
import TextProject from "../TextProject";
import BoxRiview from "./BoxRiview";

export default function Riview() {
    const listRiview = [
        {
            name: "Seserahannya cantik dan elegan! Packaging rapi, detailnya keren, dan hasilnya memukau",
            imgRiview: "/image/jewelrybox.png",
            text: "Alya & Zidan"
        },
        {
            name: "Pelayanan ramah, pengerjaan cepat, dan hasilnya sangat memuaskan",
            text: "Dewi & Ilham"
        },
        {
            name: "Dekorasi seserahannya mewah dan rapi! Keluarga terkesan, hasilnya sangat indah",
            imgRiview: "/image/jewelrybox.png",
            text: "Nadia & Fajar"
        },
        {
            name: "Pilihan banyak, bisa custom sesuai keinginan. Hasilnya bagus dan bikin acara spesial",
            imgRiview: "/image/jewelrybox.png",
            text: "Sinta & Reza"
        },
        {
            name: "Harga bersahabat, kualitas premium, dan detailnya elegan. Hasilnya sangat memukau",
            text: "Melati & Rizky"
        },
        {
            name: "Semua tertata rapi dari warna hingga konsep. Dekorasi detail dan tampak sangat estetik",
            imgRiview: "/image/jewelrybox.png",
            text: "Rina & Aldo"
        },
        {
            name: "Eksekusi rapi, hasil eksklusif, dan jadi pusat perhatian. Sangat puas dengan pelayanannya",
            imgRiview: "/image/jewelrybox.png",
            text: "Lisa & Bayu"
        },
        {
            name: "Tim profesional, komunikatif, dan selalu update progress. Seserahannya luar biasa indah",
            text: "Tari & Evan"
        },
        {
            name: "Pelayanan hingga hasilnya sangat memuaskan dan recommended",
            imgRiview: "/image/jewelrybox.png",
            text: "Indah & Rendy"
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
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