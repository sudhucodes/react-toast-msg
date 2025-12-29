import { useState, useEffect } from 'react';
import { Toast } from './toast';
import { getToastIcon } from '../utilities/get-icon';
import {
    ToastContainerProps,
    ToastItem,
    ToastOptions,
    ToastType
} from '../types';
import { cn } from '../utilities/cn';

let showToastFn: ((message: string, options?: ToastOptions) => void) | null =
    null;

export function ToastContainer({
    autoClose = 3000,
    closeButton = false
}: ToastContainerProps) {
    const [toasts, setToasts] = useState<ToastItem[]>([]);

    useEffect(() => {
        showToastFn = (message, options = {}) => {
            const {
                type = 'default',
                duration,
                closeButton: toastCloseButton
            } = options;

            const id = Date.now();
            const closeTime = duration || autoClose;

            setToasts(prev => [
                ...prev,
                {
                    id,
                    message,
                    type,
                    leaving: false,
                    closeButton: toastCloseButton ?? closeButton
                }
            ]);

            setTimeout(() => {
                setToasts(prev =>
                    prev.map(t => (t.id === id ? { ...t, leaving: true } : t))
                );

                setTimeout(() => {
                    setToasts(prev => prev.filter(t => t.id !== id));
                }, 300);
            }, closeTime);
        };
    }, [autoClose, closeButton]);

    return (
        <div
            className={cn(
                'pointer-events-none fixed inset-0 z-9999 flex flex-col items-end justify-end gap-2 p-4 text-sm'
            )}
        >
            {toasts.map(t => (
                <Toast
                    key={t.id}
                    id={t.id}
                    message={t.message}
                    setToasts={setToasts}
                    type={t.type}
                    icon={getToastIcon(t.type)}
                    leaving={t.leaving}
                    closeButton={t.closeButton}
                />
            ))}
        </div>
    );
}

export function toast(message: string, options?: ToastOptions) {
    if (!showToastFn) return;
    showToastFn(message, options);
}

toast.success = (message: string, options?: ToastOptions) =>
    toast(message, { ...options, type: 'success' });

toast.error = (message: string, options?: ToastOptions) =>
    toast(message, { ...options, type: 'error' });

toast.warning = (message: string, options?: ToastOptions) =>
    toast(message, { ...options, type: 'warning' });
