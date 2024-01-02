import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home page</h1>
      <User name="azam" />
      <User name="nurul" />
      <User name="rafi" />
      <User name="munna" />
    </main>
  );
}

const User = (props) => {
  return (
    <div>
      <h2>My name is {props.name} </h2>
    </div>
  );
};
