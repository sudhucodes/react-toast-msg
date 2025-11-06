import { ToastProps } from '../types';
import { cn } from '../utilities/cn';

export function Toast({ message, type = 'default', icon, leaving, position }: ToastProps) {
    const animationType = leaving ? 'toast-exit' : 'toast-enter';

    return (
        <div className={cn(`toast toast-${type} ${animationType}-${position}`)}>
            {icon}
            {message}
        </div>
    );
}
