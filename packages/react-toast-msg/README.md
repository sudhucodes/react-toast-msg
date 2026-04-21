![banner](https://rtm.sudhucodes.com/opengraph-image.png)

# React Toast MSG

Fast, flexible, developer-friendly React toast notifications with a clean black & white design.

## ✨ Features

- **Zero Config**: Works out of the box with sensible defaults.
- **Tailwind Driven**: Styled with Tailwind CSS for modern aesthetics.
- **Performance**: Built with tsup for high performance and small bundle size.
- **Customizable**: Easily customize duration, type, and icons.
- **Promise Support**: First-class support for `toast.promise`.

## Installation

> Before installing, make sure you have Tailwind CSS installed in your project.

```bash
npm install react-toast-msg
# or
pnpm add react-toast-msg
# or
yarn add react-toast-msg
```

## Usage

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

// Custom duration
toast('Hello World!', { duration: 5000 });

// Auto close false
toast('Hello World!', { autoClose: false });

// Promise toast
toast.promise(saveData(), {
    loading: 'Saving...',
    success: 'Saved successfully!',
    error: 'Failed to save.'
});
```

## Documentation

Learn more and explore examples at [rtm.sudhucodes.com](https://rtm.sudhucodes.com/docs?ref=github).
