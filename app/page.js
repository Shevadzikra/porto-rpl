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

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero />

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