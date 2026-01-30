"use client"; // Necessário para usar hooks de navegação
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

export default function Sidebar() {
  const pathname = usePathname(); // Pega a rota atual 

  const menuItems = [
    { name: "Início", href: "/" },
    { name: "Coleções", href: "/catalogo" },
    { name: "Sobre a Marca", href: "/sobre" },
    { name: "Meu Carrinho", href: "/carrinho" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#121212] text-white p-8 flex flex-col z-50">
      <div className="mb-20">
        <h1 className="text-xl font-serif tracking-[0.3em] uppercase leading-tight">
          Lívia Fontenelle
        </h1>
        <p className="text-[9px] tracking-[0.5em] uppercase opacity-40 mt-1">
          Joalheria
        </p>
      </div>

      <nav className="flex flex-col gap-10">
        {menuItems.map((item) => {
          // Verifica se o item é o que está aberto no momento
          const isActive = pathname === item.href;

          return (
            <Link 
              key={item.name} 
              href={item.href}
              className="relative group cursor-pointer block"
            >
              {/* Barra lateral amarela */}
              <span className={`absolute -left-8 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#c5a059] transition-all duration-300 ${
                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`} />
              {/*Muito dificil de fazer, ta maluco*/}
              {/*  Fica dourado se estiver ativo ouu no hover */}
              <span className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 block ${
                isActive 
                  ? "text-[#c5a059]" 
                  : "text-gray-400 group-hover:text-[#c5a059]" 
              }`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}