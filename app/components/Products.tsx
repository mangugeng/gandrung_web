'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    slug: 'audio-system',
    title: 'Audio System',
    description: 'Sistem audio profesional untuk berbagai kebutuhan acara dan instalasi permanen',
    image: '/portfolio/audio-dprd.jpg',
  },
  {
    id: 2,
    slug: 'video-system',
    title: 'Video System',
    description: 'Solusi video profesional termasuk LED screen, proyektor, dan sistem video conference',
    image: '/portfolio/video-control.jpg',
  },
  {
    id: 3,
    slug: 'lighting-system',
    title: 'Lighting System',
    description: 'Sistem pencahayaan modern untuk panggung, studio, dan berbagai kebutuhan lighting profesional',
    image: '/portfolio/lighting-convention.jpg',
  },
  {
    id: 4,
    slug: 'conference-system',
    title: 'Conference System',
    description: 'Sistem konferensi lengkap untuk ruang meeting dan auditorium',
    image: '/portfolio/conference-smart.jpg',
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
          >
            Produk & Layanan Kami
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai solusi multimedia audio visual profesional untuk memenuhi kebutuhan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {product.title}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600">{product.description}</p>
                <Link href={`/products/${product.slug}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Detail Produk
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 