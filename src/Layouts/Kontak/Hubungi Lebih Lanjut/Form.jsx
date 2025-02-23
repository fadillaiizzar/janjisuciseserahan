import Input from "../../../Elements/Form/Input";
import Konten from "../../Layanan/Konten";

export default function Form() {
return (
<div className="bg-cmaroon p-3 rounded-lg text-ccream">
    <Konten
    textparagraf="Kami adalah mitra terpercaya dengan kualitas terbaik, layanan profesional, dan perhatian penuh pada setiap detail"
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
