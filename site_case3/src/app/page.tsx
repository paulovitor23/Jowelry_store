import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import History from '@/components/History';

export default function Home() {
  return (
    <div className="flex bg-white min-h-screen">
      <Sidebar />
      
      <main className="flex-1 ml-64 overflow-x-hidden">
        {/* Header superior discreto para "Meu Carrinho" se desejar */}
        <div className="w-full flex justify-end p-6 bg-transparent absolute z-20">
          <span className="text-[11px] uppercase tracking-widest text-gray-600 cursor-pointer flex items-center gap-2">
            Meu Carrinho <span className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center text-[8px]">0</span>
          </span>
        </div>

        <Hero />
        <FeaturedProducts />
        <History />
      </main>
    </div>
  );
}