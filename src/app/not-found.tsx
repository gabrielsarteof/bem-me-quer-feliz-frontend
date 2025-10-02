// app/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="mt-4 mb-2 text-2xl font-semibold">
        Página Não Encontrada
      </h2>
      <p className="mb-6 text-gray-600">
        Oops! A página que você está procurando não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}
