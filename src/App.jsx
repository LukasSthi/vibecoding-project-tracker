import { useState, useEffect } from 'react';

/**
 * Vibecoding Project Tracker — starter scaffold.
 *
 * This file is intentionally almost empty. The boilerplate (Vite, React,
 * Tailwind) is configured for you, plus a few shared constants and a
 * localStorage helper. Everything visible on screen, you build.
 *
 * Where to start (build sequence in Phase 3):
 *   - M4  data-model    : render the four columns and the task cards below.
 *   - M5  crud-modal    : add the "+" button modal and the edit-on-click modal.
 *   - M6  tag-style     : feature vs. bug color coding (uses DESIGN.md §2 colors).
 *   - M7  task-owner    : assignee badge + "Hand off to..." dropdown.
 *   - M8  due-tint      : color cards by due date (uses DESIGN.md §2 due-state colors).
 *   - M9  context       : a curated Context briefing field on the modal.
 *   - M10 copy-prompt   : a "Copy as Prompt Context" button that serializes the task + context.
 *   - M11 anchors       : the Anchor Board above the Kanban.
 *   - M12 secret-sauce  : the one open-ended thing that makes your tracker yours.
 *
 * Search the file for `TODO M<n>` to find the right hook for each milestone.
 */

/**
 * @typedef {Object} Task
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {'feature'|'bug'} type
 * @property {'todo'|'in-progress'|'review'|'done'} status
 * @property {string} assignee
 * @property {string|null} dueDate     ISO 'YYYY-MM-DD'
 * @property {string} createdDate      ISO 'YYYY-MM-DD'
 */

// The four columns of the board, in render order.
// Use these IDs everywhere — do not invent new ones.
export const STAGES = [
  { id: 'todo',        label: 'To Do' },
  { id: 'in-progress', label: 'In Progress' },
  { id: 'review',      label: 'Review' },
  { id: 'done',        label: 'Done' },
];

// Replace these placeholders with the three names from PRD §8 before M4.
// They become the only valid values for `Task.assignee`.
export const TEAM = ['Lukas', 'Marcel', 'Ben'];

/**
 * A tiny localStorage hook — survives reloads, no library needed.
 *
 * Usage:
 *   const [tasks, setTasks] = useLocalStorage('vibetracker.tasks', []);
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw != null ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* quota or private-mode error — silently ignore for hackathon */
    }
  }, [key, value]);

  return [value, setValue];
}
const seedTasks = [
  {
    id: '1',
    title: 'Create Login Page',
    description: 'Build login UI',
    type: 'feature',
    status: 'todo',
    assignee: 'Lukas',
    startDate: '2025-08-15',
  dueDate: '2025-08-20',
  createdDate: '2025-08-15',
  },

  {
    id: '2',
    title: 'Fix Navbar Bug',
    description: 'Dropdown does not open',
    type: 'bug',
    status: 'in-progress',
    assignee: 'Marcel',
    startDate: '2025-08-15',
  dueDate: '2025-08-20',
  createdDate: '2025-08-15',
  },

  {
    id: '3',
    title: 'Review Board Layout',
    description: 'Check UI',
    type: 'feature',
    status: 'review',
    assignee: 'Ben',
    startDate: '2025-08-15',
  dueDate: '2025-08-20',
  createdDate: '2025-08-15',
  },

  {
    id: '4',
    title: 'Deploy App',
    description: 'Deploy to Vercel',
    type: 'feature',
    status: 'done',
    assignee: 'Lukas',
    startDate: '2025-08-15',
  dueDate: '2025-08-20',
  createdDate: '2025-08-15',
  },
];

const emptyTask = {
  id: '',
  title: '',
  description: '',
  type: 'feature',
  status: 'todo',
  assignee: 'Lukas',
  startDate: '',
  dueDate: '',
  createdDate: '',
};

