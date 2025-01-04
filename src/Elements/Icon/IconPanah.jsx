export default function IconPanah(props) {
    const { fontsize="text-5xl" , children } = props;
    return(
        <div>
            <span className={`${fontsize} material-symbols-outlined text-cmaroon`}>
                {children}
            </span> 
        </div>
    );
}