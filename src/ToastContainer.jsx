import React, { useState, useEffect } from "react";

let showToastFn;

export function ToastContainer() {
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        showToastFn = (message, type = "default") => {
            const id = Date.now();
            setToasts((prev) => [...prev, { id, message, type }]);
            setTimeout(() => {
                setToasts((prev) => prev.filter((t) => t.id !== id));
            }, 3000);
        };
    }, []);

    return (
        <div className="toast-container">
            {toasts.map((t) => (
                <div key={t.id} className={`toast toast-${t.type || "default"}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.8006 9.99999C22.2573 12.2413 21.9318 14.5714 20.8785 16.6018C19.8251 18.6322 18.1075 20.24 16.0121 21.1573C13.9167 22.0746 11.5702 22.2458 9.36391 21.6424C7.15758 21.0389 5.2248 19.6974 3.88789 17.8414C2.55097 15.9854 1.89073 13.7272 2.01728 11.4434C2.14382 9.15952 3.04949 6.98808 4.58326 5.29116C6.11703 3.59424 8.18619 2.47442 10.4457 2.11844C12.7052 1.76247 15.0184 2.19185 16.9996 3.33499" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 11L12 14L22 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {t.message}
                </div>
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
toast.info = (message) => toast(message, "info");