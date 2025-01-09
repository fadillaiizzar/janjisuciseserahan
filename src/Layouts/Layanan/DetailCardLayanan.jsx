import ImgSucces from "../Succes/ImgSucces";
import TextCardLayanan from "./TextCardLayanan";

export default function DetailCardLayanan(props) {
    const { boxNumber } = props;

    const content = [
        { 
            imgSucces: "/image/hias.png",
            text: "Sewa Box & Hias Seserahan" , 
            children: "Kami menawarkan layanan sewa box seserahan dan dekorasi elegan untuk membuat momen spesial anda semakin berkesan. Dengan berbagai desain, dari minimalis hingga mewah, kami menyediakan box yang dapat disesuaikan dengan tema acara. Setiap dekorasi dirancang dengan bahan berkualitas untuk memberikan kesan yang tak terlupakan. Percayakan momen anda kepada kami!" 
        },
        { 
            imgSucces: "/image/ringbox.png",
            text: "Sewa Ring Box",
            children: "Kami menyediakan layanan sewa ring box yang dirancang untuk melengkapi momen anda dengan sentuhan elegan. Dengan berbagai pilihan desain, setiap ring box kami hadir dengan kualitas terbaik untuk menjaga cincin anda tetap aman dan tampak menawan. Sesuaikan pilihan box dengan tema acara, dan biarkan momen spesial anda semakin sempurna!" 
        },
        { 
            imgSucces: "/image/jewelrybox.png",
            text: "Sewa Jewelry Box", 
            children: "Tingkatkan kemewahan momen istimewa anda dengan layanan sewa jewelry box kami yang dirancang untuk memberikan perlindungan serta tampilan yang anggun pada perhiasan anda. Setiap jewelry box kami dibuat untuk menambah keindahan dan kesan mewah, menyempurnakan setiap detail acara anda!" 
        },
    ];

    const { imgSucces , text , children } = content[boxNumber - 1];
    
    return(
        <div className="flex justify-center items-center gap-5 px-0 lg:px-10">
            <div className="rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="px-0 md:px-10 xl:pr-0 flex justify-center items-center">
                        <ImgSucces 
                            shadow="shadow-2xl"
                            imgSucces={imgSucces}
                        />
                    </div>
                    
                    <div className=" flex items-center text-center lg:text-left">
                        <TextCardLayanan 
                            text={text}
                            px="lg:pr-5"
                            pr="xl:pr-24"
                        >
                            {children}
                        </TextCardLayanan>
                    </div>
                </div>
            </div>
        </div>
    );
}