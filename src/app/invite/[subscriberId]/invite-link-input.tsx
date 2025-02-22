"use client";

import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Copy, Link } from "lucide-react";
import { toast } from "react-toastify";

interface InviteLinkInputProps {
  inviteLink: string;
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyToClipboard() {
    navigator.clipboard.writeText(inviteLink);
    toast("Link copiado para a área de transferência!");
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />
      <IconButton className="-mr-2" onClick={copyToClipboard}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
