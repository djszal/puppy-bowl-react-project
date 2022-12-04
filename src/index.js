import { createRoot } from "react-dom/client";
// Import components into here to render
import Main from "./components/Main";
// import ReactDOM from "react-dom";

//browser router is going to go and wrap it around puppyMain
const appElement = document.querySelector("#root");
const root = createRoot(appElement);

root.render(<Main />);
