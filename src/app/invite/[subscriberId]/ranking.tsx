import Image from "next/image";

import gold from "../../../assets/medal-gold.svg";
import silver from "../../../assets/medal-silver.svg";
import cooper from "../../../assets/medal-cooper.svg";

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading text-xl leading-none font-semibold text-gray-200">
        Ranking de indicações
      </h2>

      <div className="relative space-y-4">
        <div className="flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
          <span className="text-gray-3 text-sm leading-none">
            <span className="font-semibold">1º</span> | Victor Oliveira
          </span>

          <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
            1030
          </span>

          <Image src={gold} alt="gold" className="absolute top-0 right-8" />
        </div>
      </div>

      <div className="relative space-y-4">
        <div className="flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
          <span className="text-gray-3 text-sm leading-none">
            <span className="font-semibold">2º</span> | Victor Oliveira
          </span>

          <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
            1030
          </span>

          <Image src={silver} alt="gold" className="absolute top-0 right-8" />
        </div>
      </div>

      <div className="relative space-y-4">
        <div className="flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
          <span className="text-gray-3 text-sm leading-none">
            <span className="font-semibold">3º</span> | Victor Oliveira
          </span>

          <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
            1030
          </span>

          <Image src={cooper} alt="gold" className="absolute top-0 right-8" />
        </div>
      </div>
    </div>
  );
}
