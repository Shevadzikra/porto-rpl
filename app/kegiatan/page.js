import kegiatanData from "@/data/kegiatanData";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from "next/link";
import Image from 'next/image';

export default function KegiatanPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">
            Kegiatan Siswa
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Kumpulan kegiatan belajar mengajar siswa RPL
          </p>
        </div>
      </section>

      {/* Card Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kegiatanData.map((item) => (
              <Link
                key={item.slug}
                href={`/kegiatan/${item.slug}`}
                className="block rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <Image
                  src={item.cover}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-[200px]"
                />
                <div className="p-4">
                  <h2 className="font-semibold text-lg">
                    {item.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
