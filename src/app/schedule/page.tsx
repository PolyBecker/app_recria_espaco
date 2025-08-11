'use client';

import { useRef, useState } from 'react';
import { IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FooterIcons from '../components/footer_icons/page';

export default function ScheduleServicePage() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const [notes, setNotes] = useState('');
  const [reviewDragging, setReviewDragging] = useState(false);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const reviewPointerDown = useRef(false);
  const reviewStartX = useRef(0);
  const reviewStartScroll = useRef(0);
  const allHours = [
    '08:00',
    '10:00',
    '14:00',
    '14:30',
  ];

  const servicePrice = 280;
  const serviceDuration = 1;
  const formattedTotal = servicePrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const getAvailableHours = (date: Date) => {
    return allHours.filter((_, idx) => (date.getDate() + idx) % 2 === 0);
  };

  const availableHours =
    selectedDay !== null
      ? getAvailableHours(new Date(currentYear, currentMonth, selectedDay))
      : [];

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
    <div className="min-h-screen bg-[#FDFDFB] px-4 pt-6 pb-24 text-[#484884]">
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
          <IconButton size="small" onClick={() => {
            if (currentMonth === 0) {
              setCurrentMonth(11);
              setCurrentYear((y) => y - 1);
            } else {
              setCurrentMonth(currentMonth - 1);
            }
            setSelectedDay(null);
            setSelectedHour(null);
          }}>
            <ArrowBackIosIcon fontSize="small" />
          </IconButton>
          <p className="font-medium">
            {new Date(currentYear, currentMonth).toLocaleString('pt-BR', {
              month: 'long',
              year: 'numeric',
            })}
          </p>
          <IconButton size="small" onClick={() => {
            if (currentMonth === 11) {
              setCurrentMonth(0);
              setCurrentYear((y) => y + 1);
            } else {
              setCurrentMonth(currentMonth + 1);
            }
            setSelectedDay(null);
            setSelectedHour(null);
          }}>
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </div>
        <div className="grid grid-cols-7 gap-2 text-sm text-center">
          {[
            ...Array(new Date(currentYear, currentMonth, 1).getDay()).fill(null),
            ...Array(new Date(currentYear, currentMonth + 1, 0).getDate())
              .fill(null)
              .map((_, i) => i + 1),
          ].map((day, idx) =>
            day ? (
              <button
                key={idx}
                onClick={() => {
                  setSelectedDay(day);
                  setSelectedHour(null);
                }}
                className={`p-2 rounded-full ${
                  selectedDay === day
                    ? 'bg-orange-200'
                    : 'hover:bg-orange-100'
                }`}
              >
                {day}
              </button>
            ) : (
              <span key={idx}></span>
            ),
          )}
        </div>
      </div>

      {/* Horários */}
      <div className="mt-6">
        <p className="font-semibold text-base">Escolha os horários</p>
        {selectedDay ? (
          availableHours.length > 0 ? (
            <>
              <div className="flex gap-4 mt-3 flex-wrap">
                {availableHours.map((hour) => (
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
              {selectedHour && (
                <>
                  <p className="mt-4 text-sm font-semibold">
                    Total: {formattedTotal} / {serviceDuration}h
                  </p>
                  <div className="mt-4 border border-orange-300 rounded-xl p-4">
                    <textarea
                      className="w-full text-sm resize-y outline-none"
                      rows={3}
                      maxLength={500}
                      placeholder="Adicione observações (máx. 500 caracteres)"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                    <button
                      className="mt-2 w-full bg-[#F88208] text-white font-medium py-2 rounded-lg hover:bg-[#FFA13F] active:bg-[#FFA13F]"
                    >
                      Contratar
                    </button>
                  </div>
                  <a href="" className="mt-2 inline-block text-gray-500">
                    <CloudUploadIcon />
                  </a>
                </>
              )}
            </>
          ) : (
            <p className="text-sm text-gray-500 mt-3">Nenhum horário disponível</p>
          )
        ) : (
          <p className="text-sm text-gray-500 mt-3">Selecione um dia</p>
        )}
      </div>
      <FooterIcons />
    </div>
  );
}
