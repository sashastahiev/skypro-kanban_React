import AuthForm from "../components/AuthForm";
import { AuthProvider } from "../components/AuthContext";
function SignInPage({setIsAuth}) {
    return (
            <AuthForm IsSign={true} setIsAuth={{setIsAuth}}/> 
    )
}

export default SignInPage;