export default function HeadingSatu(props) {
    const { textcolor="text-cmaroon" , children } = props;
    return(
        <h1 className={`${textcolor} text-2xl font-semibold pt-16`}>
            {children}
        </h1>
    );
}