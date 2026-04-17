# How to use the `autoClose` Option

We recently added the `autoClose` feature so you have complete control over whether a toast disappears automatically or stays on the screen indefinitely.

## 1. Using it globally in the `<ToastContainer />`

If you want ALL of your toasts to stay on the screen indefinitely by default, you can pass `autoClose={false}` to the `ToastContainer`.

```tsx
import { ToastContainer } from 'react-toast-msg';

function App() {
  return (
    <>
      <YourAppComponents />
      {/* 
        This prevents all toasts from closing automatically. 
        It will also force the close button to show up on every toast!
      */}
      <ToastContainer autoClose={false} />
    </>
  );
}
```

## 2. Using it perfectly for a single Toast `toast()`

If your container normally auto-closes (e.g., after 3000ms), but you have ONE specific important message that the user MUST read and manually close, you can override it on that specific toast.

```tsx
import { toast } from 'react-toast-msg';

function handleSubmit() {
    // Standard toast (will auto-close based on container settings)
    toast.success("Saved successfully");

    // Important toast (will stay visible until user clicks the X button to close)
    toast.error("Critical server error! Please review.", {
        autoClose: false
    });
}
```

## How it works under the hood

1. **Auto Close Disable**: Passing `autoClose: false` bypasses the `setTimeout` that normally dismisses the toast.
2. **Close Button Override**: Because the toast won't hide automatically, the system **automatically injects** the Close (x) button on the toast when `autoClose` is `false`, ensuring your users never get permanently stuck with a toast blocking their screen!
