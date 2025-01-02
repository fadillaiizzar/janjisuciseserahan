export default function Navbar() {
    const navItems = [
        { link: "https://socialse.vercel.app" ,  name: "Layanan"},
        { link: "https://socialse.vercel.app" ,  name: "Project"},
        { link: "https://socialse.vercel.app" ,  name: "Perhatian"},
        { link: "https://socialse.vercel.app" ,  name: "Kontak"},
    ];
    return(
        <div className="flex justify-center">
            <ul className="bg-cmaroon text-ccream font-semibold flex gap-4 border-2 py-3 px-12 rounded-tl-full rounded-br-full">
                {navItems.map((item, index) => (
                    <ListNav key={index} link={item.link}>
                        {item.name}
                    </ListNav>
                ))}
            </ul>
        </div>
    );
}

function ListNav(props) {
    const { link , children } = props;
    return(
        <a href={link}>
            <li>
                {children}
            </li>
        </a>
    );
}