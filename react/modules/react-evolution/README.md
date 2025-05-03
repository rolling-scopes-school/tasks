# [React](https://github.com/rolling-scopes-school/tasks/tree/master/react) ~~Revolution~~ Evolution 🌟

React, also known as React.js or ReactJS, is an open-source JavaScript library that emerged from Facebook's internal projects. It was designed to help developers build fast, scalable, user-friendly interfaces for web applications with minimal coding. React uses a declarative paradigm that simplifies the creation of complex UIs while maintaining high performance and predictability.

## React's Core Philosophy

Before React, most UI libraries approached interface building through templates or with direct DOM manipulation. React introduced a radical paradigm shift with its core philosophy: **UI as a function of state**. This simple but powerful concept means that instead of manually manipulating the DOM, developers declare what the UI should look like for any given state, and React efficiently updates the DOM when state changes.

This declarative approach dramatically reduced the complexity of building interactive interfaces and made applications more predictable and easier to debug. React's one-way data flow, where data moves down through components and events bubble up, further reinforced this predictability.

The evolution of React is a testament to Facebook's vision and the collective efforts of the developer community worldwide. The adoption and contributions by other corporations further accelerated its growth and application in modern web development.

## The Story of React:

### Web Development Before React

In the early 2010s, the JavaScript landscape was dominated by libraries and frameworks like jQuery, Backbone.js, Knockout.js, and Angular.js. Each had their strengths, but also significant limitations:

- **jQuery** simplified DOM manipulation but offered no structure for building complex applications
- **Backbone.js** provided structure but left much of the implementation to developers
- **Angular.js** offered a comprehensive framework but with complex two-way binding and a steep learning curve
- **Knockout.js** introduced declarative bindings but lacked a comprehensive solution for large applications

Web applications were growing increasingly complex, and developers struggled with performance issues, especially in applications with frequent updates. DOM manipulation was expensive, and existing approaches often led to "spaghetti code" that was difficult to maintain as applications scaled.

### 2011:

The seeds of React took root in Facebook's dynamic ecosystem. **Facebook** had a massive user base to cater to, and its original JavaScript codebase wasn't scaling well to handle the swift updates required for the ever-growing Facebook newsfeed.

Facebook engineer **Jordan Walke** borrowed ideas from **XHP**, an HTML component PHP framework, and used them to create a JavaScript library enabling the construction of reusable UI components. This was the birth of React. This library played a transformational role in overcoming the performance bottlenecks of Facebook's News Feed.

The debut of React within Facebook's environments marked a grand shift towards component-based architecture, fostering better speed, scalability, and efficiency. Despite being initially used internally, the successful overhaul of Facebook's newsfeed set a promising stage for what would soon revolutionize web development.

### 2012:

In 2012, the Facebook team was still using and developing React internally, training its developers, and stress-testing the tool's scalability and performance within its projects.

The significant stride of that year was **implementing React into Instagram**. After Facebook acquired Instagram in 2012, they started using React in Instagram.com, giving Facebook a robust opportunity to further test and enhance React before its public release.

This implementation process into Instagram led to the establishment of critical React features like Real DOM components, Lifecycle methods, and state setting.

While there were no public releases of React in 2012, it was a pivotal year for its development and laid the groundwork for its subsequent open-sourcing.

### 2013:

Public release:
Versions: 0.3.0 (May 29, 2013)— 0.8.0 (December 19, 2013)

In a landmark move in May, Facebook, at JSConf US, decided to open-source React. This pivotal decision unlocked numerous possibilities, allowing developers and organizations globally to not just utilize React but also to actively contribute to its ecosystem. It created a vibrant, collaborative environment that was instrumental in the exponential growth and development of React in the subsequent years. Now, developers from around the world could leverage React's power, share their experience, find and fix bugs, suggest improvements, and propose new features. This openness central to the open-source software movement contributed greatly to the robustness and popularity of React.

#### Key Team Members

The early React team was small but highly influential in shaping the library's direction:

- **Jordan Walke** - Creator of React
- **Pete Hunt** - Early adopter who helped open-source React and authored many core features
- **Sebastian Markbåge** - Architect who joined early and later became a key figure in React's evolution
- **Paul O'Shannessy** - Core team member who helped shape React's build processes

