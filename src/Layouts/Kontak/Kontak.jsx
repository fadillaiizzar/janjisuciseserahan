import Footer from "../../pages/Footer";
import Navbar from "../Navbar/Navbar";
import ScrollToHash from "../../pages/ScrollToHash";
import InformasiKontak from "./Informasi Kontak/InformasiKontak";
import Form from "./Hubungi Lebih Lanjut/Form";
import Lokasi from "./Lokasi Kontak/Lokasi";

export default function Kontak() {
return (
<div id="kontak" className="bg-ccream font-poppins pt-10 h-auto">
    <Navbar />

    <div className="px-10">
    <InformasiKontak />

    <div className="mt-14 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        <Form />
        <Lokasi />
        </div>
    </div>
    </div>

    <div className="mt-24">
    <Footer />
    </div>

    <ScrollToHash />
</div>
);
}
