import DetailAbout from "./DetailAbout";

export default function CardAbout() {
    return(
        <>
            <div className="mt-7">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    <div className="text-left md:text-center lg:text-left h-full">
                        <DetailAbout 
                            spanicon="work_history"
                        >
                            Sejak didirikan pada tahun 2023, kami berfokus pada memberikan layanan terbaik untuk setiap acara. Dengan mengutamakan desain elegan dan tema yang sepenuhnya disesuaikan, kami berkomitmen untuk menciptakan pengalaman yang tak terlupakan, menambah keindahan pada setiap momen spesial
                        </DetailAbout>
                    </div>
                    
                    <div className="text-left md:text-center">
                        <DetailAbout 
                            spanicon="heart_plus"                        
                        >
                            Kami menyediakan jasa hias dan sewa seserahan untuk berbagai acara spesial, seperti pernikahan, lamaran, dan acara penting lainnya. Layanan kami meliputi dekorasi seserahan yang elegan dan indah, sesuai dengan tema yang diinginkan klien, serta penyewaan perlengkapan seserahan yang berkualitas dan estetis
                        </DetailAbout>
                    </div>

                    <div className="text-left md:text-center lg:text-right">
                        <DetailAbout 
                            spanicon="location_on"                        
                        >
                            Layanan jasa hias dan sewa seserahan kami berlokasi di Imogiri, Bantul, Yogyakarta yang melayani pelanggan dengan layanan pengiriman dan pengambilan sesuai permintaan. Kami berkomitmen untuk memberikan sentuhan spesial pada setiap acara, memastikan setiap momen berjalan lancar, istimewa, dan penuh kesan
                        </DetailAbout>
                    </div>
                </div>
            </div>
        </>
    );
}