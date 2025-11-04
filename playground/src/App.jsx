import { toast, ToastContainer } from "../../src/toast-container";
import "../../src/style.css";
// import { useEffect } from "react";

export default function App() {
    // This is a dummy data for testing

    // const toasts = [
    //     { id: 1, message: "This is a default toast" },
    //     { id: 2, message: "This is a success toast", type: "success" },
    //     { id: 3, message: "This is an error toast", type: "error" },
    //     { id: 4, message: "This is a warning toast", type: "warning" },
    // ];

    // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // useEffect(() => {
    //     async function showToastsWithDelay() {
    //         for (let item of toasts) {
    //             if (item.type === "success") toast.success(item.message);
    //             else if (item.type === "error") toast.error(item.message);
    //             else if (item.type === "warning") toast.warning(item.message);
    //             else toast(item.message);
    //             await delay(200);
    //         }
    //     }

    //     showToastsWithDelay();
    // }, []);

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
