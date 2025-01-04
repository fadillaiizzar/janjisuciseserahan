import CopyFooter from "../Layouts/Footer/CopyFooter";
import LogoFooter from "../Layouts/Footer/LogoFooter";
import NavFooter from "../Layouts/Footer/NavFooter";
import QuickFooter from "../Layouts/Footer/QuickFooter";
import ServFooter from "../Layouts/Footer/ServFooter";

export default function Footer() {
    return(
        <div className="bg-cmaroon px-10 pt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 border-b-2 pb-6">
                <LogoFooter />

                <div className="mt-5 lg:mt-0">
                    <div className="grid grid-cols-1 cust2:grid-cols-2 sm:grid-cols-3">
                        <NavFooter />
                        <QuickFooter />
                        <ServFooter />
                    </div>
                </div>
            </div>
            
            <CopyFooter />
        </div>
    );
}