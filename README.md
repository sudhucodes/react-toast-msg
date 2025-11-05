# React Toast MSG - (SudhuCodes)

A lightweight and customizable React toast notification library.

![Version](https://img.shields.io/npm/v/react-toast-msg)
![License](https://img.shields.io/npm/l/react-toast-msg)
![Downloads](https://img.shields.io/npm/dt/react-toast-msg)

---

![React Toast MSG](https://github.com/user-attachments/assets/c91fd623-a733-4634-88b7-2bb0f30366ff 'React Toast MSG')

## Features

| Feature                | Description                                  |
| ---------------------- | -------------------------------------------- |
| Lightweight and fast   | Minimal dependency and highly performant     |
| Zero configuration     | Works instantly with default settings        |
| Custom auto-close time | Set duration per toast dynamically           |
| Multiple toast types   | success, error, warning, default             |
| React 18+ support      | Fully compatible with React 18 and above     |
| Easy styling           | Customize with simple CSS or utility classes |

---

## Installation

```bash
npm i react-toast-msg
```

---

## Usage

### 1. Add `ToastContainer` at the root of your application:

```jsx
import { toast, ToastContainer } from 'react-toast-msg';

export default function Example() {
    return (
        <>
            <ToastContainer />

            <button onClick={() => toast('Default toast')}>Default</button>
            <button onClick={() => toast.success('Success toast')}>Success</button>
            <button onClick={() => toast.error('Error toast')}>Error</button>
            <button onClick={() => toast.warning('Warning toast')}>Warning</button>

            <button onClick={() => toast.success('Success toast', 5000)}>Success with duration</button>
        </>
    );
}
```

---

## Custom Auto-Close Duration

You can now define a custom timeout per toast.

| Usage Example                    | Description                          |
| -------------------------------- | ------------------------------------ |
| `toast('Message')`               | Default timeout                      |
| `toast('Message', 1000)`         | Closes after 1000ms (1 second)       |
| `toast.success('Saved', 5000)`   | Success toast closes after 5 seconds |
| `toast('Text', 'success', 2000)` | Type + duration together             |

> Note: Duration is in milliseconds and default value is 3000ms

### Example:

```jsx
<button onClick={() => toast('This will close in 1 second', 1000)}>
    Show 1s Toast
</button>

<button onClick={() => toast.success('Success - 5s', 5000)}>
    Show 5s Success Toast
</button>
```

---

## ToastContainer Props

| Prop      | Type   | Default | Description                                       |
| --------- | ------ | ------- | ------------------------------------------------- |
| autoClose | number | 3000    | Default close time in milliseconds for all toasts |

Usage:

```jsx
<ToastContainer autoClose={5000} /> // Default 5-second timeout
```

---

## Available Toast Variants

```js
toast('Default message');
toast.success('Success message');
toast.error('Error occurred');
toast.warning('Warning message');
```

---

## Contributing

Contributions are welcome. You can:

- Report issues
- Suggest features
- Submit pull requests
- Improve documentation or code quality

Repository: [https://github.com/sudhucodes/react-toast-msg](https://github.com/sudhucodes/react-toast-msg)

---

## License

react-toast-msg is [MIT licensed](./LICENSE).

---

<p align="center"> <sub>© 2025 SudhuCodes — All rights reserved.</sub> </p>
