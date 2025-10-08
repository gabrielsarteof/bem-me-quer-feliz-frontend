import Link from 'next/link'; // 1. Import the Link component

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold text-primary mb-4">
        Página não encontrada
      </h1>
      <p className="text-gray-600 mb-6">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link href="/" className="btn-primary">
        Voltar para a página inicial
      </Link>
    </div>
  );
}
