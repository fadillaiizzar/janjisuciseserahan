import Konten from "../../Layanan/Konten";
import { Link } from "react-router-dom";
import Sosmed from "./Sosmed";

export default function InformasiKontak() {
const sosmedItems = [
{ link: "https://wa.me/6281228564134", imgSosmed: "/image/sosmed/whatsapp.png" },
{ link: "https://www.tiktok.com/@janjisuci.id?is_from_webapp=1&sender_device=pc", imgSosmed: "/image/sosmed/tik-tok.png" },
{ link: "https://www.instagram.com/janjisuci.seserahan/", imgSosmed: "/image/sosmed/instagram.png" },
];

return (
<div className="grid grid-cols-1 lg:grid-cols-2 lg:[direction:ltr] gap-0 lg:gap-0">
    <div className="lg:order-1 order-2 flex flex-col justify-center">
    <div>
        <Konten
        textparagraf="Kami siap membantu mewujudkan kebutuhan anda dengan layanan terbaik dan perhatian pada setiap detail. Jangan ragu untuk menghubungi kami jika anda memiliki pertanyaan, membutuhkan konsultasi, atau ingin memesan layanan kami"
        pt="pt-0"
        >
        Kontak
        </Konten>
    </div>

    <div>
        <Konten
        textparagraf="Untuk informasi lebih lanjut atau pemesanan, anda dapat menghubungi kami melalui :"
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
        src="/image/kontak/logo js.png"
        className="w-full cust2:w-72 lg:w-[370px] h-full cust2:h-[420px] lg:h-[555px]"
        />
    </div>
    </div>
</div>
);
}
