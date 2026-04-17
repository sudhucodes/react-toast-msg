import { useState, useEffect } from 'react';
import { Toast } from '../toast';
import { getToastIcon } from '../../utilities/get-icon';
import {
    ToastContainerProps,
    ToastItem,
    ToastOptions,
    ToastType
} from '../../types';
import { cn } from '../../utilities/cn';
import { AnimatePresence } from 'framer-motion';

let showToastFn: ((message: string, options?: ToastOptions) => string | number) | null =
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
                closeButton: toastCloseButton,
                autoClose: toastAutoClose,
                id: customId
            } = options;

            const id = customId ?? Date.now();
            
            const resolvedAutoClose = toastAutoClose !== undefined ? toastAutoClose : autoClose;
            const isAutoCloseDisabled = resolvedAutoClose === false;
            const finalCloseButton = isAutoCloseDisabled ? true : (toastCloseButton ?? closeButton);

            setToasts(prev => {
                const existing = prev.find(t => t.id === id);
                if (existing) {
                    return prev.map((t: ToastItem) =>
                        t.id === id ? {
                            ...t,
                            message,
                            type,
                            closeButton: finalCloseButton
                        } : t
                    );
                }
                return [
                    ...prev,
                    {
                        id,
                        message,
                        type,
                        closeButton: finalCloseButton
                    }
                ];
            });

            if (type !== 'loading' && !isAutoCloseDisabled) {
                const closeTime = duration || (typeof resolvedAutoClose === 'number' ? resolvedAutoClose : 3000);
                setTimeout(() => {
                    setToasts(prev => prev.filter(t => t.id !== id));
                }, closeTime);
            }
            return id;
        };
    }, [autoClose, closeButton]);

    return (
        <div
            className={cn(
                'pointer-events-none fixed inset-0 z-9999 flex flex-col items-end justify-end gap-2 p-4 text-sm'
            )}
        >
            <AnimatePresence initial={false}>
                {toasts.map(t => (
                    <Toast
                        key={t.id}
                        id={t.id}
                        message={t.message}
                        setToasts={setToasts}
                        type={t.type}
                        icon={getToastIcon(t.type)}
                        closeButton={t.closeButton}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}

export function toast(message: string, options?: ToastOptions) {
    if (!showToastFn) return;
    return showToastFn(message, options);
}

toast.success = (message: string, options?: ToastOptions) =>
    toast(message, { ...options, type: 'success' });

toast.error = (message: string, options?: ToastOptions) =>
    toast(message, { ...options, type: 'error' });

toast.warning = (message: string, options?: ToastOptions) =>
    toast(message, { ...options, type: 'warning' });

toast.loading = (message: string, options?: ToastOptions) =>
    toast(message, { ...options, type: 'loading' });

toast.promise = <T,>(
    promise: Promise<T>,
    data: {
        loading: string;
        success: string | ((data: T) => string);
        error: string | ((err: unknown) => string);
    },
    options?: ToastOptions
) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2);
    toast(data.loading, { ...options, type: 'loading', id, duration: Infinity });

    promise
        .then(res => {
            const msg = typeof data.success === 'function' ? data.success(res) : data.success;
            toast(msg, { ...options, type: 'success', id });
        })
        .catch(err => {
            const msg = typeof data.error === 'function' ? data.error(err) : data.error;
            toast(msg, { ...options, type: 'error', id });
        });

    return promise;
};
