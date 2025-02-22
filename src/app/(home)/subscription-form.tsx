"use client";

import { Button } from "@/components/button";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { User, Mail, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const subscriptionSchema = z.object({
  name: z.string().min(2, "Digite sem nome completo"),
  mail: z.string().email("Digite um e-mail válido"),
});

type SubscriptionSchema = z.infer<typeof subscriptionSchema>;

export function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  });

  function onSubcribe(data: SubscriptionSchema) {
    console.log(data);
  }

  return (
    <form
      className="w-full space-y-6 rounded-2xl border border-gray-600 bg-gray-700 p-8 md:max-w-[440px]"
      onSubmit={handleSubmit(onSubcribe)}
    >
      <h2 className="font-heading text-xl font-semibold text-gray-200">
        Incrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome completo"
              {...register("name")}
            />
          </InputRoot>

          {errors.name && (
            <p className="text-danger text-sm font-semibold">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              type="mail"
              placeholder="Digite seu melhor e-mail"
              {...register("mail")}
            />
          </InputRoot>

          {errors.mail && (
            <p className="text-danger text-sm font-semibold">
              {errors.mail.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit">
        Inscrever-se
        <ArrowRight />
      </Button>
    </form>
  );
}
