import HeadingSatu from "../../../Elements/Text/HeadingSatu";
import { useState } from "react";
import DetailBox from "./DetailBox";

export default function ListProject(props) {
    const {text, imgDetail1, imgDetail2} = props;
    const [showAll, setShowAll] = useState(false);

    const detailBoxs = [
        <DetailBox key={1} imgDetail={imgDetail1} />,
        <DetailBox key={2} imgDetail={imgDetail2}/>,
        <DetailBox key={3} />,
        <DetailBox key={4} />,
        <DetailBox key={5} />,
        <DetailBox key={6} />,
    ]

    return(
        <>
            <div>
                <div className="flex items-center">
                    <span className="material-symbols-outlined mt-8 mr-2 text-cmaroon text-2xl">
                        bubble_chart
                    </span>

                    <HeadingSatu
                        pt="pt-8"
                        fontsize="text-xl"
                    >
                        {text}
                    </HeadingSatu>
                </div>

                <div className="mt-5 cust8:mt-3">
                    <div className="grid grid-cols-1 cust8:grid-cols-2 md:grid-cols-3 gap-5 rounded-lg">
                        {showAll ? detailBoxs : detailBoxs.slice(0, 3)}
                    </div>

                    <div className="flex justify-center cursor-pointer">
                        <div className="mt-6" onClick={() => setShowAll(!showAll)}> 
                            <p className="flex font-semibold text-cmaroon">
                                {showAll ? "Tutup" : "Selengkapnya"}

                                <span className="material-symbols-outlined">
                                {showAll ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}