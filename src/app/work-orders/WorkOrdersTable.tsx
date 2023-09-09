"use client";

import { useState } from "react";
import Table from "./_components/Table";
import Modal from "../_components/Modal";
import Button from "../_components/Button";
import WorkOrderFormModal from "./_components/WorkOrderFormModal";

import BadgeStatus from "./_components/BadgeStatus";
import { EWorkOrderStatus, WorkOrder } from "./_models/work-order";

export default function WorkOrdersTable({ data }: { data: WorkOrder[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState<WorkOrder>({
    id: 0,
    equipmentName: "",
    target: new Date(),
    description: "",
    createdAt: new Date(),
    workOrderStatus: EWorkOrderStatus.IN_EXECUTION,
  });

  const handleSelectItem = (item: WorkOrder) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleDeleteItem = () => {
    alert("Tem certeza que deseja excluir a Ordem de serviço");
  };

  return (
    <>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Equipamento</Table.HeaderCell>
            <Table.HeaderCell>Data de criação</Table.HeaderCell>
            <Table.HeaderCell>Data alvo</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Ações</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item) => (
            <Table.Row key={item.id}>
              <Table.Data>{item.id}</Table.Data>
              <Table.Data>{item.equipmentName}</Table.Data>
              <Table.Data>{item.createdAt?.toISOString()}</Table.Data>
              <Table.Data>{item.target?.toISOString()}</Table.Data>
              <Table.Data>
                <BadgeStatus status={item.workOrderStatus} />
              </Table.Data>
              <Table.Data>
                <Button color="primary" onClick={() => handleSelectItem(item)}>
                  Editar
                </Button>
                <Button color="danger" onClick={() => handleDeleteItem()}>
                  Excluir
                </Button>
              </Table.Data>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Modal
        content={
          <WorkOrderFormModal
            defaultValues={selectedItem}
            onSubmit={(formData) => console.log(formData)}
          />
        }
        title="Editar ordem de serviço"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
