import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PageNotFound from "./pages/PageNotFound";

function AppRoutes() {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 3000);
   }, []);

   return (
      <Router>
         <Routes>
            {/* Главная страница */}
            <Route path="/" element={<MainPage loading={loading} />} />
            {/* Страница входа */}
            <Route path="/sign-in" element={<SignInPage />} />
            {/* Страница регистрации */}
            <Route path="/sign-up" element={<SignUpPage />} />
            {/* Страница 404 */}
            <Route path="/*" element={<PageNotFound />} />
         </Routes>
      </Router>
   );
}

export default AppRoutes;