import { ToastProps } from '../types';
import { cn } from '../utilities/cn';

export function Toast({ message, type = 'default', icon, leaving }: ToastProps) {
    const animationClass = leaving ? 'toast-exit' : 'toast-enter';

    return (
        <div className={cn(`toast toast-${type} ${animationClass}`)}>
            {icon}
            {message}
        </div>
    );
}
