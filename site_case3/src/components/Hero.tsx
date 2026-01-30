// components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden flex items-center">
      {/* Imagem de fundo baseada no seu mockup */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('/path-to-your-model-image.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 px-16 text-white max-w-2xl">
        <h2 className="text-6xl font-serif leading-tight mb-4">
          Nova Coleção: <br /> 
          <span className="italic">Esplendor Eterno</span>
        </h2>
        <div className="w-20 h-[1px] bg-[#c5a059]" />
      </div>
    </section>
  );
}