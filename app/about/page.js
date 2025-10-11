import Header from '../../components/Navbar';
import Footer from '../../components/Footer';
import Facilities from '@/components/Facilities';
import Teachers from '@/components/Teachers';

export default function About() {

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#2563eb] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">Profil Jurusan</h1>
        </div>
      </section>

      {/* About RPL Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mengenal Jurusan RPL
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              Penasaran apa itu RPL? Mari kita cari tahu!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white text-center p-6 rounded-lg shadow-md overflow-hidden hover-lift">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apa Itu RPL?</h3>
              <p className="text-gray-600">
                Rekayasa Perangkat Lunak adalah bidang yang mempelajari pengembangan, pemeliharaan, dan manajemen perangkat lunak dengan pendekatan sistematis dan terstruktur.
              </p>
            </div>

            <div className="bg-white text-center p-6 rounded-lg shadow-md overflow-hidden hover-lift">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apa yang Dipelajari?</h3>
              <p className="text-gray-600">
                Pemrograman web & mobile, basis data, UI/UX design, software engineering, dan pengembangan solusi digital untuk berbagai industri.
              </p>
            </div>

            <div className="bg-white text-center p-6 rounded-lg shadow-md overflow-hidden hover-lift">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prospek Karir</h3>
              <p className="text-gray-600">
                Software Developer, Web Developer, Mobile Developer, UI/UX Designer, Database Administrator, dan berbagai profesi IT lainnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visi</h2>
              <p className="text-lg text-gray-600">
                Menjadi jurusan unggulan yang menghasilkan lulusan kompeten dalam bidang pengembangan perangkat lunak, 
                berkarakter, dan siap bersaing di era digital global.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Misi</h2>
              <ul className="text-lg text-gray-600 space-y-3">
                <li>• Menyelenggarakan pendidikan berkualitas dengan kurikulum berbasis industri</li>
                <li>• Mengembangkan kompetensi siswa melalui pembelajaran praktik dan project-based</li>
                <li>• Membangun kerjasama dengan industri teknologi</li>
                <li>• Menumbuhkan jiwa technopreneur pada siswa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <Facilities />

      {/* Teachers */}
      <Teachers />

      {/* Footer */}
      <Footer />
    </div>
  );
}