'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: `Client ${i + 1}`,
  logo: `/clients/client-${i + 1}.png`,
}));

const Clients = () => {
  return (
    <section id="klien" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
          >
            Klien & Partner Kami
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dipercaya oleh berbagai instansi pemerintah, perusahaan swasta, dan institusi pendidikan
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  priority
                  quality={75}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  style={{ objectFit: 'contain' }}
                  className="transition-all duration-300 hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600">
            Dan masih banyak lagi klien yang telah mempercayakan kebutuhan multimedia mereka kepada kami
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients; 