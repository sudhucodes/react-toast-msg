import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ToastContainer, toast } from './toast-container';

describe('ToastContainer & toast()', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    it('renders the container', () => {
        render(<ToastContainer />);
    });

    it('adds a toast when toast() is called', async () => {
        render(<ToastContainer />);

        act(() => {
            toast('Hello World');
        });

        expect(screen.getByText('Hello World')).toBeInTheDocument();
    });

    it('applies success type when toast.success() is called', () => {
        render(<ToastContainer />);

        act(() => {
            toast.success('Success Message');
        });

        expect(screen.getByText('Success Message')).toBeInTheDocument();
    });

    it('removes toast after duration', () => {
        render(<ToastContainer autoClose={1000} />);

        act(() => {
            toast('Temporary Message');
        });

        expect(screen.getByText('Temporary Message')).toBeInTheDocument();

        act(() => {
            vi.advanceTimersByTime(1000);
        });

        act(() => {
            vi.advanceTimersByTime(300);
        });

        expect(screen.queryByText('Temporary Message')).not.toBeInTheDocument();
    });

    it('handles promise toasts', async () => {
        render(<ToastContainer />);

        const promise = new Promise((resolve) => setTimeout(() => resolve('Done'), 100));

        act(() => {
            toast.promise(promise, {
                loading: 'Loading...',
                success: 'Success!',
                error: 'Error!'
            });
        });

        expect(screen.getByText('Loading...')).toBeInTheDocument();

        await act(async () => {
            vi.advanceTimersByTime(100);
            await promise;
        });

        expect(screen.getByText('Success!')).toBeInTheDocument();
    });
});
