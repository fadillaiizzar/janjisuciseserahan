import HeadingSatu from "../../Elements/Text/HeadingSatu";
import Footer from "../../pages/Footer";
import Navbar from "../Navbar/Navbar";
import TotalProject from "./TotalProject/TotalProject";

export default function Project() {
    const listTotalProject = [
        {
            name: "8+",
            roundedtr: "rounded-tr-none",
            roundedbr: "rounded-br-none",
            text: "project"
        },
        {
            name: "2+",
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
        <div className="bg-ccream font-poppins h-screen">
            <div className="bg-project bg-no-repeat relative h-[75vh] w-full bg-center bg-cover py-10">
                <Navbar />

                <div className="flex flex-col justify-center items-center py-20">
                    <div className="text-cmaroon px-10">
                        {listTitleProject.map((item, index) => (
                            <TitleProject key={index} pt={item.pt} lh={item.lh}>
                                {item.name}
                            </TitleProject>
                        ))}
                    </div>
                </div>

                <div className="absolute rounded-lg h-28 sm:h-40 w-3/4 left-1/2 transform -translate-x-1/2 -bottom-14 sm:-bottom-20 grid grid-cols-3">
                    {listTotalProject.map((item, index) => (
                        <TotalProject key={index} border={item.border} roundedtr={item.roundedtr} roundedbr={item.roundedbr} roundedtl={item.roundedtl} roundedbl={item.roundedbl} text={item.text}>
                            {item.name} 
                        </TotalProject>
                    ))}
                </div>
            </div>

            <div className="mt-40">
                <Footer />
            </div>
        </div>
    );
}

function TitleProject(props) {
    const { pt="pt-5" , lh , children } = props;

    return(
        <h1 style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2), -1px -1px 2px rgba(255, 255, 255, 0.6)'}} className={`${pt} ${lh} text-4xl text-center pb-3 max-w-sm font-semibold`}>
            {children}
        </h1>
    );
}