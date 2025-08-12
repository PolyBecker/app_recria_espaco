'use client';
import Link from 'next/link';
import { Home, PhotoFilter, SearchOutlined, Build, Person } from '@mui/icons-material';

export default function FooterIcons() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white flex items-center justify-around shadow-md rounded-t-xl px-4 z-30">
      <Link href="/professionals">
        <Home className="text-gray-600" />
      </Link>
      <Link href="/ai_personalization">
        <PhotoFilter className="text-gray-600" />
      </Link>
      <Link href="/search_professionals">
        <SearchOutlined className="text-gray-600" />
      </Link>
      <Link href="/worker_registration">
        <Build className="text-gray-600" />
      </Link>
      <Link href="/registration">
        <Person className="text-gray-600" />
      </Link>
    </div>
  );
}
