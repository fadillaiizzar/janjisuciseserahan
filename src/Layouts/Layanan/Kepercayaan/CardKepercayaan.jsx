export default function CardKepercayaan() {
    const listTitle = [
        {
            name: "Hubungi Kami Untuk Konsultasi Lebih Lanjut",
            text: "Sebelum membuat keputusan, kami siap membantu memberikan informasi dan saran yang sesuai dengan kebutuhan anda terkait layanan, produk, harga, atau cara penggunaan agar anda merasa yakin",
        },
        {
            name: "Customisasi Bunga & Tema Sesuai Keinginan Anda",
            text: "Kami menawarkan layanan customisasi bunga dan tema yang disesuaikan dengan selera anda, baik itu tema elegan, modern, atau tradisional, tim kami siap menciptakan dekorasi yang mencerminkan harapan anda",
        },
        {
            name: "Harga Terjangkau Dengan Diskon Setiap Bulan",
            text: "Kami menawarkan harga terjangkau agar anda bisa menikmati layanan berkualitas tanpa menguras anggaran. Selain itu, setiap bulannya kami memberikan diskon menarik yang memungkinkan anda untuk berhemat",
        },
        {
            name: "Layanan Penjemputan Barang Seserahan Yang Memudahkan",
            text: "Kami menyediakan layanan penjemputan barang seserahan sebelum proses dekorasi dimulai. Anda tidak perlu repot, tim kami akan datang untuk mengambil barang seserahan langsung dari lokasi anda. Setelah itu, barang akan dibawa ke tempat kami untuk dihias dengan sentuhan yang sesuai dengan tema acara yang anda inginkan",
            colspan: "lg:col-span-3",
            lgMaxw: "lg:max-w-lg"
        },
    ]

    return(
        <>
            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {listTitle.map((item, index) => (
                        <TitleKepercayaan key={index} text={item.text} rowspan={item.rowspan} colspan={item.colspan} lgMaxw={item.lgMaxw}>
                            {item.name}
                        </TitleKepercayaan>
                    ))}
                </div>
            </div>
        </>
    );
}

function TitleKepercayaan(props) {
    const { rowspan , colspan , text , lgMaxw , children } = props;

    return(
        <div className={`${rowspan} ${colspan} hover:bg-cmaroon bg-ccream text-cmaroon hover:text-ccream py-5 px-4 rounded-lg shadow-2xl cursor-pointer`}>
            <p className={`${lgMaxw} text-lg  font-semibold h-auto md:h-14`}>{children}</p>
            <p className="mt-2">{text}</p>
        </div>
    );
}