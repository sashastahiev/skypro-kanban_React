import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRoutes from "./AppRoutes";
import { AuthProvider } from "./components/AuthContext";
import { ThemeProvider } from "./components/ThemeContext";
createRoot(document.getElementById("root")).render(
   <StrictMode>
      {/* BrowserRouter позволяет управлять маршрутизацией в приложении */}
      <BrowserRouter>
         <AuthProvider>
            <ThemeProvider>
               <AppRoutes />
            </ThemeProvider>
         </AuthProvider>
      </BrowserRouter>
   </StrictMode>
);