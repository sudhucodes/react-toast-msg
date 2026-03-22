![banner](https://rtm.sudhucodes.com/opengraph-image.png)

# React Toast MSG

A lightweight, customizable, and high-performance React toast notification library with zero-config and fast setup.

![Version](https://img.shields.io/npm/v/react-toast-msg)
![License](https://img.shields.io/npm/l/react-toast-msg)
![Downloads](https://img.shields.io/npm/dt/react-toast-msg)

## ✨ Features

- **🚀 Zero Config**: Works out of the box with sensible defaults.
- **🎨 Tailwind Driven**: Styled with Tailwind CSS for modern aesthetics.
- **⚡ Performance**: Built with tsup for high performance and small bundle size.
- **🔧 Customizable**: Easily customize duration, type, and icons.
- **🧩 Promise Support**: First-class support for `toast.promise`.

## 📦 Installation

```bash
npm install react-toast-msg
# or
pnpm add react-toast-msg
# or
yarn add react-toast-msg
```

## 🛠️ Usage

1. **Add the ToastContainer** to the root of your application:

```tsx
import { ToastContainer } from 'react-toast-msg';
import 'react-toast-msg/style.css';

function App() {
  return (
    <>
      <YourApp />
      <ToastContainer />
    </>
  );
}
```

2. **Trigger toasts** from anywhere:

```tsx
import { toast } from 'react-toast-msg';

// Basic toast
toast('Hello World!');

// Typed toasts
toast.success('Your changes have been saved.');
toast.error('An error occurred. Please try again.');
toast.warning('Check your internet connection.');
toast.loading('Saving results...');

// Promise toast
toast.promise(saveData(), {
  loading: 'Saving...',
  success: 'Saved successfully!',
  error: 'Failed to save.'
});
```

## 📄 Documentation

Learn more and explore examples at [rtm.sudhucodes.com](https://rtm.sudhucodes.com/docs).

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## 📜 License

This project is licensed under the [MIT License](LICENSE.md).
