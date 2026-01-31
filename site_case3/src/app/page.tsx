import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import History from '@/components/History';

export default function Home() {
  return (
    <>
      {/* Seções da Home */}
      <Hero />
      <FeaturedProducts />
      <History />
    </>
  );
}