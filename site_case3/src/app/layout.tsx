
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="antialiased">
        {/* O CartProvider envolve tudo para que a sidebar e as páginas compartilhem os mesmos dados */}
        <CartProvider>
          <div className="flex">
            
            {/* Agora a Sidebar pode exibir a quantidade de itens no carrinho */}
            <Sidebar />

            <main className="flex-1 ml-64 min-h-screen bg-white">
              {children}
            </main>

          </div>
        </CartProvider>
      </body>
    </html>
  );
}