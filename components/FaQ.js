import { useState } from "react";

const faqData = [
    {
        question: "Apa itu jurusan RPL di SMK?",
        answer: "RPL (Rekayasa Perangkat Lunak) adalah jurusan yang mempelajari tentang pembuatan, pengembangan, dan pemeliharaan perangkat lunak atau aplikasi komputer.",
    },
    {
        question: "Apa saja yang dipelajari di jurusan RPL?",
        answer: "Siswa akan belajar pemrograman, desain aplikasi, basis data, pengujian perangkat lunak, pengembangan web, mobile, dan manajemen proyek perangkat lunak.",
    },
    {
        question: "Apa prospek kerja lulusan RPL?",
        answer: "Lulusan RPL dapat bekerja sebagai programmer, web developer, mobile developer, software tester, IT support, dan berbagai profesi di bidang teknologi informasi.",
    },
    {
        question: "Apakah harus bisa coding sebelum masuk RPL?",
        answer: "Tidak harus. Semua materi pemrograman akan diajarkan dari dasar, sehingga siswa tanpa pengalaman pun bisa mengikuti.",
    },
    {
        question: "Apakah jurusan RPL hanya untuk laki-laki?",
        answer: "Tidak. Jurusan RPL terbuka untuk semua, baik laki-laki maupun perempuan yang berminat di bidang teknologi.",
    },
    {
        question: "Apakah ada praktik kerja industri (PKL) di jurusan RPL?",
        answer: "Ya, siswa RPL akan mengikuti PKL di perusahaan IT atau instansi terkait untuk mendapatkan pengalaman kerja nyata.",
    },
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    FAQ Jurusan RPL SMK
                </h2>
                <div className="space-y-4">
                    {faqData.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-lg shadow-md hover-lift">
                            <button
                                className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
                                onClick={() => handleToggle(idx)}
                            >
                                <span className="text-lg font-semibold text-gray-800">{item.question}</span>
                                <span className={`ml-4 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}>▼</span>
                            </button>
                            {openIndex === idx && (
                                <div className="px-6 pb-6 text-gray-700 border-t">
                                    {item.answer}
                                    <button
                                        className="mt-4 text-sm text-blue-600 hover:underline"
                                        onClick={() => setOpenIndex(null)}
                                    >
                                        Tutup Jawaban
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}