export type ToastType = 'success' | 'error' | 'warning' | 'default';

export interface ToastItem {
    id: number;
    message: string;
    type: ToastType;
    leaving: boolean;
    closeButton?: boolean;
}

export type ToastOptions = {
    type?: ToastType;
    duration?: number;
    closeButton?: boolean;
};

export interface ToastProps {
    id: number;
    message: string;
    type?: ToastType;
    icon?: React.ReactNode;
    leaving?: boolean;
    setToasts?: React.Dispatch<React.SetStateAction<ToastItem[]>>;
    closeButton?: boolean;
}

export interface ToastContainerProps {
    autoClose?: number;
    closeButton?: boolean;
}

export type ShowToastFn = (
    message: string,
    type?: ToastType,
    duration?: number
) => void;

export interface IconProps {
    className?: string;
}
