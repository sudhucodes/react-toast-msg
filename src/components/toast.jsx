export function Toast({ message, type = "default", icon, leaving }) {
    return (
        <div className={`toast toast-${type} ${leaving ? "toast-exit" : "toast-enter"}`} >
            {icon}
            {message}
        </div>
    );
}