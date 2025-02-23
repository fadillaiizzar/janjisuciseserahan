import HeadingSatu from "../../Elements/Text/HeadingSatu";
import Paragraf from "../../Elements/Text/Paragraf";

export default function Konten(props) {
    const {id , pt , ptlg , textcolor , children , textparagraf} = props;

    return(
        <>
            <div id={id}>
                <HeadingSatu
                    pt={pt}
                    ptlg={ptlg}
                    textcolor={textcolor}
                >
                    {children}
                </HeadingSatu>

                <Paragraf
                    mt="mt-2"  
                    textcolor={textcolor}
                >
                    {textparagraf}
                </Paragraf>
            </div>
        </>
    );
}