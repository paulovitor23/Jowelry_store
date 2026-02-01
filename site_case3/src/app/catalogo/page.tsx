"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { listaProdutos } from '@/data/produtos';

export default function Catalogo() {
  // Estado para controlar o filtro. Começando com "todos"
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  
  const categorias = ["Todos", "Anéis", "Colares", "Brincos", "Relógios"];

  // Lógica de Filtro: se for "todos", mostra tudo. Se não, filtra pela categoria
  const produtosFiltrados = categoriaAtiva === "Todos" 
    ? listaProdutos 
    : listaProdutos.filter(p => p.category === categoriaAtiva);

  return (
    <div className="p-12 bg-[#fcfbf9] min-h-screen">
      <header className="mb-12">
        <h2 className="text-4xl font-serif text-center text-gray-800 mb-8 uppercase tracking-widest">
          Catálogo
        </h2>
        
        {/* Navegação por categorias interativa */}
        <div className="flex justify-center gap-10 border-b border-gray-200 pb-4">
          {categorias.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setCategoriaAtiva(cat)} //Muda o filtro ao clicar
              className={`text-xs uppercase tracking-widest transition-all ${
                categoriaAtiva === cat 
                ? "text-[#c5a059] font-bold border-b-2 border-[#c5a059] pb-4 -mb-[18px]" 
                : "text-gray-400 hover:text-[#c5a059]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Grid que se adapta conforme o filtro */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {produtosFiltrados.map((product) => (
          <div key={product.id} className="bg-white p-6 border border-gray-100 flex flex-col items-center group shadow-sm hover:shadow-md transition-all">
            
            <div className="relative w-full aspect-square bg-[#f9f9f9] mb-6 overflow-hidden">
              <Image 
                src={product.img} 
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <h3 className="font-serif text-lg text-black mb-1 text-center">{product.name}</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.15em] mb-3 text-center">
              {product.material}
            </p>
            <p className="text-[#c5a059] font-medium text-sm tracking-wide italic">
              {product.price}
            </p>
            
            <Link 
              href={`/catalogo/${product.id}`}
              className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase tracking-widest border-b border-[#c5a059] text-[#c5a059] pb-1"
            >
              Ver Detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}