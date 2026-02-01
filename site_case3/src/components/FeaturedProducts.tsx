import Image from 'next/image';
import Link from 'next/link'; // Importante para a navegação
import { listaProdutos } from '@/data/produtos'; // Pegando os dados da fonte única

export default function FeaturedProducts() {
  // Peguei apenas os 3 primeiros produtos da lista para mostrar na Home
  const destaques = listaProdutos.slice(0, 3);

  return (
    <section className="p-16 bg-white">
      <h3 className="text-2xl font-serif uppercase tracking-widest mb-12 text-center text-black">
        Mais Vendidos
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {destaques.map((item) => (
          <div key={item.id} className="flex flex-col items-center group">
            {/* Container da imagem */}
            <div className="relative w-full max-w-[350px] aspect-square bg-zinc-100 mb-6 overflow-hidden rounded-sm">
              <Image 
                src={item.img} // Note que agora usamos 'img' para bater com o banco de dados
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Informações obrigatorias */}
            <h4 className="font-serif text-lg text-black">{item.name}</h4>
            <p className="text-[10px] uppercase tracking-widest text-zinc-400 mt-1">
              {item.material}
            </p>
            <p className="text-amber-700 mt-4 italic font-medium">
              {item.price}
            </p>

            <Link 
              href={`/catalogo/${item.id}`}
              className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase tracking-widest border-b border-[#c5a059] text-[#c5a059] pb-1 hover:text-black hover:border-black transition-colors"
            >
              VER DETALHES
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}