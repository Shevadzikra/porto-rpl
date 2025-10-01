export default function News() {
    return (
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Berita & Kegiatan Terbaru
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sample news items */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift border border-gray-100">
              <div className="p-6">
                <span className="text-sm text-primary-600 font-medium">December 15, 2024</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">
                  Siswa RPL Juara Lomba Coding Nasional
                </h3>
                <p className="text-gray-600">
                  Tim siswa RPL berhasil meraih juara 1 dalam kompetisi coding tingkat nasional...
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift border border-gray-100">
              <div className="p-6">
                <span className="text-sm text-primary-600 font-medium">December 10, 2024</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">
                  Workshop UI/UX Design dengan Praktisi
                </h3>
                <p className="text-gray-600">
                  Jurusan RPL menyelenggarakan workshop desain antarmuka dengan praktisi industri...
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift border border-gray-100">
              <div className="p-6">
                <span className="text-sm text-primary-600 font-medium">December 5, 2024</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">
                  Kunjungan Industri ke Perusahaan Teknologi
                </h3>
                <p className="text-gray-600">
                  Siswa kelas XII melakukan kunjungan industri untuk melihat langsung proses pengembangan software...
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
    );
}