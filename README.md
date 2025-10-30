# 🚀 react-toast-msg

![Version](https://img.shields.io/npm/v/react-toast-msg) ![License](https://img.shields.io/npm/l/react-toast-msg) ![Downloads](https://img.shields.io/npm/dt/react-toast-msg)

A lightweight, zero-config, customizable React toast notification library — just plug and play.

## Features

-   Extremely fast and minimal
-   Lightweight and modern
-   Easy to style with utility classes
-   Works with React 18+
-   Supports multiple variants (success, error and more)

## Installation

```bash
npm i react-toast-msg
```

## Usage

### 1. Add the `ToastContainer` at the root of your app (once):

```jsx
import { toast, ToastContainer } from 'react-toast-msg';
import 'react-toast-msg/dist/react-toast-msg.css';

export default function Example() {
    return (
        <>
            <ToastContainer />

            <button onClick={() => toast('This is a default toast')}>Show Default</button>
            <button onClick={() => toast.success('This is a success toast')}>Show Success</button>
            <button onClick={() => toast.error('This is an error toast')}>Show Error</button>
            <button onClick={() => toast.warning('This is a warning toast')}>Show Warning</button>
        </>
    );
}
```

> Note: Make sure to import the CSS file in your app.

## Available variants

```js
toast('Default message!');
toast.success('Success message!');
toast.error('Something went wrong!');
toast.warning('Something is not right!');

// More coming soon
```

## Contributing

react-toast-msg is an open-source project — and you can help make it better! Whether you want to:

-   Suggest new features
-   Improve performance or accessibility
-   Fix bugs
-   Refactor code or improve documentation

We’d love your input!

Start by checking out the [GitHub repo](https://github.com/sudhucodes/react-toast-msg) — issues, discussions, and PRs are welcome. Let's build something amazing together 🚀

## License

react-toast-msg is [MIT licensed](./LICENSE).

---

<p align="center"> <sub>© 2025 SudhuCodes — All rights reserved.</sub> </p>
