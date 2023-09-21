"use client";

import { useState } from "react";
import Table from "./_components/Table";
import Modal from "../_components/Modal";
import Button from "../_components/Button";
import WorkOrderFormModal from "./_components/WorkOrderFormModal";

import BadgeStatus from "./_components/BadgeStatus";
import { WorkOrder } from "./_models/work-order";
import { useRouter } from "next/navigation";
import dateUtils from "../_utils/dateUtils";

export default function WorkOrdersTable({ data }: { data: WorkOrder[] }) {
  const { refresh } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<WorkOrder | undefined>();

  const handleSelectItem = (item: WorkOrder) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleUpdateItem = async (item: Partial<WorkOrder>) => {
    try {
      var result = await fetch(
        `http://localhost:5114/api/v1/work-orders/${item.id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          body: JSON.stringify(item),
        }
      );

      if (result.ok) {
        refresh();
        setIsModalOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteItem = async ({ id }: WorkOrder) => {
    const confirm = window.confirm(
      "Tem certeza que deseja excluir a Ordem de serviço?"
    );
    if (!confirm) return;
    try {
      const result = await fetch(
        `http://localhost:5114/api/v1/work-orders/${id}`,
        {
          method: "DELETE",
        }
      );
      if (result.ok) {
        refresh();
      }
    } catch (error) {
      console.log(error);
    }
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
              <Table.Data>
                {dateUtils.formatDate(new Date(item.createdAt))}
              </Table.Data>
              <Table.Data>
                {dateUtils.formatDate(new Date(item.target))}
              </Table.Data>
              <Table.Data>
                <BadgeStatus status={item.workOrderStatus} />
              </Table.Data>
              <Table.Data>
                <Button color="primary" onClick={() => handleSelectItem(item)}>
                  Editar
                </Button>
                <Button color="danger" onClick={() => handleDeleteItem(item)}>
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
            defaultValues={selectedItem!}
            onSubmit={handleUpdateItem}
          />
        }
        title="Editar ordem de serviço"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
