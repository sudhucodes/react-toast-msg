import { ErrorIcon, SuccessIcon, WarningIcon } from "../components/icons";

export function getToastIcon(type) {
    switch (type) {
        case "success":
            return <SuccessIcon size={20} />;
        case "error":
            return <ErrorIcon size={20} />;
        case "warning":
            return <WarningIcon size={18} />;

        default:
            return null;
    }
}