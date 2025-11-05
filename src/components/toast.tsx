import { ToastProps } from '../types';
import { cn } from '../utilities/cn';

export function Toast({ message, type = 'default', icon, leaving }: ToastProps) {
    return (
        <div className={cn(`toast toast-${type} ${leaving ? 'toast-exit' : 'toast-enter'}`)}>
            {icon}
            {message}
        </div>
    );
}
