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
    position?: ToastPosition;
}

export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface ToastContainerProps {
    autoClose?: number;
    position?: ToastPosition;
}

export type ShowToastFn = (message: string, type?: ToastType, duration?: number) => void;

export interface IconProps {
    size?: number;
    strokeWidth?: number;
}
