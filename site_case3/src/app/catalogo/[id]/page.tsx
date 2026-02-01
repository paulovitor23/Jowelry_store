
import Image from 'next/image';
import { listaProdutos } from '@/data/produtos'; 
import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton'; 

export default async function PaginaProduto({ params }: { params: Promise<{ id: string }> }) {
  
  const { id } = await params;

  // Usei '==' para que o número 1 seja igual ao texto "1"
  // Resolvendo o bug que eu clicava em qualquer produto e ia para o 'Anel Solitario'
 const produto = listaProdutos.find(p => p.id == id);

  // Tratamento de erro caso o ID não exista
  if (!produto) {
    return (
      <div className="p-20 text-center font-serif">
        <h2 className="text-2xl mb-4 text-black">Joia não encontrada</h2>
        <p className="text-zinc-400">ID pesquisado: {id}</p>
        <Link href="/catalogo" className="text-amber-700 underline mt-4 inline-block">
          Voltar para o catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="p-12 min-h-screen bg-white">
      {/* Link de volta com a estética da marca */}
      <Link href="/catalogo" className="text-[10px] uppercase tracking-widest text-zinc-400 hover:text-black transition">
        ← Voltar para o Catálogo
      </Link>

      <div className="mt-12 flex flex-col md:flex-row gap-20 items-start">
        
        {/* LADO ESQUERDO: Foto grande da joia */}
        <div className="relative aspect-square w-full max-w-[500px] overflow-hidden">
          <Image 
            src={produto.img} 
            alt={produto.name} 
            fill 
            className="object-contain p-12"
            priority
          />
        </div>

        {/* LADO DIREITO: Informações da peça */}
        <div className="flex-1 max-w-md">
          <p className="text-[10px] text-amber-700 uppercase tracking-[0.3em] mb-2 font-medium">
            Coleção Exclusiva
          </p>
          
          <h1 className="text-4xl font-serif text-black mb-4 leading-tight">
            {produto.name}
          </h1>
          
          <p className="text-zinc-400 uppercase text-xs tracking-widest mb-8">
            {produto.material}
          </p>
          
          <p className="text-zinc-600 leading-relaxed mb-10 text-sm">
            {produto.desc || "Uma peça exclusiva da joalheria Lívia Fontenelle, desenhada para capturar a luz e a elegância em cada detalhe artesanal."}
          </p>

          <p className="text-3xl text-[#c5a059] font-serif italic mb-10">
            {produto.price} 
          </p>

          <AddToCartButton product={produto} />
          
          <p className="mt-6 text-[9px] text-zinc-400 text-center uppercase tracking-tighter">
            Entrega premium em todo o Brasil
          </p>
          
        </div>
      </div>
    </div>
  );
}