import Layout from "./UI/Layout/Layout";
import { BrowserRouter } from "react-router-dom"
import * as Styles from "./App.module.css"

function App() {
  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Layout></Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
