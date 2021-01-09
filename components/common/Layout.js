import Head from "next/head";
import React from "react";
import Link from "next/link";
import styles from "../../styles/Post.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Posts</a>
          </Link>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Blog</h1>
        <div className={styles.grid}>{children}</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
