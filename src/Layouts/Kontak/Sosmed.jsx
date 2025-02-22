import { Link } from "react-router-dom";

export default function Sosmed(props) {
    const {link , imgSosmed} = props;

    return(
        <>
            <Link to={link}>
                <li className="flex items-center justify-center mr-3 w-9 h-9">
                    <img src={imgSosmed} alt="image sosmed" />
                </li>
            </Link>
        </>
    );
}