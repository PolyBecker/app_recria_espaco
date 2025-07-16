'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  Search,
  ArrowForwardIos,
  Home,
  Build,
  SearchOutlined,
  ContentCut,
  Person,
} from '@mui/icons-material';

export default function ProfessionalsPage() {
  const [search, setSearch] = useState('');

  const works = [
    'icon_cleaner.png',
    'icon_electrician.png',
    'icon_furniture.png',
    'icon_gardener.png',
    'icon_glazier.png',
    'icon_gram.png',
    'icon_mason.png',
    'icon_masseuse.png',
    'icon_painter.png',
    'icon_pet_sitter.png',
    'icon_plumber.png',
    'icon_pool.png',
    'icon_repairs.png',
  ];

  const storeItems = [
    'abajur.jpg',
    'almofada.webp',
    'arranjo.jpg',
    'calefator.webp',
    'cessto.jpg',
    'comoda.jpg',
    'espelho.jpg',
    'pillow.png',
    'quadro.jpg',
    'sofa.jpg',
    'talher.jpg',
    'taça.png',
    'vaso.jpg',
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFB] px-4 py-6 flex flex-col space-y-6 pb-20">

      {/* Seção 1: perfil do usuário */}
      <div className="flex items-center space-x-4 px-4">
        <div className="w-[34px] h-[34px] rounded-full overflow-hidden">
          <Image src="/current_user.avif" alt="User" width={34} height={34} />
        </div>
        <span className="text-[20px] font-bold text-[#484747] font-inter">user-name</span>
      </div>

      {/* Seção 2: campo de busca */}
      <div className="flex justify-start px-4">
        <div className="flex items-center w-[70%] bg-white rounded-full px-4 py-2 shadow">
          <input
            type="text"
            placeholder="Busco por..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-grow bg-transparent outline-none text-sm font-inter"
          />
          <Search className="text-gray-500" fontSize="small" />
        </div>
      </div>

      {/* Seção 3: lista horizontal de profissionais */}
      <div className="overflow-x-auto px-4 pb-2 cursor-grab no-scrollbar">
        <div className="flex space-x-5">
          {works.map((file) => {
            const name = file
              .replace('icon_', '')
              .replace(/\.[^/.]+$/, '')
              .replace(/_/g, ' ');

            return (
              <div key={file} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-1 overflow-hidden">
                  <Image src={`/works/${file}`} alt={name} width={24} height={24} />
                </div>
                <span className="text-[9px] text-[#6D6D6D] font-medium font-inter capitalize">
                  {name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Seção 4: Personalização com IA */}
      <div className="px-4">
        <h2 className="text-[15px] font-medium text-[#484747] font-inter mb-2">Personalize seu espaço com IA</h2>
        <div className="flex items-center space-x-2 w-full">
          <div className="flex-grow rounded-lg overflow-hidden">
            <Image src="/place_before.png" alt="Sofá 1" width={500} height={120} className="object-cover w-full h-auto" />
          </div>
          <ArrowForwardIos fontSize="small" className="text-gray-400" />
          <div className="flex-grow rounded-lg overflow-hidden">
            <Image src="/place_after.png" alt="Sofá 2" width={500} height={120} className="object-cover w-full h-auto" />
          </div>
        </div>
        <button className="w-full mt-4 py-3 rounded-lg text-white font-semibold bg-[#F88208] shadow-md transition-colors duration-200 hover:bg-[#FFA13F] active:bg-[#FFA13F]">
          Personalize com IA
        </button>
      </div>

      {/* Seção 5: Novidades */}
      <div className="px-4">
        <h2 className="text-[15px] font-medium text-[#484747] font-inter mb-2">Novidades</h2>
        <div className="flex space-x-4 overflow-x-auto cursor-grab no-scrollbar">
          {storeItems.map((file) => {
            const name = file.replace(/\.[^/.]+$/, '').replace(/_/g, ' ');

            return (
              <div key={file} className="w-28 flex-shrink-0 border rounded-xl p-2 text-center text-xs bg-white shadow">
                <div className="mb-1 w-full h-14 rounded overflow-hidden">
                  <Image
                    src={`/store/${file}`}
                    alt={name}
                    width={122}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-[#484747] font-bold text-[9px] font-inter mb-1 capitalize">{name}</div>
                <div className="text-gray-500 mb-1">R$ 30,00</div>
                <button className="border text-orange-500 border-orange-300 rounded px-2 py-0.5 text-[10px]">+ Adicionar</button>
              </div>
            );
          })}
        </div>
      </div>
      {/* Rodapé com ícones MUI */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-white flex items-center justify-around shadow-md rounded-t-xl px-4">
        <Home className="text-gray-600" />
        <Build className="text-gray-600" />
        <SearchOutlined className="text-gray-600" />
        <ContentCut className="text-gray-600" />
        <Person className="text-gray-600" />
      </div>
    </div>
  );
}
