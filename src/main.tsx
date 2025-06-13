import "./globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import NavBar from "./components/1-navbar/_NavBar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="font-poppins font-medium">
      <NavBar />
      <div className="mt-[-30px] xl:mt-[-90px] 2xl:mt-[-40px]">
        <App />
      </div>
    </div>
  </StrictMode>
);
