"use client";

import { useState } from "react";
import Table from "./_components/Table";
import Modal from "../_components/Modal";

export default function WorkOrdersTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-2 rounded"
                onClick={() => setIsModalOpen(true)}
              >
                Editar
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 mr-2 rounded">
                Excluir
              </button>
            </Table.Data>
          </Table.Row>
        </Table.Body>
      </Table.Root>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
