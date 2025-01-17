import HeadingSatu from "../../Elements/Text/HeadingSatu";
import Paragraf from "../../Elements/Text/Paragraf";

export default function TextProject(props) {
    const { textheading , children } = props;

    return(
        <div className="mt-12 px-10">
            <div>
                <HeadingSatu
                    pt="pt-0"
                >
                    {textheading}
                </HeadingSatu>

                <Paragraf
                    mt="mt-2"
                >
                    {children}
                </Paragraf>
            </div>
        </div>
    );
}