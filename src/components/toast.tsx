import { ToastProps } from '../types';

export function Toast({ message, type = 'default', icon, leaving }: ToastProps) {
    return (
        <div className={`toast toast-${type} ${leaving ? 'toast-exit' : 'toast-enter'}`}>
            {icon}
            {message}
        </div>
    );
}
