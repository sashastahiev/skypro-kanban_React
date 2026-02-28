import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PageNotFound from "./pages/PageNotFound";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      {/* BrowserRouter позволяет управлять маршрутизацией в приложении */}
      <BrowserRouter>
         <Routes>
         {/* Главная страница */}
         <Route path="/" element={<MainPage/>} />
         {/* Страница входа */}
         <Route path="/sign-in" element={<SignInPage />} />
         {/* Страница регистрации */}
         <Route path="/sign-up" element={<SignUpPage />} />
         {/* Страница 404 */}
         <Route path="/*" element={<PageNotFound />} />
      </Routes>
      </BrowserRouter>
   </StrictMode>
);