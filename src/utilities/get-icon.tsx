import { ErrorIcon, SuccessIcon, WarningIcon } from '../components/icons';
import { ToastType } from '../types';

export function getToastIcon(type: ToastType) {
    switch (type) {
        case 'success':
            return <SuccessIcon />;
        case 'error':
            return <ErrorIcon />;
        case 'warning':
            return <WarningIcon />;

        default:
            return null;
    }
}
