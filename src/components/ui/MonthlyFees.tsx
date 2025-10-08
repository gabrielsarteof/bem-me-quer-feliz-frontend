'use client';

import { useState } from 'react';

function MonthlyFees() {
  const [selected, setSelected] = useState('mensal');

  return (
    <div
      className="
        relative flex w-full md:w-full xl:inline-flex xl:w-fit
        p-1 rounded-full bg-[var(--background)] overflow-hidden
      "
    >
      <div
        className={`
          absolute inset-y-0 left-0 w-1/2
          rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-500)]
          transition-transform duration-300 ease-in-out z-0
          ${selected === 'anual' ? 'translate-x-full' : 'translate-x-0'}
        `}
      />
      <button
        onClick={() => setSelected('mensal')}
        className="
          relative z-10 flex items-center justify-center
          w-1/2 md:w-1/2 xl:w-auto min-w-0 sm:min-w-[160px]
          px-6 py-2
          text-sm font-satoshi font-medium
          rounded-full
          transition-colors duration-300 ease-out
        "
      >
        <span
          className={`
            font-satoshi font-bold text-[16px]
            ${selected === 'mensal' ? 'text-white' : 'text-[var(--foreground)]'}
          `}
        >
          Mensal
        </span>
      </button>

      <button
        onClick={() => setSelected('anual')}
        className="
          relative z-10 flex items-center justify-center
          w-1/2 md:w-1/2 xl:w-auto min-w-0 sm:min-w-[160px]
          px-6 py-2
          text-sm font-satoshi font-medium
          rounded-full
          transition-colors duration-300 ease-out
        "
      >
        <span
          className={`
            font-satoshi font-bold text-[16px]
            ${selected === 'anual' ? 'text-white' : 'text-[var(--foreground)]'}
          `}
        >
          Anual (-25%)
        </span>
      </button>
    </div>
  );
}

export default MonthlyFees;
