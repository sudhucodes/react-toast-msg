# React Toast Msg

A fast, flexible, developer-friendly React toast notification library with a clean black & white design.

## Installation

```sh
pnpm add react-toast-msg
# or
yarn add react-toast-msg
# or
npm install react-toast-msg
```

## Usage

1. **Add the ToastContainer at the root of your app:**

```tsx
import { ToastContainer } from 'react-toast-msg';

function App() {
    return (
        <>
            <ToastContainer />
            {/* ...your app... */}
        </>
    );
}
```

2. **Show a toast from anywhere:**

```tsx
import { toast } from 'react-toast-msg';

toast('Hello world!');
toast.success('Success message');
toast.error('Error message');
toast.warning('Warning message');
toast.loading('Loading...');
```

3. **Promise toast:**

```tsx
import { toast } from 'react-toast-msg';

toast.promise(fetch('/api/data'), {
    loading: 'Loading...',
    success: 'Loaded!',
    error: 'Failed!'
});
```

## Customization

- Pass `autoClose`, `closeButton`, or custom `icon` as props to `ToastContainer` or individual toasts.
- Style with your own CSS or override the default styles.

---

For more, see the [full documentation](https://rtm.sudhucodes.com) or the [example app](../apps/test-app).
