import { IconProps } from '../types';

export const SuccessIcon = ({ size = 20, strokeWidth = 2 }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx={12} cy={12} r={10} />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

export const ErrorIcon = ({ size = 20, strokeWidth = 2 }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-circle-x-icon lucide-circle-x"
    >
        <circle cx={12} cy={12} r={10} />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
    </svg>
);

export const WarningIcon = ({ size = 20, strokeWidth = 2 }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-triangle-alert-icon lucide-triangle-alert"
    >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
    </svg>
);
