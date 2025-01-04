export default function CardBest(props) {
    const { mtMd , mtLg, mtSm , shadow="shadow-[0_4px_20px_rgba(255,255,255,0.5)]" , imgCardBest } = props;
    return(
        <div className={`${mtMd} ${mtLg} ${mtSm} bg-cmaroon relative rounded-lg w-full h-52 shadow-2xl`}>
            <div className={`${shadow} absolute z-10 w-60 h-60 rounded-full bottom-20 left-1/2 transform -translate-x-1/2`}>
                <img src={imgCardBest} alt="image best seller" className="rounded-full"/>
            </div>
        </div>
    );
}