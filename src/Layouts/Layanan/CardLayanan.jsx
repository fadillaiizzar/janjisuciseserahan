import { useState } from "react";
import IconPanah from "../../Elements/Icon/IconPanah";
import DetailCardLayanan from "./DetailCardLayanan";

export default function CardLayanan() {
    const [ currentBox , setCurrentBox ] = useState(0);
    const totalBoxes=3;

    const handleNext = () => {
        setCurrentBox((prevBox) => (prevBox + 1) % totalBoxes);
    }

    const handlePrev = () => {
        setCurrentBox((prevBox) => (prevBox - 1 + totalBoxes) % totalBoxes);
    }

    return(
        <div className="mt-14">
            <div className="flex justify-center items-center">
                {currentBox === 0 && <DetailCardLayanan boxNumber={1} />}
                {currentBox === 1 && <DetailCardLayanan boxNumber={2} />}
                {currentBox === 2 && <DetailCardLayanan boxNumber={3} />}
            </div>

            <div className="flex justify-between pt-3 lg:pt-10 px-0 lg:px-16 xl:px-40">
                <IconPanah
                    fontsizeSm="text-4xl"
                    fontsize="md:text-5xl"
                    onClick={handlePrev}
                >
                    line_start_arrow_notch</IconPanah>
                    <IconPanah
                    fontsizeSm="text-4xl"
                    fontsize="md:text-5xl"
                    onClick={handleNext}
                >
                    line_end_arrow_notch</IconPanah>
            </div>
        </div>
    );
}