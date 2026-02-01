"use client";
import { useCart } from '@/context/CartContext';

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <button 
      onClick={() => {
        addToCart(product);
        alert(`${product.name} adicionado ao carrinho!`);
      }}
      className="w-full bg-[#121212] text-white py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-black transition shadow-lg active:scale-[0.95]"
    >
      Adicionar ao Carrinho
    </button>
  );
}