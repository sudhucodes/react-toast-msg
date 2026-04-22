import { render, screen, act, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Toast } from './toast';

describe('Toast Component', () => {
    it('renders the message correctly', () => {
        render(
            <Toast 
                id={1} 
                message="Test Message" 
                type="default" 
                setToasts={vi.fn()} 
            />
        );
        expect(screen.getByText('Test Message')).toBeInTheDocument();
    });

    it('shows the close button when closeButton prop is true', () => {
        render(
            <Toast 
                id={1} 
                message="Test Message" 
                closeButton={true} 
                setToasts={vi.fn()} 
            />
        );
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('calls setToasts when close button is clicked', () => {
        const setToasts = vi.fn();
        render(
            <Toast 
                id={1} 
                message="Test Message" 
                closeButton={true} 
                setToasts={setToasts} 
            />
        );
        
        const closeButton = screen.getByRole('button');
        act(() => {
            closeButton.click();
        });

        expect(setToasts).toHaveBeenCalled();
    });

    it('pauses auto close while hovered and resumes on leave', () => {
        vi.useFakeTimers();
        const setToasts = vi.fn();

        render(
            <Toast
                id={1}
                message="Hover me"
                autoCloseDuration={1000}
                pauseOnHover={true}
                setToasts={setToasts}
            />
        );

        const toast = screen.getByText('Hover me');

        act(() => {
            vi.advanceTimersByTime(400);
            fireEvent.mouseEnter(toast);
            vi.advanceTimersByTime(1000);
        });

        expect(setToasts).not.toHaveBeenCalled();

        act(() => {
            fireEvent.mouseLeave(toast);
            vi.advanceTimersByTime(600);
        });

        expect(setToasts).toHaveBeenCalled();
        vi.useRealTimers();
    });
});
