import * as react_jsx_runtime from 'react/jsx-runtime';

type ToastType = 'success' | 'error' | 'warning' | 'default';
interface ToastContainerProps {
    autoClose?: number;
}

declare function ToastContainer({ autoClose }: ToastContainerProps): react_jsx_runtime.JSX.Element;
declare function toast(message: string, type?: ToastType | number, duration?: number): void;
declare namespace toast {
    var success: (message: string, duration?: number) => void;
    var error: (message: string, duration?: number) => void;
    var warning: (message: string, duration?: number) => void;
}

export { ToastContainer, type ToastType, toast };
