import styles from "./page.module.css";

import MainPage from "./components/MainPage";

function page() {
  return (
    <div className={styles.mainWrapper}>
      <MainPage />
    </div>
  );
}

export default page;
