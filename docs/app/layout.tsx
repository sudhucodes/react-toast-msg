import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toast-msg";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "React Toast Message (rtm) - SudhuCodes",
    description: "A lightweight, zero-config, customizable React toast notification library - just plug and play by SudhuCodes.",
    appleWebApp: {
        title: "rtm",
    },
    twitter: {
        card: "summary_large_image",
        title: "React Toast Message - SudhuCodes",
        description: "A lightweight, zero-config, customizable React toast notification library - just plug and play by SudhuCodes.",
        creator: "@SudhuCodes",
        site: "@SudhuCodes",
    },
    openGraph: {
        title: "React Toast Message - SudhuCodes",
        description: "A lightweight, zero-config, customizable React toast notification library - just plug and play by SudhuCodes.",
    },
    applicationName: "rtm",
    alternates: {
        canonical: "https://rtm.sudhucodes.com",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ToastContainer />
                {children}
            </body>
        </html>
    );
}
