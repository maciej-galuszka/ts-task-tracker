import { TasksSort } from './TasksSort';
import { TaskList } from './TaskList';
import { TaskForm } from './TaskForm';
import type { Task } from '../types/Task';
import type { SortBy } from '../types/SortBy';

type TaskTrackerProps = {
  tasks: Task[];
  onClearTasks: () => void;
  onSort: (sortBy: SortBy) => void;
  onDeleteTask: (id: string) => void;
  onMarkTask: (id: string) => void;
  onAddTask: (task: Task) => void;
  sortBy: SortBy;
};

export function TaskTracker({
  tasks,
  onClearTasks,
  onSort,
  onDeleteTask,
  onMarkTask,
  onAddTask,
  sortBy,
}: TaskTrackerProps) {
  return (
    <div className="container">
      <h1>Task tracker</h1>
      <TaskForm onAddTask={onAddTask} />
      <TaskList
        onDeleteTask={onDeleteTask}
        onMarkTask={onMarkTask}
        tasks={tasks}
      />
      {tasks.length > 0 && (
        <TasksSort
          onClearTasks={onClearTasks}
          onSort={onSort}
          sortBy={sortBy}
        />
      )}
    </div>
  );
}
