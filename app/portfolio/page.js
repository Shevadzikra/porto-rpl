import Header from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Portfolio() {

  const projects = [
    {
      title: 'Sistem Informasi Perpustakaan',
      category: 'Web Application',
      description: 'Aplikasi web untuk manajemen perpustakaan sekolah dengan fitur peminjaman dan pengembalian buku',
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      image: '/images/library-system.jpg',
      year: '2024'
    },
    {
      title: 'Aplikasi Mobile E-Commerce',
      category: 'Mobile App',
      description: 'Aplikasi jual beli online dengan fitur chat real-time dan pembayaran digital',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      image: '/images/ecommerce-app.jpg',
      year: '2024'
    },
    {
      title: 'Game Edukasi Matematika',
      category: 'Game',
      description: 'Game edukasi untuk anak SD belajar matematika dengan cara yang menyenangkan',
      technologies: ['Unity', 'C#', 'Blender'],
      image: '/images/math-game.jpg',
      year: '2023'
    },
    {
      title: 'Website Company Profile',
      category: 'Website',
      description: 'Website modern untuk perusahaan dengan CMS custom dan desain responsive',
      technologies: ['Next.js', 'Tailwind CSS', 'Strapi'],
      image: '/images/company-profile.jpg',
      year: '2023'
    },
    {
      title: 'Aplikasi POS Restoran',
      category: 'Desktop App',
      description: 'Sistem point of sale untuk restoran dengan fitur inventory dan laporan penjualan',
      technologies: ['Java', 'JavaFX', 'SQLite'],
      image: '/images/pos-app.jpg',
      year: '2023'
    },
    {
      title: 'IoT Smart Home Controller',
      category: 'IoT',
      description: 'Aplikasi kontrol perangkat smart home melalui smartphone dengan antarmuka yang intuitif',
      technologies: ['Flutter', 'Arduino', 'Firebase'],
      image: '/images/smart-home.jpg',
      year: '2023'
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Karya Siswa</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Bukti nyata kreativitas dan kemampuan siswa RPL dalam mengembangkan solusi digital
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover-lift group animate-fade-up"
              style={{ animationDelay: `${index * 300}ms` }}>
                <div className="h-48 bg-gray-200 flex items-center justify-center relative overflow-hidden">
                  <span className="text-gray-400">[Gambar: {project.title}]</span>
                  <div className="absolute inset-0 bg-primary-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                  
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm rounded-full mb-3">
                    {project.category}
                  </span>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}