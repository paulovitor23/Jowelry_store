
import Image from 'next/image';

const products = [
  { id: 1, name: "Anel Solitário", material: "Ouro Branco e Diamante 1ct", price: "R$ 15.000", category: "Anéis", img: "/products/anelSolitario.jpg" },
  { id: 2, name: "Colar Esplendor", material: "Ouro Amarelo e Safiras", price: "R$ 22.500", category: "Colares", img: "/products/colarEsplendor.jpg" },
  { id: 3, name: "Brincos Gota", material: "Ouro Rosé e Pérolas", price: "R$ 8.900", category: "Brincos", img: "/products/brincoGota.jpg" },
  { id: 4, name: "Relógio Cronógrafo", material: "Aço e Ouro", price: "R$ 12.000", category: "Relógios", img: "/products/relogio-1.jpg" },
  { id: 5, name: "Anel Aliança Eterna", material: "Platina e Diamantes", price: "R$ 18.000", category: "Anéis", img: "/products/anel-2.jpg" },
  { id: 6, name: "Colar Riviera", material: "Ouro Branco", price: "R$ 35.000", category: "Colares", img: "/products/colar-2.jpg" },
  { id: 7, name: "Brincos Argola", material: "Ouro Amarelo", price: "R$ 6.500", category: "Brincos", img: "/products/brincos-2.jpg" },
  { id: 8, name: "Relógio Automático", material: "Couro e Ouro", price: "R$ 14.500", category: "Relógios", img: "/products/relogio-2.jpg" },
];

export default function Catalogo() {
  const categories = ["Anéis", "Colares", "Brincos", "Relógios"];

  return (
    <div className="p-12 bg-[#fcfbf9] min-h-screen">
      <header className="mb-12">
        <h2 className="text-4xl font-serif text-center text-gray-800 mb-8 uppercase tracking-widest">
          Catálogo
        </h2>
        
        {/* Navegação por categorias */}
        <div className="flex justify-center gap-10 border-b border-gray-200 pb-4">
          {categories.map((cat) => (
            /* Mudanca de cor ao passar o mouse em cima */
            <button 
              key={cat} 
              className="text-xs uppercase text-gray-400 hover:text-[#c5a059] transition-colors focus:text-[#c5a059] focus:font-medium tracking-widest"
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 border border-gray-100 flex flex-col items-center group shadow-sm hover:shadow-md transition-shadow">
            
            {/* Container da imagem usando next image */}
            <div className="relative w-full aspect-square bg-[#f9f9f9] mb-6 overflow-hidden">
              <Image 
                src={product.img} 
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Dados da peça */}
            <h3 className="font-serif text-lg text-black mb-1 text-center">{product.name}</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.15em] mb-3 text-center">
              {product.material}
            </p>
            <p className="text-[#c5a059] font-medium text-sm tracking-wide italic">
              {product.price}
            </p>
            
            {/* TODO: Link para página individual */}
            <button className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase tracking-widest border-b border-[#c5a059] text-[#c5a059] pb-1">
              Ver Detalhes
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}