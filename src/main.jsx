import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { AuthProvider } from "./components/Context/AuthContext";
import { ThemeProvider } from "./components/Context/ThemeContext";
import { TasksProvider } from "./components/Context/TasksContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* BrowserRouter позволяет управлять маршрутизацией в приложении */}
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <TasksProvider>
            <AppRoutes />
          </TasksProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
