"use client";

import { useState } from "react";
import Table from "./_components/Table";
import Modal from "../_components/Modal";
import Button from "../_components/Button";
import WorkOrderFormModal from "./_components/WorkOrderFormModal";

export default function WorkOrdersTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState<any>({
    id: null,
    name: "",
    date: null,
  });

  const handleSelectItem = () => {
    setSelectedItem({
      id: 1,
      name: "Maquina de lavar LG",
      date: "16/08/2023",
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
            <Table.HeaderCell>Ações</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Data>1</Table.Data>
            <Table.Data>Maquina de lavar LG</Table.Data>
            <Table.Data>16/08/2023</Table.Data>
            <Table.Data>
              <Button color="primary" onClick={() => handleSelectItem()}>
                Editar
              </Button>
              <Button color="danger" onClick={() => handleDeleteItem()}>
                Excluir
              </Button>
            </Table.Data>
          </Table.Row>
        </Table.Body>
      </Table.Root>
      <Modal
        content={
          <WorkOrderFormModal
            defaultValues={{ equipmentName: selectedItem.name }}
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
