'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import {
  Search,
  ArrowForwardIos,
  CleaningServices,
  ElectricalServices,
  Weekend,
  Yard,
  Window,
  Grass,
  Construction,
  Spa,
  FormatPaint,
  Pets,
  Plumbing,
  Pool,
  Handyman,
} from '@mui/icons-material';
import FooterIcons from '../components/footer_icons';

export default function ProfessionalsPage() {
  const [search, setSearch] = useState('');
  const [dragging, setDragging] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPointerDown = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  // Refs e estados para o carrossel de produtos (sessão 5)
  const [productDragging, setProductDragging] = useState(false);
  const productScrollRef = useRef<HTMLDivElement>(null);
  const productPointerDown = useRef(false);
  const productStartX = useRef(0);
  const productStartScroll = useRef(0);

  const works = [
    { name: 'cleaner', Icon: CleaningServices },
    { name: 'electrician', Icon: ElectricalServices },
    { name: 'furniture', Icon: Weekend },
    { name: 'gardener', Icon: Yard },
    { name: 'glazier', Icon: Window },
    { name: 'gram', Icon: Grass },
    { name: 'mason', Icon: Construction },
    { name: 'masseuse', Icon: Spa },
    { name: 'painter', Icon: FormatPaint },
    { name: 'pet sitter', Icon: Pets },
    { name: 'plumber', Icon: Plumbing },
    { name: 'pool', Icon: Pool },
    { name: 'repairs', Icon: Handyman },
  ];

  const storeItems = [
    'abajur.jpg',
    'almofada.webp',
    'arranjo.jpg',
    'calefator.webp',
    'cessto.jpg',
    'comoda.jpg',
    'espelho.jpg',
    'quadro.jpg',
    'sofa.jpg',
    'talher.jpg',
    'taça.png',
    'vaso.jpg',
  ];

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) return;
    isPointerDown.current = true;
    startX.current = e.clientX;
    startScroll.current = container.scrollLeft;
    setDragging(true);
    container.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown.current) return;
    const container = scrollRef.current;
    if (!container) return;
    const walk = e.clientX - startX.current;
    container.scrollLeft = startScroll.current - walk;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    isPointerDown.current = false;
    const container = scrollRef.current;
    if (container) {
      container.releasePointerCapture(e.pointerId);
    }
    setDragging(false);
  };

  // Handlers para o carrossel de produtos
  const handleProductPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = productScrollRef.current;
    if (!container) return;
    productPointerDown.current = true;
    productStartX.current = e.clientX;
    productStartScroll.current = container.scrollLeft;
    setProductDragging(true);
    container.setPointerCapture(e.pointerId);
  };

  const handleProductPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!productPointerDown.current) return;
    const container = productScrollRef.current;
    if (!container) return;
    const walk = e.clientX - productStartX.current;
    container.scrollLeft = productStartScroll.current - walk;
  };

  const endProductDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    productPointerDown.current = false;
    const container = productScrollRef.current;
    if (container) {
      container.releasePointerCapture(e.pointerId);
    }
    setProductDragging(false);
  };

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
      <div
        ref={scrollRef}
        className={`overflow-x-auto px-4 pb-2 no-scrollbar ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        <div className="flex space-x-5">
          {works.map(({ name, Icon }) => (
            <Link
              key={name}
              href={`/professionals/list?area=${encodeURIComponent(name)}`}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-1 overflow-hidden">
                <Icon fontSize="small" className="text-gray-600" />
              </div>
              <span className="text-[9px] text-[#6D6D6D] font-medium font-inter capitalize">
                {name}
              </span>
            </Link>
          ))}
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
        <Link href="/ai_personalization">
          <button className="w-full mt-4 py-3 rounded-lg text-white font-semibold bg-[#F88208] shadow-md transition-colors duration-200 hover:bg-[#FFA13F] active:bg-[#FFA13F]">
            Solicitar
          </button>
        </Link>
      </div>

      {/* Seção 5: Novidades */}
      <div className="px-4">
        <h2 className="text-[15px] font-medium text-[#484747] font-inter mb-2">Novidades</h2>
        <div
          ref={productScrollRef}
          className={`flex space-x-4 overflow-x-auto no-scrollbar ${productDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onPointerDown={handleProductPointerDown}
          onPointerMove={handleProductPointerMove}
          onPointerUp={endProductDrag}
          onPointerLeave={endProductDrag}
        >
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
        <div className="flex justify-end mt-2">
          <Link
            href=""
            className="text-[#484747] font-inter font-medium text-[11px] underline"
          >
            ver mais
          </Link>
        </div>
      </div>
      {/* Rodapé com ícones MUI */}
      <FooterIcons />
    </div>
  );
}
