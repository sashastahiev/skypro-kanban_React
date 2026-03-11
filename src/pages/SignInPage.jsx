import AuthForm from "../components/AuthForm";
function SignInPage({ setIsAuth }) {
  return <AuthForm IsSign={true} setIsAuth={setIsAuth} />;
}

export default SignInPage;
