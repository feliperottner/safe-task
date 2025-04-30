/**Formulário para criar ou editar uma tarefa. */
import React, { useState, useEffect } from 'react';

/**
 * - onAddTask: função para adicionar tarefa nova
 * - onUpdateTask: função para atualizar tarefa existente
 * - taskToEdit: tarefa para editar
 */
function TaskForm({ onAddTask, onUpdateTask, taskToEdit }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    category: '',
    priority: ''
  });

  // Preenche o formulário se estiver editando
  useEffect(() => {
    if (taskToEdit) setTask(taskToEdit);
  }, [taskToEdit]);

  // Atualiza estado conforme usuário digita
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  // Envia o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title && task.description && task.category && task.priority) {
      if (taskToEdit) {
        onUpdateTask(task);
      } else {
        onAddTask(task);
      }
      setTask({ title: '', description: '', category: '', priority: '' });
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={task.title} onChange={handleChange} placeholder="Título" required />
      <textarea name="description" value={task.description} onChange={handleChange} placeholder="Descrição" required />
      <select name="category" value={task.category} onChange={handleChange} required>
        <option value="">Selecione a Categoria</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Pessoal">Pessoal</option>
        <option value="Estudos">Estudos</option>
      </select>
      <select name="priority" value={task.priority} onChange={handleChange} required>
        <option value="">Selecione a Prioridade</option>
        <option value="Baixa">Baixa</option>
        <option value="Média">Média</option>
        <option value="Alta">Alta</option>
      </select>
      <button type="submit">{taskToEdit ? 'Atualizar' : 'Salvar'}</button>
    </form>
  );
}

export default TaskForm;
