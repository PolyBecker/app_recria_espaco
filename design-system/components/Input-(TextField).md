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