These individuals, along with others who would join later (like Dan Abramov, Sophie Alpert, and Andrew Clark), formed the nucleus of React's technical leadership and community presence.

### 2014:

Versions: 0.9.0 (February 20, 2014)— 0.12.2 (December 18, 2014)

November of this year marked another significant milestone for React with the release of React 0.12.0. A major enhancement in this update was the inclusion of **JSX syntax**, which could now be used directly within JavaScript without requiring a separate preprocessor. Being a syntax extension for JavaScript, JSX allowed developers to write elements and components using a syntax that resembled HTML. This not only improved the readability and structure of the code but also created a more intuitive and effortless coding experience, enabling seamless component creation and more efficient development workflows in React.

### 2015:

Versions: 0.13.0 (March 10, 2015)— 0.14.5 (December 29, 2015)

**React Native** was announced at the React.js Conf in February. React Native is a mobile development framework that allows developers to leverage React and JavaScript-like methods for building mobile applications.

Alongside React's growth, a library called Redux was gaining popularity in managing complex state in JavaScript applications. **Redux**, created by **Dan Abramov** and **Andrew Clark**, uses patterns inspired by the Flux architecture—introduced by Facebook--and functional programming concepts, reducing the complexity of state mutation and application logic.

In June, at React Europe conference, Dan Abramov presented Redux for the first time, describing it as a predictable state container for JavaScript apps. Following this, Redux quickly became the go-to library to manage state in React applications due to its simplicity, small size and the introduction of a single global state for the whole application which not only made state mutations predictable but also enabled logging, hot-reloading and time-travel debugging.

Despite Redux not being core to React, it has influenced many patterns and practices in the React ecosystem and played a crucial role in community engagement and the growth of React itself.

### 2016:

Versions:

- 0.14.6 (January 6, 2016)
- 15.0.0 (April 7, 2016)
- 15.4.1 (November 22, 2016)

The year 2016 ushered in a pivotal transition for React with the launch of version 15.0 in April. Underneath the hood, this release entailed a sweeping overhaul of React's internal architecture, drastically improving its efficiency and performance.

One of the visible enhancements of this update was the strengthened **SVG support** within the JSX syntax. Now, developers could seamlessly use JSX to write SVG within their React components, enhancing the ease of working with graphics and visual content on the web.

While there was major internal overhauling, Facebook also made conscious efforts to ensure API stability, making the transition smooth for developers. Despite the sweeping changes under the hood, developers found little change in their regular workflows or the APIs they were accustomed to.

This significant update also addressed error handling, making it more robust and developer-friendly. This new error handling strategy gave developers better visibility into the internal working of their apps, leading to quicker debugging and more stable applications.

**React 15.0** thus represented the library's continuous advancement and commitment to stay abreast of modern web development needs and standards.

### 2017:

Versions: 15.4.2 (January 6, 2017)— 16.2.0 (November 28, 2017)

React's evolution continued in 2017 with a significant move in the form of adopting semantic versioning with the release of React 15.5.0. This version brought some notable changes, particularly new life-cycle hooks and improvements in error handling.

In March, Facebook introduced version 15.5.0, which started displaying deprecation warnings for libraries that were to be removed in version 16.0. This included `React.PropTypes`, `React.createClass`, and `react-addons`. Instead of using `React.createClass`, the JavaScript class syntax was introduced for creating components in React.

Also, the `React.PropTypes` was transferred to a separate `prop-types` library to allow other libraries to access PropTypes without having a React dependency.

The concept of `Error Boundaries` was also introduced in 2017 to enhance the way React handles JavaScript errors in components.

Lastly, React's **Fiber reconciler**, the new heart of React, a complete reimplementation, was rolled out as a part of React 16. This enabled new features like fragments, error boundaries, portals, and asynchronous rendering.

September saw the official release of React 16.0 (React Fiber), a complete rewrite of React, improving perceived responsiveness, refining the balance of how much work it can do vs. how responsive it can be.

#### The React Ecosystem Expansion

By 2017, React's ecosystem had grown significantly:

- **Create React App** had become the standard tool for bootstrapping new React applications, eliminating complex configuration
- **React DevTools** matured into an essential debugging companion for React developers
- **Storybook** emerged as a powerful tool for component development and documentation
- **Jest** became the preferred testing framework for React applications

