'use client';

import Link from 'next/link';
import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Gandrung Media Corp</h3>
            <p className="text-gray-400">
              Penyedia solusi multimedia audio visual profesional dengan pengalaman lebih dari 15 tahun. 
              Kami berkomitmen memberikan produk dan layanan terbaik untuk kepuasan pelanggan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#hero" className="text-gray-400 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-gray-400 hover:text-white transition-colors">
                  Produk & Layanan
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <ul className="space-y-2 text-gray-400">
              <li>ITC Kosambi Blok F-1 Baranangsiang No.8</li>
              <li>Bandung 40121</li>
              <li>Telepon: (+62) 818 212 777</li>
              <li>Email: info@gandrung.co.id</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com/gandrungmediacorp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FiFacebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/gandrungmediacorp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FiInstagram className="h-6 w-6" />
              </a>
              <a href="https://youtube.com/@gandrungmediacorp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FiYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gandrung Media Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 