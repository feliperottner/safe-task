import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import TaskTable from './components/TaskTable';
import TaskModal from './components/TaskModal';
import DeleteModal from './components/DeleteModal';
import FeedbackMessage from './components/FeedbackMessage';
import { getTasks, saveTasks } from './services/taskService';

function App() {
  const [tasks, setTasks] = useState([]);
  const [modals, setModals] = useState({ task: false, delete: false });
  const [currentTask, setCurrentTask] = useState(null);
  const [feedback, setFeedback] = useState({ text: "", type: "success" });

  // Carrega tarefas ao iniciar
  useEffect(() => {
    setTasks(getTasks());
  }, []);

  // Salva tarefas sempre que mudam
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // Exibe mensagem temporária
  const showFeedback = (message, type = "success") => {
    setFeedback({ text: message, type });
    setTimeout(() => setFeedback({ text: "", type: "success" }), 3000);
  };

  // Salva tarefa nova ou editada
  const handleSaveTask = (task) => {
    const updatedTasks = task.id
      ? tasks.map(t => t.id === task.id ? task : t)
      : [...tasks, { ...task, id: Date.now(), isCompleted: false }];
    setTasks(updatedTasks);
    showFeedback(task.id ? "Tarefa atualizada!" : "Tarefa criada!");
    setModals({ ...modals, task: false });
    setCurrentTask(null);
  };

  // Exclui tarefa
  const handleDelete = () => {
    setTasks(tasks.filter(task => task.id !== currentTask.id));
    showFeedback("Tarefa excluída!", "danger");
    setModals({ ...modals, delete: false });
  };

  // Alterna status concluído
  const handleToggleStatus = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
    showFeedback("Status atualizado!", "info");
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">SAFE TASK</h1>
      <div className="text-end mb-3">
        <Button variant="primary" onClick={() => {
          setCurrentTask(null);
          setModals({ ...modals, task: true });
        }}>
          Nova Tarefa
        </Button>
      </div>
      <FeedbackMessage message={feedback.text} variant={feedback.type} />
      <TaskTable
        title="Tarefas a Fazer"
        tasks={tasks.filter(task => !task.isCompleted)}
        onEdit={(task) => {
          setCurrentTask(task);
          setModals({ ...modals, task: true });
        }}
        onDelete={(task) => {
          setCurrentTask(task);
          setModals({ ...modals, delete: true });
        }}
        onToggle={handleToggleStatus}
      />
      <TaskTable
        title="Tarefas Concluídas"
        tasks={tasks.filter(task => task.isCompleted)}
        onDelete={(task) => {
          setCurrentTask(task);
          setModals({ ...modals, delete: true });
        }}
        onToggle={handleToggleStatus}
      />
      <TaskModal
        show={modals.task}
        onClose={() => setModals({ ...modals, task: false })}
        onSave={handleSaveTask}
        task={currentTask}
      />
      <DeleteModal
        show={modals.delete}
        onClose={() => setModals({ ...modals, delete: false })}
        onConfirm={handleDelete}
        task={currentTask}
      />
    </Container>
  );
}

export default App;
