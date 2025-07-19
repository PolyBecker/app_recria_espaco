'use client';
import Link from 'next/link';
import { Home, Build, SearchOutlined, ContentCut, Person } from '@mui/icons-material';

export default function FooterIcons() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white flex items-center justify-around shadow-md rounded-t-xl px-4">
      <Link href="">
        <Home className="text-gray-600" />
      </Link>
      <Link href="">
        <Build className="text-gray-600" />
      </Link>
      <Link href="">
        <SearchOutlined className="text-gray-600" />
      </Link>
      <Link href="">
        <ContentCut className="text-gray-600" />
      </Link>
      <Link href="">
        <Person className="text-gray-600" />
      </Link>
    </div>
  );
}
