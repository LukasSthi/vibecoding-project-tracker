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
    dueDate: null,
    createdDate: '2025-08-15',
  },
  {
    id: '2',
    title: 'Fix Navbar Bug',
    description: 'Dropdown does not open',
    type: 'bug',
    status: 'in-progress',
    assignee: 'Marcel',
    dueDate: null,
    createdDate: '2025-08-15',
  },
  {
    id: '3',
    title: 'Review Board Layout',
    description: 'Check UI',
    type: 'feature',
    status: 'review',
    assignee: 'Ben',
    dueDate: null,
    createdDate: '2025-08-15',
  },
  {
    id: '4',
    title: 'Deploy App',
    description: 'Deploy to Vercel',
    type: 'feature',
    status: 'done',
    assignee: 'Lukas',
    dueDate: null,
    createdDate: '2025-08-15',
  },
];

export default function App() {
  // TODO M4 data-model:
  //   const [tasks, setTasks] = useLocalStorage('vibetracker.tasks', [/* 3-4 seed tasks */]);
  const [tasks] = useLocalStorage(
  'vibetracker.tasks',
  seedTasks
);
  //
  // TODO M5 crud-modal:
  //   const [editing, setEditing] = useState(null);
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
              className="rounded bg-white p-3 shadow"
            >
              <p className="font-semibold">
                {task.title}
              </p>

              <p className="text-sm text-slate-500">
                {task.assignee}
              </p>
            </div>
          ))}
      </div>
    </div>
  ))}
</main>
    </div>
  );
}
