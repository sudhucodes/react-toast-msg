import React, { useEffect, useState } from 'react';
import { _register } from './index.js';

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
        <div style={{
            position: 'fixed',
            top: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            width: 'auto',
            maxWidth: '90vw',
        }}>
            {toasts.map((t, i) => (
                <div
                    key={i}
                    style={{
                        padding: '10px 20px',
                        borderRadius: 4,
                        color: '#000',
                        backgroundColor:
                            t.type === 'success' ? '#d4edda' :
                                t.type === 'error' ? '#f8d7da' :
                                    '#fff',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                        minWidth: 200,
                        maxWidth: 400,
                    }}
                >
                    {t.message}
                </div>
            ))}
        </div>
    );
}
