import { Button } from './Button';
import type { SortBy } from '../types/SortBy';

type TasksSortProps = {
  onClearTasks: () => void;
  sortBy: SortBy;
  onSort: (sortBy: SortBy) => void;
};

export function TasksSort({ onClearTasks, sortBy, onSort }: TasksSortProps) {
  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.currentTarget.value;

    if (
      value === 'input' ||
      value === 'finished' ||
      value === 'priority' ||
      value === 'date'
    ) {
      onSort(value);
    }
  }

  return (
    <>
      <div className="sort-container">
        <select
          className="input-details input-details--sort"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value={'input'}>SORT BY INPUT</option>
          <option value={'finished'}>SORT BY FINISHED</option>
          <option value={'priority'}>SORT BY PRIORITY</option>
          <option value={'date'}>SORT BY DATE</option>
        </select>
        <Button className="btn--clear" onClick={onClearTasks} type="button">
          CLEAR TASKS
        </Button>
      </div>
    </>
  );
}
