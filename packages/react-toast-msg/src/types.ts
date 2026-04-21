/**
 * Represents the different types of toast notifications available.
 * Each type corresponds to a specific visual style and semantic meaning.
 */
export type ToastType = 'success' | 'error' | 'warning' | 'default' | 'loading';

/**
 * Represents a single toast notification item in the toast container.
 * Contains all the necessary information to display and manage a toast.
 */
export interface ToastItem {
    /** Unique identifier for the toast, used for tracking and removal */
    id: string | number;
    /** The message text to display in the toast */
    message: string;
    /** The type of toast, determining its visual style and icon */
    type: ToastType;
    /** Whether to show a close button on the toast (optional, defaults to container setting) */
    closeButton?: boolean;
}

/**
 * Configuration options for creating a new toast notification.
 * All properties are optional and will use default values if not provided.
 */
export type ToastOptions = {
    /** Custom ID for the toast. If not provided, a unique ID will be generated */
    id?: string | number;
    /** The type of toast to display */
    type?: ToastType;
    /** Duration in milliseconds before the toast auto-closes. Set to 0 or false to disable auto-close */
    duration?: number;
    /** Whether to show a close button on this specific toast */
    closeButton?: boolean;
    /** Whether the toast should auto-close. Can be a boolean or a duration in milliseconds */
    autoClose?: boolean | number;
};

/**
 * Props passed to the individual Toast component.
 * Defines how a single toast notification is rendered and behaves.
 */
export interface ToastProps {
    /** Unique identifier for the toast */
    id: string | number;
    /** The message text to display */
    message: string;
    /** The type of toast, affecting its styling and default icon */
    type?: ToastType;
    /** Custom icon to display instead of the default type-based icon */
    icon?: React.ReactNode;
    /** Function to update the toasts array in the parent container */
    setToasts?: React.Dispatch<React.SetStateAction<ToastItem[]>>;
    /** Whether to show a close button on this toast */
    closeButton?: boolean;
}

/**
 * Props for the ToastContainer component that manages multiple toasts.
 * Controls global behavior and appearance of all toasts.
 */
export interface ToastContainerProps {
    /** Global auto-close setting. Can be a boolean to enable/disable or a number for duration in milliseconds */
    autoClose?: boolean | number;
    /** Global close button setting. Determines if close buttons are shown by default on all toasts */
    closeButton?: boolean;
}

/**
 * Function signature for the showToast function used to create new toasts.
 * Returns the ID of the created toast for potential future reference.
 */
export type ShowToastFn = (
    /** The message text to display in the toast */
    message: string,
    /** The type of toast to create (optional, defaults to 'default') */
    type?: ToastType,
    /** Duration in milliseconds before auto-close (optional, uses container default) */
    duration?: number
) => string | number;

/**
 * Props for icon components used within toasts.
 * Provides styling flexibility for custom icons.
 */
export interface IconProps {
    /** CSS class name for styling the icon */
    className?: string;
}
