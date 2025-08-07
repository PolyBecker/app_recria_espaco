'use client';

import { useRef, useState } from 'react';
import { IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function ScheduleServicePage() {
  const [selectedDate, setSelectedDate] = useState(15);
  const [selectedHour, setSelectedHour] = useState('08:00');
  const [reviewDragging, setReviewDragging] = useState(false);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const reviewPointerDown = useRef(false);
  const reviewStartX = useRef(0);
  const reviewStartScroll = useRef(0);
  const hours = [
    '08:00',
    '10:00',
    '14:00',
    '14:30',
  ];

  const reviews = [
    {
      id: 1,
      name: 'Jen Wilkinson',
      img: '/list_workers/worker1.jpg',
      time: '• 1 month ago',
      text: 'Interdum et malesuada fames ac ante ipsum primis in faucibus',
    },
    {
      id: 2,
      name: 'Peler Newman',
      img: '/list_workers/worker2.jpg',
      time: '• 2 months ago',
      text: 'Interdum et malesuada fames ac ante ipsum primis in faucibus',
    },
    {
      id: 3,
      name: 'Clara Smith',
      img: '/list_workers/worker3.jpg',
      time: '• 3 months ago',
      text: 'Interdum et malesuada fames ac ante ipsum primis in faucibus',
    },
    {
      id: 4,
      name: 'John Doe',
      img: '/list_workers/worker4.jpg',
      time: '• 4 months ago',
      text: 'Interdum et malesuada fames ac ante ipsum primis in faucibus',
    },
    {
      id: 5,
      name: 'Maria Lee',
      img: '/list_workers/worker5.jpg',
      time: '• 5 months ago',
      text: 'Interdum et malesuada fames ac ante ipsum primis in faucibus',
    },
    {
      id: 6,
      name: 'Lucas Silva',
      img: '/list_workers/worker6.jpg',
      time: '• 6 months ago',
      text: 'Interdum et malesuada fames ac ante ipsum primis in faucibus',
    },
  ];

  const handleReviewPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = reviewsRef.current;
    if (!container) return;
    reviewPointerDown.current = true;
    reviewStartX.current = e.clientX;
    reviewStartScroll.current = container.scrollLeft;
    setReviewDragging(true);
    container.setPointerCapture(e.pointerId);
  };

  const handleReviewPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!reviewPointerDown.current) return;
    const container = reviewsRef.current;
    if (!container) return;
    const walk = e.clientX - reviewStartX.current;
    container.scrollLeft = reviewStartScroll.current - walk;
  };

  const endReviewDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    reviewPointerDown.current = false;
    const container = reviewsRef.current;
    if (container) {
      container.releasePointerCapture(e.pointerId);
    }
    setReviewDragging(false);
  };

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
          <p className="font-bold text-base">Daniel Modeno</p>
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
        <div
          ref={reviewsRef}
          className={`mt-4 flex gap-4 overflow-x-auto no-scrollbar ${reviewDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onPointerDown={handleReviewPointerDown}
          onPointerMove={handleReviewPointerMove}
          onPointerUp={endReviewDrag}
          onPointerLeave={endReviewDrag}
        >
          {reviews.map(({ id, name, img, time, text }) => (
            <div key={id} className="w-44 flex-shrink-0 text-xs text-gray-600">
              <img src={img} alt={name} className="w-8 h-8 rounded-full mb-1" />
              <p className="font-medium text-gray-800 text-xs">{name}</p>
              <p className="text-[10px] text-gray-500">{time}</p>
              <p className="text-[11px] mt-1 leading-tight">{text}</p>
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
