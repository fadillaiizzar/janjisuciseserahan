import Footer from "../../pages/Footer";
import Navbar from "../Navbar/Navbar";
import ScrollToHash from "../../pages/ScrollToHash";

export default function Attention() {
    return(
        <div id="perhatian" className="bg-ccream font-poppins pt-10 h-screen">
            <Navbar />

            <div className="mt-10">
                <Footer />
            </div>

            <ScrollToHash />
        </div>
    );
}