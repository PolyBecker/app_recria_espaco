'use client';

import { useState } from 'react';
import { IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Image from 'next/image';

export default function ScheduleServicePage() {
  const [selectedDate, setSelectedDate] = useState(15);
  const [selectedHour, setSelectedHour] = useState('08:00');
  const hours = ['08:00', '10:00'];

  return (
    <div className="min-h-screen bg-[#FDFDFB] px-4 py-6 text-[#484747]">
      {/* Header do profissional */}
      <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4">
        <img
          src="/list_workers/worker13.jpg"
          alt="Daniel Moreno"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="font-bold text-base">Daniel Moreno</p>
          <p className="text-sm text-gray-600">R$ 40/hora</p>
          <p className="text-sm text-gray-500">3,2 miles de distância</p>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="text-orange-400 text-sm" />
          <span className="text-sm font-semibold">4.7</span>
        </div>
      </div>

      {/* Avaliações */}
      <div className="mt-6">
        <p className="font-bold text-base">Avaliações</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-3xl font-bold">4.93</span>
          <span className="text-xs text-gray-500">(30 avaliações)</span>
        </div>
        <div className="mt-3 h-3 w-24 bg-[#F88208] rounded-sm"></div>
        <div className="mt-4 flex gap-4">
          {[1, 2].map((item) => (
            <div key={item} className="flex-1 text-xs text-gray-600">
              <img
                src={`/list_workers/worker${item}.jpg`}
                alt="User"
                className="w-8 h-8 rounded-full mb-1"
              />
              <p className="font-medium text-gray-800 text-xs">{item === 1 ? 'Jen wilkdoson' : 'Peler Newman'}</p>
              <p className="text-[10px] text-gray-500">• 1 month ago</p>
              <p className="text-[11px] mt-1 leading-tight">
                nterdum et malesuada fames ac ante ipsum primis in faucibus
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Calendário */}
      <div className="mt-8 border border-orange-300 rounded-xl p-4">
        <div className="flex justify-between items-center mb-4">
          <IconButton size="small">
            <ArrowBackIosIcon fontSize="small" />
          </IconButton>
          <p className="font-medium">Janeiro 2024</p>
          <IconButton size="small">
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </div>
        <div className="grid grid-cols-7 gap-2 text-sm text-center">
          {[...Array(31)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setSelectedDate(i + 1)}
              className={`p-2 rounded-full ${
                selectedDate === i + 1 ? 'bg-orange-200' : 'hover:bg-orange-100'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Horários */}
      <div className="mt-6">
        <p className="font-semibold text-base">Escolha os horários</p>
        <div className="flex gap-4 mt-3">
          {hours.map((hour) => (
            <button
              key={hour}
              onClick={() => setSelectedHour(hour)}
              className={`px-4 py-2 rounded-lg border text-sm font-medium ${
                selectedHour === hour
                  ? 'bg-orange-200 border-orange-300'
                  : 'bg-white border-gray-200'
              }`}
            >
              {hour}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
