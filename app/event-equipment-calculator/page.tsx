'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Equipment {
  name: string;
  pricePerDay: number;
  quantity: number;
  category: string;
  description?: string;
  unit?: string;
  additionalCosts?: {
    operator?: number;
    installation?: number;
    transport?: number;
  };
  dimensions?: {
    width?: number;
    height?: number;
    area?: number;
  };
}

interface AdditionalCost {
  checked: boolean;
  cost?: number;
  multiplier?: number;
}

interface AdditionalCosts {
  visualDirector: AdditionalCost;
  visualJockey: AdditionalCost;
  crewSetting: AdditionalCost;
  crewStandby: AdditionalCost;
  earlySetup50: AdditionalCost;
  earlySetup30: AdditionalCost;
  loadingAccess: AdditionalCost;
  hdmiCable: AdditionalCost;
}

export default function EventEquipmentCalculator() {
  const [days, setDays] = useState<string>('1');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAdditionalCosts, setShowAdditionalCosts] = useState<boolean>(false);
  const [showOrderSummary, setShowOrderSummary] = useState<boolean>(false);
  const [additionalCosts, setAdditionalCosts] = useState<AdditionalCosts>({
    visualDirector: { checked: false, cost: 2500000 },
    visualJockey: { checked: false, cost: 1500000 },
    crewSetting: { checked: false, cost: 300000 },
    crewStandby: { checked: false, cost: 250000 },
    earlySetup50: { checked: false, multiplier: 1.5 },
    earlySetup30: { checked: false, multiplier: 1.3 },
    loadingAccess: { checked: false, cost: 500000 },
    hdmiCable: { checked: false, cost: 100000 },
  });
  const [equipment, setEquipment] = useState<Equipment[]>([
    // LED Display
    { name: 'LED Indoor P3.9', pricePerDay: 600000, quantity: 0, category: 'LED Display', description: 'WUXGA: 1920 x 1080 (rasio 16:9), Pixel per m2 X 256 pixel', unit: 'per m²' },
    { name: 'LED Indoor P2.9', pricePerDay: 700000, quantity: 0, category: 'LED Display', description: 'WXGA: 1280 x 768 (rasio 16:9), Pixel per m2 X 336 pixel', unit: 'per m²' },
    { name: 'LED Indoor P2.6', pricePerDay: 800000, quantity: 0, category: 'LED Display', description: 'XGA: 1024 x 768 (rasio 4:3), Pixel per m2 X 384 pixel', unit: 'per m²' },
    { name: 'LED Indoor P1.5', pricePerDay: 5000000, quantity: 0, category: 'LED Display', unit: 'per m²' },
    { name: 'LED Outdoor P3.9', pricePerDay: 800000, quantity: 0, category: 'LED Display', description: 'WUXGA: 1920 x 1080 (rasio 16:9)', unit: 'per m²' },
    
    // LCD TV
    { name: 'TV LCD 43 INCH', pricePerDay: 500000, quantity: 0, category: 'LCD TV', description: '97cm x 57cm' },
    { name: 'TV LCD 50 INCH', pricePerDay: 600000, quantity: 0, category: 'LCD TV', description: '117cm x 71cm' },
    { name: 'TV LCD 55 INCH', pricePerDay: 700000, quantity: 0, category: 'LCD TV', description: '124cm x 72cm' },
    { name: 'TV LCD 60 INCH', pricePerDay: 800000, quantity: 0, category: 'LCD TV', description: '137cm x 79cm' },
    { name: 'TV LCD 70 INCH', pricePerDay: 1600000, quantity: 0, category: 'LCD TV', description: '157cm x 91cm' },
    { name: 'TV LCD 86 INCH', pricePerDay: 3700000, quantity: 0, category: 'LCD TV', description: '194cm x 111cm' },
    
    // Touchscreen
    { name: 'TV TOUCHSCREEN 43 INCH', pricePerDay: 2000000, quantity: 0, category: 'Touchscreen', description: '98cm x 57cm' },
    { name: 'TV TOUCHSCREEN 50 INCH', pricePerDay: 2300000, quantity: 0, category: 'Touchscreen', description: '113.5cm x 66.5cm' },
    { name: 'TV TOUCHSCREEN 55 INCH', pricePerDay: 2500000, quantity: 0, category: 'Touchscreen', description: '125cm x 74cm' },
    { name: 'TV TOUCHSCREEN 65 INCH', pricePerDay: 3000000, quantity: 0, category: 'Touchscreen', description: '147cm x 85cm' },
    { name: 'TV TOUCHSCREEN 70 INCH', pricePerDay: 4500000, quantity: 0, category: 'Touchscreen', description: '195cm x 112cm' },

    // Screen Portable
    { name: 'SCREEN TRIPOD 70"X70"', pricePerDay: 250000, quantity: 0, category: 'Screen Portable', description: '1,7m x 1,7m' },
    { name: 'SCREEN TRIPOD 84"X84"', pricePerDay: 300000, quantity: 0, category: 'Screen Portable', description: '2,1m x 2,1m' },
    { name: 'SCREEN PORTABLE 120"', pricePerDay: 400000, quantity: 0, category: 'Screen Portable', description: '2,4m x 1,8m' },
    { name: 'SCREEN PORTABLE 150"', pricePerDay: 500000, quantity: 0, category: 'Screen Portable', description: '3m x 2,3m' },
    { name: 'SCREEN PORTABLE 180"', pricePerDay: 700000, quantity: 0, category: 'Screen Portable', description: '3,5m x 2,5m' },
    { name: 'SCREEN PORTABLE 200"', pricePerDay: 700000, quantity: 0, category: 'Screen Portable', description: '4m x 3m' },
    { name: 'SCREEN PORTABLE 210"', pricePerDay: 700000, quantity: 0, category: 'Screen Portable', description: '4,5m x 3,5m' },
    { name: 'SCREEN PORTABLE 300"', pricePerDay: 1800000, quantity: 0, category: 'Screen Portable', description: '6m x 4,5m' },
    { name: 'SCREEN PORTABLE 400"', pricePerDay: 4500000, quantity: 0, category: 'Screen Portable', description: '8m x 6m' },
    { name: 'SCREEN PANORAMIC', pricePerDay: 5000000, quantity: 0, category: 'Screen Portable', description: '13m x 4m' },
    { name: 'SCREEN CUSTOMIZED FLEXLITE', pricePerDay: 250000, quantity: 0, category: 'Screen Portable', unit: 'per m²' },

    // Projector
    { name: 'Projector 4.000 Lumens', pricePerDay: 800000, quantity: 0, category: 'Projector', description: 'Ideal untuk Screen 120 inch & 150 inch' },
    { name: 'Projector 4.500 Lumens', pricePerDay: 1000000, quantity: 0, category: 'Projector', description: 'Ideal untuk Screen 120 inch & 150 inch' },
    { name: 'Projector 5.000 Lumens', pricePerDay: 1200000, quantity: 0, category: 'Projector', description: 'Ideal untuk Screen 120 inch & 150 inch' },
    { name: 'Projector 5.500 Lumens', pricePerDay: 1400000, quantity: 0, category: 'Projector', description: 'Ideal untuk Screen 120 inch & 150 inch' },
    { name: 'Projector 6.000 Lumens', pricePerDay: 1500000, quantity: 0, category: 'Projector', description: 'Ideal untuk Screen 180 inch & 200 inch' },
    { name: 'Projector 6.500 Lumens', pricePerDay: 2000000, quantity: 0, category: 'Projector', description: 'Ideal untuk Screen 180 inch & 200 inch' },
    { name: 'Projector 7.000 Lumens', pricePerDay: 2500000, quantity: 0, category: 'Projector', description: 'Ideal untuk Screen 180 inch & 200 inch' },
    { name: 'Projector 8.000 Lumens', pricePerDay: 3000000, quantity: 0, category: 'Projector', description: 'Ideal untuk Screen 180 inch & 200 inch' },
    { name: 'Projector 10.000 Lumens', pricePerDay: 3500000, quantity: 0, category: 'Projector', description: 'Ideal untuk Screen 300 inch & 400 inch' },
    { name: 'Projector 12.000 Lumens', pricePerDay: 4500000, quantity: 0, category: 'Projector', description: 'Ideal untuk Screen 300 inch & 400 inch' },
    { name: 'Projector 13.000 Lumens', pricePerDay: 5500000, quantity: 0, category: 'Projector', description: 'Ideal untuk Screen 300 inch & 400 inch' },
    { name: 'Projector 15.000 Lumens', pricePerDay: 7500000, quantity: 0, category: 'Projector', description: 'Ideal untuk Screen 300 inch & 400 inch' },
    { name: 'Projector 16.000 Lumens', pricePerDay: 8500000, quantity: 0, category: 'Projector', description: 'Ideal untuk Screen 300 inch & 400 inch' },
    { name: 'Projector 26.000 Lumens', pricePerDay: 25000000, quantity: 0, category: 'Projector', description: 'Ideal untuk Screen 300 inch & 400 inch' },
    { name: 'Projector 30.000 Lumens', pricePerDay: 30000000, quantity: 0, category: 'Projector', description: 'Ideal untuk Screen 300 inch & 400 inch' },
    { name: 'Projector 40.000 Lumens', pricePerDay: 40000000, quantity: 0, category: 'Projector', description: 'Ideal untuk Screen 300 inch & 400 inch' },

    // Sound System
    { name: 'Sound System Mini Package', pricePerDay: 1500000, quantity: 0, category: 'Sound System', description: '3.000 Watt, PA Speaker Audio Center (2 unit), Sub RCF (2 unit), RCF Monitor (4 unit), Mixer 18 ch Analog' },
    { name: 'Sound System Standard Package', pricePerDay: 2500000, quantity: 0, category: 'Sound System', description: '3.000 Watt, PA Speaker Audio Center (2 unit), Sub RCF (2 unit), RCF Monitor (6 unit), Delay Speakers, Mixer 32 ch Yamaha TF 5' },
    { name: 'Sound System Acoustic Package', pricePerDay: 3000000, quantity: 0, category: 'Sound System', description: '3.000 Watt + Acoustic Set, Complete System' },
    { name: 'Sound System Big Band Package', pricePerDay: 5000000, quantity: 0, category: 'Sound System', description: '5.000 Watt + Full Band Set, Complete System' },
    { name: 'Sound System 10.000 WATT', pricePerDay: 10000000, quantity: 0, category: 'Sound System', description: 'PA Nexo Geos12 + Complete Set' },

    // Virtual Event Package
    { name: 'Paket Standard Virtual Event', pricePerDay: 8000000, quantity: 0, category: 'Virtual Event', description: 'Camera Handheld Sony FullHD, Webcam, VMix, Switcher FullHD, Monitor 43", Router Backup, Sound System, 3 Operator' },
    { name: 'Internet BOD 100Mbps', pricePerDay: 7000000, quantity: 0, category: 'Virtual Event', description: 'Broadband On Demand Stable Network' },
    { name: 'Zoom Live Pro (500 Partisipan)', pricePerDay: 2500000, quantity: 0, category: 'Virtual Event' },
    { name: 'Camera Handheld Sony FullHD', pricePerDay: 1500000, quantity: 0, category: 'Virtual Event', description: 'Include Instalasi, Tripod, Operator' },
    { name: 'VMix + Operator', pricePerDay: 4000000, quantity: 0, category: 'Virtual Event', description: 'Livestreaming Youtube/FB/Instagram/Zoom' },

    // Generator Set
    { name: 'Genset 40 KVA', pricePerDay: 2000000, quantity: 0, category: 'Power Supply', description: 'Include Oil & Operator' },
    { name: 'Genset 50 KVA', pricePerDay: 2500000, quantity: 0, category: 'Power Supply', description: 'Include Oil & Operator' },
    { name: 'Genset 60 KVA', pricePerDay: 3000000, quantity: 0, category: 'Power Supply', description: 'Include Oil & Operator' },
    { name: 'Genset 80 KVA', pricePerDay: 3500000, quantity: 0, category: 'Power Supply', description: 'Include Oil & Operator' },
    { name: 'Genset 100 KVA', pricePerDay: 4000000, quantity: 0, category: 'Power Supply', description: 'Include Oil & Operator' },

    // Stage
    { name: 'Stage with Carpet', pricePerDay: 170000, quantity: 0, category: 'Stage', description: 'Height 30/50/60 cm', unit: 'per m²' },
    { name: 'Stage with Melaminto', pricePerDay: 500000, quantity: 0, category: 'Stage', description: 'Height 30/40/50/60 cm', unit: 'per m²' },
    { name: 'Panggung Rigging', pricePerDay: 390000, quantity: 0, category: 'Stage', unit: 'per m³' },
    { name: 'Gate Banner 4 Sisi', pricePerDay: 9400000, quantity: 0, category: 'Stage', description: 'Tinggi 4m Panjang 6m', unit: 'per set' },
    { name: 'Barikade', pricePerDay: 110000, quantity: 0, category: 'Stage', unit: 'per m' },

    // Tenda
    { name: 'Tenda Plafon', pricePerDay: 35000, quantity: 0, category: 'Tenda', unit: 'per m²' },
    { name: 'Tenda Dekor Serut', pricePerDay: 50000, quantity: 0, category: 'Tenda', unit: 'per m²' },
    { name: 'Tenda Dekor Semi VIP', pricePerDay: 60000, quantity: 0, category: 'Tenda', unit: 'per m²' },
    { name: 'Tenda Dekor VIP', pricePerDay: 70000, quantity: 0, category: 'Tenda', unit: 'per m²' },
    { name: 'Tenda Roder Putih', pricePerDay: 70000, quantity: 0, category: 'Tenda', unit: 'per m²' },
    { name: 'Tenda Roder Transparan', pricePerDay: 105000, quantity: 0, category: 'Tenda', unit: 'per m²' },
    { name: 'Tenda Sarnavil 3x3', pricePerDay: 440000, quantity: 0, category: 'Tenda' },
    { name: 'Tenda Sarnavil 3x3 + Flooring', pricePerDay: 825000, quantity: 0, category: 'Tenda', description: 'Include Karpet Second' },
    { name: 'Tenda Sarnavil 5x5', pricePerDay: 825000, quantity: 0, category: 'Tenda' },
    { name: 'Tenda Sarnavil 5x5 + Flooring', pricePerDay: 1650000, quantity: 0, category: 'Tenda' },

    // Furniture
    { name: 'Sofa Triple', pricePerDay: 550000, quantity: 0, category: 'Furniture' },
    { name: 'Sofa Double', pricePerDay: 330000, quantity: 0, category: 'Furniture' },
    { name: 'Sofa Single VIP', pricePerDay: 220000, quantity: 0, category: 'Furniture' },
    { name: 'Sofa Single Retro', pricePerDay: 220000, quantity: 0, category: 'Furniture' },
    { name: 'Kursi Tiffany', pricePerDay: 35000, quantity: 0, category: 'Furniture' },
    { name: 'Kursi Futura + Cover', pricePerDay: 20000, quantity: 0, category: 'Furniture' },
    { name: 'Meja Bulat 120 + Cover', pricePerDay: 60000, quantity: 0, category: 'Furniture' },
    { name: 'Meja Persegi 60x120 + Cover', pricePerDay: 60000, quantity: 0, category: 'Furniture' },

    // AC & Cooling
    { name: 'AC Standing 5pk', pricePerDay: 1100000, quantity: 0, category: 'AC & Cooling', description: 'Termasuk instalasi' },
    { name: 'Misty Fan', pricePerDay: 550000, quantity: 0, category: 'AC & Cooling' },
    { name: 'Blower', pricePerDay: 160000, quantity: 0, category: 'AC & Cooling' },

    // Partisi & Stand
    { name: 'Stand 2x2', pricePerDay: 610000, quantity: 0, category: 'Partisi & Stand', description: 'Standard R8' },
    { name: 'Stand 2x3', pricePerDay: 720000, quantity: 0, category: 'Partisi & Stand', description: 'Standard R8' },
    { name: 'Stand 3x3', pricePerDay: 830000, quantity: 0, category: 'Partisi & Stand', description: 'Standard R8' },
    { name: 'Ruang Ganti 2x3 + Tirai', pricePerDay: 940000, quantity: 0, category: 'Partisi & Stand' },
    { name: 'Ruang Ganti 2x3 + Pintu', pricePerDay: 1100000, quantity: 0, category: 'Partisi & Stand' },
  ]);

  const categories = ['Semua', ...Array.from(new Set(equipment.map(item => item.category))).sort()];

  const calculateSubtotal = () => {
    const daysNum = parseInt(days) || 0;
    return equipment.reduce((total, item) => {
      let itemTotal = item.pricePerDay * item.quantity * (daysNum || 1);
      
      // Jika menggunakan early setup, tambahkan biaya
      if (additionalCosts.earlySetup50.checked) {
        itemTotal *= additionalCosts.earlySetup50.multiplier;
      } else if (additionalCosts.earlySetup30.checked) {
        itemTotal *= additionalCosts.earlySetup30.multiplier;
      }
      
      return total + itemTotal;
    }, 0);
  };

  const calculateAdditionalCostsTotal = () => {
    let total = 0;
    if (additionalCosts.visualDirector.checked) total += additionalCosts.visualDirector.cost;
    if (additionalCosts.visualJockey.checked) total += additionalCosts.visualJockey.cost;
    if (additionalCosts.crewSetting.checked) total += additionalCosts.crewSetting.cost;
    if (additionalCosts.crewStandby.checked) total += additionalCosts.crewStandby.cost;
    if (additionalCosts.loadingAccess.checked) total += additionalCosts.loadingAccess.cost;
    if (additionalCosts.hdmiCable.checked) total += additionalCosts.hdmiCable.cost;
    return total;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateAdditionalCostsTotal();
  };

  const handleQuantityChange = (index: number, value: string) => {
    const newEquipment = [...equipment];
    // Jika input kosong, set quantity menjadi 0
    if (value === '') {
      newEquipment[index].quantity = 0;
    } else {
      // Konversi ke number dan pastikan tidak negatif
      const numValue = Math.max(0, parseInt(value) || 0);
      newEquipment[index].quantity = numValue;
    }
    setEquipment(newEquipment);
  };

  const toggleAdditionalCost = (key: keyof AdditionalCosts) => {
    setAdditionalCosts(prev => ({
      ...prev,
      [key]: { ...prev[key], checked: !prev[key].checked }
    }));
  };

  const getSelectedItems = () => {
    return equipment.filter(item => item.quantity > 0);
  };

  const handleOrder = () => {
    const selectedItems = getSelectedItems();
    const message = `Halo, saya ingin memesan peralatan event:

Durasi: ${parseInt(days) || 1} hari
${selectedItems.map(item => `- ${item.name} (${item.quantity}${item.unit ? item.unit.replace('per ', '/') : ' unit'})`).join('\n')}

Biaya Tambahan:
${additionalCosts.visualDirector.checked ? '- Visual Director (VD)\n' : ''}${additionalCosts.visualJockey.checked ? '- Visual Jockey (VJ)\n' : ''}${additionalCosts.crewSetting.checked ? '- Crew Setting & Transport\n' : ''}${additionalCosts.crewStandby.checked ? '- Crew Standby\n' : ''}${additionalCosts.earlySetup50.checked ? '- Pemasangan H-2 (07-13)\n' : ''}${additionalCosts.earlySetup30.checked ? '- Pemasangan H-2 (14-20)\n' : ''}${additionalCosts.loadingAccess.checked ? '- Akses Loading Tanpa Lift\n' : ''}${additionalCosts.hdmiCable.checked ? '- Kabel HDMI >20m\n' : ''}
Total Estimasi: Rp ${calculateTotal().toLocaleString('id-ID')}

Mohon informasi lebih lanjut. Terima kasih.`;

    const whatsappUrl = `https://wa.me/+62818212777?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pt-20">
        {/* Sticky Header with Total */}
        <div className="sticky top-0 bg-white shadow-md z-10 py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Durasi Event (Hari)
                </label>
                <input
                  type="number"
                  min="1"
                  value={days}
                  onChange={(e) => {
                    const value = e.target.value;
                    setDays(value);
                  }}
                  onBlur={(e) => {
                    const value = e.target.value;
                    if (!value || parseInt(value) < 1) {
                      setDays('1');
                    }
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-center">
                  <span className="block text-lg font-medium text-gray-600 mb-1">Total Estimasi</span>
                  <span className="text-3xl font-bold text-blue-600">
                    Rp {calculateTotal().toLocaleString('id-ID')}
                  </span>
                  <div className="mt-2 text-sm text-gray-500">
                    <div>Subtotal: Rp {calculateSubtotal().toLocaleString('id-ID')}</div>
                    <div>Biaya Tambahan: Rp {calculateAdditionalCostsTotal().toLocaleString('id-ID')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content dengan Tabs */}
        <div className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Kalkulator Peralatan Event
            </h1>

            {/* Order Summary Button */}
            <div className="mb-8">
              <button
                onClick={() => setShowOrderSummary(!showOrderSummary)}
                className="w-full bg-white shadow rounded-lg p-4 flex justify-between items-center"
              >
                <span className="text-lg font-semibold">Ringkasan Pesanan</span>
                <span>{showOrderSummary ? '▼' : '▶'}</span>
              </button>
              
              {showOrderSummary && (
                <div className="mt-4 bg-white shadow rounded-lg p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Item yang Dipilih:</h3>
                      {getSelectedItems().length > 0 ? (
                        <div className="space-y-2">
                          {getSelectedItems().map(item => (
                            <div key={item.name} className="flex justify-between items-center">
                              <span>{item.name}</span>
                              <span className="font-medium">
                                {item.quantity} {item.unit ? item.unit.replace('per ', '/') : 'unit'} × Rp {item.pricePerDay.toLocaleString('id-ID')}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500">Belum ada item yang dipilih</p>
                      )}
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Biaya Tambahan yang Dipilih:</h3>
                      <div className="space-y-2">
                        {Object.entries(additionalCosts).filter(([_, value]) => value.checked).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center">
                            <span>
                              {key === 'visualDirector' && 'Visual Director (VD)'}
                              {key === 'visualJockey' && 'Visual Jockey (VJ)'}
                              {key === 'crewSetting' && 'Crew Setting & Transport'}
                              {key === 'crewStandby' && 'Crew Standby'}
                              {key === 'earlySetup50' && 'Pemasangan H-2 (07-13)'}
                              {key === 'earlySetup30' && 'Pemasangan H-2 (14-20)'}
                              {key === 'loadingAccess' && 'Akses Loading Tanpa Lift'}
                              {key === 'hdmiCable' && 'Kabel HDMI >20m'}
                            </span>
                            <span className="font-medium">
                              {value.multiplier ? `+${(value.multiplier - 1) * 100}%` : `Rp ${value.cost.toLocaleString('id-ID')}`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center font-semibold">
                        <span>Durasi Sewa:</span>
                        <span>{parseInt(days) || 1} hari</span>
                      </div>
                      <div className="flex justify-between items-center font-semibold">
                        <span>Subtotal:</span>
                        <span>Rp {calculateSubtotal().toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex justify-between items-center font-semibold">
                        <span>Total Biaya Tambahan:</span>
                        <span>Rp {calculateAdditionalCostsTotal().toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex justify-between items-center text-lg font-bold text-blue-600 mt-2">
                        <span>Total Estimasi:</span>
                        <span>Rp {calculateTotal().toLocaleString('id-ID')}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleOrder}
                      disabled={getSelectedItems().length === 0}
                      className={`w-full mt-4 py-3 px-4 rounded-lg text-white font-medium
                        ${getSelectedItems().length === 0
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-green-600 hover:bg-green-700'
                        }
                      `}
                    >
                      {getSelectedItems().length === 0
                        ? 'Pilih minimal 1 item'
                        : 'Pesan via WhatsApp'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Additional Costs Section */}
            <div className="mb-8">
              <button
                onClick={() => setShowAdditionalCosts(!showAdditionalCosts)}
                className="w-full bg-white shadow rounded-lg p-4 flex justify-between items-center"
              >
                <span className="text-lg font-semibold">Biaya Tambahan</span>
                <span>{showAdditionalCosts ? '▼' : '▶'}</span>
              </button>
              
              {showAdditionalCosts && (
                <div className="mt-4 bg-white shadow rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-4">Operator & Crew</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={additionalCosts.visualDirector.checked}
                            onChange={() => toggleAdditionalCost('visualDirector')}
                            className="mr-2"
                          />
                          Visual Director (VD) - Rp 2.500.000
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={additionalCosts.visualJockey.checked}
                            onChange={() => toggleAdditionalCost('visualJockey')}
                            className="mr-2"
                          />
                          Visual Jockey (VJ) - Rp 1.500.000
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={additionalCosts.crewSetting.checked}
                            onChange={() => toggleAdditionalCost('crewSetting')}
                            className="mr-2"
                          />
                          Crew Setting & Transport - Rp 300.000
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={additionalCosts.crewStandby.checked}
                            onChange={() => toggleAdditionalCost('crewStandby')}
                            className="mr-2"
                          />
                          Crew Standby - Rp 250.000
                        </label>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">Pemasangan & Instalasi</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={additionalCosts.earlySetup50.checked}
                            onChange={() => {
                              if (additionalCosts.earlySetup30.checked) {
                                toggleAdditionalCost('earlySetup30');
                              }
                              toggleAdditionalCost('earlySetup50');
                            }}
                            className="mr-2"
                          />
                          Pemasangan H-2 (07-13) - Tambahan 50%
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={additionalCosts.earlySetup30.checked}
                            onChange={() => {
                              if (additionalCosts.earlySetup50.checked) {
                                toggleAdditionalCost('earlySetup50');
                              }
                              toggleAdditionalCost('earlySetup30');
                            }}
                            className="mr-2"
                          />
                          Pemasangan H-2 (14-20) - Tambahan 30%
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={additionalCosts.loadingAccess.checked}
                            onChange={() => toggleAdditionalCost('loadingAccess')}
                            className="mr-2"
                          />
                          Akses Loading Tanpa Lift - Rp 500.000
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={additionalCosts.hdmiCable.checked}
                            onChange={() => toggleAdditionalCost('hdmiCable')}
                            className="mr-2"
                          />
                          Kabel HDMI >20m - Rp 100.000
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Tabs Navigation */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <div className="flex space-x-1 p-2 bg-gray-50">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category === 'Semua' ? 'all' : category)}
                      className={`
                        px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap
                        ${selectedCategory === (category === 'Semua' ? 'all' : category)
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-600 hover:bg-gray-200'
                        }
                      `}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                <div className="grid gap-4">
                  {equipment
                    .filter(item => selectedCategory === 'all' || item.category === selectedCategory)
                    .map((item, index) => (
                    <div 
                      key={item.name} 
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="mb-3 sm:mb-0">
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <p className="text-base font-semibold text-blue-600">
                          Rp {item.pricePerDay.toLocaleString('id-ID')}{item.unit ? ` ${item.unit}` : '/hari'}
                        </p>
                        {item.description && (
                          <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-600">Jumlah:</label>
                        <input
                          type="number"
                          min="0"
                          value={item.quantity || ''}
                          onChange={(e) => handleQuantityChange(
                            equipment.findIndex(eq => eq.name === item.name),
                            e.target.value
                          )}
                          className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {item.unit === 'per m²' && item.quantity > 0 && (
                          <span className="text-sm text-gray-500">
                            Total: Rp {(item.pricePerDay * item.quantity * parseInt(days) || 1).toLocaleString('id-ID')}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white shadow rounded-lg p-6">
              <div className="space-y-2 text-sm text-gray-500">
                <p>*Harga dapat berubah sesuai dengan kebutuhan spesifik event</p>
                <p>*Beberapa peralatan mungkin memerlukan biaya tambahan untuk operator, instalasi, atau transportasi</p>
                <p>*Minimal quantity untuk LED adalah 3x2m</p>
                <p>*Untuk LED Display:</p>
                <ul className="list-disc pl-6">
                  <li>Visual Director (VD) include pembuatan konten: Rp 2.500.000</li>
                  <li>Visual Jockey (VJ) include laptop vmix: Rp 1.500.000</li>
                  <li>Crew Setting & Transport: Rp 300.000</li>
                  <li>Crew Standby: Rp 250.000</li>
                </ul>
                <p>*Untuk pemasangan H-2:</p>
                <ul className="list-disc pl-6">
                  <li>Pk 07-13 dan GR H-1 (tambahan 50%)</li>
                  <li>Pk 14-20 dan GR H-1 (tambahan 30%)</li>
                  <li>Pk 21 keatas dan GR di Hari H (free)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 