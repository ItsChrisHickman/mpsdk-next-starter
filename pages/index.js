import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Showcase } from '../components/Showcase';
import { WebComponent } from '../components/WebComponent';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js x Matterport SDK</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
      <h2>@matterport/sdk</h2>
      <Showcase />
      <h2>@matterport/webcomponent</h2>
      <WebComponent />

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
