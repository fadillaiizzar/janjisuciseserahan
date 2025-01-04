export default function HeadingSatu(props) {
    const { textcolor="text-cmaroon" , position , pt="pt-16" , px , children } = props;
    return(
        <h1 style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2), -1px -1px 2px rgba(255, 255, 255, 0.6)'}} className={`${textcolor} ${position} ${pt} ${px} text-2xl font-semibold`}>
            {children}
        </h1>
    );
}