import Column from "./Column";
import styled from "styled-components";
const Smain = styled.main`
  width: 100%;
  background-color: #eaeef6;
`;
const Scontainer = styled.main`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;
const SmainBlock = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;
const SmainContent = styled.main`
  width: 100%;
  display: flex;
  @media screen and (max-width: 1200px) {
    display: block;
  }
`;
function Main() {
  return (
    <Smain>
      <Scontainer>
        <SmainBlock>
          <SmainContent>
            <Column text="Без статуса" />
            <Column text="Нужно сделать" />
            <Column text="В работе" />
            <Column text="Тестирование" />
            <Column text="Готово" />
          </SmainContent>
        </SmainBlock>
      </Scontainer>
    </Smain>
  );
}

export default Main;
