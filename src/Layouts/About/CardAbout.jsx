import DetailAbout from "./DetailAbout";

export default function CardAbout() {
    return(
        <>
            <div className="mt-7">
                <div className="grid grid-cols-3 gap-2">
                    <div className="text-left">
                        <DetailAbout />
                    </div>
                    
                    <div className="text-center">
                        <DetailAbout />
                    </div>

                    <div className="text-right">
                        <DetailAbout />
                    </div>
                </div>
            </div>
        </>
    );
}