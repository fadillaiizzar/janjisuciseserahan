import HeadingSatu from "../../Elements/Text/HeadingSatu";
import Paragraf from "../../Elements/Text/Paragraf";
import CardAbout from "./CardAbout";

export default function About() {
    return(
        <>
            <HeadingSatu>Seputar Janji Suci Seserahan</HeadingSatu>

            <Paragraf 
                mt="mt-2"    
            >
                Janji Suci Seserahan menyediakan jasa hias dan sewa seserahan untuk berbagai acara, seperti pernikahan atau lamaran, dengan desain elegan dan tema yang dapat disesuaikan, sehingga setiap momen spesial terasa lebih istimewa dan berkesan.
            </Paragraf>

            <CardAbout />
        </>
    );
}