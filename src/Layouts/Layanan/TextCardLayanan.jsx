export default function TextCardLayanan(props) {
    const { text , px , pr , children } = props;

    return(
        <div className="py-4 md:py-10">
            <h1 className="text-2xl font-semibold text-cmaroon">{text}</h1>
            <p className={`${px} ${pr} text-cmaroon mt-2`}>{children}</p>
        </div>
    );
}