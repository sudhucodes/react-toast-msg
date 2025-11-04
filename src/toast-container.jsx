import React, { useState, useEffect } from "react";
import { getToastIcon } from "./utilities/get-icon";
import { Toast } from "./components/toast";

let showToastFn;

export function ToastContainer({ autoClose = 3000 }) {
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        showToastFn = (message, type = "default", duration) => {
            const id = Date.now();
            const closeTime = duration || autoClose; // if duration not passed then use default

            setToasts((prev) => [...prev, { id, message, type, leaving: false }]);

            setTimeout(() => {
                setToasts((prev) =>
                    prev.map((t) =>
                        t.id === id ? { ...t, leaving: true } : t
                    )
                );
                setTimeout(() => {
                    setToasts((prev) => prev.filter((t) => t.id !== id));
                }, 400);
            }, closeTime);
        };
    }, [autoClose]);

    return (
        <div className="toast-container">
            {toasts.map((t) => (
                <Toast
                    key={t.id}
                    message={t.message}
                    type={t.type}
                    icon={getToastIcon(t.type)}
                    leaving={t.leaving}
                />
            ))}
        </div>
    );
}

export function toast(message, type = "default", duration) {
    if (typeof type === "number") {
        // If second argument is number, treat it as duration
        showToastFn && showToastFn(message, "default", type);
    } else {
        showToastFn && showToastFn(message, type, duration);
    }
}

// Shortcut functions
toast.success = (message, duration) => toast(message, "success", duration);
toast.error = (message, duration) => toast(message, "error", duration);
toast.warning = (message, duration) => toast(message, "warning", duration);