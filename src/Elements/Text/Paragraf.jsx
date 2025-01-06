export default function Paragraf(props) {
    const { mt , textcolor="text-cmaroon" , baris , position , fontsize , h="h-full" , contentMd ,contentLg , children } = props;
    return(
        <p className={`${mt} ${textcolor} ${baris} ${position} ${fontsize} ${h} ${contentMd} ${contentLg}`}>{children}</p>
    );
}