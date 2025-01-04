import Paragraf from "../../Elements/Text/Paragraf";

export default function LogoFooter() {
    return(
        <div className="flex flex-col">
            <Paragraf
                textcolor="text-ccream"  
                fontsize="text-xl"
                h="h-auto"
            >
                Janji Suci Seserahan
            </Paragraf>

            <Paragraf 
                mt="mt-2"
                textcolor="text-ccream"
            >
                Kami menawarkan layanan dekorasi dan penyewaan seserahan elegan yang menjadikan momen spesial lebih berkesan. Percayakan kebutuhan seserahan kepada kami dan buat setiap momen lebih berarti
            </Paragraf>
        </div>
    );
}