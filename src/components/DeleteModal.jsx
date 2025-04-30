/** Modal para confirmar exclusão de uma tarefa.*/
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

/**
 * - show: boolean para mostrar ou esconder o modal
 * - onClose: função para fechar o modal
 * - onConfirm: função para confirmar exclusão
 * - task: objeto da tarefa a ser excluída
 */
const DeleteModal = ({ show, onClose, onConfirm, task }) => (
  <Modal show={show} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>Confirmar Exclusão</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Tem certeza que deseja excluir a tarefa "{task?.title}"?
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>
        Cancelar
      </Button>
      <Button variant="danger" onClick={onConfirm}>
        Excluir
      </Button>
    </Modal.Footer>
  </Modal>
);

export default DeleteModal;
