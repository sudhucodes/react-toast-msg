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

/**
 * ToastContainer component that manages and displays multiple toast notifications.
 * This component should be rendered once in your app, typically at the root level.
 * It provides the context for showing toasts via the toast() function.
 *
 * @param props - Configuration options for the toast container
 * @returns JSX element containing the toast container
 */
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

/**
 * Main toast function for displaying notifications.
 * Shows a toast message with the specified options.
 *
 * @param message - The message text to display in the toast
 * @param options - Optional configuration for the toast
 * @returns The unique ID of the created toast
 */
export function toast(message: string, options?: ToastOptions) {
    if (!showToastFn) return;
    return showToastFn(message, options);
}

/**
 * Shows a success toast notification.
 *
 * @param message - The message text to display
 * @param options - Optional configuration (type will be overridden to 'success')
 * @returns The unique ID of the created toast
 */
toast.success = (message: string, options?: ToastOptions) =>
    toast(message, { ...options, type: 'success' });

/**
 * Shows an error toast notification.
 *
 * @param message - The message text to display
 * @param options - Optional configuration (type will be overridden to 'error')
 * @returns The unique ID of the created toast
 */
toast.error = (message: string, options?: ToastOptions) =>
    toast(message, { ...options, type: 'error' });

/**
 * Shows a warning toast notification.
 *
 * @param message - The message text to display
 * @param options - Optional configuration (type will be overridden to 'warning')
 * @returns The unique ID of the created toast
 */
toast.warning = (message: string, options?: ToastOptions) =>
    toast(message, { ...options, type: 'warning' });

/**
 * Shows a loading toast notification.
 * Loading toasts do not auto-close by default.
 *
 * @param message - The message text to display
 * @param options - Optional configuration (type will be overridden to 'loading')
 * @returns The unique ID of the created toast
 */
toast.loading = (message: string, options?: ToastOptions) =>
    toast(message, { ...options, type: 'loading' });

/**
 * Shows a toast that tracks the state of a Promise.
 * Displays loading, success, or error messages based on the promise outcome.
 *
 * @template T - The type of the resolved promise value
 * @param promise - The promise to track
 * @param data - Object containing messages for different states
 * @param data.loading - Message to show while the promise is pending
 * @param data.success - Message or function to show on success
 * @param data.error - Message or function to show on error
 * @param options - Optional configuration for the toasts
 * @returns The original promise
 */
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
