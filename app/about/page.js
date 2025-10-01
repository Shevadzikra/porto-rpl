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