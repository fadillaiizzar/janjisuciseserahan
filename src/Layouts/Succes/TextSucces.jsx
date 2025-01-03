import Button from "../../Elements/Button/Button";
import HeadingSatu from "../../Elements/Text/HeadingSatu";
import Paragraf from "../../Elements/Text/Paragraf";

export default function TextSucces() {
    return(
        <>
            <div className="flex flex-col">
                <HeadingSatu
                    textcolor="text-ccream"
                    position="text-left"
                    pt="pt-0"
                >
                    Bisnis Kami Sukses Dalam Seserahan
                </HeadingSatu> 

                <Paragraf
                    mt="mt-2"
                    position="text-left"
                    textcolor="text-ccream"
                >
                    Kami berkomitmen untuk menjadikan setiap momen spesial Anda lebih berkesan dengan sentuhan terbaik kami
                </Paragraf>

                <Button />  
            </div>
        </>
    );
}