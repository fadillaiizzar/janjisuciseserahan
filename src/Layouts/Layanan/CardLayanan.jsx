import IconPanah from "../../Elements/Icon/IconPanah";
import DetailCardLayanan from "./DetailCardLayanan";

export default function CardLayanan() {
    return(
        <div className="mt-14">
            <DetailCardLayanan />

            <div className="flex justify-between pt-10 px-0 lg:px-16">
                <IconPanah>line_start_arrow_notch</IconPanah>
                <div className="flex md:hidden">
                    <IconPanah fontsize="text-3xl">radio_button_unchecked</IconPanah>
                </div>
                <IconPanah>line_end_arrow_notch</IconPanah>
            </div>
        </div>
    );
}