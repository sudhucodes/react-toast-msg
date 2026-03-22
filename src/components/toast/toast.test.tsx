import { render, screen, act } from '@testing-library/react';
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

    it('calls setToasts when close button is clicked', async () => {
        vi.useFakeTimers();
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

        act(() => {
            vi.advanceTimersByTime(300);
        });
        expect(setToasts).toHaveBeenCalled();
        vi.useRealTimers();
    });
});
