import { ToastProps } from '@/types';
import { cn } from '@/utilities/cn';
import { motion } from 'framer-motion';
import { CloseIcon } from '@/components/icons';


/**
 * Individual Toast component that renders a single toast notification.
 * Handles the display, animation, and close functionality for one toast item.
 *
 * @param props - Properties defining the toast's content and behavior
 * @returns JSX element representing the toast notification
 */
export function Toast({
    message,
    type = 'default',
    icon,
    setToasts,
    id,
    closeButton
}: ToastProps) {

    const handleClose = () => {
        setToasts?.(prev => prev.filter(t => t.id !== id));
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{
                layout: { duration: 0.25 },
                opacity: { duration: 0.2 },
                y: { duration: 0.2 }
            }}
            className={cn(
                'pointer-events-auto relative flex max-w-80 min-w-62 items-center gap-1 rounded-lg border border-gray-200/70 bg-white py-3 text-sm text-zinc-800',
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
                    <CloseIcon />
                </button>
            )}
        </motion.div>
    );
}
