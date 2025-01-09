import HeadingSatu from "../../Elements/Text/HeadingSatu";
import Paragraf from "../../Elements/Text/Paragraf";
import CardBest from "./CardBest";

export default function Best() {
    const cards = [
        { imgCardBest: "/image/bestone.png" },
        { imgCardBest: "/image/besttwo.png" , mtSm: "mt-40" , mtMd: "md:mt-0" },
        { imgCardBest: "/image/bestthree.png" , mtSm: "mt-40" , mtMd: "md:mt-40" , mtLg: "lg:mt-0" },
    ];

    return(
        <div id="unggul" className="px-10 pb-28 mt-8">
            <HeadingSatu>Pilihan Unggulan Janji Suci Seserahan</HeadingSatu>

            <Paragraf 
                mt="mt-2"    
            >
                Sebagai layanan unggulan, kami menghadirkan dekorasi dan penyewaan seserahan yang memadukan keindahan estetika dan fungsionalitas. Kami ingin membantu anda menciptakan momen tak terlupakan dengan seserahan yang istimewa
            </Paragraf>

            <div className="mt-40">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 cursor-pointer">
                    {cards.map((item, index) => (
                        <CardBest key={index} imgCardBest={item.imgCardBest} mtMd={item.mtMd} mtLg={item.mtLg} mtSm={item.mtSm} />
                    ) )}
                </div>        
            </div>
        </div>
    );
}