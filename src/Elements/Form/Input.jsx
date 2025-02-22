export default function Input(props) {
    const {tes , children , type="text" , nama} = props;

    return(
        <>
            <label htmlFor={tes} className="mb-2 cursor-pointer">{children}</label>
            <input type={type} id={nama} className="mb-3 text-cmaroon px-2 rounded-md cursor-pointer"/>
        </>
    );
}