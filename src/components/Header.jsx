import styled from 'styled-components'; 
import ThemeContext from './ThemeContext';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
const Sheader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`
const Scontainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`
const Sheader__logo = styled.div`
 width: 85px;
 `
const Sheader__nav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Sheader__user = styled.div`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;

  &::after {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 1px;
  border-left: 1.9px solid #565eef;
  border-bottom: 1.9px solid #565eef;
  transform: rotate(-45deg);
  margin: -6px 0 0 5px;
  padding: 0;
}
._hover02:hover,&:hover {
  color: #33399b;
}
._hover02:hover::after,&:hover::after {
  border-left-color: #33399b;
  border-bottom-color: #33399b;}
`
function Header() {
  const [loading, setLoading] = useState(false);
  const {theme, toggleTheme} = useContext(ThemeContext)
  const modalWindow = () => {
    setLoading(!loading);
  }
  return (
    <>
      <Sheader style={{ background: theme ? '' : '#20202C'}}>
        <Scontainer >
          <div className="header__block">
            {theme ? 
            <Sheader__logo className= " _show _light">
              <a href="" target="_self">
                <img src="/public/images/logo.png" alt="logo" />
              </a> 
            </Sheader__logo> :
            <Sheader__logo className=" _show _dark">
              <a href="" target="_self">
                <img src="/public/images/logo_dark.png" alt="logo" />
              </a>
            </Sheader__logo>
            }
            <Sheader__nav >
              <button className="header__btn-main-new _hover01" id="btnMainNew">
                <Link to="/card/add">Создать новую задачу</Link>
              </button>
              <Sheader__user style={{color: !theme ? 'white' : ''}} className=" _hover02 cursor" onClick={modalWindow}>
                Ivan Ivanov
              </Sheader__user>
              { loading ? <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
                style={{background: !theme ? '#202229' : '',boxShadow: !theme ? '0 4px 6px rgba(255, 255, 255, 0.5)' : ''}}
              >
                <div className='cursor' 
                style={{color: !theme ? 'white' : ''}} 
                onClick={modalWindow}>x</div>
                <p className="pop-user-set__name" style={{color: !theme ? 'white' : ''}}>Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p style={{color: !theme ? 'white' : ''}}>Темная тема</p>
                  <input onClick={toggleTheme} type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className={!theme ? "hover04" : "_hover03"}
                style={{border: !theme ? '1px solid white' : ''}}>
                  <Link style={{color: !theme ? 'white' : ''}} to="/Exit">Выйти</Link>
                </button>
              </div> : ''}
            </Sheader__nav>
          </div>
        </Scontainer>
      </Sheader>
    </>
  );
}

export default Header;
