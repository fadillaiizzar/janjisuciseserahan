import ImgSucces from "../Succes/ImgSucces";
import TextCardLayanan from "./TextCardLayanan";

export default function DetailCardLayanan() {
    return(
        <div className="flex justify-center items-center gap-5 px-0 lg:px-10">
            <div className="rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="px-0 md:px-10 xl:pr-0 flex justify-center items-center">
                        <ImgSucces 
                            shadow="shadow-2xl"
                            
                        />
                    </div>
                    
                    <div className=" flex items-center text-center lg:text-left">
                        <TextCardLayanan 
                            text="Hias, Ring Box, Jewelry Box"
                            px="lg:pr-5"
                            pr="xl:pr-24"
                        >
                            Kami menawarkan jasa hias seserahan dengan desain elegan yang memadukan elemen tradisional dan modern sesuai tema acara yang diimpikan. Dengan bahan berkualitas seperti kain satin, bunga premium, dan aksesori dekoratif, kami memastikan hasil yang memukau dan berkesan untuk momen spesial anda
                        </TextCardLayanan>
                    </div>
                </div>
            </div>
        </div>
    );
}