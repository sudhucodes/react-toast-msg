import { ToastItem } from '@/types';

export function removeToastById(
    toasts: ToastItem[],
    id: string | number
) {
    return toasts.filter(toast => toast.id !== id);
}
