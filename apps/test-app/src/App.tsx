import { toast, ToastContainer } from "react-toast-msg";

export default function App() {
    const btn = "px-4 py-2 rounded-md bg-gray-50 border border-gray-200 hover:bg-gray-100 transition";

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-white">
            <ToastContainer autoClose={3000} closeButton />

            <h1 className="text-3xl font-semibold">React Toast Msg Demo</h1>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex flex-col gap-2 w-64 p-5 rounded-lg bg-zinc-50">
                    <button onClick={() => toast("Default toast")} className={btn}>
                        Default Toast
                    </button>

                    <button onClick={() => toast.success("Success toast", { closeButton: false })} className={btn}>
                        Success Toast
                    </button>

                    <button onClick={() => toast.error("Error toast")} className={btn}>
                        Error Toast
                    </button>

                    <button onClick={() => toast.warning("Warning toast")} className={btn}>
                        Warning Toast
                    </button>
                </div>

                <div className="flex flex-col gap-2 w-64 p-5 rounded-lg bg-zinc-50">
                    <button onClick={() => toast("Custom duration (5s)", { duration: 5000 })} className={btn}>
                        Custom Duration
                    </button>

                    <button onClick={() => toast.loading("Loading something...")} className={btn}>
                        Loading Toast
                    </button>
                </div>

                <div className="flex flex-col gap-2 w-64 p-5 rounded-lg bg-zinc-50">
                    <button
                        onClick={() =>
                            toast.promise(
                                new Promise(resolve => setTimeout(resolve, 2000)),
                                {
                                    loading: "Revalidating cache...",
                                    success: "Cache revalidated successfully",
                                    error: "Failed to revalidate cache"
                                }
                            )
                        }
                        className={btn}
                    >
                        Promise Success
                    </button>

                    <button
                        onClick={() =>
                            toast.promise(
                                new Promise((_, reject) => setTimeout(reject, 2000)),
                                {
                                    loading: "Deleting user...",
                                    success: "User deleted successfully",
                                    error: "Failed to delete user"
                                }
                            )
                        }
                        className={btn}
                    >
                        Promise Error
                    </button>

                    <button
                        onClick={() => toast.error("Critical server error! Please review.", {
                            autoClose: false
                        })}
                        className={btn}
                    >
                        Auto Close False
                    </button>
                </div>
            </div>
        </div>
    );
}