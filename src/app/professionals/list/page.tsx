'use client';


import Image from 'next/image';
import { Button, Rating } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';


export default function ProfessionalsListPage() {
  const searchParams = useSearchParams();
  const [area] = useState(searchParams.get('area') ?? 'Profissionais');


  const [dragging, setDragging] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pointerDown = useRef(false);
  const startY = useRef(0);
  const startScroll = useRef(0);


  const professionals = Array.from({ length: 15 }).map((_, i) => ({
    id: i + 1,
    name: `Profissional ${i + 1}`,
    photo: `/list_workers/worker${i + 1}.jpg`,
    description: 'Especialista em pintura residencial e comercial.'
  }));


  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) return;
    pointerDown.current = true;
    startY.current = e.clientY;
    startScroll.current = container.scrollTop;
    setDragging(true);
    container.setPointerCapture(e.pointerId);
  };


  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerDown.current) return;
    const container = scrollRef.current;
    if (!container) return;
    const walk = e.clientY - startY.current;
    container.scrollTop = startScroll.current - walk;
  };


  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerDown.current = false;
    const container = scrollRef.current;
    if (container) {
      container.releasePointerCapture(e.pointerId);
    }
    setDragging(false);
  };


  return (
    <div className="min-h-screen bg-[#FDFDFB] px-4 py-6 pb-20 flex flex-col space-y-6 mt-4 mx-4">


      {/* Título e card de destaque fixos */}
      <div className="sticky top-0 bg-[#FDFDFB] space-y-6 pb-4 z-20">
        <h1 className="text-[15px] font-medium text-[#484747] font-inter">{area}</h1>


        <div className="bg-white shadow rounded-xl p-4 flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/list_workers/worker13.jpg"
              alt="Destaque"
              width={64}
            height={64}
            className="object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h2 className="text-sm font-semibold text-[#484747] font-inter">Carla Dias</h2>
          <p className="text-xs text-gray-500 font-inter mb-1">Especialista em pintura de interiores com 10 anos de experiência.</p>
          <Rating name="highlight-rating" value={4} readOnly size="small" className="mb-2" />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#F88208',
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#FFA13F'
              },
              '&:active': {
                backgroundColor: '#FFA13F'
              },
              width: '70%'
            }}
            className="mx-auto"
          >
            Ver perfil
          </Button>
          </div>
        </div>
      </div>


      {/* Seção 3: Lista vertical de profissionais */}
      <div
        ref={scrollRef}
        className={`relative space-y-4 overflow-y-auto no-scrollbar flex-1 scroll-mask ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        {professionals.map((pro, i) => (
          <div key={i} className="flex items-center bg-white p-4 rounded-xl shadow">
            <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
              <Image
                src={pro.photo}
                alt={pro.name}
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-[#484747] font-inter">{pro.name}</h3>
              <p className="text-xs text-gray-500 font-inter mb-1">{pro.description}</p>
              <Rating name={`rating-${pro.id}`} value={4} readOnly size="small" className="mb-1" />
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: '#F88208',
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '12px',
                  padding: '4px 12px',
                  '&:hover': {
                    backgroundColor: '#FFA13F'
                  },
                  '&:active': {
                    backgroundColor: '#FFA13F'
                  }
                }}
              >
                Ver perfil
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




