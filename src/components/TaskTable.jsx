/**Tabela que lista as tarefas. */
import React from 'react';
import { Table } from 'react-bootstrap';
import TaskItem from './TaskItem';

/**
 * - title: título da tabela
 * - tasks: array de tarefas
 * - onEdit: função para editar tarefa
 * - onDelete: função para excluir tarefa
 * - onToggle: função para marcar concluída/não concluída
 */
const TaskTable = ({ title, tasks, onEdit, onDelete, onToggle }) => (
  <div className="mt-4">
    <h2>{title}</h2>
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Status</th>
          <th>Título</th>
          <th>Descrição</th>
          <th>Categoria</th>
          <th>Prioridade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length === 0 ? (
          <tr>
            <td colSpan="6" className="text-center">Nenhuma tarefa encontrada</td>
          </tr>
        ) : (
          tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggle={onToggle}
              isCompleted={title.includes("Concluídas")}
            />
          ))
        )}
      </tbody>
    </Table>
  </div>
);

export default TaskTable;
