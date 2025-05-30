import React, { useEffect, useState } from 'react';
import { _register } from './index.js';
import './global.css';

export default function ToastContainer() {
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        _register((toast) => {
            setToasts((prev) => [...prev, toast]);
            setTimeout(() => {
                setToasts((prev) => prev.slice(1));
            }, 3000);
        });
    }, []);

    return (
        <div className="toast-container">
            {toasts.map((t, i) => (
                <div key={i} className={`toast ${t.type}`} >
                    {t.message}
                </div>
            ))}
        </div>
    );
}