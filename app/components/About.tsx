'use client';

import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiCheckCircle, FiTool } from 'react-icons/fi';

const features = [
  {
    icon: <FiAward className="h-6 w-6" />,
    title: 'Berpengalaman',
    description: 'Lebih dari 15 tahun pengalaman dalam industri multimedia audio visual',
  },
  {
    icon: <FiUsers className="h-6 w-6" />,
    title: 'Tim Ahli',
    description: 'Didukung oleh tim teknisi profesional dan bersertifikat',
  },
  {
    icon: <FiCheckCircle className="h-6 w-6" />,
    title: 'Produk Berkualitas',
    description: 'Menggunakan produk berstandar internasional dengan garansi resmi',
  },
  {
    icon: <FiTool className="h-6 w-6" />,
    title: 'Layanan Purna Jual',
    description: 'Dukungan teknis dan maintenance berkala untuk kepuasan pelanggan',
  }
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
          >
            Tentang Gandrung Media Corp
          </motion.h2>
          <p className="max-w-2xl text-lg text-gray-600 lg:mx-auto">
            Perusahaan penyedia solusi multimedia audio visual profesional dengan pengalaman lebih dari 15 tahun
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Gandrung Media Corp telah dipercaya oleh berbagai instansi pemerintah, perusahaan swasta, dan institusi pendidikan 
            dalam menyediakan solusi multimedia audio visual yang berkualitas. Komitmen kami adalah memberikan produk dan 
            layanan terbaik dengan dukungan purna jual yang memuaskan.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 