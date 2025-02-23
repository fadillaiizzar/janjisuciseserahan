import Konten from "../../Layanan/Konten";
import GoogleMaps from "./GoogleMaps";

export default function Lokasi() {
return (
<>
    <div className="rounded-lg">
        <div className=" mb-2">
            <Konten
            textparagraf="Klik peta di bawah untuk melihat lokasi dan mendapatkan panduan arah"
            pt="pt-0"
            >
            Temukan Kami Dengan Mudah
            </Konten>
        </div>

        <div className="rounded-lg mt-4">
            <GoogleMaps />
        </div>
    </div>
</>
);
}
