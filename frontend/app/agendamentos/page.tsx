"use client";

import { BiTrash, BiPencil, BiCheck, BiX } from "react-icons/bi";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx"; // Importando a biblioteca XLSX

interface Scheduling {
  id: number;
  responsibleName: string;
  petName: string;
  cpfOrMatricula: string;
  email: string;
  phoneNumber: string;
  desiredTime: string;
  vaccinationCard?: string;
  appointmentDate: string;
}

export default function Appointments() {
  const [appointments, setAppointments] = useState<Scheduling[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<Scheduling[]>([]);
  const [filterDate, setFilterDate] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editData, setEditData] = useState<Partial<Scheduling>>({
    responsibleName: "",
    petName: "",
    cpfOrMatricula: "",
    email: "",
    phoneNumber: "",
    desiredTime: "",
    vaccinationCard: "",
    appointmentDate: "",
  });

  useEffect(() => {
    getAppointments();
  }, []);

  async function getAppointments() {
    const resp = await fetch("http://localhost:3001/scheduling");
    const agendamentos = await resp.json();
    setAppointments(agendamentos);
    setFilteredAppointments(agendamentos);
  }

  async function deleteAppointment(id: number) {
    const confirmDelete = confirm("Tem certeza que deseja excluir este agendamento?");
    if (confirmDelete) {
      await fetch(`http://localhost:3001/scheduling/${id}`, {
        method: "DELETE",
      });
      await getAppointments();
    }
  }

  async function updateAppointment() {
    if (!editId) return;

    await fetch(`http://localhost:3001/scheduling/${editId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editData),
    });
    setEditId(null); // Sair do modo de edição
    setEditData({}); // Resetar dados de edição
    await getAppointments();
  }

  function handleEdit(appointment: Scheduling) {
    setEditId(appointment.id);
    setEditData({ ...appointment });
  }

  function cancelEdit() {
    setEditId(null);
    setEditData({});
  }

  function handleDateFilter() {
    if (filterDate) {
      const filtered = appointments.filter(
        (appointment) => appointment.appointmentDate === filterDate
      );
      setFilteredAppointments(filtered);
    } else {
      setFilteredAppointments(appointments);
    }
  }

  // Função para exportar os agendamentos para Excel
  function exportToExcel() {
    const ws = XLSX.utils.json_to_sheet(filteredAppointments); // Converte os dados para uma planilha
    const wb = XLSX.utils.book_new(); // Cria um novo livro de trabalho
    XLSX.utils.book_append_sheet(wb, ws, "Agendamentos"); // Adiciona a planilha ao livro
    XLSX.writeFile(wb, "agendamentos.xlsx"); // Gera e baixa o arquivo Excel
  }

  return (
    <div>
      <h1 className="text-4xl text-center font-bold m-4">Agendamentos</h1>
      <div className="flex justify-center items-center gap-4 mb-4">
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="border rounded-md p-2"
        />
        <button
          onClick={handleDateFilter}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Filtrar
        </button>
        <button
          onClick={exportToExcel} // Botão para exportar
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Exportar para Excel
        </button>
      </div>
      {filteredAppointments.length === 0 ? (
        <p>Nenhum agendamento encontrado.</p>
      ) : (
        <div className="grid p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="p-4 bg-zinc-100 rounded-md shadow-md relative"
            >
              {editId === appointment.id ? (
                <div>
                  <input
                    type="text"
                    value={editData.petName || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, petName: e.target.value })
                    }
                    className="border rounded-md p-2 mb-2 w-full"
                    placeholder="Nome do Pet"
                  />
                  <input
                    type="text"
                    value={editData.responsibleName || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, responsibleName: e.target.value })
                    }
                    className="border rounded-md p-2 mb-2 w-full"
                    placeholder="Nome do Responsável"
                  />
                  <input
                    type="text"
                    value={editData.cpfOrMatricula || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, cpfOrMatricula: e.target.value })
                    }
                    className="border rounded-md p-2 mb-2 w-full"
                    placeholder="CPF ou Matrícula"
                  />
                  <input
                    type="email"
                    value={editData.email || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, email: e.target.value })
                    }
                    className="border rounded-md p-2 mb-2 w-full"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    value={editData.phoneNumber || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, phoneNumber: e.target.value })
                    }
                    className="border rounded-md p-2 mb-2 w-full"
                    placeholder="Telefone"
                  />
                  <input
                    type="text"
                    value={editData.desiredTime || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, desiredTime: e.target.value })
                    }
                    className="border rounded-md p-2 mb-2 w-full"
                    placeholder="Horário Desejado"
                  />
                  <input
                    type="text"
                    value={editData.vaccinationCard || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, vaccinationCard: e.target.value })
                    }
                    className="border rounded-md p-2 mb-2 w-full"
                    placeholder="Cartão de Vacinação"
                  />
                  <input
                    type="date"
                    value={editData.appointmentDate || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, appointmentDate: e.target.value })
                    }
                    className="border rounded-md p-2 mb-2 w-full"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={updateAppointment}
                      className="bg-green-500 text-white px-2 py-1 rounded-md flex items-center"
                    >
                      <BiCheck className="mr-1" /> Confirmar
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="bg-gray-500 text-white px-2 py-1 rounded-md flex items-center"
                    >
                      <BiX className="mr-1" /> Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <p><strong>Nome do Pet:</strong> {appointment.petName}</p>
                  <p><strong>Responsável:</strong> {appointment.responsibleName}</p>
                  <p><strong>CPF/Matrícula:</strong> {appointment.cpfOrMatricula}</p>
                  <p><strong>Email:</strong> {appointment.email}</p>
                  <p><strong>Telefone:</strong> {appointment.phoneNumber}</p>
                  <p><strong>Horário Desejado:</strong> {appointment.desiredTime}</p>
                  <p><strong>Cartão de Vacinação:</strong> {appointment.vaccinationCard || "Não informado"}</p>
                  <p><strong>Data:</strong> {appointment.appointmentDate}</p>
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(appointment)}
                      className="bg-blue-500 text-white p-1 rounded-md flex items-center justify-center"
                      title="Editar"
                    >
                      <BiPencil />
                    </button>
                    <button
                      onClick={() => deleteAppointment(appointment.id)}
                      className="bg-red-500 text-white p-1 rounded-md flex items-center justify-center"
                      title="Excluir"
                    >
                      <BiTrash />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
