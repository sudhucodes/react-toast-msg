'use client';

import Navbar from '@/components/navbar';
import { CheckIcon, CopyIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toast-msg';

export default function Page() {
    const [ToastContainerConfig, setToastContainerConfig] = useState({
        autoClose: 5000,
        closeButton: true,
    });
    const [copy, setCopy] = useState<boolean>(false);
    const messages = {
        success: 'Success! Everything worked.',
        error: 'Error! Something went wrong.',
        warning: 'Warning - Something went wrong.',
        default: 'Hello! This is a default toast.'
    };

    const showToast = (type: 'success' | 'error' | 'info' | 'default') => {
        if (type === 'success') {
            toast.success(messages.success);
        } else if (type === 'error') {
            toast.error(messages.error);
        } else if (type === 'info') {
            toast.warning(messages.warning);
        } else {
            toast(messages.default);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText('npm install react-toast-msg');
        toast.success('Copied to clipboard!');
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 3000);
    };

    const fakeApiCall = () => {
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.3;

                success
                    ? resolve('Data loaded successfully!')
                    : reject('Something failed!');
            }, 2000);
        });
    };

    const showPromiseToast = () => {
        toast.promise(fakeApiCall(), {
            loading: 'Fetching data...',
            success: 'Data loaded successfully!',
            error: 'Something went wrong!',
        });
    };
    return (
        <>
            <Navbar />
            <ToastContainer {...ToastContainerConfig} />
            <main className="mx-auto flex min-h-svh max-w-2xl flex-col items-center justify-center px-4 text-sm/6">
                <div className="mb-8 mt-10 flex flex-col items-center gap-6 md:gap-10">
                    <Image src="/assets/logo.svg" alt="rtm" width={91} height={28} className="h-11.5 w-auto" />
                </div>

                <p className="mt-2 max-w-xl pb-8 text-center text-base text-slate-500">
                    Explore a simple and user-friendly demonstration of the{' '}
                    <a
                        className="text-blue-500 underline"
                        href="https://github.com/sudhucodes/react-toast-msg"
                    >
                        react-toast-msg
                    </a>{' '}
                    library, designed to display customizable notification messages.
                </p>

                <h3 className="mt-8 text-2xl font-bold">Toast Configuration</h3>

                <div className='flex items-center pb-10 gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="autoClose">Auto Close</label>
                        <select value={ToastContainerConfig.autoClose} onChange={(e) => setToastContainerConfig({ ...ToastContainerConfig, autoClose: Number(e.target.value) })} id="autoClose" className='border border-gray-200 rounded-md px-2 py-1'>
                            <option value="1000">1 second</option>
                            <option value="2000">2 seconds</option>
                            <option value="3000">3 seconds</option>
                            <option value="4000">4 seconds</option>
                            <option value="5000">5 seconds</option>
                            <option value="6000">6 seconds</option>
                            <option value="7000">7 seconds</option>
                            <option value="8000">8 seconds</option>
                            <option value="9000">9 seconds</option>
                            <option value="10000">10 seconds</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="closeButton">Close Button</label>
                        <select
                            id="closeButton"
                            value={ToastContainerConfig.closeButton ? 'true' : 'false'}
                            onChange={(e) =>
                                setToastContainerConfig({
                                    ...ToastContainerConfig,
                                    closeButton: e.target.value === 'true',
                                })
                            }
                            className='border border-gray-200 rounded-md px-2 py-1'
                        >
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <button
                        onClick={() => showToast('success')}
                        className="rounded-md border border-gray-200 bg-gray-50 px-5 py-2 text-sm hover:bg-gray-200/80 active:scale-95 transition-all duration-300 font-medium text-gray-600"
                    >
                        Success
                    </button>
                    <button
                        onClick={() => showToast('error')}
                        className="rounded-md border border-gray-200 bg-gray-50 px-5 py-2 text-sm hover:bg-gray-200/80 active:scale-95 transition-all duration-300 font-medium text-gray-600"
                    >
                        Error
                    </button>
                    <button
                        onClick={() => showToast('info')}
                        className="rounded-md border border-gray-200 bg-gray-50 px-5 py-2 text-sm hover:bg-gray-200/80 active:scale-95 transition-all duration-300 font-medium text-gray-600"
                    >
                        Info
                    </button>
                    <button
                        onClick={() => showToast('default')}
                        className="rounded-md border border-gray-200 bg-gray-50 px-5 py-2 text-sm hover:bg-gray-200/80 active:scale-95 transition-all duration-300 font-medium text-gray-600"
                    >
                        Default
                    </button>
                    <button
                        onClick={showPromiseToast}
                        className="rounded-md border border-gray-200 bg-gray-50 px-5 py-2 text-sm hover:bg-gray-200/80 active:scale-95 transition-all duration-300 font-medium text-gray-600"
                    >
                        Promise (Loader)
                    </button>
                    <button
                        onClick={() => toast.error("Critical server error! Please review.", {
                            autoClose: false
                        })}
                        className="rounded-md border border-gray-200 bg-gray-50 px-5 py-2 text-sm hover:bg-gray-200/80 active:scale-95 transition-all duration-300 font-medium text-gray-600"
                    >
                        Auto Close False
                    </button>
                </div>
                <div className="mt-10 flex items-center gap-3 rounded-md bg-gray-100 px-4 py-3 font-mono">
                    <span>npm install react-toast-msg</span>
                    <button onClick={handleCopy} title="Click to copy!">
                        {copy ? (
                            <CheckIcon className="size-4" />
                        ) : (
                            <CopyIcon className="size-4" />
                        )}
                    </button>
                </div>
            </main>
        </>
    );
}
