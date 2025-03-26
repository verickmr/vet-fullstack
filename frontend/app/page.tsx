"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schedulingSchema = z.object({
  responsibleName: z.string().min(3, "O nome do responsável deve ter pelo menos 3 caracteres."),
  petName: z.string().min(2, "O nome do pet deve ter pelo menos 2 caracteres."),
  cpfOrMatricula: z.string().regex(/^\d{11}$/, "CPF deve conter 11 dígitos."),
  email: z.string().email("Insira um email válido."),
  phoneNumber: z.string().regex(/^\d{10,11}$/, "Telefone deve ter 10 ou 11 dígitos."),
  desiredTime: z.string().min(1, "Horário desejado é obrigatório."),
  vaccinationCard: z.string().min(1, "Cartão de vacinação é obrigatório."),
  appointmentDate: z.string().min(1, "Data da consulta é obrigatória."),
});

type SchedulingFormData = z.infer<typeof schedulingSchema>;

export default function Scheduling() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SchedulingFormData>({
    resolver: zodResolver(schedulingSchema),
  });

  async function onSubmit(data: SchedulingFormData) {
    await fetch("http://localhost:3001/scheduling", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    alert("Consulta agendada com sucesso!");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 items-center bg-green-500 p-10 w-2/4 rounded-3xl mx-auto my-5 border-4 border-neutral-500">
      <div className="flex ">
        <label htmlFor="responsibleName">Nome do Responsável</label>
        <input
          id="responsibleName"
          {...register("responsibleName")}
          className="bg-zinc-700 p-2 rounded-md"
        />
        {errors.responsibleName && <span className="text-red-500">{errors.responsibleName.message}</span>}
      </div>

      <div className="flex ">
        <label htmlFor="petName">Nome do Pet</label>
        <input
          id="petName"
          {...register("petName")}
          className="bg-zinc-700 p-2 rounded-md"
        />
        {errors.petName && <span className="text-red-500">{errors.petName.message}</span>}
      </div>

      <div className="flex ">
        <label htmlFor="cpfOrMatricula">CPF ou Matrícula</label>
        <input
          id="cpfOrMatricula"
          {...register("cpfOrMatricula")}
          className="bg-zinc-700 p-2 rounded-md"
        />
        {errors.cpfOrMatricula && <span className="text-red-500">{errors.cpfOrMatricula.message}</span>}
      </div>

      <div className="flex ">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          {...register("email")}
          className="bg-zinc-700 p-2 rounded-md"
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>

      <div className="flex ">
        <label htmlFor="phoneNumber">Telefone</label>
        <input
          id="phoneNumber"
          {...register("phoneNumber")}
          className="bg-zinc-700 p-2 rounded-md"
        />
        {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber.message}</span>}
      </div>

      <div className="flex ">
        <label htmlFor="desiredTime">Horário Desejado</label>
        <input
          id="desiredTime"
          {...register("desiredTime")}
          className="bg-zinc-700 p-2 rounded-md"
        />
        {errors.desiredTime && <span className="text-red-500">{errors.desiredTime.message}</span>}
      </div>

      <div className="flex ">
        <label htmlFor="vaccinationCard">Cartão de Vacinação</label>
        <input
  id="vaccinationCard"
  type="file"
  {...register("vaccinationCard")}
  className="bg-zinc-700 p-2 rounded-md"
/>
        {errors.vaccinationCard && <span className="text-red-500">{errors.vaccinationCard.message}</span>}
      </div>

      <div className="flex ">
        <label htmlFor="appointmentDate">Data da Consulta</label>
        <input
          id="appointmentDate"
          type="date"
          {...register("appointmentDate")}
          className="bg-zinc-700 p-2 rounded-md"
        />
        {errors.appointmentDate && <span className="text-red-500">{errors.appointmentDate.message}</span>}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Agendar
      </button>
    </form>
  );
}
