import Konten from "../../Layanan/Konten";
import { Link } from "react-router-dom";
import Sosmed from "./Sosmed";

export default function InformasiKontak() {
const sosmedItems = [
{ link: "/", imgSosmed: "/image/whatsapp.png" },
{ link: "/", imgSosmed: "/image/tik-tok.png" },
{ link: "/", imgSosmed: "/image/instagram.png" },
];

return (
<div className="grid grid-cols-1 lg:grid-cols-2 lg:[direction:ltr] gap-0 lg:gap-0">
    <div className="lg:order-1 order-2 flex flex-col justify-center">
    <div>
        <Konten
        textparagraf="Kami adalah mitra terpercaya dengan kualitas terbaik, layanan profesional, dan perhatian penuh pada setiap detail agar hasil elemen sempurna sesuai harapan. Kami tidak hanya menyediakan jasa, tetapi juga menghadirkan pengalaman yang meninggalkan kesan mendalam di hati anda"
        pt="pt-0"
        >
        Kontak
        </Konten>
    </div>

    <div>
        <Konten
        textparagraf="Kami adalah mitra terpercaya dengan kualitas terbaik, layanan profesional, dan perhatian penuh pada setiap detail agar hasil elemen sempurna sesuai harapan. Kami tidak hanya menyediakan jasa, tetapi juga menghadirkan pengalaman yang meninggalkan kesan mendalam di hati anda"
        pt="pt-10"
        >
        Informasi Kontak
        </Konten>
    </div>

    <div className="mt-5">
        <div>
        <ul className="flex">
            {sosmedItems.map((items, index) => (
            <Sosmed
                key={index}
                link={items.link}
                imgSosmed={items.imgSosmed}
            />
            ))}
        </ul>
        </div>
    </div>
    </div>

    <div className="order-1 lg:order-2">
    <div className="flex items-center justify-center">
        <img
        src="/image/logo js.png"
        className="w-full cust2:w-72 lg:w-[370px] h-full cust2:h-[420px] lg:h-[555px]"
        />
    </div>
    </div>
</div>
);
}
