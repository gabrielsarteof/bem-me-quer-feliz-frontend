import { VoluntarioSection } from '@/components/sections';
import EquipeSection from '@/components/sections/EquipeSection/EquipeSection';

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <VoluntarioSection />
        <EquipeSection />
      </main>
      <footer></footer>
    </div>
  );
}
