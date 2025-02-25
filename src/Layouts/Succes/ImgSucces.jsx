export default function ImgSucces(props) {
    const { shadow="shadow-[0_4px_20px_rgba(255,255,255,0.5)]" , imgSucces="/image/sukses/hero.png" , w="w-96" , h="h-auto" } = props;
    return(
        <div className="mb-8 md:mb-0">
            <div className={`${shadow} flex justify-center text-center items-center rounded-lg`}>
                <img src={imgSucces} alt="image jss" className={`${w} ${h} rounded-lg`}/>
            </div>
        </div>
    );
}