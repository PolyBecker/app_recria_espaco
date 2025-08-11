'use client';

import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-[#FFF8EC] px-6 py-10">
      {/* Logo */}
      <img src="/icon_recriaespaco.svg" alt="Logo" className="w-16 h-16 mt-20 mb-10" />

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-xs gap-4">
        {/* Email */}
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-lg bg-white text-sm text-[#777777] placeholder-[#777777] shadow outline-none
                     border border-transparent
                     hover:border-[#F1D6A7]
                     focus:ring-2 focus:ring-[#F1D6A7]"
        />

        {/* Senha com ícone MUI funcional */}
        <label htmlFor="password" className="sr-only">Senha</label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Senha"
            className="w-full px-4 py-3 rounded-lg bg-white text-sm text-[#777777] placeholder-[#777777] shadow outline-none
                       border border-transparent
                       hover:border-[#F1D6A7]
                       focus:ring-2 focus:ring-[#F1D6A7]"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          >
            {showPassword ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
          </button>
        </div>
        {/* Botão de login */}
        <button
  type="button"
  onClick={() => (window.location.href = "/professionals")}
  className="w-full py-3 rounded-lg text-white font-semibold bg-orange-500 shadow-md transition-colors duration-200 hover:bg-[#FFA13F] active:bg-[#FFA13F]"
>
  Log in
</button>
        <a href="#" className="text-center text-sm text-gray-600 underline">
          Esqueci minha senha
        </a>
      </form>
      <a
  href="/registration"
  className="w-full max-w-xs text-center mt-4 text-base text-gray-600 underline"
>
  Cadastre-se
</a>

      {/* Social login */}
      <div className="flex flex-col items-center gap-4 mt-10">
        <span className="text-sm text-gray-600">Ou Continue com:</span>
        <div className="flex gap-4">
  <a href="#">
    <img src="/logo_icon_apple.svg" alt="Apple" className="w-10 h-10" />
  </a>
  <a href="#">
    <img src="/logo_icon_facebook.svg" alt="Facebook" className="w-10 h-10" />
  </a>
  <a href="#">
    <img src="/logo_icon_google.svg" alt="Google" className="w-10 h-10" />
  </a>
</div>
      </div>
    </div>
  );
}
