# docs/ — what to read, and when

Reference material for this task. When a decision comes up, read the relevant entry here (or the official
docs it links), then make your choice and record a one-line justification in `CHANGELOG.md`.

- **[`TASK.md`](./TASK.md)** — the assignment: what to build, the feature/points breakdown, and penalties.
  Read this first.
- **[`hooks.md`](./hooks.md)** — curated links to the official React hooks documentation.

## Decision → reading map

| When you're deciding…                                                          | Read                                                                                                                   |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| **State tool** for the saved-locations collection (`useState` vs `useReducer`) | `hooks.md` → _Basic Hooks_ (`useState`) and _Advanced Hooks_ (`useReducer`)                                            |
| **Data fetching & cleanup** (search + per-item refetch)                        | `hooks.md` → _Basic Hooks_ (`useEffect`)                                                                               |
| **Extracting a custom hook** (e.g. `useLocalStorage`)                          | `hooks.md` → _Custom Hooks_                                                                                            |
| **Error Boundary** design (where it sits, fallback, recovery)                  | [React — Error Boundary](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) |
| **Testing strategy** (what to test, how to mock the network)                   | [Vitest](https://vitest.dev/) · [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) |

> The feature requirements themselves live in `TASK.md`. This folder is for the **background reading** that
> helps you make the task's decisions yourself.
