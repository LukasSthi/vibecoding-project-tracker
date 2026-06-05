import { useState, useEffect } from 'react';

/**
 * Vibecoding Project Tracker — starter scaffold.
 *
 * This file is intentionally almost empty. The boilerplate (Vite, React,
 * Tailwind) is configured for you, plus a few shared constants and a
 * localStorage helper. Everything visible on screen, you build.
 *
 * Where to start (build sequence in Phase 3):
 * - M4  data-model    : render the four columns and the task cards below.
 * - M5  crud-modal    : add the "+" button modal and the edit-on-click modal.
 * - M6  tag-style     : feature vs. bug color coding (uses DESIGN.md §2 colors).
 * - M7  task-owner    : assignee badge + "Hand off to..." dropdown.
 * - M8  due-tint      : color cards by due date (uses DESIGN.md §2 due-state colors).
 * - M9  context       : a curated Context briefing field on the modal.
 * - M10 copy-prompt   : a "Copy as Prompt Context" button that serializes the task + context.
 * - M11 anchors       : the Anchor Board above the Kanban.
 * - M12 secret-sauce  : the one open-ended thing that makes your tracker yours.
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
 * const [tasks, setTasks] = useLocalStorage('vibetracker.tasks', []);
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

// --- ANIMATED BACKGROUND COMPONENT ADDED HERE ---
function PSBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-gradient-to-br from-[#725CFF] to-[#344085]">
      <div className="absolute bottom-0 left-0 w-[200%] h-full opacity-30 animate-ribbon-slow">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-[60vh]" preserveAspectRatio="none">
          <path fill="url(#gradient-bg)" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,122.7C672,96,768,96,864,122.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <defs>
            <linearGradient id="gradient-bg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#725CFF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#DBE2FF" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-[200%] h-full opacity-40 animate-ribbon-fast">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-[50vh]" preserveAspectRatio="none">
          <path fill="url(#gradient-fg)" d="M0,96L60,112C120,128,240,160,360,165.3C480,171,600,149,720,122.7C840,96,960,64,1080,74.7C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          <defs>
            <linearGradient id="gradient-fg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#DBE2FF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#5C76FF" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
// ------------------------------------------------

export default function App() {
  const [tasks, setTasks] = useLocalStorage(
    'vibetracker.tasks',
    seedTasks
  );

  const [editing, setEditing] = useState(null);

  function saveTask(task) {
    const exists = tasks.some((t) => t.id === task.id);

    if (exists) {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    } else {
      setTasks([...tasks, task]);
    }

    setEditing(null);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
    setEditing(null);
  }

  return (
    <div className="relative min-h-screen p-6 overflow-hidden z-0">
      
      {/* BACKGROUND INJECTED HERE */}
      <PSBackground />

      <header className="mb-6 flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Vibecoding Project Tracker
          </h1>
          <p className="text-sm text-brand-accent/80">
            Manly Mod-Rock
          </p>
        </div>
        <button
          onClick={() =>
            setEditing({
              ...emptyTask,
              id: Date.now().toString(),
              createdDate: new Date().toISOString().split('T')[0],
            })
          }
          className="rounded bg-brand-primary hover:bg-brand-primary/80 transition-colors px-4 py-2 text-white font-bold"
        >
          + Start New
        </button>
      </header>

      <main className="grid grid-cols-4 gap-4">
        {STAGES.map((stage) => (
          <div
            key={stage.id}
            className="rounded-lg bg-slate-900/40 backdrop-blur-md p-4 text-white shadow-lg border border-white/10"
          >
            <h2 className="mb-4 font-bold tracking-wider">
              {stage.label}
            </h2>

            <div className="space-y-3">
              {tasks
                .filter((task) => task.status === stage.id)
                .map((task) => (
                  <div
                    key={task.id}
                    onClick={() => setEditing(task)}
                    className="cursor-pointer rounded bg-white text-slate-900 p-3 shadow hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.3)] hover:border-white border border-transparent transition-all"
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

function TaskModal({ task, onSave, onDelete, onClose }) {
  const [form, setForm] = useState(task);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded bg-white p-6 shadow-2xl">
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Title"
          className="mb-3 w-full border p-2 text-slate-900 rounded"
        />

        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Description"
          className="mb-3 w-full border p-2 text-slate-900 rounded"
        />

        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="mb-3 w-full border p-2 text-slate-900 rounded"
        >
          <option value="feature">Feature</option>
          <option value="bug">Bug</option>
        </select>

        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          className="mb-3 w-full border p-2 text-slate-900 rounded"
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="review">Review</option>
          <option value="done">Done</option>
        </select>

        <select
          value={form.assignee}
          onChange={(e) => setForm({ ...form, assignee: e.target.value })}
          className="mb-3 w-full border p-2 text-slate-900 rounded"
        >
          {TEAM.map((member) => (
            <option key={member}>{member}</option>
          ))}
        </select>

        <label className="mb-1 block text-sm text-slate-700">Start Date</label>
        <input
          type="date"
          value={form.startDate || ''}
          onChange={(e) => setForm({ ...form, startDate: e.target.value })}
          className="mb-3 w-full border p-2 text-slate-900 rounded"
        />

        <label className="mb-1 block text-sm text-slate-700">Due Date</label>
        <input
          type="date"
          value={form.dueDate || ''}
          onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
          className="mb-3 w-full border p-2 text-slate-900 rounded"
        />

        <div className="flex justify-between mt-4">
          <button
            onClick={() => onDelete(form.id)}
            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Delete
          </button>

          <div className="space-x-2">
            <button
              onClick={onClose}
              className="rounded border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              onClick={() => onSave(form)}
              className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}