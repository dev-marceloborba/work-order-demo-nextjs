"use client";

import { useState } from "react";
import Table from "./_components/Table";
import Modal from "../_components/Modal";
import Button from "../_components/Button";
import WorkOrderFormModal from "./_components/WorkOrderFormModal";

import BadgeStatus from "./_components/BadgeStatus";
import { WorkOrder } from "./_models/work-order";

export default function WorkOrdersTable({ data }: { data: WorkOrder[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState<any>({
    id: null,
    name: "",
    date: null,
  });

  const handleSelectItem = (item: any) => {
    const { id, equipmentName, date } = item;
    setSelectedItem({
      id,
      name: equipmentName,
      date,
    });
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
          {data.map(
            ({ id, equipmentName, createdAt, target, workOrderStatus }) => (
              <Table.Row key={id}>
                <Table.Data>{id}</Table.Data>
                <Table.Data>{equipmentName}</Table.Data>
                <Table.Data>{createdAt?.toISOString()}</Table.Data>
                <Table.Data>{target?.toISOString()}</Table.Data>
                <Table.Data>
                  <BadgeStatus status={workOrderStatus} />
                </Table.Data>
                <Table.Data>
                  <Button
                    color="primary"
                    // onClick={() => handleSelectItem({ id, equipmentName, date })}
                  >
                    Editar
                  </Button>
                  <Button color="danger" onClick={() => handleDeleteItem()}>
                    Excluir
                  </Button>
                </Table.Data>
              </Table.Row>
            )
          )}
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
