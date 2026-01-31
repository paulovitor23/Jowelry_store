// src/app/layout.tsx
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="antialiased">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 ml-64 min-h-screen bg-white">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}