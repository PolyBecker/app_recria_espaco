'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Search } from '@mui/icons-material';

export default function ProfessionalsPage() {
  const [search, setSearch] = useState('');

  return (
    <div className="min-h-screen bg-[#FDFDFB] px-4 py-6 flex flex-col space-y-6">

      {/* Seção 1: perfil do usuário */}
      <div className="flex items-center space-x-4 px-4">
        <div className="w-[34px] h-[34px] rounded-full overflow-hidden">
          <Image src="/current_user.png" alt="User" width={34} height={34} />
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
      <div className="overflow-x-scroll px-4 pb-2 no-scrollbar">
        <div className="flex space-x-5">
          {Array.from({ length: 13 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                <Image src="/icon_cleaner.png" alt="Cleaner" width={24} height={24} />
              </div>
              <span className="text-[9px] text-[#6D6D6D] font-medium font-inter">Cleaner</span>
            </div>
          ))}
        </div>
      </div>

      {/* Seção 4: Personalização com IA */}
      <div className="px-4">
        <h2 className="text-[15px] font-medium text-[#484747] font-inter mb-2">Personalize seu espaço com IA</h2>
        <div className="flex items-center space-x-2 w-full">
          <div className="flex-grow rounded-lg overflow-hidden">
            <Image src="/sofa1.jpg" alt="Sofá 1" width={500} height={120} className="object-cover w-full h-auto" />
          </div>
          <div className="text-gray-400 text-xl">➡️</div>
          <div className="flex-grow rounded-lg overflow-hidden">
            <Image src="/sofa2.jpg" alt="Sofá 2" width={500} height={120} className="object-cover w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Seção 5: Novidades */}
      <div className="px-4">
        <h2 className="text-[15px] font-medium text-[#484747] font-inter mb-2">Novidades</h2>
        <div className="flex space-x-4 overflow-x-scroll no-scrollbar">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="w-28 flex-shrink-0 border rounded-xl p-2 text-center text-xs bg-white shadow">
              <div className="mb-1 w-full h-14 rounded overflow-hidden">
                <Image src="/store/pillow.png" alt="Produto" width={112} height={56} className="object-cover w-full h-full" />
              </div>
              <div className="text-[#484747] font-bold text-[9px] font-inter mb-1">Pillow</div>
              <div className="text-gray-500 mb-1">R$ 30,00</div>
              <button className="border text-orange-500 border-orange-300 rounded px-2 py-0.5 text-[10px]">+ Adicionar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
