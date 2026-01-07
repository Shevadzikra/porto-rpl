'use client'

import { use } from 'react'
import { useState } from 'react'
import kegiatanData from '@/data/kegiatanData'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function KegiatanDetail({ params }) {
  const { slug } = use(params)

  const kegiatan = kegiatanData.find(
    (item) => item.slug === slug
  )

  const [current, setCurrent] = useState(0)

  if (!kegiatan) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-red-500">Kegiatan tidak ditemukan</p>
        </main>
        <Footer />
      </div>
    )
  }

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === kegiatan.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? kegiatan.images.length - 1 : prev - 1
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 py-16">
        {/* Judul & Tanggal */}
        <h1 className="text-3xl font-bold mb-2">
          {kegiatan.title}
        </h1>
        <p className="text-gray-500 mb-8">
          {kegiatan.date}
        </p>

        {/* FOTO */}
{Array.isArray(kegiatan.images) && kegiatan.images.length > 0 ? (
  // SLIDER
  <div className="relative overflow-hidden rounded-xl mb-10">
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{
        transform: `translateX(-${current * 100}%)`,
      }}
    >
      {kegiatan.images.map((img, index) => (
        <div key={index} className="min-w-full">
          <Image
            src={img}
            alt={`${kegiatan.title} ${index + 1}`}
            width={1000}
            height={600}
            className="w-full h-[400px] object-cover"
          />
        </div>
      ))}
    </div>

    <button
      onClick={prevSlide}
      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
    >
      ‹
    </button>

    <button
      onClick={nextSlide}
      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
    >
      ›
    </button>
  </div>
) : (
  // COVER SAJA
  <div className="mb-10 rounded-xl overflow-hidden">
    <Image
      src={kegiatan.cover}
      alt={kegiatan.title}
      width={1000}
      height={600}
      className="w-full h-[400px] object-cover"
    />
  </div>
)}


        {/* DESKRIPSI */}
        <div className="text-gray-700 leading-relaxed text-justify">
          {kegiatan.description}
        </div>
        {/* E-LEARNING LINK */}
{kegiatan.learningLink && (
  <div className="mt-14 p-8 bg-gray-50 border rounded-xl text-center">
    <p className="text-gray-700 mb-6 leading-relaxed">
      {kegiatan.learningCaption}
    </p>

    <a
      href={kegiatan.learningLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-8 py-4
                 bg-primary-600 text-white font-semibold rounded-full
                 hover:bg-primary-700 transition transform hover:scale-105"
    >
      Akses Modul E-Learning
    </a>
  </div>
)}

      </main>

      <Footer />
    </div>
  )
}
