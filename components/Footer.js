import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">RPL SMKN 3 Jember</h3>
            <p className="text-gray-300">
              Mencipta Masa Depan, Satu Baris Kode pada Suatu Waktu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">Profil Jurusan</Link></li>
              <li><Link href="/curriculum" className="text-gray-300 hover:text-white">Kurikulum</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-white">Karya Siswa</Link></li>
              <li><Link href="/career" className="text-gray-300 hover:text-white">Prospek Karir</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Jl. Lorem Ipsum No. 123</li>
              <li>Kota Contoh</li>
              <li>Email: rpl@smk.example</li>
              <li>Telp: (021) 123-4567</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Media Sosial</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                YouTube
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          {/* <p>&copy; {new Date().getFullYear()} Jurusan RPL SMK. All rights reserved.</p> */}
          <p>Made with ❤︎ by <span className="font-semibold text-white">Shevadzikra</span></p>
        </div>
      </div>
    </footer>
  );
}