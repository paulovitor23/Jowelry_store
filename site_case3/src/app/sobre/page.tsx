// src/app/sobre/page.tsx
import Image from 'next/image';

export default function SobreAMarca() {
  return (
    <div className="bg-white min-h-screen">
      {/* Banner de topo */}
      <section className="relative w-full h-[400px] bg-zinc-100 overflow-hidden">
        <Image 
          src="/herom.jpg" // Usando a mesma imagem da home para manter o padrão
          alt="Atelier Lívia Fontenelle"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <h2 className="text-white text-5xl font-serif uppercase tracking-[0.3em]">
            Nossa Essência
          </h2>
        </div>
      </section>

      {/* Conteúdo de texto */}
      <section className="max-w-4xl mx-auto py-20 px-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <div className="flex-1">
            <h3 className="text-2xl font-serif text-black mb-6 uppercase tracking-widest">
              Tradição e Modernidade
            </h3>
            <div className="w-12 h-[2px] bg-amber-600 mb-8" />
            
            <p className="text-zinc-600 leading-relaxed mb-6">
              Fundada com o propósito de transformar momentos em memórias eternas, a 
              <strong> Lívia Fontenelle</strong> nasceu da paixão pela joalheria artesanal. 
              Cada peça é única, desenhada para celebrar a singularidade de quem a usa.
            </p>

            <p className="text-zinc-600 leading-relaxed">
              Nossa curadoria de pedras preciosas segue os mais altos padrões de qualidade, 
              garantindo que cada diamante, safira ou pérola carregue consigo o brilho 
              da autenticidade e o luxo da exclusividade.
            </p>

            {/* TODO: Adicionar citação da fundadora aqui depois */}
          </div>

          <div className="flex-1 bg-zinc-50 p-8 border border-zinc-100">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-amber-700">
              Nossos Valores
            </h4>
            <ul className="text-sm text-zinc-500 space-y-4 italic">
              <li>• Design Autoral e Atemporal</li>
              <li>• Ética na Extração de Materiais</li>
              <li>• Atendimento Personalizado</li>
              <li>• Excelência em cada detalhe</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Seção final  */}
      <footer className="pb-20 text-center">
        <p className="font-serif italic text-zinc-400">
          Lívia Fontenelle — Desde 2026 eternizando histórias.
        </p>
      </footer>
    </div>
  );
}