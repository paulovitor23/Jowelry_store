import Image from 'next/image';

export default function FeaturedProducts() {
  // Array simples de produtos para a home
  const destaques = [
    {
      id: 1,
      nome: "Anel Solitário",
      material: "Ouro Branco e Diamante",
      preco: "R$ 12.500",
      foto: "/products/anelSolitario.jpg"
    },
    {
      id: 2,
      nome: "Colar Esplendor",
      material: "Ouro Amarelo 18k",
      preco: "R$ 8.900",
      foto: "/products/colarEsplendor.jpg"
    },
    {
      id: 3,
      nome: "Brincos Gota",
      material: "Pérolas e Safiras",
      preco: "R$ 5.400",
      foto: "/products/brincoGota.jpg"
    }
  ];

  return (
    <section className="p-16 bg-white">
      <h3 className="text-2xl font-serif uppercase tracking-widest mb-12 text-center text-black">
        Mais Vendidos
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {destaques.map((item) => (
          <div key={item.id} className="flex flex-col items-center group">
            {/* Container da Imagem */}
            {/* Fiz 'max-w-[px]' para limitar o tamanho */}
            <div className="relative w-full max-w-[350px] aspect-square bg-zinc-100 mb-6 overflow-hidden rounded-sm">
              <Image 
                src={item.foto} 
                alt={item.nome}
                fill
                // Usando object-cover e aspect-square para um quadrado perfeito
                // Pequeno zoom quando passa o mouse no produto (trabalho demais)
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Informações Obrigatórias */}
         
            <h4 className="font-serif text-lg text-black">{item.nome}</h4>
            <p className="text-[10px] uppercase tracking-widest text-zinc-400 mt-1">
              {item.material}
            </p>
            <p className="text-amber-700 mt-4 italic font-medium">
              {item.preco}
            </p>

            {/* TODO: Criar função para adicionar ao carrinho*/}
            {/* Efeito maneiro do botao */}
            <button className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase tracking-widest border-b border-[#c5a059] text-[#c5a059] pb-1">
              VER DETALHES
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}