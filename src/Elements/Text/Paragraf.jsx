export default function Paragraf(props) {
    const { mt , textcolor="text-cmaroon" , baris , position , children } = props;
    return(
        <p className={`${mt} ${textcolor} ${baris} ${position} h-full`}>{children}</p>
    );
}