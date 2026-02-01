// src/app/carrinho/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Carrinho() {
  const itensCarrinho = [
    {
      id: 1,
      nome: "Anel Solitário",
      material: "Ouro Branco e Diamante",
      preco: 12500,
      foto: "/products/anelSolitario.jpg",
      qtd: 1
    },
    {
      id: 2,
      nome: "Colar Esplendor",
      material: "Ouro Amarelo 18k",
      preco: 8900,
      foto: "/products/colarEsplendor.jpg",
      qtd: 1
    }
  ];

  // Calculando o total de um jeito simples
  const total = itensCarrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div className="p-12 bg-[#fcfbf9] min-h-screen">
      <h2 className="text-3xl font-serif uppercase tracking-[0.2em] mb-12 text-gray-800">
        Meu Carrinho
      </h2>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Lista de produtos */}
        <div className="flex-1">
          {itensCarrinho.length > 0 ? (
            <div className="flex flex-col gap-8">
              {itensCarrinho.map((item) => (
                <div key={item.id} className="flex items-center gap-6 border-b border-gray-200 pb-8">
                  <div className="relative w-24 h-24 bg-white border border-gray-100 overflow-hidden">
                    <Image 
                      src={item.foto} 
                      alt={item.nome} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-black">{item.nome}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-400 mt-1">
                      {item.material}
                    </p>
                    <p className="text-sm text-zinc-500 mt-2">Qtd: {item.qtd}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-[#c5a059] font-medium italic">
                      R$ {item.preco.toLocaleString('pt-BR')}
                    </p>
                    <button className="text-[9px] uppercase tracking-tighter text-red-800 mt-4 hover:underline">
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-zinc-500 italic">Seu carrinho está vazio.</p>
          )}

          <Link href="/catalogo" className="inline-block mt-8 text-[10px] uppercase tracking-widest border-b border-black pb-1 text-black">
            ← Continuar Comprando
          </Link>
        </div>

        {/* Resumo do pedido */}
        <div className="w-full lg:w-80 bg-white p-8 shadow-sm h-fit border border-gray-100">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-black">
            Resumo
          </h3>
          
          <div className="flex justify-between text-sm mb-4">
            <span className="text-zinc-500">Subtotal</span>
            <span className="text-black">R$ {total.toLocaleString('pt-BR')}</span>
          </div>
          
          <div className="flex justify-between text-sm mb-8">
            <span className="text-zinc-500">Frete</span>
            <span className="text-green-600 uppercase text-[10px] font-bold">Grátis</span>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-8 flex justify-between items-baseline">
            <span className="text-lg font-serif">Total</span>
            <span className="text-xl text-[#c5a059] font-serif">
              R$ {total.toLocaleString('pt-BR')}
            </span>
          </div>

          <button className="w-full bg-[#121212] text-white py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-black transition-colors">
            Finalizar Compra
          </button>
          
        </div>
      </div>
    </div>
  );
}