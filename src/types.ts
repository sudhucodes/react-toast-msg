export type ToastType = 'success' | 'error' | 'warning' | 'default';

export interface ToastItem {
    id: number;
    message: string;
    type: ToastType;
    leaving: boolean;
}

export interface ToastProps {
    message: string;
    type?: ToastType;
    icon?: React.ReactNode;
    leaving?: boolean;
}

export interface ToastContainerProps {
    autoClose?: number;
}

export type ShowToastFn = (message: string, type?: ToastType, duration?: number) => void;

export interface IconProps {
    size?: number;
    strokeWidth?: number;
}
