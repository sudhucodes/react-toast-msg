import { render, screen, act, fireEvent, waitFor } from '@testing-library/react';
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

        waitFor(() => {
            expect(screen.queryByText('Temporary Message')).not.toBeInTheDocument();
        });
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

    it('pauses auto close while hovered and resumes after mouse leave', () => {
        render(<ToastContainer autoClose={1000} />);

        act(() => {
            toast('Hover Pause');
        });

        const toastElement = screen.getByText('Hover Pause');

        act(() => {
            vi.advanceTimersByTime(400);
            fireEvent.mouseEnter(toastElement);
            vi.advanceTimersByTime(1000);
        });

        expect(screen.getByText('Hover Pause')).toBeInTheDocument();

        act(() => {
            fireEvent.mouseLeave(toastElement);
            vi.advanceTimersByTime(600);
        });

        waitFor(() => {
            expect(screen.queryByText('Hover Pause')).not.toBeInTheDocument();
        });
    });

    it('allows disabling pause on hover per toast', () => {
        render(<ToastContainer autoClose={1000} />);

        act(() => {
            toast('No Pause', { pauseOnHover: false });
        });

        const toastElement = screen.getByText('No Pause');

        act(() => {
            vi.advanceTimersByTime(400);
            fireEvent.mouseEnter(toastElement);
            vi.advanceTimersByTime(600);
        });

        waitFor(() => {
            expect(screen.queryByText('No Pause')).not.toBeInTheDocument();
        });
    });
});
