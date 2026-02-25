import styled from "styled-components";
import ContentLoader from 'react-content-loader'
const Scards__item = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`
const Scards__card = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  
  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`
const Scards__group = styled.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
`
const Scard__content = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`
const Scard__title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
  padding-top: 5px;
`
const Scard__date = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
& svg {
  width: 13px;
}
& p {
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94a6be;
  letter-spacing: 0.2px;
}
`
const Sp = styled.p`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94a6be;
  letter-spacing: 0.2px;
`
const Scard__btn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`
const Scircle = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94a6be;
`
function Card ({item}) {
  let colorTopic = "";
  if (item.theme == "Research") colorTopic = "_green";
  else if (item.theme == "Web Design") colorTopic = "_orange";
  else if (item.theme == "Copywritting") colorTopic = "_purple";
  return (
    <>
      <Scards__item>
        <Scards__card>
          <Scards__group>
            <div className={'card__theme ' + colorTopic}>
              <p className={colorTopic}>{item.theme}</p>
            </div>
            <a href="#popBrowse" target="_self">
              <Scard__btn>
                <Scircle></Scircle>
                <Scircle></Scircle>
                <Scircle></Scircle>
              </Scard__btn>
            </a>
          </Scards__group>
          <Scard__content>
            <a href="#" target="_blank">
              <Scard__title>{item.title}</Scard__title>
            </a>
            <Scard__date>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <g clipPath="url(#clip0_1_415)">
                  <path
                    d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                    stroke="#94A6BE"
                    strokeWidth="0.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                    stroke="#94A6BE"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_415">
                    <rect width="13" height="13" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>{item.date}</p>
            </Scard__date>
          </Scard__content>
        </Scards__card>
      </Scards__item>
    </>
  );
}

export default Card;
