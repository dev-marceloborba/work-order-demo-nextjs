import PageTitle from "../_components/PageTitle";
import WorkOrderInfoCard from "./_components/WorkOrderInfoCard";

export default function Dashboard() {
  return (
    <div>
      <PageTitle>Dashboard</PageTitle>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1">
          <WorkOrderInfoCard title="Ordens em execução" value={1} />
        </div>
        <div className="col-span-1">
          <WorkOrderInfoCard title="Ordens concluídas" value={3} />
        </div>
        <div className="col-span-1">
          <WorkOrderInfoCard title="Ordens em atraso" value={2} />
        </div>
      </div>
    </div>
  );
}
