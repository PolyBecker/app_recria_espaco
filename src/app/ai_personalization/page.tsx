'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Upload } from '@mui/icons-material';
import FooterIcons from '@/app/components/footer_icons';

export default function AiPersonalizationPage() {
  return (
    <div className="flex flex-col px-6 py-6 bg-[#FDFDFB] min-h-screen">
      {/* Título */}
      <h1 className="text-[#484747] font-semibold text-base mb-4">
        Personalize seu espaço com IA
      </h1>
      {/* Campo de texto */}
      <textarea
        maxLength={500}
        className="w-full min-h-[120px] resize-y rounded-xl border border-[#E0E0E0] bg-white text-sm text-gray-500 p-4 placeholder:text-[#A4A4A4] shadow-sm"
        placeholder="Descreva como você gostaria do seu ambiente ou solicite sugestões criativas!Não esqueça de enviar uma foto do seu espaço clicando no ícone de câmera logo abaixo."
      />

      {/* Upload + Botão */}
      <div className="flex items-center justify-between mt-4">
        <Link href="#">
          <Upload className="text-[#484747]" fontSize="medium" />
        </Link>
        <button className="bg-[#F88208] hover:bg-[#FFA13F] active:bg-[#FFA13F] text-white font-semibold py-2 px-6 rounded-lg shadow-md text-sm">
          Enviar
        </button>
      </div>

      {/* Resultado */}
      <div className="mt-8">
        <p className="text-[#484747] font-semibold text-sm mb-3">Resultado:</p>

        {/* Carrossel horizontal */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          <div className="min-w-[170px] rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src="/place_user_before.png"
              alt="Espaço do usuário antes"
              width={170}
              height={120}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="min-w-[170px] rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src="/place_user_after.png"
              alt="Espaço do usuário depois"
              width={170}
              height={120}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="flex items-center justify-center min-w-[40px]">
            <ChevronRight className="text-[#484747]" />
          </div>
        </div>

        {/* Imagem destaque */}
        <div className="mt-4 rounded-lg overflow-hidden">
          <Image
            src="/place_user_after_bigger.png"
            alt="Espaço do usuário depois - destaque"
            width={300}
            height={200}
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Rodapé */}
      <div className="mt-auto pt-10">
        <FooterIcons />
      </div>
    </div>
  );
}
