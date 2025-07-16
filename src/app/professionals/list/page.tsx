'use client';

import Image from 'next/image';
import { Button } from '@mui/material';
import { useState } from 'react';

export default function ProfessionalsListPage() {
  const [area] = useState('Pintor');

  const professionals = Array.from({ length: 15 }).map((_, i) => ({
    id: i + 1,
    name: `Profissional ${i + 1}`,
    photo: `/list_workers/worker${i + 1}.jpg`,
    description: 'Especialista em pintura residencial e comercial.'
  }));

  return (
    <div className="min-h-screen bg-[#FDFDFB] px-4 py-6 space-y-6 pb-20">

      {/* Seção 1: Título da categoria */}
      <h1 className="text-[15px] font-medium text-[#484747] font-inter">{area}</h1>

      {/* Seção 2: Card destaque */}
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
          <p className="text-xs text-gray-500 font-inter mb-2">Especialista em pintura de interiores com 10 anos de experiência.</p>
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
              }
            }}
            fullWidth
          >
            Ver perfil
          </Button>
        </div>
      </div>

      {/* Seção 3: Lista vertical de profissionais */}
      <div className="space-y-4">
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
              <p className="text-xs text-gray-500 font-inter">{pro.description}</p>
            </div>
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
              Ver
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
