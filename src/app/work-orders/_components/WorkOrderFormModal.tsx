"use client";

import { useForm, Controller, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string } from "zod";
import Button from "@/app/_components/Button";
import Input from "@/app/_components/Input";

const schema = object({
  equipmentName: string()
    .min(2, "Nome muito curto")
    .max(50, "Nome muito longo")
    .nonempty("Campo obrigatório"),
});

type FormData = {
  equipmentName: string;
  description: string;
};

type WorkOrderFormProps = {
  defaultValues: FormData;
  onSubmit(formData: FormData): void;
};

export default function WorkOrderFormModal({
  defaultValues,
  onSubmit,
}: WorkOrderFormProps) {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onChange",
  });

  const { isValid } = methods.formState;

  return (
    <FormProvider {...methods}>
      <form
        noValidate
        autoComplete="off"
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Input
          label="Nome do equipamento"
          type="text"
          name="equipmentName"
          className="mb-4"
        />
        <Input
          label="Descrição"
          type="text"
          name="description"
          className="mb-4"
        />
        <Input label="Data alvo" type="date" name="target" className="mb-4" />
        <Button
          disabled={!isValid}
          type="submit"
          className={`${!isValid ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Salvar
        </Button>
      </form>
    </FormProvider>
  );
}
