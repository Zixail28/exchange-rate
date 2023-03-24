import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="*" />
          <Route path="*" />
          <Route path="*" element={404} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
