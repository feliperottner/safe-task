/**Linha da tabela que mostra uma tarefa. */
import React from 'react';
import { Button, Form } from 'react-bootstrap';

/**
 * - task: objeto da tarefa
 * - onEdit: função para editar tarefa
 * - onDelete: função para excluir tarefa
 * - onToggle: função para marcar concluída ou não concluída
 * - isCompleted: boolean indicando se a tarefa está concluída
 */
const TaskItem = ({ task, onEdit, onDelete, onToggle, isCompleted }) => (
  <tr>
    <td className="text-center">
      <Form.Check
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggle(task.id)}
      />
    </td>
    <td>{task.title}</td>
    <td>{task.description}</td>
    <td>{task.category}</td>
    <td>{task.priority}</td>
    <td>
      {!isCompleted && (
        <Button variant="warning" size="sm" onClick={() => onEdit(task)} className="me-2">
          Editar
        </Button>
      )}
      <Button variant="danger" size="sm" onClick={() => onDelete(task)}>
        Excluir
      </Button>
    </td>
  </tr>
);

export default TaskItem;
