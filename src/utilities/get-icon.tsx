import { ErrorIcon, SuccessIcon, WarningIcon } from '../components/icons';
import { ToastType } from '../types';

export function getToastIcon(type: ToastType) {
    switch (type) {
        case 'success':
            return <SuccessIcon size={20} />;
        case 'error':
            return <ErrorIcon size={20} />;
        case 'warning':
            return <WarningIcon size={18} />;

        default:
            return null;
    }
}
