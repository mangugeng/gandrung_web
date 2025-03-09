'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Gandrung Event Logo"
                width={180}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400">
              Solusi terpercaya untuk kebutuhan multimedia dan event organizer Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-gray-400 hover:text-white transition-colors">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#clients" className="text-gray-400 hover:text-white transition-colors">
                  Klien
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  ITC Kosambi Blok F-1 Baranangsiang No.8, Bandung 40121
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">(+62) 818 212 777</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">info@gandrung.co.id</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Jam Kerja</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Senin - Jumat: 08:00 - 17:00</li>
              <li>Sabtu: 08:00 - 14:00</li>
              <li>Minggu: Tutup</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Gandrung Event. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 