import Footer from "../../pages/Footer";
import Navbar from "../Navbar/Navbar";
import TotalProject from "./TotalProject/TotalProject";
import ScrollToHash from "../../pages/ScrollToHash";
import BoxProject from "./BoxProject/BoxProject";
import TextProject from "./TextProject";
import BoxRiview from "./Riview/BoxRiview";
import Riview from "./Riview/RIview";

export default function Project() {
    const listTotalProject = [
        {
            name: "8+",
            roundedtr: "rounded-tr-none",
            roundedbr: "rounded-br-none",
            text: "project"
        },
        {
            name: "3+",
            border: "border-r-0",
            roundedtr: "rounded-tr-none",
            roundedbr: "rounded-br-none",
            roundedtl: "rounded-tl-none",
            roundedbl: "rounded-bl-none",
            text: "project"
        },
        {
            name: "5+",
            border: "border-l-8",
            roundedtl: "rounded-tl-none",
            roundedbl: "rounded-bl-none",
            text: "project"
        },
    ]

    const listTitleProject = [
        {
            name: "Project"
        },
        {
            name: "Janji Suci Seserahan",
            pt: "pt-0",
            lh: "leading-normal"
        },
    ]

    return(
        <div id="project" className="bg-ccream font-poppins h-auto">
            <div className="bg-project bg-no-repeat relative h-auto w-full bg-center bg-cover py-10">
                <Navbar />

                <div className="flex flex-col justify-center items-center pt-24 pb-32 cust5:py-36 cust5:pt-20 cust3:pb-32 cust3:pt-24">
                    <div className="text-cmaroon px-12 sm:px-10">
                        {listTitleProject.map((item, index) => (
                            <TitleProject key={index} pt={item.pt} lh={item.lh}>
                                {item.name}
                            </TitleProject>
                        ))}
                    </div>
                </div>

                <div className="absolute rounded-lg h-28 sm:h-40 w-full lg:w-[850px] px-4 sm:px-10 lg:px-0 left-1/2 transform -translate-x-1/2 -bottom-14 sm:-bottom-20 grid grid-cols-3">
                    {listTotalProject.map((item, index) => (
                        <TotalProject key={index} border={item.border} roundedtr={item.roundedtr} roundedbr={item.roundedbr} roundedtl={item.roundedtl} roundedbl={item.roundedbl} text={item.text}>
                            {item.name} 
                        </TotalProject>
                    ))}
                </div>
            </div>

            <div className="mt-32 px-10 flex justify-center bg-ccream">
                <h1 className="text-2xl text-cmaroon">★★★★★</h1>
            </div>

            <TextProject 
                textheading="Project Janji Suci Seserahan Yang Berkesan"
            >
                Halaman project Janji Suci Seserahan menampilkan koleksi eksklusif layanan seserahan untuk berbagai acara spesial. Halaman ini dirancang untuk mempermudah calon pelanggan dalam memilih paket seserahan sesuai tema, anggaran, dan preferensi mereka
            </TextProject>

            <BoxProject />

            <Riview />

            <div className="mt-28">
                <Footer />
            </div>

            <ScrollToHash />
        </div>
    );
}

function TitleProject(props) {
    const { pt="pt-5" , lh , children } = props;

    return(
        <h1 style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2), -1px -1px 2px rgba(255, 255, 255, 0.6)'}} className={`${pt} ${lh} text-5xl cust5:text-6xl text-center pb-3 font-extrabold`}>
            {children}
        </h1>
    );
}