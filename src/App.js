import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Pageroutes from "./Pageroutes";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Pageroutes />
      </BrowserRouter>
    </>
  );
}
