// Chave usada para salvar as tarefas no LocalStorage
const TASKS_KEY = 'tasks';

/**
 * Função para carregar as tarefas do LocalStorage.
 * Retorna um array de tarefas ou vazio se não houver nada salvo.
 */
export const getTasks = () => {
  const tasks = localStorage.getItem(TASKS_KEY);
  return tasks ? JSON.parse(tasks) : [];
};

/**
 * Função para salvar as tarefas no LocalStorage.
 * Recebe um array de tarefas e salva como string JSON.
 */
export const saveTasks = (tasks) => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};
