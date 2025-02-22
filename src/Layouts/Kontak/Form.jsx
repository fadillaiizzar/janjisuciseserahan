import Input from "../../Elements/Form/Input";

export default function Form() {
    return(
        <div className="bg-cmaroon p-3 rounded-lg text-ccream">
            <form className="flex flex-col">
                <Input
                    tes="nama"
                    nama="nama"
                >
                    Nama :
                </Input>

                <Input
                    tes="email"
                    nama="email"
                    type="email"
                >
                    Email :
                </Input>

                <Input
                    tes="pesan"
                    nama="pesan"
                >
                    Pesan :
                </Input>
                
                <input type="submit" value="Submit" className="bg-ccream text-cmaroon rounded-md py-2 mt-2 cursor-pointer"></input>
            </form>
        </div>
    );
}