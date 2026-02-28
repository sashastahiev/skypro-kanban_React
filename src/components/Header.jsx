import styled from 'styled-components';
import { useState } from 'react';
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
  const modalWindow = () => {
    setLoading(!loading);
  }
  return (
    <>
      <Sheader >
        <Scontainer >
          <div className="header__block">
            <Sheader__logo className=" _show _light">
              <a href="" target="_self">
                <img src="/public/images/logo.png" alt="logo" />
              </a>
            </Sheader__logo>
            <Sheader__logo className=" _dark">
              <a href="" target="_self">
                <img src="/public/images/logo_dark.png" alt="logo" />
              </a>
            </Sheader__logo>
            <Sheader__nav >
              <button className="header__btn-main-new _hover01" id="btnMainNew">
                <a href="#popNewCard">Создать новую задачу</a>
              </button>
              <Sheader__user className=" _hover02 cursor" onClick={modalWindow}>
                Ivan Ivanov
              </Sheader__user>
              { loading ? <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                <div className='cursor' onClick={modalWindow}>x</div>
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
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
