import React, { useEffect, useState } from 'react';
import { _register } from './index.js';
import './global.css';

export default function ToastContainer() {
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        _register((toast) => {
            const newToast = { ...toast, id: Date.now() + Math.random() };
            setToasts((prev) => [newToast, ...prev]);

            setTimeout(() => {
                setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
            }, 3000);
        });
    }, []);

    return (
        <div className="toast-container">
            {toasts.map((t) => (
                <div key={t.id} className={`toast toast-${t.type}`}>
                    <div className="toast-content">
                        <svg className="toast-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd" />
                        </svg>
                        <p>{t.message}</p>
                    </div>
                    <button
                        className="toast-close"
                        aria-label="Close"
                        onClick={() => setToasts((prev) => prev.filter((x) => x.id !== t.id))}
                    >
                        <svg className="close-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                    </button>
                </div>
            ))}
        </div>
    );
}