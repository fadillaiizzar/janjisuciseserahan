import HeadingSatu from "../../Elements/Text/HeadingSatu";
import Paragraf from "../../Elements/Text/Paragraf";
import CardBest from "./CardBest";

export default function Best() {
    const cards = [
        { imgCardBest: "/image/hero.png" },
        { imgCardBest: "/image/hero.png" , mtSm: "mt-40" , mtMd: "md:mt-0" },
        { imgCardBest: "/image/hero.png" , mtSm: "mt-40" , mtMd: "md:mt-40" , mtLg: "lg:mt-0" },
    ];

    return(
        <div id="best" className="px-10 pb-28 mt-8">
            <HeadingSatu>Best Seller</HeadingSatu>

            <Paragraf 
                mt="mt-2"    
            >
                Best Seller Janji Suci Seserahan adalah layanan unggulan kami yang menawarkan dekorasi dan penyewaan seserahan elegan untuk berbagai acara spesial seperti pernikahan dan lamaran.
            </Paragraf>

            <div className="mt-40">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {cards.map((item, index) => (
                        <CardBest key={index} imgCardBest={item.imgCardBest} mtMd={item.mtMd} mtLg={item.mtLg} mtSm={item.mtSm} />
                    ) )}
                </div>        
            </div>
        </div>
    );
}