import { useState } from 'react';
import { formatDate } from './helpers/formatDate';
import { TaskTracker } from './components/TaskTracker';
import { Footer } from './components/Footer';
import type { Task } from './types/Task';
import type { SortBy } from './types/SortBy';
import './App.css';
import './queries.css';

const today = new Date();
const initialTasks: Task[] = [
  {
    description: 'university project',
    date: formatDate(new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000)),
    priority: 'High',
    isDone: false,
    id: '712397',
  },
  {
    description: 'web developer interview',
    date: formatDate(today),
    priority: 'High',
    isDone: false,
    id: '313751',
  },
  {
    description: 'groceries',
    date: formatDate(new Date(today.getTime() + 0 * 24 * 60 * 60 * 1000)),
    priority: 'Low',
    isDone: true,
    id: '839512',
  },
  {
    description: 'gym',
    date: formatDate(new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000)),
    priority: 'Medium',
    isDone: false,
    id: '012831',
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const saved = localStorage.getItem('tasks');
      return saved ? (JSON.parse(saved) as Task[]) : initialTasks;
    } catch {
      return initialTasks;
    }
  });

  const [sortBy, setSortBy] = useState<SortBy>('input');
  let sorted: Task[] = tasks;

  // Sort tasks based on selected criteria
  const priorityOrder = { High: 1, Medium: 2, Low: 3 };

  if (sortBy === 'input') sorted = tasks;
  if (sortBy === 'finished')
    sorted = tasks
      .filter((task) => !task.isDone)
      .concat(tasks.filter((task) => task.isDone));
  if (sortBy === 'priority')
    sorted = tasks.toSorted(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );
  if (sortBy === 'date')
    sorted = tasks.toSorted(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

  // Save updated tasks to state and localStorage
  function saveTasks(newTasks: Task[]) {
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  function handleSort(sortBy: SortBy) {
    setSortBy(sortBy);
  }

  function handleAddTask(task: Task) {
    const newTasks = [...tasks, task];
    saveTasks(newTasks);
  }

  function handleClearTasks() {
    saveTasks([]);
  }

  function handleDeleteTask(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id);
    saveTasks(newTasks);
  }

  function handleMarkTask(id: string) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    );
    saveTasks(newTasks);
  }

  return (
    <>
      <TaskTracker
        tasks={sorted}
        onClearTasks={handleClearTasks}
        onDeleteTask={handleDeleteTask}
        onMarkTask={handleMarkTask}
        onAddTask={handleAddTask}
        sortBy={sortBy}
        onSort={handleSort}
      />
      <Footer tasks={tasks} />
    </>
  );
}

export default App;
