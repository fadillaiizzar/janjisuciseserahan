export default function IconPanah(props) {
    const { fontsize , fontsizeSm , onClick ,children } = props;
    return(
        <div>
            <span className={`${fontsize} ${fontsizeSm} material-symbols-outlined text-cmaroon cursor-pointer`} onClick={onClick}>
                {children}
            </span> 
        </div>
    );
}