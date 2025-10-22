import Header from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function Portfolio() {

  const projects = [
    {
      title: 'Epim 2024 Competition - Jember Cocoa Research Lab Website',
      category: 'Web Application',
      category2: 'Competition',
      description: 'Aplikasi web untuk memperkenalkan wisata Observasi Laboratorium Kakao Jember',
      technologies: ['Laravel', 'Bootstrap'],
      image: 'porto-cover/cocoa-research-lab-website-photo.png',
      year: '2024'
    },
    {
      title: 'Epim 2024 Competition - Tanjung Papuma Beach Website',
      category: 'Web Application',
      category2: 'Competition',
      description: 'Aplikasi web untuk memperkenalkan wisata Pantai Tanjung Papuma Jember',
      technologies: ['PHP Native', 'Tailwind', 'JavaScript', 'GSAP'],
      image: 'porto-cover/papuma-website-photo.png',
      year: '2024'
    },
    {
      title: "Kharisma Trans Jember Website's Client",
      category: 'Web Application',
      category2: null,
      description: 'Sebuah aplikasi web untuk klien penyedia jasa travel',
      technologies: ['HTML', 'Tailwind', 'JavaScript'],
      image: 'porto-cover/kharisma-trans-jember-website-photo.png',
      year: '2024'
    },
    {
      title: 'Cashier Web Application',
      category: 'Web Application',
      category2: null,
      description: 'Membuat aplikasi berbasis website berupa kasir',
      technologies: ['PHP', 'JavaScript', 'Bootstrap'],
      image: 'porto-cover/cashier-app-photo.png',
      year: '2024'
    },
    {
      title: 'E-Ticketing Football',
      category: 'Web Application',
      category2: null,
      description: 'Pembelian tiket sepakbola berbasis website',
      technologies: ['PHP', 'Bootstrap', 'JavaScript'],
      image: 'porto-cover/ticketing-efootball-photo.png',
      year: '2024'
    },
    {
      title: 'Online Library Book Borrowing',
      category: 'Web Application',
      category2: null,
      description: 'Aplikasi peminjaman buku perpustakaan berbasis website',
      technologies: ['PHP', 'JavaScript', 'Tailwind'],
      image: 'porto-cover/perpus-skaga-website-photo.png',
      year: '2024'
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
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover-lift group"
              style={{ animationDelay: `${index * 300}ms` }}>
                <div className="h-48 bg-gray-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-fil bg-center bg-cover bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                    <Image src={`/images/${project.image}`} alt={project.title} width={400} height={192}/>
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
                  
                  {project.category2 && (
                    <span className="inline-block ml-1 px-3 py-1 bg-red-200 text-red-600 text-sm rounded-full mb-3">
                      {project.category2}
                    </span>
                  )}

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