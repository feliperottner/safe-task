/**Modal para criar ou editar tarefa. */
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

/**
 * - show: boolean para mostrar ou ocultar o modal
 * - onClose: função para fechar modal
 * - onSave: função para salvar tarefa
 * - task: tarefa para editar
 */
const TaskModal = ({ show, onClose, onSave, task }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    priority: ''
  });

  // Limpa formulário ao abrir para nova tarefa
  useEffect(() => {
    if (!task && show) {
      setFormData({
        title: '',
        description: '',
        category: '',
        priority: ''
      });
    }
  }, [show, task]);

  // Preenche formulário para edição
  useEffect(() => {
    if (task) {
      setFormData(task);
    }
  }, [task]);

  // Atualiza estado conforme usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Função para salvar ou atualizar tarefa
  const handleSubmit = () => {
    // Se for edição, salva direto
    if (task?.id) {
      onSave({
        ...formData,
        id: task.id,
        isCompleted: task.isCompleted
      });
    } else {
      // Para nova tarefa, verifica se todos os campos estão preenchidos
      if (Object.values(formData).every(field => field)) {
        onSave({
          ...formData,
          id: null
        });
      } else {
        alert('Preencha todos os campos!');
      }
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{task ? 'Editar Tarefa' : 'Nova Tarefa'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Título</Form.Label>
            <Form.Control name="title" value={formData.title} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descrição</Form.Label>
            <Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Categoria</Form.Label>
            <Form.Select name="category" value={formData.category} onChange={handleChange} required>
              <option value="">Selecione</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Pessoal">Pessoal</option>
              <option value="Estudos">Estudos</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Prioridade</Form.Label>
            <Form.Select name="priority" value={formData.priority} onChange={handleChange} required>
              <option value="">Selecione</option>
              <option value="Alta">Alta</option>
              <option value="Média">Média</option>
              <option value="Baixa">Baixa</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancelar</Button>
        <Button variant="success" onClick={handleSubmit}>{task ? 'Atualizar' : 'Salvar'}</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskModal;
