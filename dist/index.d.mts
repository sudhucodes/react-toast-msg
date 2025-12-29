import * as react_jsx_runtime from 'react/jsx-runtime';

type ToastType = 'success' | 'error' | 'warning' | 'default';
type ToastOptions = {
    type?: ToastType;
    duration?: number;
    closeButton?: boolean;
};
interface ToastContainerProps {
    autoClose?: number;
    closeButton?: boolean;
}

declare function ToastContainer({ autoClose, closeButton }: ToastContainerProps): react_jsx_runtime.JSX.Element;
declare function toast(message: string, options?: ToastOptions): void;
declare namespace toast {
    var success: (message: string, options?: ToastOptions) => void;
    var error: (message: string, options?: ToastOptions) => void;
    var warning: (message: string, options?: ToastOptions) => void;
}

export { ToastContainer, type ToastType, toast };
