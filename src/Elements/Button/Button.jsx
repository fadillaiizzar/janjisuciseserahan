import { Link } from "react-router-dom";

export default function Button(props) {
    const { mt="mt-4" , shadow="shadow-[0_4px_20px_rgba(255,255,255,0.5)]" , bg="bg-ccream" , textGoo="text-cmaroon" , bgGo="bg-cmaroon" , textNext="text-ccream" } = props;
    return(
        <div className={`${mt}`}>
            <Link to="">
                <div className={`${shadow} ${bg} w-36 pl-5 pr-2 py-2 rounded-lg flex justify-between text-center items-center`}>
                    <div className={`${textGoo}`}>Goo</div>
                    
                    <div className={`${bgGo} rounded-lg px-3 py-1 flex justify-center items-center text-center`}>
                        <span className={`${textNext} material-symbols-outlined text-sm flex justify-center items-center text-center`}>
                            arrow_forward_ios
                        </span>
                    </div>
                </div>
            </Link>
            
        </div>
    );
}