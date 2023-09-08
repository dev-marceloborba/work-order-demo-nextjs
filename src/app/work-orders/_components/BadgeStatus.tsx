import { EWorkOrderStatus } from "../_models/work-order";

export default function BadgeStatus({ status }: { status: EWorkOrderStatus }) {
  const getEnumDescriptor = () => {
    switch (status) {
      case EWorkOrderStatus.IN_EXECUTION:
        return "Em execução";
      case EWorkOrderStatus.LATE:
        return "Em atraso";
      case EWorkOrderStatus.FINISHED:
        return "Finalizada";
    }
  };

  return (
    <div className="flex justify-center items-center w-32 h-4 bg-blue-400 rounded text-white  font-semibold py-4 px-2">
      {getEnumDescriptor()}
    </div>
  );
}
