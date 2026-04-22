import { useEffect, useRef } from 'react';

type UseToastAutoCloseParams = {
    autoCloseDuration?: number | false;
    onClose: () => void;
};

export function useToastAutoClose({
    autoCloseDuration,
    onClose
}: UseToastAutoCloseParams) {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const remainingTimeRef = useRef(0);
    const startedAtRef = useRef(0);

    const clearTimer = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    const startTimer = (duration: number) => {
        clearTimer();
        remainingTimeRef.current = duration;
        startedAtRef.current = Date.now();
        timeoutRef.current = setTimeout(onClose, duration);
    };

    useEffect(() => {
        if (autoCloseDuration === false || autoCloseDuration === undefined) {
            clearTimer();
            remainingTimeRef.current = 0;
            return;
        }

        startTimer(autoCloseDuration);

        return () => {
            clearTimer();
        };
    }, [autoCloseDuration, onClose]);

    const pause = () => {
        if (!timeoutRef.current) {
            return;
        }

        const elapsed = Date.now() - startedAtRef.current;
        remainingTimeRef.current = Math.max(remainingTimeRef.current - elapsed, 0);
        clearTimer();
    };

    const resume = () => {
        if (
            autoCloseDuration === false ||
            autoCloseDuration === undefined ||
            timeoutRef.current ||
            remainingTimeRef.current <= 0
        ) {
            return;
        }

        startTimer(remainingTimeRef.current);
    };

    return {
        pause,
        resume
    };
}
