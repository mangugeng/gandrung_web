'use client';

import { motion } from 'framer-motion';
import { FiUsers, FiCalendar, FiBriefcase } from 'react-icons/fi';

const stats = [
  {
    id: 1,
    icon: <FiUsers className="h-8 w-8" />,
    value: '500+',
    label: 'Klien',
    description: 'Klien puas dari berbagai sektor',
  },
  {
    id: 2,
    icon: <FiCalendar className="h-8 w-8" />,
    value: '20+',
    label: 'Tahun',
    description: 'Pengalaman di industri',
  },
  {
    id: 3,
    icon: <FiBriefcase className="h-8 w-8" />,
    value: '1000+',
    label: 'Proyek',
    description: 'Proyek sukses diselesaikan',
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center text-white"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <p className="text-blue-100">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 