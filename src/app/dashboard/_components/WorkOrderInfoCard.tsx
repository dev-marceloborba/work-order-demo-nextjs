export default function WorkOrderInfoCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="text-4xl font-bold text-center">{value}</div>
    </div>
  );
}
