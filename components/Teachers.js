export default function Teachers() {

    // Data Struktur Organisasi
    const organizationalStructure = {
    kaprogli: {
        name: 'Dr. Lorem, S.Kom., M.Kom.',
        position: 'Kepala Program Keahlian RPL',
        photo: '/images/kaprogli.jpg',
        education: 'S3 Teknik Informatika - Universitas Indonesia',
        expertise: ['Software Engineering', 'Machine Learning', 'Database Systems'],
        experience: '15 tahun'
    },
    guruUtama: [
            {
                name: 'Lorem Ipsum, S.Kom.',
                position: 'Guru Pemrograman Web',
                photo: '/images/guru1.jpg',
                subjects: ['Pemrograman Web', 'JavaScript', 'PHP'],
                years: '8 tahun'
            },
            {
                name: 'Lorem Ipsum, S.T., M.T.',
                position: 'Guru Basis Data & Mobile',
                photo: '/images/guru2.jpg',
                subjects: ['Basis Data', 'Pemrograman Mobile', 'Java'],
                years: '10 tahun'
            },
            // {
            //     name: 'Lorem Ipsum, S.Kom.',
            //     position: 'Guru UI/UX Design',
            //     photo: '/images/guru3.jpg',
            //     subjects: ['UI/UX Design', 'Graphic Design', 'Frontend Development'],
            //     years: '6 tahun'
            // },
            // {
            //     name: 'Rizki Pratama, S.Kom., M.Kom.',
            //     position: 'Guru Jaringan & Backend',
            //     photo: '/images/guru4.jpg',
            //     subjects: ['Jaringan Komputer', 'Backend Development', 'DevOps'],
            //     years: '7 tahun'
            // }
        ]
    };

    return (
    <section id="teachers" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Tim Pengajar RPL
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Dibalik kesuksesan siswa RPL, ada tim pengajar yang kompeten dan berpengalaman
                </p>
            </div>

          {/* Kepala Program Keahlian */}
            <div className="flex flex-col items-center mb-16">
                <div className="w-48 h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mb-6 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                    <span className="text-primary-600 text-sm text-center font-medium">Foto {organizationalStructure.kaprogli.name}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                    {organizationalStructure.kaprogli.name}
                </h3>
                <p className="text-lg text-primary-600 font-semibold mb-4 text-center">
                    {organizationalStructure.kaprogli.position}
                </p>
                
                <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 max-w-2xl text-center border border-primary-100">
                    <p className="text-gray-700 mb-3">
                        <strong className="text-primary-700">Pendidikan:</strong> {organizationalStructure.kaprogli.education}
                    </p>
                    <p className="text-gray-700 mb-4">
                        <strong className="text-primary-700">Pengalaman:</strong> {organizationalStructure.kaprogli.experience}
                    </p>
                    <div>
                        <strong className="text-primary-700 text-gray-700">Bidang Keahlian:</strong>
                        <div className="flex flex-wrap justify-center gap-2 mt-3">
                            {organizationalStructure.kaprogli.expertise.map((skill, index) => (
                                <span 
                                    key={index}
                                    className="px-4 py-2 bg-primary-500 text-white text-sm rounded-full font-medium shadow-sm"
                                    >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

          {/* Guru Utama */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {organizationalStructure.guruUtama.map((guru, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 hover-lift border border-gray-100">
                    <div className="flex items-start gap-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 shadow-md">
                            <span className="text-primary-600 text-xs text-center font-medium">Foto {guru.name}</span>
                        </div>
                        
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                                {guru.name}
                            </h3>
                            <p className="text-primary-600 font-semibold mb-4">
                                {guru.position}
                            </p>
                            
                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm text-gray-600 font-medium mb-2">Mengajar:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {guru.subjects.map((subject, idx) => (
                                            <span 
                                                key={idx}
                                                className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium"
                                                >
                                                {subject}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <p className="text-gray-600 text-sm">
                                    <strong>Pengalaman:</strong> {guru.years} mengajar
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
    );
}