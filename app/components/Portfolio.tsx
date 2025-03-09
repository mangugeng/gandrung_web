'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const categories = ['Semua', 'Audio', 'Video', 'Lighting', 'Conference'];

const projects = [
  {
    id: 1,
    title: 'Sistem Audio Profesional',
    category: 'Audio',
    location: 'Banyuwangi',
    image: '/portfolio/audio-dprd.jpg',
    description: 'Instalasi sistem audio profesional untuk gedung pemerintahan dan ruang pertemuan',
  },
  {
    id: 2,
    title: 'Video Wall System',
    category: 'Video',
    location: 'Surabaya',
    image: '/portfolio/video-control.jpg',
    description: 'Pemasangan video wall dan sistem kontrol untuk pusat monitoring',
  },
  {
    id: 3,
    title: 'Stage Lighting System',
    category: 'Lighting',
    location: 'Jakarta',
    image: '/portfolio/lighting-convention.jpg',
    description: 'Setup sistem pencahayaan untuk panggung dan convention hall',
  },
  {
    id: 4,
    title: 'Conference System',
    category: 'Conference',
    location: 'Malang',
    image: '/portfolio/conference-smart.jpg',
    description: 'Instalasi sistem konferensi terintegrasi untuk ruang rapat dan auditorium',
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'Semua' || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
          >
            Portfolio Proyek
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beberapa proyek terbaik yang telah kami kerjakan untuk klien-klien kami
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div 
                className="relative h-72 cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(project.image)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Lihat Detail
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <p className="text-sm text-gray-500">Lokasi: {project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={!!selectedImage}
        close={() => setSelectedImage(null)}
        slides={[{ src: selectedImage || '' }]}
      />
    </section>
  );
};

export default Portfolio; 