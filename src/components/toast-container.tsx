import { useState, useEffect } from 'react';
import { Toast } from './toast';
import { getToastIcon } from '../utilities/get-icon';
import { ToastContainerProps, ToastItem, ToastType } from '../types';
import { cn } from '../utilities/cn';

let showToastFn: ((message: string, type?: ToastType, duration?: number) => void) | null = null;

export function ToastContainer({ autoClose = 3000, closeButton = false }: ToastContainerProps) {
    const [toasts, setToasts] = useState<ToastItem[]>([]);

    useEffect(() => {
        showToastFn = (message, type = 'default', duration?: number) => {
            const id = Date.now();
            const closeTime = duration || autoClose;

            setToasts(prev => [...prev, { id, message, type, leaving: false }]);

            setTimeout(() => {
                setToasts(prev => prev.map(t => (t.id === id ? { ...t, leaving: true } : t)));

                setTimeout(() => {
                    setToasts(prev => prev.filter(t => t.id !== id));
                }, 300);
            }, closeTime);
        };
    }, [autoClose]);

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
                    closeButton={closeButton}
                />
            ))}
        </div>
    );
}

export function toast(message: string, type?: ToastType | number, duration?: number) {
    if (!showToastFn) return;

    if (typeof type === 'number') {
        showToastFn(message, 'default', type);
    } else {
        showToastFn(message, type, duration);
    }
}

toast.success = (message: string, duration?: number) => toast(message, 'success', duration);
toast.error = (message: string, duration?: number) => toast(message, 'error', duration);
toast.warning = (message: string, duration?: number) => toast(message, 'warning', duration);
