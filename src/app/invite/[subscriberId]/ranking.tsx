import Image from "next/image";

import gold from "../../../assets/medal-gold.svg";
import silver from "../../../assets/medal-silver.svg";
import cooper from "../../../assets/medal-cooper.svg";
import { getRanking } from "@/http/api";

export async function Ranking() {
  const { ranking } = await getRanking();

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading text-xl leading-none font-semibold text-gray-200">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1;

          return (
            <div
              key={item.id}
              className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6"
            >
              <span className="text-gray-3 text-sm leading-none">
                <span className="font-semibold">{rankingPosition}º</span> |{" "}
                {item.name}
              </span>

              <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
                {item.score}
              </span>

              {rankingPosition === 1 && (
                <Image
                  src={gold}
                  alt="gold"
                  className="absolute top-0 right-8"
                />
              )}
              {rankingPosition === 1 && (
                <Image
                  src={gold}
                  alt="gold"
                  className="absolute top-0 right-8"
                />
              )}
              {rankingPosition === 2 && (
                <Image
                  src={silver}
                  alt="silver"
                  className="absolute top-0 right-8"
                />
              )}
              {rankingPosition === 3 && (
                <Image
                  src={cooper}
                  alt="cooper"
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
