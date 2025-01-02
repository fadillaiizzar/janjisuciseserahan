import Paragraf from "../../Elements/Text/Paragraf";

export default function DetailAbout(){
    return(
        <div className="bg-cmaroon py-3 px-5">
            <div className="text-ccream">★★★★★</div>
            <div className="text-ccream">Berdiri Sejak 2023</div>
            <Paragraf
                mt="mt-4"
                textcolor="text-ccream"
            >
                Sejak didirikan pada tahun 2023, kami berfokus pada memberikan layanan terbaik untuk setiap acara. Dengan mengutamakan desain elegan dan tema yang sepenuhnya disesuaikan, kami berkomitmen untuk menciptakan pengalaman yang tak terlupakan, menambah keindahan pada setiap momen spesial Anda.
            </Paragraf>
        </div>
    );
}