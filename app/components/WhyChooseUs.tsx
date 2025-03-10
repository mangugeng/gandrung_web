import { FaUserTie, FaTools, FaMedal, FaPiggyBank } from 'react-icons/fa';

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-12">
            WHY CHOOSE US
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Profesional */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
              <FaUserTie className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">PROFESIONAL</h3>
            <p className="text-gray-600">
              Kami memiliki staf profesional yang sudah ahli dibidangnya dalam menyelenggarakan event taraf nasional dan internasional.
            </p>
          </div>

          {/* Lengkap */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
              <FaTools className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">LENGKAP</h3>
            <p className="text-gray-600">
              Kami memiliki peralatan yang lengkap untuk menunjang event yang diselenggarakan sesuai harapan klien.
            </p>
          </div>

          {/* Berpengalaman */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
              <FaMedal className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">BERPENGALAMAN</h3>
            <p className="text-gray-600">
              Kami memiliki pengalaman dalam semua event yang diselenggarakan oleh pihak swasta maupun pemerintah.
            </p>
          </div>

          {/* Hemat Biaya */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
              <FaPiggyBank className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">HEMAT BIAYA</h3>
            <p className="text-gray-600">
              Mengapa harus mengeluarkan biaya besar untuk membeli peralatan sendiri? Dengan menyewa, Anda mendapatkan teknologi terkini tanpa harus mengeluarkan investasi besar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 