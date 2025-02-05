import Footer from "../../pages/Footer";
import Navbar from "../Navbar/Navbar";
import HeadingSatu from "../../Elements/Text/HeadingSatu";
import Paragraf from "../../Elements/Text/Paragraf";
import CardLayanan from "./CardLayanan";
import ScrollToHash from "../../pages/ScrollToHash";
import CardKepercayaan from "./Kepercayaan/CardKepercayaan";

export default function Layanan() {
    return(
        <div id="layanan" className="bg-ccream font-poppins pt-10 h-auto">
            <div className="pb-28">
                <Navbar />

                <div className="px-10">
                    <HeadingSatu>Layanan Apa Yang Janji Suci Seserahan Tawarkan?</HeadingSatu>

                    <Paragraf
                        mt="mt-2"  
                    >
                        Kami hadir sebagai solusi untuk memenuhi kebutuhan dekorasi dan penyewaan seserahan yang elegan dan bermakna. Percayakan seserahan anda kepada kami untuk menjadikan setiap momen istimewa lebih berkesan
                    </Paragraf>

                    <CardLayanan />
                    <ScrollToHash />
                </div>

                <div id="kepercayaan" className="px-10">
                    <HeadingSatu
                        pt="pt-16"
                    >
                        Alasan Janji Suci Seserahan Layak Mendampingi Momen Anda
                    </HeadingSatu>

                    <Paragraf
                        mt="mt-2"  
                    >
                        Kami adalah mitra terpercaya dengan kualitas terbaik, layanan profesional, dan perhatian penuh pada setiap detail agar hasil elemen sempurna sesuai harapan. Kami tidak hanya menyediakan jasa, tetapi juga menghadirkan pengalaman yang meninggalkan kesan mendalam di hati anda
                    </Paragraf>

                    <CardKepercayaan />
                </div>
            </div>

            <Footer />
        </div>
    );
}