Additionally, 2017 saw the first **React Europe** conference outside the US, highlighting React's growing international adoption. Companies across Europe, Asia, and other regions were increasingly adopting React as their frontend solution of choice.

### 2018:

Versions: 16.2.1 (August 1, 2018)— 16.7.0 (December 19, 2018)

In February, React made a monumental shift in how components could be written and managed with the release of version 16.8. It introduced an expressive **new feature - Hooks**.

Hooks were a response to the wide array of problems developers faced with classes. They were an addition to React that let developers use state and other imperative features like lifecycle methods, context, and refs, directly inside functional components.

For the first time, developers could use state in their components without putting them inside a class. Even more, developers could extract component logic into testable, reusable functions improving the organization and reusability of their components.

Hooks simplified the overall React mastery curve, offering more direct API functions with a smooth learning slope for beginners.

Through the implementation of hooks, there was a profound impact not only on the way applications were created but also how code was shared and reused among different components. The introduction of hooks marked a critical turning point in the React development journey, taking a giant leap towards functional programming within React ecosystem.

### 2019:

Versions: 16.8.0 (February 6, 2019)— 16.12.0 (November 14, 2019)

React continued its strides in 2019 with the release of React 16.9 in August, equipped with enriched capabilities and enhanced performance.

Enabling a more efficient debugging experience, React 16.9 came with improved support for JavaScript's built-in 'Performance.measure' function, which made profiling in React DevTools more precise and beneficial.

Additionally, it introduced 'async act()' for testing asynchronous state updates in components more conveniently—providing a more consistent testing environment.

Moreover, this update also deprecated some lifecycle methods (componentWillMount, componentWillReceiveProps, and componentWillUpdate), nudging developers towards safer alternatives like static getDerivedStateFromProps and getSnapshotBeforeUpdate.

2019 was significant because it left the door ajar for one of React's most anticipated features, concurrent mode, by introducing asynchronous rendering possibilities. Concurrent mode, although released experimentally, promised smoother visual updates by interrupting ongoing rendering tasks to accommodate high priority updates.

Thus, 2019 remarkably improved React's performance, debugging, and testing capabilities, giving developers a robust toolkit to build more refined applications.

### 2020:

Versions: 16.13.0 (February 26, 2020)— 17.0.1 (October 22, 2020)

React 17.0 was released in October, primarily serving as a "stepping stone" update that allowed applications to be updated incrementally.

In October, the team also announced the much-awaited arrival of Redux Toolkit as the official, opinionated way of setting up Redux - aiming to provide the best developer experience and simplifying much of Redux's "boilerplate" setup.

#### React Design System Ecosystem

By 2020, React had become the foundation for numerous popular component libraries and design systems:

- **Material-UI** (now MUI): A comprehensive implementation of Google's Material Design in React
- **Chakra UI**: A simple, modular and accessible component library
- **Ant Design**: An enterprise-class UI design language and React implementation
- **Tailwind CSS framework**: While not exclusively for React, Tailwind's utility-first approach gained massive popularity in React projects

These libraries accelerated React development by providing pre-built, customizable components that followed established design patterns.

#### Next.js and the SSR Evolution

While React itself is primarily a client-side library, frameworks built on top of React extended its capabilities significantly. Most notably, **Next.js** (created by Vercel) had emerged as the leading React framework, offering:

- Server-side rendering (SSR)
- Static site generation (SSG)
- File-based routing
- API routes
- Zero-configuration deployments

Next.js solved many of the SEO, performance, and developer experience challenges that were inherent to single-page applications. By 2020, it had become a critical part of the React ecosystem, with many large companies adopting it as their primary React framework.

### 2021:

Versions: 17.0.2 (March 22, 2021)

React version 17 mainly focused on making it easier to upgrade React itself. Unlike previous versions, React 17 did not introduce new developer-facing features; instead, it included changes that make future upgrades less risky and disruptive.

Some of the changes include:

- Gradual upgrades allowing React to co-exist with other versions in a single page
- Event delegation changes ensuring no event handlers are attached to the document
- Effect cleanup timing changes
- Consistent error handling
- New JSX transform helping reduce bundle size

### 2022:

Versions: 18.0.0 (March 29, 2022)— 18.2.0 (June 14, 2022)

React 18 introduced several significant features and updates designed to improve the user interface:

