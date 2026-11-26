# [React](https://github.com/rolling-scopes-school/tasks/tree/master/react) Portals 🌟

## Module Overview 📚

The "React Portals" module explores the concept of rendering child components outside their parent DOM hierarchy. Through this module, students will learn how to use React Portals to render content in different parts of the DOM tree, which is particularly useful for modal dialogs, tooltips, and other overlay components.

## Learning Objectives 🎯

Students will:

- Understand what React Portals are and their use cases
- Learn how to create and use Portals in React applications
- Master implementing modal dialogs using Portals
- Understand event bubbling through Portals
- Learn about Portal accessibility considerations
- Know how to manage Portal lifecycle and cleanup
- Understand how to handle state and context with Portals
- Learn best practices for implementing tooltips and popovers
- Master proper focus management in modal dialogs
- Understand how to handle Portal mounting points

## Approximate Module Completion Time ⏱️

- **5 hours**

## React 19 and Portals

### What's New with Portals?

React 19 maintains the same Portal API while introducing some performance improvements and better integration with Server Components. The `createPortal` function remains the primary way to create portals, with enhanced support for streaming and concurrent features.

### Example Usage

```jsx
import { createPortal } from "react-dom";

function Modal({ children, isOpen }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root"),
  );
}
```

## Theory 📖

Students are encouraged to explore the following resources:

1. **Understanding React Portals:**
   - [react.dev: Escape Hatches - Portals](https://react.dev/reference/react-dom/createPortal) - [20 minutes]
   - [article: Building a modal in React with React Portals](https://blog.logrocket.com/build-modal-with-react-portals/) - [11 minutes]
   - [video: React Portal In 10 Minutes](https://www.youtube.com/watch?v=LyLa7dU5tp8) - [12 minutes]

2. **Implementing Modal Dialogs:**
   - [article: Creating a Modal with React Portals](https://upmostly.com/tutorials/modal-components-react-custom-hooks) - [20 minutes]
   - [tutorial: Learn React Portals by example](https://blog.logrocket.com/learn-react-portals-example/) - [9 minutes]

3. **Portal Accessibility:**
   - [article: What are Portals in React, and How do you Make them Accessible](https://levelup.gitconnected.com/what-are-portals-in-react-and-how-do-you-make-them-accessible-ab2ad38d7734) - [3 minutes]
   - [WAI-ARIA: Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) - [20 minutes]

## Additional Resources 📘

Expand your knowledge with these additional materials:

- [library: react-portal](https://github.com/tajo/react-portal) - [20 minutes]

## Best Practices for Portal Usage

1. **Mount Points:**
   - Create dedicated mount points for different types of portals
   - Consider using multiple mount points for different z-index layers
   - Handle mount point creation and cleanup properly

2. **Accessibility:**
   - Manage focus correctly
   - Use proper ARIA attributes
   - Ensure keyboard navigation works
   - Handle escape key for modal dismissal

3. **Performance:**
   - Create portals only when needed
   - Clean up portals when unmounting
   - Use lazy loading for portal content
   - Consider using a portal pool for frequently used elements

4. **State Management:**
   - Keep portal state in the parent component
   - Use context when needed
   - Handle portal lifecycle properly
   - Manage portal animations correctly
