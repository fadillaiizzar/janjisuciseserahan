export default function Button(props) {
    const { mt="mt-4" } = props;
    return(
        <div className={`${mt}`}>
            <a href="">
                <div className="bg-ccream w-36 pl-5 pr-2 py-2 rounded-lg flex justify-between text-center items-center">
                    <div className="text-cmaroon">Goo</div>
                    <a href="">
                        <div className="bg-cmaroon rounded-lg px-3 py-1 flex justify-center items-center text-center">
                            <span class="material-symbols-outlined text-sm text-ccream flex justify-center items-center text-center">
                                arrow_forward_ios
                            </span>
                        </div>
                    </a>
                </div>
            </a>
            
        </div>
    );
}

{/* <button className="bg-cmaroon">
<a href="" className="text-ccream">
    knns
</a>
</button> */}