import ImgSucces from "./ImgSucces";
import TextSucces from "./TextSucces";

export default function Succes() {
    return(
        <div id="sukses" className="bg-cmaroon flex justify-center items-center text-center py-20 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                <div className="px-10 flex justify-start md:justify-center items-center">
                    <ImgSucces />
                </div>
                <div className="px-10 flex items-center">
                    <TextSucces />
                </div>
            </div>
        </div>
    );
}