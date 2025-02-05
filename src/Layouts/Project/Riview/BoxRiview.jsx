export default function BoxRiview(props) {
    const { imgRiview="/image/hero.png" , text="dilla" , children="kami berkomitmen untuk menjadikan setiap momen spesial Anda lebih berkesan dengan sentuhan terbaik kami" } = props;

    return(
        <div>
            <div className="bg-cmaroon px-3 py-8 rounded-lg justify-items-center shadow-2xl">
                <div className="w-20 h-20 rounded-full">
                    <img src={imgRiview} alt="profile riview" className="w-full h-full rounded-full" />
                </div>

                <p className="mt-3 font-bold text-lg">{text}</p>
                <p className="mt-4 text-center">{children}</p>
            </div>
        </div>
    );
}