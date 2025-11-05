import { useState, useEffect } from 'react';
import { Toast } from './toast';
import { getToastIcon } from '../utilities/get-icon';
import { ToastContainerProps, ToastItem, ToastType } from '../types';
import { cn } from '../utilities/cn';

let showToastFn: ((message: string, type?: ToastType, duration?: number) => void) | null = null;

export function ToastContainer({ autoClose = 3000 }: ToastContainerProps) {
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
                }, 400);
            }, closeTime);
        };
    }, [autoClose]);

    return (
        <div className={cn('toast-container')}>
            {toasts.map(t => (
                <Toast key={t.id} message={t.message} type={t.type} icon={getToastIcon(t.type)} leaving={t.leaving} />
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
