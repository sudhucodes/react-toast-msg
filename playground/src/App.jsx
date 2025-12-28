import { toast, ToastContainer } from "react-toast-msg";

export default function App() {
    const className = 'px-4 py-2 rounded-md bg-gray-50 border border-gray-200'
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-2">
            <ToastContainer autoClose={3000} />
            <button onClick={() => toast("This is a default toast")} className={className}>Show Default</button>
            <button onClick={() => toast.success("This is a success toast")} className={className}>Show Success</button>
            <button onClick={() => toast.error("This is an error toast")} className={className}>Show Error</button>
            <button onClick={() => toast.warning("This is a warning toast")} className={className}>Show Warning</button>
            <button onClick={() => toast("This is a default toast", 5000)} className={className}>Show Default with duration</button>
            <button onClick={() => toast('This is a default toast', 'success', 5000)} className={className}>Show Default with duration</button>
        </div>
    );
}
