import Head from "next/head";
import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";

interface TProps {
    title: string;
    description?: string;
}

export const ApplicationWrapper: FC<PropsWithChildren<TProps>> = ({
    title,
    description,
    children,
}) => {
    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Head>
                <title>{title} | Rootlab Movies</title>
                {description && <meta name="description" content={description} />}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="bg-white h-20">
                <nav className="w-full flex gap-5 p-6 items-center text-2xl">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/movies">
                        <a>Movies</a>
                    </Link>
                </nav>
            </header>
            <main className="grow flex flex-col text-white">{children}</main>

            <footer className="flex p-6 h-20 text-black bg-white items-center justify-center">
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by <span className=""></span>
                </a>
            </footer>
        </div>
    );
};
