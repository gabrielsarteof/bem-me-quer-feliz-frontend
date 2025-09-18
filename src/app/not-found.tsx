// src/app/not-found.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function NotFound() {
  const router = useRouter();

  // Exemplo: redirecionar automaticamente após 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9fafb] px-6 text-center">
      <Image
        src="/assets/images/404.svg" // coloque uma imagem de 404 na pasta public
        alt="Página não encontrada"
        width={300}
        height={300}
      />
      <h1 className="text-6xl font-bold text-gray-800 mt-6">404</h1>
      <p className="text-xl text-gray-600 mt-2">
        Ops! A página que você procura não foi encontrada.
      </p>
      <button
        onClick={() => router.push('/')}
        className="mt-6 px-6 py-3 bg-[#F20587] text-white rounded-lg hover:bg-[#d90479] transition-colors"
      >
        Voltar para a Home
      </button>
      <p className="mt-4 text-gray-500 text-sm">
        Você será redirecionado para a página inicial em 5 segundos.
      </p>
    </div>
  );
}
