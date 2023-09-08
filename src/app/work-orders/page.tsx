import PageTitle from "../_components/PageTitle";
import WorkOrdersTable from "./WorkOrdersTable";
import { WorkOrder } from "./_models/work-order";

async function getData() {
  const res = await fetch("http://localhost:5114/v1/work-orders", {
    next: {
      tags: ["work-order"],
    },
  });

  if (!res.ok) {
    throw new Error("Erro ao pesquisar ordens");
  }
  return res.json();
}

export default async function WorkOrders() {
  const data = (await getData()) as WorkOrder[];
  console.log(data);
  return (
    <div>
      <PageTitle>Ordens de serviço</PageTitle>
      <WorkOrdersTable data={data} />
    </div>
  );
}
