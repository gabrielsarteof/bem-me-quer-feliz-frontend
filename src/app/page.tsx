import Image from 'next/image';
import { VoluntarioSection } from '@/components/sections';

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <VoluntarioSection />
      </main>
      <footer></footer>
    </div>
  );
}
