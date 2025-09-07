📌 Navbar

Description: Main top navigation bar.

Variants: fixed, transparent over hero section.

Props:

links: array of routes

logo: SVG component

Code

<nav className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
  <img src="/logo.svg" alt="Recria Espaço" className="h-8" />
  <div className="flex gap-4">
    <a href="/login">Login</a>
    <a href="/signup">Sign Up</a>
  </div>
</nav>
