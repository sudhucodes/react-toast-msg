export type ToastType = 'success' | 'error' | 'warning' | 'default' | 'loading';

export interface ToastItem {
    id: string | number;
    message: string;
    type: ToastType;
    closeButton?: boolean;
}

export type ToastOptions = {
    id?: string | number;
    type?: ToastType;
    duration?: number;
    closeButton?: boolean;
    autoClose?: boolean | number;
};

export interface ToastProps {
    id: string | number;
    message: string;
    type?: ToastType;
    icon?: React.ReactNode;
    setToasts?: React.Dispatch<React.SetStateAction<ToastItem[]>>;
    closeButton?: boolean;
}

export interface ToastContainerProps {
    autoClose?: boolean | number;
    closeButton?: boolean;
}

export type ShowToastFn = (
    message: string,
    type?: ToastType,
    duration?: number
) => string | number;

export interface IconProps {
    className?: string;
}
