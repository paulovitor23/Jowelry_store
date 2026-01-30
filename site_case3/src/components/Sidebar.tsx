export default function Sidebar() {
  const menuItems = [
    { name: "Início", active: true },
    { name: "Coleções", active: false },
    { name: "Sobre a Marca", active: false },
    { name: "Meu Carrinho", active: false },
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
        {menuItems.map((item) => (
          <div key={item.name} className="relative group cursor-pointer">
            {item.active && (
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#c5a059]" />
            )}
            <span className={`text-xs tracking-[0.2em] uppercase transition-colors ${
              item.active ? "text-[#c5a059]" : "text-gray-400 group-hover:text-white"
            }`}>
              {item.name}
            </span>
          </div>
        ))}
      </nav>
    </aside>
  );
}