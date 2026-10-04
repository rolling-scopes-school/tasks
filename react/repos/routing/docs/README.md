# docs/ — what to read, and when

Reference material for this task. When a decision comes up, read the relevant entry here (or the official
docs it links), then make your choice and record a one-line justification in `CHANGELOG.md`.

- **[`TASK.md`](./TASK.md)** — the assignment: what to build, the feature/points breakdown, and penalties.
  Read this first.
- **[`router.md`](./router.md)** — curated links to the official React Router documentation.

## Decision → reading map

| When you're deciding…                                             | Read                                                                                                                   |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Router choice** (React Router vs TanStack Router)               | `router.md` → _Getting Started_ and _API Reference_                                                                    |
| **Data vs declarative mode** (if React Router)                    | `router.md` → _Getting Started_ and the data-router links                                                              |
| **URL schema** for pagination / selected detail / search          | `router.md` → _Basic Routing_ (URL values) and _Hooks_ (`useSearchParams`, `useParams`)                                |
| **Nested layout / `Outlet`**                                      | `router.md` → _Navigation and Outlet_                                                                                  |
| **Unit testing strategy** (what to test, how to mock the network) | [Vitest](https://vitest.dev/) · [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) |
| **E2E scope & structure** (which journeys, how to organize specs) | [Playwright](https://playwright.dev/docs/intro)                                                                        |

> The feature requirements themselves live in `TASK.md`. This folder is for the **background reading** that
> helps you make the task's decisions yourself.
