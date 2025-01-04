export default function Paragraf(props) {
    const { mt , textcolor="text-cmaroon" , baris , position , fontsize , h="h-full" , children } = props;
    return(
        <p className={`${mt} ${textcolor} ${baris} ${position} ${fontsize} ${h}`}>{children}</p>
    );
}