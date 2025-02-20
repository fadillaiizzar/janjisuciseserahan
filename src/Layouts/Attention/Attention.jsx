import Footer from "../../pages/Footer";
import Navbar from "../Navbar/Navbar";
import ScrollToHash from "../../pages/ScrollToHash";
import Konten from "../Layanan/Konten";
import HeadingSatu from "../../Elements/Text/HeadingSatu";

export default function Attention() {
    return(
        <div id="perhatian" className="bg-ccream font-poppins pt-10 h-auto">
            <Navbar />

            <div className="px-10 my-14">
                <div>
                    <div className="flex items-center justify-center relative">
                        <img src="/image/flower.png" alt="image attention" className="w-80 sm:w-[450px] h-80 sm:h-[450px] rounded-full" />
                        <div className="bg-cmaroon absolute w-48 sm:w-[265px] h-48 sm:h-[265px] rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                            <HeadingSatu
                                pt = "0"
                                textcolor = "text-ccream"
                                fontsize = "sm:text-3xl"
                                position = "text-2xl"
                            >
                                Perhatian!
                            </HeadingSatu>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <Footer />
            </div>

            <ScrollToHash />
        </div>
    );
}