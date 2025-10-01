'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Curriculum from '../components/Curriculum';
import Alumni from '@/components/Alumni';
import Faq from '@/components/FaQ';
import { use } from 'react';
// import News from '@/components/News';

export default function Home() {
  // Data Stats
  const stats = [
    { number: '90+', label: 'Siswa Aktif' },
    { number: '12%', label: 'Penyerapan Kerja' },
    { number: '34+', label: 'Project Selesai' },
    { number: '56+', label: 'Mitra Industri' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kurikulum Section */}
      <Curriculum />

      {/* Latest News Preview */}
      {/* <News /> */}

      {/* Alumni Testimonials */}
      <Alumni />

      {/* FAQ Section */}
      <Faq />

      {/* Footer */}
      <Footer />
    </div>
  );
}