import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-orange-500 to-orange-600">
      <Link
        href="/login"
        className="transition-transform hover:scale-105"
      >
        <img
          src="/logo_recriaespaco_white.svg"
          alt="Logo Recria Espaço"
          className="w-48 h-auto"
        />
      </Link>
    </main>
  );
}

