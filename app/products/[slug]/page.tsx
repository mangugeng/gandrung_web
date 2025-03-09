import Link from 'next/link';
import { products } from '../../data/products';
import ProductDetailClient from '../../components/ProductDetailClient';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = products[params.slug as keyof typeof products];
  
  return {
    title: product ? `${product.title} - Gandrung Event` : 'Produk Tidak Ditemukan',
    description: product?.description || 'Halaman produk tidak ditemukan',
  };
}

interface Props {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Page(props: Props) {
  const product = products[props.params.slug as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Produk tidak ditemukan</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
} 