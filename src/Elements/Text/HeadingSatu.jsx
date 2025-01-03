export default function HeadingSatu(props) {
    const { textcolor="text-cmaroon" , position , pt="pt-16" , children } = props;
    return(
        <h1 className={`${textcolor} ${position} ${pt} text-2xl font-semibold`}>
            {children}
        </h1>
    );
}