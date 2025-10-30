import React, { useState, useEffect } from "react";
import { getToastIcon } from "./utilities/get-icon";
import { Toast } from "./components/toast";

let showToastFn;

export function ToastContainer({
    autoClose = 3000,
}) {
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        showToastFn = (message, type = "default") => {
            const id = Date.now();
            setToasts((prev) => [...prev, { id, message, type, leaving: false }]);

            setTimeout(() => {
                setToasts((prev) =>
                    prev.map((t) => (t.id === id ? { ...t, leaving: true } : t))
                );
                setTimeout(() => {
                    setToasts((prev) => prev.filter((t) => t.id !== id));
                }, 400); // same as exit animation duration
            }, autoClose);
        };
    }, []);

    return (
        <div className="toast-container">
            {toasts.map((t) => (
                <Toast key={t.id} message={t.message} type={t.type} icon={getToastIcon(t.type)} leaving={t.leaving} />
            ))}
        </div>
    );
}

export function toast(message, type = "default") {
    showToastFn && showToastFn(message, type);
}

toast.success = (message) => toast(message, "success");
toast.error = (message) => toast(message, "error");
toast.warning = (message) => toast(message, "warning");