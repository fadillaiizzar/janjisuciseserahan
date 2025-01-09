import { useRouteError } from "react-router-dom";
import Button from "../Elements/Button/Button";

export default function ErrorPage() {
    const error = useRouteError();

    return(
        <div className="flex justify-center min-h-screen items-center flex-col text-cmaroon">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p className="my-5 text-xl">Sorry, an unexpected error has occured</p>
            <p>{error.statusText || error.message}</p>
            <Button
                text="Go Home"
                link="/"
                bg="bg-cmaroon"
                textGoo="text-ccream"
                bgGo="bg-ccream"
                textNext="text-cmaroon"
            />
        </div>
    );
}