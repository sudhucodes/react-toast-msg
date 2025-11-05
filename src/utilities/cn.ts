const PREFIX = 'rtm'; // react-toast-msg

export function cn(className?: string) {
    if (!className) return '';

    return className
        .split(' ')
        .filter(Boolean)
        .map(cls => `${PREFIX}-${cls}`)
        .join(' ');
}
