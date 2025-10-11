export default function Alumni() {
    const alumni = [
        {
            name: 'M Dien Vito Alivio Hidayat',
            image: 'images/alumni-photos/m-dien-vito-alivio-hidayat-photo.jpg',
            university: 'Politeknik Negeri Jember - D4 Teknik Informatika',
            graduationYear: '2023',
            testimonial: "Selama di jurusan RPL, aku nggak cuma belajar ngoding, tapi juga diajarin cara berpikir logis dan kreatif untuk menyelesaikan masalah. Di era teknologi sekarang apalagi dengan berkembangnya AI kemampuan dari RPL jadi makin relevan. Kita bisa ikut berperan dalam bikin aplikasi pintar, sistem otomatisasi, sampai integrasi AI ke produk digital. Prospek kerjanya luas banget, dari developer, data analyst, UI/UX, sampai AI engineer pun bisa ditempuh kalau kita terus belajar. Buat adik-adik yang suka teknologi dan tantangan, RPL ini benar-benar jadi bekal masa depan."
        },
        {
            name: 'lorem Ipsum',
            image: null,
            university: 'PT Telkom Indonesia - Software Engineer',
            graduationYear: '2021/2022',
            testimonial: "lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            name: 'Lorem Ipsum',
            image: null,
            university: 'Stimata - D3 Teknik Informatika',
            graduationYear: '2023/2024',
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Testimoni Alumni
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {alumni.map((alumnus, index) => (
                        <div key={index} className="bg-white hover-lift rounded-lg shadow-md p-6 flex flex-col items-center">
                            <img src={alumnus.image} alt={`Foto Alumni`} className="w-24 h-24 rounded-full mb-4 object-cover border-2" />
                            <h3 className="text-xl font-semibold text-gray-800">{alumnus.name}</h3>
                            <p className="text-gray-600 text-center">{alumnus.university}</p>
                            <p className="text-gray-500 text-sm mb-2">Lulusan {alumnus.graduationYear}</p>
                            <blockquote className="italic text-gray-700 text-center overflow-y-scroll h-32 border-l-4 border-blue-500 pl-4 mt-2">
                                "{alumnus.testimonial}"
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
