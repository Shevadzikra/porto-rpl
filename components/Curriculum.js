export default function Curriculum() {
    // Data Kurikulum per Kelas (Hanya Materi RPL)
    const curriculumData = {
        kelas10: {
            title: "Kelas 10 - Foundation Year",
            siswa: [
                { 
                    photo: "/images/foto-jurusan/10th-grade-photo.png",
                },
            ],
            materiRPL: [
                "Dasar-dasar Web Development (HTML/CSS)",
                "Logika Pemrograman",
                "Algoritma dan Pemrograman Dasar",
            ]
        },

        kelas11: {
            title: "Kelas 11 - Development Phase",
            siswa: [
                { 
                    photo: "/images/foto-jurusan/11th-grade-photo.png",
                },
            ],
            materiRPL: [
                "Basis Data dan SQL",
                "Pemrograman Web (HTML5, CSS3, JavaScript, PHP)",
                "UI/UX Design",
            ]
        },

        kelas12: {
        title: "Kelas 12 - Specialization & Real Projects",
        siswa: [
            { 
                photo: "/images/foto-jurusan/12th-grade-photo.png",
            },
        ],
            materiRPL: [
                "Advanced Database Management",
                "Agile Development Methodology",
                "Technopreneurship & Career Preparation(PKL)"
            ]
        }
    };

    return (
    <section id="curriculum" className="py-16 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kurikulum Rekayasa Perangkat Lunak
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Materi khusus RPL yang dipelajari dari Kelas 10 hingga Kelas 12
            </p>
          </div>

          {/* Kelas 10 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 hover-lift">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Foto Siswa */}
              <div className="lg:col-span-1 bg-gradient-to-br bg-indigo-400 pt-8 pr-8 pl-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{curriculumData.kelas10.title}</h3>
                <div className="space-y-6 ">
                  <img src={curriculumData.kelas10.siswa[0].photo} alt="Foto Siswa" className="w-full h-auto border-none object-cover" />
                </div>
              </div>
              
              {/* Materi RPL */}
              <div className="lg:col-span-2 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Materi RPL Kelas 10</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {curriculumData.kelas10.materiRPL.map((materi, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors">
                      <span className="text-primary-500 font-bold mt-1">{index + 1}.</span>
                      <span className="text-gray-700">{materi}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Kelas 11 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 hover-lift">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Materi RPL */}
              <div className="lg:col-span-2 p-8 order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Materi RPL Kelas 11</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {curriculumData.kelas11.materiRPL.map((materi, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors">
                      <span className="text-primary-500 font-bold mt-1">{index + 1}.</span>
                      <span className="text-gray-700">{materi}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Foto Siswa */}
              <div className="lg:col-span-1 bg-gradient-to-br from-blue-500 to-blue-600 pt-8 pr-8 pl-8 flex flex-col justify-center order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{curriculumData.kelas11.title}</h3>
                <div className="space-y-6">
                  <img src={curriculumData.kelas11.siswa[0].photo} alt="Foto Siswa" className="w-full h-auto border-none object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Kelas 12 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Foto Siswa */}
              <div className="lg:col-span-1 bg-gradient-to-br from-purple-500 to-purple-600 pt-8 pr-8 pl-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{curriculumData.kelas12.title}</h3>
                <div className="space-y-6">
                  <img src={curriculumData.kelas12.siswa[0].photo} alt="Foto Siswa" className="w-full h-auto border-none object-cover" />
                </div>
              </div>
              
              {/* Materi RPL */}
              <div className="lg:col-span-2 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Materi RPL Kelas 12</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {curriculumData.kelas12.materiRPL.map((materi, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors">
                      <span className="text-primary-500 font-bold mt-1">{index + 1}.</span>
                      <span className="text-gray-700">{materi}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    )
}