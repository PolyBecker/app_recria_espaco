🎨 Recria Espaço — Design System
1. Tokens de Design
🎨 Cores
Token	Hex	Uso
--color-primary	#FF6B00	Cor de destaque (botões principais, ícones ativos)
--color-primary-light	#FF944D	Hover/gradiente leve
--color-primary-dark	#CC5500	Active, foco
--color-bg	#FFFFFF	Fundo principal
--color-bg-alt	#F8F8F8	Cards, seções secundárias
--color-text	#1A1A1A	Texto principal
--color-text-secondary	#666666	Subtítulos, labels
--color-border	#E0E0E0	Bordas, divisores
--color-success	#27AE60	Mensagens de sucesso
--color-error	#E63946	Erros, validações
--color-warning	#F2C94C	Alertas
✍️ Tipografia
Token	Fonte	Uso
--font-family-base	'Inter', sans-serif	Fonte principal
--font-size-xs	12px	Legendas, rótulos
--font-size-sm	14px	Inputs, texto secundário
--font-size-md	16px	Texto padrão
--font-size-lg	20px	Subtítulos
--font-size-xl	24px	Títulos
--font-size-xxl	32px	Cabeçalhos principais

Peso recomendado:

Regular (400) para corpo.

Medium (500) para labels.

Bold (700) para títulos.

📏 Espaçamento
Token	Valor	Uso
--spacing-xs	4px	Ícones, micro espaçamentos
--spacing-sm	8px	Inputs, botões compactos
--spacing-md	16px	Padding padrão
--spacing-lg	24px	Cards, blocos
--spacing-xl	32px	Seções grandes
🖼️ Bordas e Sombras
Token	Valor
--radius-sm	4px
--radius-md	8px
--radius-lg	16px (usado em cards)
--shadow-sm	0 1px 3px rgba(0,0,0,0.1)
--shadow-md	0 2px 6px rgba(0,0,0,0.15)
--shadow-lg	0 4px 12px rgba(0,0,0,0.2)
2. Componentes
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

3. Diretrizes Gerais de UX

Botão primary deve ser único por tela (ação principal).

Ícones sociais (Apple, Google, Facebook) devem estar sempre alinhados horizontalmente com espaçamento uniforme.

Layout responsivo: mobile-first, breakpoint principal em 768px.

Contraste mínimo: 4.5:1 para texto.

Foco visível em todos elementos interativos.

4. Estrutura de Pastas Sugerida
/design-system
  /tokens
    colors.ts
    typography.ts
    spacing.ts
  /components
    Button.tsx
    Input.tsx
    Card.tsx
    Navbar.tsx
    Modal.tsx
  /docs
    Button.mdx
    Input.mdx
    ...
