"use client";

import { useState } from "react";
import Button from "../_components/Button";
import Modal from "../_components/Modal";
import PageTitle from "../_components/PageTitle";
import WorkOrderFormModal from "./_components/WorkOrderFormModal";
import { WorkOrder } from "./_models/work-order";
import { useRouter } from "next/navigation";

export default function Content() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { refresh } = useRouter();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCreateWorkOrder = async (workOrder: WorkOrder) => {
    try {
      const result = await fetch("http://localhost:5114/api/v1/work-orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          equipmentName: workOrder.equipmentName,
          description: workOrder.description,
          target: workOrder.target,
        }),
      });
      if (result.ok) {
        refresh();
        setIsModalOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <PageTitle>Ordens de serviço</PageTitle>
      <Button color="primary" onClick={handleOpenModal}>
        Criar ordem de serviço
      </Button>
      <Modal
        content={
          <WorkOrderFormModal
            defaultValues={{
              equipmentName: "",
              description: "",
              target: new Date(),
            }}
            onSubmit={handleCreateWorkOrder}
          />
        }
        title="Nova ordem de serviço"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
