import HeadingSatu from "../../Elements/Text/HeadingSatu";
import Paragraf from "../../Elements/Text/Paragraf";

export default function Konten(props) {
    const {id , pt , children , textparagraf} = props;

    return(
        <>
            <div id={id}>
                <HeadingSatu
                    pt={pt}
                >
                    {children}
                </HeadingSatu>

                <Paragraf
                    mt="mt-2"  
                >
                    {textparagraf}
                </Paragraf>
            </div>
        </>
    );
}