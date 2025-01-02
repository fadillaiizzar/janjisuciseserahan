import Paragraf from "./Paragraf";

export default function Title() {
    return(
        <div className="flex flex-col justify-center items-center py-32">
            <DetailTitle 
                text="Make Your"
            />

            <DetailTitle 
                text="Wedding Dream"
            />

            <Paragraf 
                mt="mt-14"
                baris="max-w-xl"
                position="text-center"
            >
                “Mewujudkan seserahan yang berkesan dengan sentuhan kreativitas dan cinta, untuk hari istimewa Anda”
            </Paragraf>
        </div>
    );
}

function DetailTitle(props) {
    const { text } = props;
    return(
        <h1 className="text-7xl text-cmaroon font-bold">
            {text}
        </h1>
    );
}