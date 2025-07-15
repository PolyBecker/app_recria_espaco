'use client';

import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
  TextField,
  InputAdornment,
  Card,
  CardHeader,
  Avatar,
  Typography,
} from '@mui/material';

const professionals = [
  {
    id: 1,
    name: 'Maria Silva',
    profession: 'Pedagoga',
    avatar: '/logo_icon_apple.svg',
  },
  {
    id: 2,
    name: 'João Souza',
    profession: 'Psicólogo',
    avatar: '/logo_icon_facebook.svg',
  },
  {
    id: 3,
    name: 'Ana Paula',
    profession: 'Terapeuta',
    avatar: '/logo_icon_google.svg',
  },
];

export default function ProfessionalSearchPage() {
  const [search, setSearch] = useState('');

  const filtered = professionals.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#FFF8EC] flex flex-col items-center px-4 py-6 gap-6">
      <h1 className="text-2xl font-semibold text-[#444]">Buscar Profissionais</h1>
      <TextField
        variant="outlined"
        placeholder="Digite o nome do profissional"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md bg-white"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <div className="grid gap-4 w-full max-w-md">
        {filtered.map((p) => (
          <Card key={p.id} variant="outlined">
            <CardHeader
              avatar={<Avatar src={p.avatar} alt={p.name} />}
              title={<Typography variant="subtitle1">{p.name}</Typography>}
              subheader={<Typography variant="body2">{p.profession}</Typography>}
            />
          </Card>
        ))}
      </div>
    </main>
  );
}
