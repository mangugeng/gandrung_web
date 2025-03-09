'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-4">
            <Image
              src="/logo.png"
              alt="Gandrung Event Logo"
              width={50}
              height={50}
              style={{ objectFit: 'contain' }}
              priority
            />
            <Image
              src="/text-logo.png"
              alt="Gandrung Event Text Logo"
              width={340}
              height={15}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-white hover:text-blue-200 transition-colors">
              Tentang Kami
            </Link>
            <Link href="/#products" className="text-white hover:text-blue-200 transition-colors">
              Produk
            </Link>
            <Link href="/#portfolio" className="text-white hover:text-blue-200 transition-colors">
              Portfolio
            </Link>
            <Link href="/#clients" className="text-white hover:text-blue-200 transition-colors">
              Klien
            </Link>
            <Link href="/event-equipment-calculator" className="text-white hover:text-blue-200 transition-colors">
              Equipment Calculator
            </Link>
            <Link
              href="/#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-200 transition-colors"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-black/90 backdrop-blur-md`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3">
          <Link
            href="/#about"
            className="block text-white hover:text-blue-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Tentang Kami
          </Link>
          <Link
            href="/#products"
            className="block text-white hover:text-blue-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Produk
          </Link>
          <Link
            href="/#portfolio"
            className="block text-white hover:text-blue-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/#clients"
            className="block text-white hover:text-blue-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Klien
          </Link>
          <Link
            href="/event-equipment-calculator"
            className="block text-white hover:text-blue-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Equipment Calculator
          </Link>
          <Link
            href="/#contact"
            className="block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors text-center"
            onClick={() => setIsOpen(false)}
          >
            Hubungi Kami
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 