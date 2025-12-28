import { useEffect, useState } from 'react';
import { ToastProps } from '../types';
import { cn } from '../utilities/cn';

export function Toast({ message, type = 'default', icon, leaving, setToasts, id, closeButton }: ToastProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        requestAnimationFrame(() => setVisible(true));
    }, []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(() => {
            setToasts?.(prev => prev.filter(t => t.id !== id));
        }, 300);
    };

    return (
        <div
            className={cn(
                'pointer-events-auto relative flex min-w-62 max-w-80 items-center gap-1 rounded-lg border border-gray-200/70 bg-white py-3 text-zinc-800 transition-all duration-300 ease-out',
                visible && !leaving ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
                type === 'default' ? 'px-4' : 'px-3'
            )}
        >
            {icon}
            {message}
            {closeButton && (
                <button
                    onClick={handleClose}
                    className="absolute -top-2 -right-2 cursor-pointer rounded-full border border-gray-200/70 bg-white p-px text-zinc-500"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3">
                        <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                    </svg>
                </button>
            )}
        </div>
    );
}
