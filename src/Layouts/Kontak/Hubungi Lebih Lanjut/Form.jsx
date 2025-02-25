import Input from "../../../Elements/Form/Input";
import Konten from "../../Layanan/Konten";

export default function Form() {
return (
<div className="bg-cmaroon p-3 rounded-lg text-ccream shadow-2xl">
    <Konten
    textparagraf="Ada pertanyaan atau butuh bantuan? Isi formulir di bawah ini, dan kami akan segera merespons dengan senang hati"
    pt="pt-0"
    textcolor="text-ccream"
    >
    Hubungi Lebih Lanjut
    </Konten>

    <form className="flex flex-col mt-6">
    <Input tes="nama" nama="nama">
        Nama :
    </Input>

    <Input tes="email" nama="email" type="email">
        Email :
    </Input>

    <Input tes="pesan" nama="pesan">
        Pesan :
    </Input>

    <input
        type="submit"
        value="Submit"
        className="bg-ccream text-cmaroon rounded-md py-2 mt-2 cursor-pointer"
    ></input>
    </form>
</div>
);
}
