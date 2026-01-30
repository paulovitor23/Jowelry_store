const products = [
  { id: 1, name: "Anel Solitário", material: "Ouro 18k", price: "R$ 4.500", img: "/anel.png" },
  { id: 2, name: "Brincos de Pérola", material: "Ouro Branco", price: "R$ 2.200", img: "/brincos.png" },
  { id: 3, name: "Relógio Clássico", material: "Aço e Ouro", price: "R$ 8.900", img: "/relogio.png" },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <h3 className="text-center font-serif text-2xl text-[#c5a059] mb-16 tracking-widest uppercase">
        Mais Vendidos
      </h3>
      
      <div className="flex justify-center gap-12 px-10">
        {products.map((item) => (
          <div key={item.id} className="w-72 flex flex-col items-center group cursor-pointer">
            <div className="w-full aspect-square bg-[#fcfbf9] flex items-center justify-center p-10 mb-6 border border-transparent group-hover:border-gray-100 transition-all shadow-sm">
               {/* Substituir por <Image /> do Next.js */}
               <div className="text-[10px] text-gray-300">IMAGEM DO PRODUTO</div>
            </div>
            <h4 className="font-serif text-lg text-gray-800">{item.name}</h4>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 mb-2">
              {item.material}
            </p>
            <p className="text-[#c5a059] font-medium tracking-tight italic">
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}