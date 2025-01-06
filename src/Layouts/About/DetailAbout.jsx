import Paragraf from "../../Elements/Text/Paragraf";

export default function DetailAbout(props){
    const { spanicon , children} = props;
    return(
        <div className="bg-cmaroon rounded-lg p-5 flex flex-col justify-between md:h-[340px] lg:h-[380px] xl:h-[300px] shadow-2xl">
            <span className="material-symbols-outlined text-4xl text-ccream">
                {spanicon}
            </span>     

            <Paragraf
                mt="mt-2"
                textcolor="text-ccream"
                contentMd="md:content-center"
                contentLg="lg:content-start"
            >
                {children}
            </Paragraf>
        </div>
    );
} 