- Automatic batching, which optimizes the process of multiple state updates, reducing the number of re-renders and improving performance
- A new Root API that supports concurrent rendering and enhanced Suspense capabilities
- More efficient server components, which can render data directly into HTML for better performance
- Enhanced handling of interruptions during rendering to ensure priority actions like user interactions are not stalled by ongoing rendering work

Due to fundamental changes in the way React performs, upgrading applications to React 18 requires careful planning. React 18 also introduced a community-driven approach for testing and getting feedback on new features before stable release.

### 2024:

Versions: 19.0.0 (December 05, 2024)
[What's new in React 19](https://react.dev/blog/2024/12/05/react-19#whats-new-in-react-19)

React 19 release brings a host of groundbreaking features that significantly enhance the development experience and application performance:

1. **Experimental React Compiler**:
   This new compiler transforms React code into optimized JavaScript, offering substantial performance gains. It autonomously manages component rendering for UI state changes, eliminating the need for manual state and UI updates. The compiler also optimizes components as needed, reducing dependency on hooks like `useMemo`, `memo` APIs, and `useCallback`.

   Key benefits:

   - Improved error reporting in `react-dom`
   - Seamless rendering of async scripts anywhere in a component tree
   - Native rendering of document metadata tags in components
   - Better APIs for loading and preloading browser resources

2. **Server Actions**:
   Server actions streamline data mutations and state updates in React applications by bridging the gap between client and server seamlessly. This enhancement enables developers to automatically handle pending states, error management, optimistic updates, and sequential requests.

   Key benefits:

   - Client components can call asynchronous functions
   - Built-in error handling
   - Immediate user feedback during data submission
   - Simplified form handling through new props like `action` and `formAction`

3. **React Server Components (RSCs)**:
   RSCs allow server-side rendering of UI components, separate from client-side applications or traditional SSR. This approach significantly improves initial page load times, especially for complex UIs. RSCs can be executed at build time or for each request, offering flexibility.

   Key benefits:

   - Faster page load time and smoother interactions
   - Runtime flexibility at build time and for each request
   - Improved app performance

4. **New Hooks: `useFormStatus`, `useActionState`, `useOptimistic`**:
   React 19 introduces three prominent hooks that transform how React developers handle forms:

   - `useActionState`: Simplifies state management within Actions, automatically tracks pending states, and supports action composition.

   - `useFormStatus`: Provides direct access to parent form information within child components without excessive prop drilling.

   - `useOptimistic`: Facilitates immediate UI updates during asynchronous data mutations, enhancing perceived responsiveness.

5. **New API: `use`**:
   React 19 introduces an experimental API called `use`, designed to read resource values (like Promises or context) directly within render functions, leading to more concise code for asynchronous data fetching and state management.

## React's Influence on the Frontend Ecosystem

React's approach to UI development has had far-reaching impacts beyond just its own ecosystem:

### Inspired Frameworks and Libraries

- **Vue.js** borrowed React's component-based architecture but with a template-based approach
- **Svelte** took React's component model but moved the work to compile-time instead of runtime
- **Solid.js** embraced React's JSX and component model while eliminating the virtual DOM
- **Preact** offered a lightweight alternative with near-identical API

React pioneered concepts that are now standard across modern frontend development:

- Component-based architecture
- Virtual DOM (or similar reconciliation strategies)
- Unidirectional data flow
- JSX or template compilation to JavaScript
- State management patterns

### React Adoption Metrics

React's growth has been remarkable:

- **GitHub Stars**: From 50,000 in 2015 to 235,000 by 2025
- **npm Downloads**: Reached billions of downloads per year
- **Job Market**: Consistently one of the most in-demand frontend skills
- **Company Adoption**: Used by thousands of companies including Facebook/Meta, Netflix, Airbnb, Discord, and Twitter/X

## Links:

- React [changelog](https://github.com/facebook/react/blob/main/CHANGELOG.md)
- React Labs: [What We've Been Working On – February 2024](https://react.dev/blog/2024/02/15/react-labs-what-we-have-been-working-on-february-2024)
- [React v17.0](https://legacy.reactjs.org/blog/2020/10/20/react-v17.html)
- A Comprehensive Guide to the Latest Features and Updates: [React v18.0](https://code.pieces.app/blog/react-18-a-comprehensive-guide-to-the-latest-features-and-updates)
- [React Conference Presentations](https://reactjs.org/community/conferences.html)
