export default function Button(props) {
    const { mt="mt-4" , shadow="shadow-[0_4px_20px_rgba(255,255,255,0.5)]" } = props;
    return(
        <div className={`${mt}`}>
            <a href="">
                <div className={`${shadow} bg-ccream w-36 pl-5 pr-2 py-2 rounded-lg flex justify-between text-center items-center`}>
                    <div className="text-cmaroon">Goo</div>
                    
                    <div className="bg-cmaroon rounded-lg px-3 py-1 flex justify-center items-center text-center">
                        <span className="material-symbols-outlined text-sm text-ccream flex justify-center items-center text-center">
                            arrow_forward_ios
                        </span>
                    </div>
                </div>
            </a>
            
        </div>
    );
}