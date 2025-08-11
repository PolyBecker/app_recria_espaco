'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';

export default function RegistrationPage() {
  return (
    <div className="min-h-screen bg-[#FFF8EC] flex items-center justify-center px-6">
      <div className="w-full max-w-sm flex flex-col items-center text-center gap-8">
        {/* Ícone topo */}
        <div className="mt-8">
          <Image
            src="/icon_recriaespaco.svg"
            alt="Recria Espaço"
            width={56}
            height={56}
            className="opacity-90"
          />
        </div>

        {/* Texto "Quero..." */}
        <div className="text-[#777777] text-base">Quero...</div>

        {/* Botões */}
        <div className="w-full flex flex-col gap-5">
          <Button
            component={Link}
            href="/user_registration"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#F88208',
              textTransform: 'none',
              fontWeight: 600,
              borderRadius: '9999px',
              py: 1.5,
              boxShadow: '0px 3px 8px rgba(0,0,0,0.15)',
              '&:hover': { backgroundColor: '#FFA13F' },
              '&:active': { backgroundColor: '#FFA13F' },
            }}
          >
            Contratar
          </Button>

          <Button
            component={Link}
            href="/worker_registration"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#F88208',
              textTransform: 'none',
              fontWeight: 600,
              borderRadius: '9999px',
              py: 1.5,
              boxShadow: '0px 3px 8px rgba(0,0,0,0.15)',
              '&:hover': { backgroundColor: '#FFA13F' },
              '&:active': { backgroundColor: '#FFA13F' },
            }}
          >
            Trabalhar
          </Button>

          <Button
            component={Link}
            href="#"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#F88208',
              textTransform: 'none',
              fontWeight: 600,
              borderRadius: '9999px',
              py: 1.5,
              boxShadow: '0px 3px 8px rgba(0,0,0,0.15)',
              '&:hover': { backgroundColor: '#FFA13F' },
              '&:active': { backgroundColor: '#FFA13F' },
            }}
          >
            Vender
          </Button>
        </div>

        {/* Link "Já tenho cadastro" */}
        <Link
          href="/login"
          className="text-sm underline text-[#777777] hover:text-[#484747] transition-colors"
        >
          Já tenho cadastro
        </Link>

        {/* Respiro inferior para cantos arredondados do mock */}
        <div className="h-12" />
      </div>
    </div>
  );
}
