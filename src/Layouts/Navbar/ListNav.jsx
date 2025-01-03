export default function ListNav(props) {
    const { link , spanicon , children } = props;
    return(
        <a href={link}>
            <li className="flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-ccream text-2xl">
                    {spanicon}
                </span>
                {children}
            </li>
        </a>
    );
}