export default function App() {
  // TODO M4 data-model:
  //   const [tasks, setTasks] = useLocalStorage('vibetracker.tasks', [/* 3-4 seed tasks */]);
  const [tasks, setTasks] = useLocalStorage(
  'vibetracker.tasks',
  seedTasks
  );


  //
  // TODO M5 crud-modal:
  const [editing, setEditing] = useState(null);

  function saveTask(task) {
  const exists = tasks.some(
    (t) => t.id === task.id
  );

  if (exists) {
    setTasks(
      tasks.map((t) =>
        t.id === task.id ? task : t
      )
    );
  } else {
    setTasks([...tasks, task]);
  }

  setEditing(null);
}

function deleteTask(id) {
  setTasks(
    tasks.filter((t) => t.id !== id)
  );

  setEditing(null);
}
  //
  // TODO M11 anchors:
  //   const [anchors, setAnchors] = useLocalStorage('vibetracker.anchors', [...]);

  return (
    <div className="min-h-screen p-6">
      <header className="mb-6 flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Vibecoding Project Tracker
          </h1>
          <p className="text-sm text-slate-500">
            {/* Replace this line with your team name from PRD §11. */}
            Manly Mod-Rock
          </p>
        </div>
        <button
  onClick={() =>
    setEditing({
      ...emptyTask,
      id: Date.now().toString(),
      createdDate:
        new Date()
          .toISOString()
          .split('T')[0],
    })
  }
  className="rounded bg-blue-600 px-4 py-2 text-white"
>
  +
</button>
      </header>

      {/* TODO M11 anchors: render the Anchor Board (Presentation / Demo / Report / Documentation) above the board. */}

      {/*
        TODO M4 data-model:
          Render a Kanban board with the four columns from STAGES.
          Each column should display the tasks whose status matches its id.
          Pre-populate 3-4 mock tasks so the board isn't empty on first load.

        TODO M5 crud-modal:
          Add a "+" button that opens a modal with every Task field.
          Clicking a card should open the same modal in edit mode.
      */}
      {/*<main className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 text-slate-400">
        Build the four-column board here · M4
      </main>
      */}
      <main className="grid grid-cols-4 gap-4">
  {STAGES.map((stage) => (
    <div
      key={stage.id}
      className="rounded-lg bg-slate-100 p-4"
    >
      <h2 className="mb-4 font-bold">
        {stage.label}
      </h2>

      <div className="space-y-3">
        {tasks
          .filter((task) => task.status === stage.id)
          .map((task) => (
            <div
  key={task.id}
  onClick={() => setEditing(task)}
  className="cursor-pointer rounded bg-white p-3 shadow"
>
              <p className="font-semibold">
                {task.title}
              </p>

              <p className="text-sm text-slate-500">
                {task.assignee}
              </p>

              <p className="text-xs text-slate-400">
  Due: {task.dueDate || '-'}
</p>
            </div>
          ))}
      </div>
    </div>
  ))}
</main>
{editing && (
  <TaskModal
    task={editing}
    onSave={saveTask}
    onDelete={deleteTask}
    onClose={() => setEditing(null)}
  />
)}
    </div>
  );
}
function TaskModal({
  task,
  onSave,
  onDelete,
  onClose,
}) {
  const [form, setForm] = useState(task);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded bg-white p-6">

        <input
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
          placeholder="Title"
          className="mb-3 w-full border p-2"
        />

        <textarea
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
          placeholder="Description"
          className="mb-3 w-full border p-2"
        />

        <select
          value={form.type}
          onChange={(e) =>
            setForm({
              ...form,
              type: e.target.value,
            })
          }
          className="mb-3 w-full border p-2"
        >
          <option value="feature">
            Feature
          </option>
          <option value="bug">
            Bug
          </option>
        </select>

        <select
          value={form.status}
          onChange={(e) =>
            setForm({
              ...form,
              status: e.target.value,
            })
          }
          className="mb-3 w-full border p-2"
        >
          <option value="todo">To Do</option>
          <option value="in-progress">
            In Progress
          </option>
          <option value="review">
            Review
          </option>
          <option value="done">
            Done
          </option>
        </select>

        <select
          value={form.assignee}
          onChange={(e) =>
            setForm({
              ...form,
              assignee: e.target.value,
            })
          }
          className="mb-3 w-full border p-2"
        >
          {TEAM.map((member) => (
            <option key={member}>
              {member}
            </option>
          ))}
        </select>

        <label className="mb-1 block text-sm">
  Start Date
</label>

<input
  type="date"
  value={form.startDate || ''}
  onChange={(e) =>
    setForm({
      ...form,
      startDate: e.target.value,
    })
  }
  className="mb-3 w-full border p-2"
/>

<label className="mb-1 block text-sm">
  Due Date
</label>

<input
  type="date"
  value={form.dueDate || ''}
  onChange={(e) =>
    setForm({
      ...form,
      dueDate: e.target.value,
    })
  }
  className="mb-3 w-full border p-2"
/>

        <div className="flex justify-between">
          <button
            onClick={() =>
              onDelete(form.id)
            }
            className="rounded bg-red-600 px-4 py-2 text-white"
          >
            Delete
          </button>

          <div className="space-x-2">
            <button
              onClick={onClose}
              className="rounded border px-4 py-2"
            >
              Cancel
            </button>

            <button
              onClick={() =>
                onSave(form)
              }
              className="rounded bg-green-600 px-4 py-2 text-white"
            >
              Save
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
