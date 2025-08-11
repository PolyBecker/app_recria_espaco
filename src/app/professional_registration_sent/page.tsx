// pauli/meu-primeiro-projeto/src/app/professional_registration_sent/page.tsx

import * as React from "react";
import Link from "next/link";
import { Avatar, Box, Button, Container, Paper, Stack, Typography } from "@mui/material";
import MarkChatReadRoundedIcon from "@mui/icons-material/MarkChatReadRounded";

export const metadata = {
  title: "Cadastro enviado | Recria Espaço",
  description:
    "Confirmação de envio do cadastro de profissional. Seu perfil será analisado e você receberá um e-mail quando for aprovado.",
  robots: { index: false },
};

export default function ProfessionalRegistrationSentPage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#FDFDFB",
        px: { xs: 2, sm: 3 },
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: "100%",
          p: { xs: 4, sm: 5 },
          borderRadius: 4,
          textAlign: "center",
        }}
      >
        <Stack spacing={3} alignItems="center">
          <Avatar
            sx={{
              width: 80,
              height: 80,
              // usar token de paleta (string), não função
              bgcolor: "success.light",
            }}
          >
            <MarkChatReadRoundedIcon sx={{ fontSize: 44 }} />
          </Avatar>

          <Box>
            <Typography variant="h6" fontWeight={800} gutterBottom>
              Cadastro enviado com sucesso.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Seu perfil será analisado e, assim que for aprovado, você receberá um e-mail para
              completar seu perfil.
            </Typography>
          </Box>

          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/"
            sx={{
              borderRadius: 999,
              px: 3,
              backgroundColor: "#F88208",
              "&:hover": { backgroundColor: "#FFA13F" },
              "&:active": { backgroundColor: "#FFA13F" },
            }}
          >
            Voltar ao início
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
