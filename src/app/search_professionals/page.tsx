// pauli/meu-primeiro-projeto/src/app/search_professionals/page.tsx

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  InputAdornment,
  Paper,
  Rating,
  Stack,
  TextField,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

export const metadata = {
  title: "Buscar profissionais | Recria Espaço",
  description:
    "Lista e busca de profissionais por proximidade com avaliações e preço/hora.",
  robots: { index: false },
};

// --- Tipos e dados mockados para layout ---
interface Professional {
  id: string;
  name: string;
  role: string;
  ratePerHour: number; // em reais
  distanceMiles: number;
  rating: number; // 0..5
  featured?: boolean;
}

const professionals: Professional[] = [
  {
    id: "luis-almeida",
    name: "Luís Almeida",
    role: "Pintor",
    ratePerHour: 48,
    distanceMiles: 1.2,
    rating: 4.8,
    featured: true,
  },
  { id: "daniel-moreno", name: "Daniel Moreno", role: "Pintor", ratePerHour: 40, distanceMiles: 3.2, rating: 4.7 },
  { id: "sarah-wilson", name: "Sarah Wilson", role: "Pintor", ratePerHour: 50, distanceMiles: 4.9, rating: 4.8 },
  { id: "amanda-costa", name: "Amanda Costa", role: "Pintor", ratePerHour: 35, distanceMiles: 2.3, rating: 4.8 },
  { id: "eduardo-lima", name: "Eduardo Lima", role: "Pintor", ratePerHour: 60, distanceMiles: 7.1, rating: 4.7 },
  { id: "beatriz-martins", name: "Beatriz Martins", role: "Pintor", ratePerHour: 65, distanceMiles: 4.5, rating: 4.6 },
];

function currencyBRL(v: number) {
  return `R$ ${v.toFixed(0)}/hora`;
}

function milesStr(v: number) {
  return `${v.toFixed(1).replace(".", ",")} miles de distância`;
}

function initials(name: string) {
  const [first = "", last = ""] = name.split(" ");
  return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();
}

function FeaturedCard({ pro }: { pro: Professional }) {
  return (
    <Paper elevation={2} sx={{ p: 2.5, borderRadius: 3 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar sx={{ width: 56, height: 56 }}>{initials(pro.name)}</Avatar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography fontWeight={700}>{pro.name}</Typography>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 0.5 }}>
            <Chip
              icon={<StarRoundedIcon />}
              label={pro.rating.toFixed(1)}
              size="small"
              sx={{ bgcolor: "#E8F5E9", color: "#1B5E20", borderRadius: 1 }}
            />
            <Typography variant="body2" color="text.secondary">
              {pro.role}
            </Typography>
          </Stack>
        </Box>
        <Button
          variant="contained"
          component={Link}
          href={`/hire?pro=${pro.id}`}
          sx={{
            backgroundColor: "#F88208",
            borderRadius: 999,
            px: 2.5,
            minWidth: 120,
            "&:hover": { backgroundColor: "#FFA13F" },
            "&:active": { backgroundColor: "#FFA13F" },
          }}
        >
          Contratar
        </Button>
      </Stack>
    </Paper>
  );
}

function ListCard({ pro }: { pro: Professional }) {
  return (
    <Paper elevation={1} sx={{ p: 2, borderRadius: 3 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar sx={{ width: 48, height: 48 }}>{initials(pro.name)}</Avatar>
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography fontWeight={700} noWrap>
            {pro.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {currencyBRL(pro.ratePerHour)}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {milesStr(pro.distanceMiles)}
          </Typography>
        </Box>
        <Stack spacing={0.5} alignItems="flex-end">
          <Rating
            value={pro.rating}
            precision={0.1}
            readOnly
            icon={<StarRoundedIcon fontSize="inherit" />}
            emptyIcon={<StarRoundedIcon fontSize="inherit" />}
            sx={{
              fontSize: 18,
              "& .MuiRating-iconFilled": { color: "#FFA13F" },
              "& .MuiRating-iconEmpty": { opacity: 0.3 },
            }}
          />
          <Typography variant="caption" color="text.secondary">
            {pro.rating.toFixed(1)}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default function SearchProfessionalsPage() {
  const featured = professionals.find((p) => p.featured);
  const rest = professionals.filter((p) => !p.featured);

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        bgcolor: "#FDFDFB",
        py: 2,
      }}
    >
      {/* Cabeçalho */}
      <div className="flex items-center space-x-4 px-4">
        <div className="w-[34px] h-[34px] rounded-full overflow-hidden">
          <Image src="/current_user.avif" alt="User" width={34} height={34} />
        </div>
        <span className="text-[20px] font-bold text-[#484747] font-inter">Olá, Lucas</span>
      </div>

      {/* Busca */}
      <TextField
        placeholder="Pintor"
        fullWidth
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchRoundedIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          bgcolor: "#FFFFFF",
          borderRadius: 3,
          "& fieldset": { borderColor: "#E0E0E0" },
        }}
      />

      {/* Destaque */}
      {featured && <FeaturedCard pro={featured} />}

      {/* Lista */}
      <Stack spacing={1.5} sx={{ mt: 0.5 }}>
        {rest.map((pro) => (
          <ListCard key={pro.id} pro={pro} />)
        )}
      </Stack>

      <Box sx={{ flexGrow: 1 }} />

      {/* Bottom Navigation */}
      <Paper elevation={3} sx={{ position: "sticky", bottom: 0, left: 0, right: 0, borderRadius: 3 }}>
        <BottomNavigation showLabels={false} value={1} sx={{ borderRadius: 3 }}>
          <BottomNavigationAction icon={<HomeRoundedIcon />} />
          <BottomNavigationAction icon={<SearchRoundedIcon />} />
          <BottomNavigationAction icon={<BuildRoundedIcon />} />
          <BottomNavigationAction icon={<PersonRoundedIcon />} />
        </BottomNavigation>
      </Paper>
    </Container>
  );
}
