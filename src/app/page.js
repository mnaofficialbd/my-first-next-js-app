"use client";
import styles from "./page.module.css";

// =========================================================

// data passing with component
/* export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home page</h1>
      <User name="azam" />
      <User name="nurul" />
      <User name="rafi" />
      <User name="munna" />
      <button onClick={() => apple("mna")}>Click</button>
    </main>
  );
}

const User = (props) => {
  return (
    <div>
      <h2>My name is {props.name} </h2>
    </div>
  );
}; */

// =========================================================

/* export default function Home() {
  const apple = (item) => {
    alert(item);
  };
  return (
    <main className={styles.main}>
      <h1>Home page</h1>
      <button onClick={() => apple("mna")}>Click</button>
    </main>
  );
} */

// =========================================================

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home page</h1>
    </main>
  );
}
