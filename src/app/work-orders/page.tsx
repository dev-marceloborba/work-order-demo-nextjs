import PageTitle from "../_components/PageTitle";
import WorkOrdersTable from "./WorkOrdersTable";

export default function WorkOrders() {
  return (
    <div>
      <PageTitle>Ordens de serviço</PageTitle>
      <WorkOrdersTable />
    </div>
  );
}
