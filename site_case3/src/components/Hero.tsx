import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] bg-zinc-200 overflow-hidden flex items-center">
      {/* Imagem de fundo */}
      <Image 
        src="/heroM.jpg" 
        alt="Destaque da Nova Coleção"
        fill // Faz a imagem ocupar o container todo
        className="object-cover object-center"
      />

      {/* Máscara para o texto não sumir na foto */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Conteúdo por cima */}
      <div className="relative z-10 px-12 text-white">
        <h2 className="text-5xl font-serif mb-4 leading-tight shadow-sm">
          Nova Coleção: <br />
          Esplendor Eterno
        </h2>
        
        {/* Detalhe visual  */}
        <div className="w-16 h-1 bg-amber-600 shadow-md" />
        
       
      </div>

    </section>
  );
}