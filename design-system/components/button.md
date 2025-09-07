📌 Button

Descrição: Botão usado para ações principais e secundárias.

Quando usar: ações primárias (login, salvar, comprar), navegação, formulários.

Quando não usar: links → use <Link>.

Variantes

primary: fundo laranja (#FF6B00), texto branco.

secondary: fundo branco, borda cinza, texto preto.

ghost: fundo transparente, texto laranja.

danger: fundo vermelho para ações destrutivas.

Estados

Default

Hover (cor mais escura)

Active (pressionado)

Disabled (opacidade 0.5, cursor not-allowed)

Loading (spinner substitui texto)

Props

variant: "primary" | "secondary" | "ghost" | "danger"

size: "sm" | "md" | "lg"

disabled: boolean

loading: boolean

Acessibilidade

Sempre usar aria-label em botões icônicos.

Foco visível (outline azul #2684FF).

Código (React + Tailwind + MUI)

import Button from "@mui/material/Button";

<Button variant="contained" color="primary">
  Entrar
</Button>


Custom Tailwind (exemplo Primary):

<button className="bg-[#FF6B00] text-white px-4 py-2 rounded-lg hover:bg-[#CC5500] disabled:opacity-50">
  Entrar
</button>
