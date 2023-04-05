import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Homepage from "../pages/Homepage/Homepage";
import ExchangeRatePage from "../pages/ExchangeRatePage/ExchangeRatePage";
import PageNotFound from "../pages/404page/PageNotFound";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="" element={<Homepage />} />
          <Route path="/exchange-rate" element={<ExchangeRatePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
