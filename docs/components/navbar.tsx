import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between py-4 px-4 md:px-8 border-b border-zinc-200">
            <Link href="/">
                <Image src="/assets/logo.svg" alt="rtm" width={91} height={28} className="h-8.5 w-auto" />
            </Link>
            <ul className="flex items-center gap-7">
                <Link href="/">Home</Link>
                <Link href="/docs">Docs</Link>
            </ul>
        </nav>
    );
}