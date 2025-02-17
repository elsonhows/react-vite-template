import styles from './Home.module.css';
import viteLogo from '/vite.svg';
import reactLogo from '@/assets/react.svg';
import { useState } from 'react';

export function HomeComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.layout}>
      <section>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className={styles.logo} alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className={styles.card}>
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/routes/index.tsx</code> and save to test HMR
          </p>
        </div>
        <p>Click on the Vite and React logos to learn more</p>
      </section>
      <hr />
      <section>
        <h2>Environment Variables</h2>
        <strong>Vite is running in &quot;{import.meta.env.MODE}&quot;</strong>
        <p>APP_TITLE: {import.meta.env.APP_TITLE}</p>
        <p>APP_VERSION: {import.meta.env.APP_VERSION}</p>
        <p>NOT_VISIBLE_IN_CLIENT: {import.meta.env.NOT_VISIBLE_IN_CLIENT}</p>
      </section>
    </div>
  );
}
