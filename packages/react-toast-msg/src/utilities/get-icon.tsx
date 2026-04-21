import { ErrorIcon, SuccessIcon, WarningIcon, LoadingIcon } from '@/components';
import { ToastType } from '@/types';

/**
 * Returns the appropriate icon component for a given toast type.
 * Maps toast types to their corresponding icon components.
 *
 * @param type - The type of toast notification
 * @returns The React icon component for the specified type, or null for 'default' type
 */
export function getToastIcon(type: ToastType) {
    switch (type) {
        case 'success':
            return <SuccessIcon />;
        case 'error':
            return <ErrorIcon />;
        case 'warning':
            return <WarningIcon />;
        case 'loading':
            return <LoadingIcon />;

        default:
            return null;
    }
}
