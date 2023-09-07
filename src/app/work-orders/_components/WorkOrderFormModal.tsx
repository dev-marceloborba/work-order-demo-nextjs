"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string } from "zod";
import Button from "@/app/_components/Button";

const schema = object({
  equipmentName: string()
    .min(2, "Nome muito curto")
    .max(50, "Nome muito longo")
    .nonempty("Campo obrigatório"),
});

type FormData = {
  equipmentName: string;
};

type WorkOrderFormProps = {
  defaultValues: FormData;
  onSubmit(formData: FormData): void;
};

export default function WorkOrderFormModal({
  defaultValues,
  onSubmit,
}: WorkOrderFormProps) {
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onChange",
  });

  return (
    <form
      noValidate
      autoComplete="off"
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <label
          htmlFor="equipmentName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Nome do equipamento
        </label>
        <Controller
          name="equipmentName"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Nome"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`}
            />
          )}
        />
        {errors.equipmentName && (
          <p className="mt-1 text-red-500 text-xs italic">
            {errors.equipmentName.message}
          </p>
        )}
      </div>
      <Button
        disabled={!isValid}
        type="submit"
        className={`${!isValid ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        Salvar
      </Button>
    </form>
  );
}
