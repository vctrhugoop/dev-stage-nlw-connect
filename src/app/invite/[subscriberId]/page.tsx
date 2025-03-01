import Image from "next/image";

import { Ranking } from "./ranking";

import logo from "../../../assets/logo.svg";
import { Stats } from "./stats";
import { InviteLinkInput } from "./invite-link-input";

interface InvitePageProps {
  params: Promise<{ subscriberId: string }>;
}

export default async function InvitePage(props: InvitePageProps) {
  const { subscriberId } = await props.params;

  const inviteLink = `http://localhost:3333/invites/${subscriberId}`;

  return (
    <div className="flex min-h-dvh flex-col items-center justify-between gap-16 md:flex-row">
      <div className="flex w-full max-w-[550px] flex-col gap-10">
        <Image src={logo} alt="devstage" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="font-heading text-4xl leading-none font-semibold text-gray-100">
            Incrição confirmada
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading text-xl leading-none font-semibold text-gray-200">
              Indique e ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InviteLinkInput inviteLink={inviteLink} />

          <Stats subscriberId={subscriberId} />
        </div>
      </div>

      <Ranking />
    </div>
  );
}
