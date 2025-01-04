import Footer from "../../pages/Footer";
import Navbar from "../Navbar/Navbar";
import HeadingSatu from "../../Elements/Text/HeadingSatu";
import Paragraf from "../../Elements/Text/Paragraf";
import CardLayanan from "./CardLayanan";

export default function Layanan() {
    return(
        <div id="layanan" className="bg-ccream font-poppins pt-10 h-auto">
            <Navbar />
            <div className="px-10 pb-20">
                <HeadingSatu>Apa Yang Janji Suci Seserahan Tawarkan?</HeadingSatu>

                <Paragraf
                    mt="mt-2"  
                >
                    Kami hadir sebagai solusi untuk memenuhi kebutuhan dekorasi dan penyewaan seserahan yang elegan dan bermakna. Percayakan seserahan anda kepada kami untuk menjadikan setiap momen istimewa lebih berkesan
                </Paragraf>

                <CardLayanan />
            </div>
            <Footer />
        </div>
    );
}