import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PageNotFound from "./pages/PageNotFound";
import NewCardPage from "./pages/NewCardPage";
import PopUserPage from "./pages/PopUserPage";
import CardId from "./pages/card/{id)"
import { useState } from "react";
import PrivateRoute from "./pages/PrivateRoute";
function AppRoutes() {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <Routes>
            <Route element={<PrivateRoute IsAuth={isAuth}/>}>
                {/* Главная страница */}
                <Route path="/" element={<MainPage/>}>
                    <Route path="/card/add" element={<NewCardPage />} />
                    <Route path="/Exit" element={<PopUserPage setIsAuth={setIsAuth}/>} />
                    <Route path="/card/:id" element={<CardId />} />
                </Route>
            </Route>
            {/* Страница входа */}
            <Route path="/login" element={<SignInPage setIsAuth={setIsAuth}/>} />
            {/* Страница регистрации */}
            <Route path="/register" element={<SignUpPage />} />
            {/* Страница 404 */}
            <Route path="/*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;