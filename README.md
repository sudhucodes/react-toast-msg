# 🚀 react-toast-msg

![Version](https://img.shields.io/npm/v/react-toast-msg) ![License](https://img.shields.io/npm/l/react-toast-msg) ![Downloads](https://img.shields.io/npm/dt/react-toast-msg)

A lightweight, zero-config, customizable React toast notification library — just plug and play.

## Features

-   Extremely fast and minimal
-   Works with both `import` and `require`
-   Easy to style with utility classes
-   Works with React 18+
-   Supports multiple variants (success, error and more coming soon)

## Installation

```bash
npm install react-toast-msg
```

## Usage

### 1. Add the `ToastContainer` at the root of your app (once):

```jsx
import { ToastContainer, toast } from 'react-toast-msg';

function App() {
    return (
        <>
            <ToastContainer />
            <button onClick={() => toast.success('This is a success toast!')}>Show Success Toast</button>
            <button onClick={() => toast.error('This is an error toast!')}>Show Error Toast</button>
        </>
    );
}
```

## Variants

```js
toast.success('Success message!');
toast.error('Something went wrong!');

// More coming soon
```

## Customization (Coming Soon)

| Property   | Description                           | Default |
| ---------- | ------------------------------------- | ------- |
| `duration` | Duration of the toast in milliseconds | `3000`  |

## Contributing

> react-toast-msg is an open-source project — and you can help make it better! Whether you want to:

-   Suggest new features
-   Improve performance or accessibility
-   Fix bugs
-   Refactor code or improve documentation

We’d love your input!

Start by checking out the [GitHub repo](https://github.com/sudhucodes/react-toast-msg) — issues, discussions, and PRs are welcome. Let's build something amazing together 🚀

## Links

-   [GitHub Repo](https://github.com/sudhucodes/react-toast-msg)
-   [npm Package](https://www.npmjs.com/package/react-toast-msg)
