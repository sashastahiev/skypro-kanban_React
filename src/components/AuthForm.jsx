
import styled from 'styled-components';
import { Link, useNavigate} from "react-router-dom"
const StyledTop = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #EAEEF6;
  width: 100vw;
  height: 100vh;
  `;
const StyledForm = styled.form`
  width: 368px;
  height: 329px;
  padding: 50px 60px;
  box-sizing: border-box;
  border: 0.7px solid rgba(212, 219, 229, 1);
  border-radius: 10px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgba(255, 255, 255, 1);
`;
const StyledTitle = styled.div`
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
  text-align: center;
  margin-bottom: 20px;
`;
const StyledInputMail = styled.input`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 10px 8px 10px;
  box-sizing: border-box;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -2%;
  text-align: left;
  margin-bottom: 7px;
`;
const StyledInputName = styled.input`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 8px 10px 8px 10px;
  box-sizing: border-box;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  margin-bottom: 7px;
`;
const StyledInputPassword = styled.input`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 10px 8px 10px;
  box-sizing: border-box;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  margin-bottom: 20px;
`;
const StyledButton = styled.button`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 8px 10px 8px 10px;
  border-radius: 4px;
  background: rgba(86, 94, 239, 1);
  color: rgba(255, 255, 255, 1);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -1%;
  text-align: center;
  margin-bottom: 20px;
`;
const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
  height: 42px;
  color: rgba(148, 166, 190, 0.4);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -1%;
  text-align: center;
`;
const StyledParagraph = styled.p`
  margin: 0;
`;
const StyledLink = styled.div`
  text-decoration: underline;
  cursor: pointer;
  color: rgba(148, 166, 190, 0.4);
  margin: 0;
`;
function AuthForm({IsSign}) {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  }
  return (
    <StyledTop>
      <StyledForm>
        {IsSign ? 
        <StyledTitle>Вход</StyledTitle> : 
        <StyledTitle>Регистрация</StyledTitle>}
        {IsSign ?
         <StyledInputName
          name="name"
          id="formname"
          placeholder="Имя"/>
        : ''}
       <StyledInputMail
          name="login"
          id="formlogin"
          placeholder="Эл. почта"
        />
        <StyledInputPassword
          type="password"
          name="password"
          id="formpassword"
          placeholder="Пароль"
        />
        <StyledButton onClick={handleSubmit}>Войти</StyledButton>
        <StyledFooter>  
          {IsSign ? (
            <>
              <StyledParagraph>Нужно зарегистрироваться?</StyledParagraph>
              <Link to="/sign-up">
                <StyledLink>Регистрируйтесь здесь</StyledLink>
              </Link>
            </>
          ) : (
            <>
              <StyledParagraph>Уже есть аккаунт?</StyledParagraph>
              <Link to="/sign-up">
                <StyledLink>Войти здесь!</StyledLink>
              </Link>
            </>
          )}
        </StyledFooter>
      </StyledForm>
    </StyledTop>
  );
}

export default AuthForm;

