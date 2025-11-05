import { toast, ToastContainer } from "react-toast-msg";

export default function App() {
    return (
        <div className="app">
            <ToastContainer />
            <button onClick={() => toast("This is a default toast")}>Show Default</button>
            <button onClick={() => toast.success("This is a success toast")}>Show Success</button>
            <button onClick={() => toast.error("This is an error toast")}>Show Error</button>
            <button onClick={() => toast.warning("This is a warning toast")}>Show Warning</button>
        </div>
    );
}
