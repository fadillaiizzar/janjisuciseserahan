import { Link } from "react-router-dom";

export default function Sosmed(props) {
    const {link , imgSosmed} = props;

    return(
        <>
            <Link to={link} target="_blank">
                <li className="flex items-center justify-center mr-3 w-6 h-6">
                    <img src={imgSosmed} alt="image sosmed" />
                </li>
            </Link>
        </>
    );
}