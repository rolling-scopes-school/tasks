## Stage#3. React course

### Задачи курса

- Получить теоритическую базу, необходимую для работы с данной библиотекой, а так же для прохождения интервью
- Научиться применять теорию на практике. (В ходе курса вам будет предложено три задачи максимально приближенные к реальным проектам)

### После курса вы сможете
 - Разрабатывать SPA приложения, используя основные подходы React
 - Управлять потоком данных
 - Разделять работу с данными и представлением
 - Разрабатывать SSR приложения
 - Тестировать код

### Продолжительность обучения
6 недель. Программа требует 20-40 часов в неделю.

#### Communication
For any questions use Discord.

# Learning Plan

## React. 1 Lecture. Webpack 

* Overview
* Webpack Config
* Plugins
* Loaders
* Webpack Dev Server
* react app creation from scratch
* webpack configuration 

### Materials:
- [Lecture (video)](https://youtu.be/r1LbeeWzlhc)
- [Slides](https://drive.google.com/file/d/10psw_ZPJYyT0Kkz-1vqLhsDyuSZgxTOu/view?usp=sharing)
- [Code Examples](https://github.com/yuliaHope/webpac-react/branches)
- [Webpack screencast](https://www.youtube.com/playlist?list=PLOQDek48BpZFadeo_SJUNDggOKouA-nyM)
-  Articles: <br>
   <https://github.com/webpack-contrib/eslint-loader#failonerror><br>
   <https://codeburst.io/react-bake-from-scratch-or-box-javascript-version-smackdown-8a4d31f105d7>
    
## Task 1. Song Bird

https://github.com/rolling-scopes-school/tasks/blob/master/tasks/songbird.md

Form for questions: https://docs.google.com/spreadsheets/d/1CKx6BcS7DgFHPhdaB3IUoaNLUcGDlqHqus3wms5b1V4/edit#gid=0

## React. 2 Lecture. Components (Main)

### Before the lecture<br>
   [Hello, world](https://reactjs.org/docs/hello-world.html)<br>
   [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)<br>
   [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)<br>
   [Components and Props](https://reactjs.org/docs/components-and-props.html)<br>
   [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)<br>
   [Handling Events](https://reactjs.org/docs/handling-events.html)<br>
   [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)<br>
   [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

Form for questions: https://docs.google.com/document/d/1u86RSOAVfrSmiziIB3gXwI9yOw0Xty8QIvNG0GPB7FI/edit?usp=sharing

### 1 part
* What is react?
* Virtual DOM as approach to build fast UI components, Why V-DOM instead of direct DOM manipualtion
* JSX introduction
* the comoponent approach
* stateless, statefull components
* lifecycle hooks (React 16) and how they could be useful
* how to pass data to child components
* state. how to use it, how to change it (how react batches updates, async setState)
* how to handle DOM events
* how to create list, key prop
* conditional rendering

### 2 part (practice)
* hello world stateless component (basic syntax, jsx)
* statefull counter component (event handling, ```this``` binding problem)
* users list component (key prop explained)
* TBA

### Materials:
- [Lecture (video)](https://youtu.be/xo66V7lrinU)
- [Slides](https://slides.com/yuliaka71/react-856420)
- [Everything you want and may need to know about React](https://reactjs.org/)
- [Split app on components(examples)](https://drive.google.com/open?id=16kjgPAtIXpKKvpf4x_4-cbA_edWM01OT)

## React. 3 Lecture. Components(Advanced)

### Before the lecture<br>
   [Reconciliation](https://reactjs.org/docs/reconciliation.html)<br>
   [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)<br>
   [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)<br>
   [Context](https://reactjs.org/docs/context.html)<br>
   [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html)<br>
   [Portals](https://reactjs.org/docs/portals.html)<br>
   [Render Props](https://reactjs.org/docs/render-props.html)

Form for questions: https://docs.google.com/document/d/1UEm5-YvbDbyk75gvfeFjXS_PhP5cFQNzvztL99RR1_A/edit?usp=sharing

### 1 part
* Quick revison of Lecture #1
* Reconciliation algorithm
* propTypes and why it is important
* refs, uncontrolled components
* new context API
* advanced JSX (hoc, render prop, portal)
* lazy, suspense, memo
* performance optimisations

### 2 part (practice)
* todo app development
* add todo, remove todo
* mark todo as completed
* edit todo
* filter todos
* todos statistics (completed counter, uncompleted counter)
* TBA

### Materials:
- [Lecture (video)](https://youtu.be/WSK3MlZ-W4g)
- [Slides]()
- [Code Examples]()

## React. 4 Lecture. Hooks

### Before the lecture<br>
   [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)<br>
   [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)<br>
   [Using the State Hook](https://reactjs.org/docs/hooks-state.html)<br>
   [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)<br>
   [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)<br>
   [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

Form for questions: https://docs.google.com/document/d/1Uz08VF7V33UHGB7-o4AMI-CMzyI1B-IspWwP1msRfco/edit?usp=sharing

* The useState Hook
* useState vs. setState
* Complex State with useState
* The useEffect Hook
* useEffect Dependencies
* Cleaning up Effects
* The Context API & useContext Hook
* TBA

## Task 2. Data Grid

https://github.com/rolling-scopes-school/tasks/blob/master/tasks/datagrid.md

Form for questions: https://docs.google.com/document/d/1KRc6ahRG6UW8CpvJm8OTySNqS9shP2sxSyuVTOD-pJw/edit?usp=sharing

## React. 5 Lecture. Routing

### Before the lecture<br>
   [The philosophy of React Router](https://reacttraining.com/react-router/web/guides/philosophy)<br>

Form for questions: https://docs.google.com/document/d/1EYVxVrQMSYe7djvljAvcYtxtNvmFF6zL9_Psl85CeEc/edit?usp=sharing

### 1 part
* what is SPA
* React-router
* hash routing
* browser routing
* problems of SPAs
* TBA 
### 2 part (practice)
* react-router usage

### Materials:
- [Lecture (video)](https://youtu.be/YwOkBljMNpc)
- [Slides](https://andre-gl.github.io/talks-react-router/)
- Articles:<br>
    [The philosophy of React Router](https://reacttraining.com/react-router/web/guides/philosophy)<br>
    [Run the React Router v4 Examples with Create React App](https://egghead.io/lessons/react-run-the-react-router-v4-examples-with-create-react-app)

## React. 6 Lecture. Flux+Redux

### Before the lecture<br>
   [Redux motivation](https://redux.js.org/introduction/motivation)<br>
   [Redux core concepts](https://redux.js.org/introduction/core-concepts)<br>
   [Three Principles](https://redux.js.org/introduction/three-principles)<br>
   [Ecosystem](https://redux.js.org/introduction/ecosystem)

Form for questions: https://docs.google.com/document/d/1IZpVZTCegi7rmVXcZpp-rE_Z_UZbWjgrT06qszGFBaU/edit?usp=sharing

### 1 part
* the problem with app state managment in react
* the problem with passing props from root component to leaf components
* what is flux architecture
* what is redux
* immutability
* pure functions
* main redux principles (read-only state, reducer, actions)
* middlewares
* redux hooks

### 2 part (practice)
* redux implementation
* redux usage

### Materials:
- [Lecture (video)](https://youtu.be/s060_ZWWhVE)
- [Slides](https://slides.com/artemsinicyn/deck)
- [Code Examples](https://github.com/cardamo/redux-with-tests-example-4rss)
- Articles:<br>
   [MobX github readme](https://github.com/mobxjs/mobx)<br>
   [ReactN github readme](https://github.com/CharlesStover/reactn)<br>
   [use-global-hook github readme](https://github.com/andregardi/use-global-hook#readme)<br>
   [React Redux hooks documentation](https://react-redux.js.org/next/api/hooks)
    
## React. 7 Lecture. Grapgql

TBA

## React. 8 Lecture. SSR

Form for questions: https://docs.google.com/document/d/12i8sSn5K8qbDjYmOUYWY1kaii_60C4dm6gZ2Bt5RXho/edit?usp=sharing

### 1 part
* serverside rendering as a way to solve the main problems of SPAs
* why serverside rendering isn't silver bullet
* TBA

### 2 part (practice)
* ssr implementation (live)

### Materials:
- [Lecture (video)](https://youtu.be/4cGApe7DsGY)
- [Slides](https://slides.com/yuliaka71/deck)
- [Code Examples](https://github.com/yuliaHope/ssr-test-example)
- Articles:<br>
   [Why you should render React on the server side](https://blog.logrocket.com/why-you-should-render-react-on-the-server-side-a50507163b79/)<br>
   [ReactDOMServer documentation](https://ru.reactjs.org/docs/react-dom-server.html)<br>
   [Server-Side Rendering with React, Redux, and React-Router](https://itnext.io/server-side-rendering-with-react-redux-and-react-router-fa5b67d4965e)

## React. 9 Lecture. Testing

Form for questions: https://docs.google.com/document/d/1yl5g74K3Ohd407PRpG34LoQWGRXl_DSQzbzKmAzHewE/edit?usp=sharing

* Testing react apps
* jest
* enzyme
* TBA

### Materials:
- [Lecture (video)](https://youtu.be/gK5I7bq72Fw)
- [Code Examples](https://github.com/cardamo/redux-with-tests-example-4rss)

#### The course Trainers:
- Yuliya Haluza
- Artёm Sinicyn
- Alexey Farbotko
- Ander Rios
- Andre Gloukhmantchouk