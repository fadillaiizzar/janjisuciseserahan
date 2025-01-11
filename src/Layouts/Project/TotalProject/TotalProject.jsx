export default function TotalProject(props) {
    const { bg="bg-cmaroon" , border="border-r-8" , roundedtr , roundedbr , roundedtl , roundedbl , children , text } = props;

    return(
        <div className={`${bg} ${border} ${roundedtr} ${roundedbr} ${roundedtl} ${roundedbl} border-ccream text-ccream rounded-lg p-2 sm:p-5 flex flex-col justify-center items-center`}>
            <p className="text-xl sm:text-4xl md:text-5xl mb-2">{children}</p>
            <p className="text-sm sm:text-lg">{text}</p>
        </div>
    );
}