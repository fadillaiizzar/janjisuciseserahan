import HeadingSatu from "../../../Elements/Text/HeadingSatu";
import DetailBox from "./DetailBox";

export default function BoxProject() {
    return(
        <div className="mt-0 px-10">
            <div>
                <HeadingSatu
                    pt="pt-8"
                    fontsize="text-xl"
                >
                    Tray Gray
                </HeadingSatu>

                <div className="mt-5 cust8:mt-3">
                    <div className="grid grid-cols-1 cust8:grid-cols-2 md:grid-cols-3 gap-5 rounded-lg">
                        <DetailBox />
                        <DetailBox />
                        <DetailBox />
                    </div>
                </div>
            </div>
        </div>
    );
}