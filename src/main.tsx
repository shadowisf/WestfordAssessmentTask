import "./globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import NavBar from "./components/navbar/_NavBar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="font-poppins font-medium">
      <NavBar />
      <div className="mt-[-30px]">
        <App />
      </div>
    </main>
  </StrictMode>
);
