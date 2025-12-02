import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import AppRouter from "./routes/AppRouter";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
}
