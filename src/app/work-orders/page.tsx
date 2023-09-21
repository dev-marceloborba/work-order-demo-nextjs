import Content from "./Content";
import WorkOrdersTable from "./WorkOrdersTable";
import { WorkOrder } from "./_models/work-order";

async function getData() {
  const res = await fetch("http://localhost:5114/api/v1/work-orders", {
    next: {
      tags: ["work-order"],
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erro ao pesquisar ordens");
  }
  return res.json();
}

export default async function WorkOrders() {
  const data = (await getData()) as WorkOrder[];
  return (
    <div>
      <Content />
      <WorkOrdersTable data={data} />
    </div>
  );
}
