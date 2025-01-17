export default function DetailBox(props) {
    const { imgDetail="/image/hero.png" } = props;
    
    return(
        <div className="text-ccream shadow-2xl rounded-lg w-72 cust9:w-96 cust8:w-64 md:w-56 lg:w-72 cust6:w-80 xl:w-96 h-72 cust9:h-96 cust8:h-64 md:h-56 lg:h-72 cust6:h-80 xl:h-96">
            <img src={imgDetail} alt="image project" className="w-full h-full rounded-lg" />
        </div>
    );
}