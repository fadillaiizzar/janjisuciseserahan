export default function GoogleMaps() {
    return(
        <>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15807.041402087072!2d110.37480123264143!3d-7.920082470486271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a54f8c850f557%3A0x17724c4166ed7232!2sImogiri%2C%20Paduresan%2C%20Imogiri%2C%20Kec.%20Imogiri%2C%20Kabupaten%20Bantul%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1740319172612!5m2!1sid!2sid" 
                title="Google Maps showing location"
                height="280"
                className="rounded-lg w-full h-[305px] border-4 border-cmaroon shadow-2xl"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </>
    );
}