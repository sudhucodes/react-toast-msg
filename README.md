# 🚀 react-toast-msg

A lightweight, zero-config, customizable React toast notification library — just plug and play.

## ✨ Features

- ⚡ Extremely fast and minimal
- 📦 Tree-shakable and zero external CSS
- 🧩 Works with both `import` and `require`
- 🎨 Easy to style with utility classes
- ✅ Works with React 18+

---

## 📦 Installation

```bash
npm install react-toast-msg
# or
yarn add react-toast-msg
````

---

## 🔧 Usage

### 1. Add the `ToastContainer` at the root of your app (once):

```jsx
import { ToastContainer, toast } from 'react-toast-msg';

function App() {
  return (
    <>
      <ToastContainer />
      <button onClick={() => toast('This is a toast!')}>Show Toast</button>
    </>
  );
}
```

---

## 🪄 Variants

```js
toast('Default toast');
toast.success('Success message!');
toast.error('Something went wrong!');
toast.info('Some useful info');
```

---

## 🎨 Customization (Coming Soon)

Style your toasts with Tailwind, classNames, or inline styles. Theme support and placement config coming in the next release.

---

## 🔌 API

| Function             | Description        |
| -------------------- | ------------------ |
| `toast(msg)`         | Show a basic toast |
| `toast.success(msg)` | Success variant    |
| `toast.error(msg)`   | Error variant      |
| `toast.info(msg)`    | Info variant       |

---

## 📚 License

MIT © [Sudhanshu Kumar](https://github.com/sudhucodes)

---

## 🌐 Links

* 📁 [GitHub Repo](https://github.com/sudhucodes/react-toast-msg)
* 🐞 [Issue Tracker](https://github.com/sudhucodes/react-toast-msg/issues)
* 📦 [npm Package](https://www.npmjs.com/package/react-toast-msg)