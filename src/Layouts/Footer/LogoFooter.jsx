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
                Kami berkomitmen untuk menjadikan setiap momen spesial Anda lebih berkesan dengan sentuhan terbaik kami
            </Paragraf>
        </div>
    );
}