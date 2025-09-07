📌 Input (TextField)

Descrição: Campo de entrada para formulários.

Variantes: padrão (outlined), filled, underline (minimalista).

Estados: default, focus, error, disabled.

Props

label: string

type: "text" | "email" | "password"

error: boolean

helperText: string

UX

Sempre indicar erros com texto auxiliar (helperText).

Placeholder deve ser complementar, não substituto de label.

Código

import TextField from "@mui/material/TextField";

<TextField
  label="Email"
  variant="outlined"
  fullWidth
  type="email"
/>

📌 Card

Descrição: Contêiner para destacar conteúdos (perfil, resultado de busca).

Props:

elevation: "sm" | "md" | "lg"

clickable: boolean

Diretrizes

Usar para destacar resultados de profissionais.

Não usar para blocos de texto longo.

Código

import { Card, CardContent } from "@mui/material";

<Card>
  <CardContent>
    <h3>Arquiteto João</h3>
    <p>Especialista em ambientes modernos</p>
  </CardContent>
</Card>

📌 Navbar

Descrição: Navegação principal no topo.

Variantes: fixa no topo, transparente sobre imagem.

Props:

links: array de rotas

logo: componente SVG

Código

<nav className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
  <img src="/logo.svg" alt="Recria Espaço" className="h-8" />
  <div className="flex gap-4">
    <a href="/login">Login</a>
    <a href="/signup">Cadastrar</a>
  </div>
</nav>

📌 Modal

Descrição: Exibe conteúdo sobreposto (login rápido, confirmação).

Props:

open: boolean

onClose: função

title: string

Acessibilidade

Sempre usar role="dialog" e aria-labelledby.

Fundo com aria-hidden.
