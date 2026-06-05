# Vibecoding Project Tracker — Design

**Status:** Hackathon starter design doc · fill in the **`<TODO>`** sections before you tag `design-done`.

**Why this file exists.** This tracker is your tool. It should look like *your* tool — not a generic Kanban with default Tailwind blue. Twenty minutes of design decisions here will be visible on every screen for the next six weeks of Module 5.

**Who owns this.** Person B, during the same window the rest of the team is reviewing the PRD. By the time the team converges to start M4 (`data-model`), this file should be filled in and the colors should already be in `tailwind.config.js`.

---

## 1. Mood / vibe

One sentence that captures the feeling the tracker should leave you with.

`Satisfactory`

Two or three references that capture the vibe (links to dribbble shots, screenshots of apps you admire, Pinterest boards — anything visual):

- `https://bytescale.mobbin.com/FW25bBB/image/mobbin.com/prod/file.webp?enc=1.BQnbdJK6.OaqdYtE1pCd-aUB1._zuT40LsEqt66_5t03jBekuOgE-zgaaLiS41oDgcLQd-7rlub0hXtAsnfP3l-s65xE2D2-XGgZ7zQSbSHAUEFMJct9M-6fFDwW4d_qmWa-UNL6yyj2pXbchODdBHzTzRQHh55onMkOL-qB903SJ7o6-K5tdTXPsGPjR21TiXu9c-M6uK7tOOw9Mge7UGCDfsnTQItc9QK_eYPjqgqrWoilsc2UN3KacGLQlB_izSSG5843STU3sVuq9WRFzRXUAh-WR4RRt0auzjvbLtKr2a8gP6OAWbcfmD5p6ShigKW72ILmzjPrst7vvnPjwHxT1B3lChaOJhW9UfUkrvKFaccWfrJyDZDwA55r2eG8UEuM42iXw`
- `https://www.flowlu.com/site/assets/files/35204/asana.776x0.webp`
- `https://www.flowlu.com/site/assets/files/35204/asana.776x0.webp`

Anti-references — what we are explicitly **not** trying to look like:

- `https://itsp.hs-ansbach.de/wp-content/uploads/2018/06/Primuss.png`

## 2. Color palette

These are the colors the build milestones will reference. Once chosen, paste the hex values into `tailwind.config.js` so the rest of the team can use Tailwind utility classes (e.g. `bg-brand-primary`, `border-due-warning`).

### Brand

| Token | Hex | Where it shows up |
|---|---|---|
| `brand-primary` | `#725CFF` | Header, "+" button, focus rings |
| `brand-accent` | `#DBE2FF` | Highlights, hover states, links |
| `surface-page` | `#5C76FF` | Page background |
| `surface-card` | `#344085` | Card background |
| `text-primary` | `#FFFFFF` | Body text |
| `text-muted` | `#E0E0E0` | Captions, dates, counts |

### Task type (M6 `tag-style`)

| Token | Hex | When used |
|---|---|---|
| `type-feature` | `0000FF` | Cards tagged `feature` (accent stripe + icon) |
| `type-bug` | `B700FF` | Cards tagged `bug` (accent stripe + icon) |

### Due-date states (M8 `due-tint`)

| Token | Hex | When used |
|---|---|---|
| `due-safe` | `#FFB3B3` | More than 2 days out |
| `due-warning` | `#FF6E6E` | Less than 24 hours |
| `due-overdue` | `#3C4D4A` | Past due |
| `due-neutral` | `#C9FFF5` | Done (overrides date) |

## 3. Typography

| Role | Font | Why |
|---|---|---|
| Heading | `SST Condensed Bold` | `Strong, heavy, users will immediately know its the heading` |
| Body | `SST Light` | `Plain, simple, yet still nice to look at` |
| Monospace (tags, badges, code) | `SST Italic` | `keeps the font unified but still unique enough to know its supposed to be the font for monospace` |

Suggested sizes (override only if the design demands it):

- Page title: 24 px / semibold
- Section header: 16 px / semibold uppercase
- Card title: 14 px / medium
- Body: 14 px / regular
- Caption: 12 px / regular muted

## 4. Component principles

One short sentence per element. These set the tone for the build phase — Person A's modal and Person B's anchor board should both feel like they came from this doc.

- **Cards:** `square boxes, without hovering over them no borders with soft edges. When hovered, sharp edges with 1 px white border. No shadow`
- **Buttons:** `Gradient from top (hex color) to bottom (dark), generous padding and rounded-md`
- **Modal:** `Slide-up or fade-in from center with a full-page, semi-transparent blurred backdrop (backdrop-blur-md) replicating the PS5 game-hub overlay style.`
    - **Empty states:** `A single, minimalist vector icon centered with a subtle glowing halo background effect and a "Press [X] to create" action hint`
- **Drag affordance (if used):** `Horizontal d-pad style snapping or classic console card-swapping transition animations.`

## 5. Voice / microcopy

Three lines of microcopy that capture the tone of the product. Keep it short — these are the words a stressed user reads at 11pm.

| Where | Text |
|---|---|
| "+" button label | `Start New` |
| Empty column placeholder | `No items in your library. Select [Start New] to begin.` |
| Toast after "Copy as Prompt Context" | `Item added to clipboard` |
| Confirm-delete message | `Are you sure you want to delete this? This action cannot be undone.`|
| Handoff toast (M7 `task-owner`) | `Task assigned to {name}. Switch user to view.` |

## 6. Logo / wordmark

The tracker probably doesn't need a logo, but it does need a name and a wordmark style.

- **Product name:** `TaskStation` (match PRD §11 team identity)
- **Wordmark style:** `The product name in SST Condensed Bold, tracking-widest (heavy letter-spacing), all-caps, colored in text-primary, positioned at the top-left corner mimicking the PS5 Home/Explore header.`

## 7. Out of scope (this hackathon)

To keep design tight, the following are explicitly not part of `design-done`:

- A dark mode toggle. Pick one mode and ship it.
- Multiple themes. One brand, applied consistently.
- Animations beyond a 200 ms fade on toast notifications.
- A custom icon set. Use [Lucide icons](https://lucide.dev) via Tailwind classes if you need any.

---

*DESIGN.md version: hackathon-starter v1*
