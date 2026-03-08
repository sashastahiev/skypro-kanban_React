import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDrag } from 'react-dnd';
import ThemeContext from './ThemeContext';
import { useContext } from "react";
const Scards__item = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;
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
`;
const Scards__group = styled.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
`;
const Scard__content = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const Scard__title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
  padding-top: 10px;
`;
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
`;
const Sp = styled.p`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94a6be;
  letter-spacing: 0.2px;
`;
const Scard__btn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;
const Scircle = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94a6be;
`;
const Card = ({ card, columnId }) => {
  const {theme} = useContext(ThemeContext)
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { id: card._id, fromColumnId: columnId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  
  const formatDate = (isoString) => {
    const date = new Date(isoString);

    // Форматируем дату (день, месяц, год)
    const dateOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    };
    const formattedDate = new Intl.DateTimeFormat('ru-RU', dateOptions)
      .format(date)
      .replace(/\./g, '.'); // Гарантируем точку как разделитель
      
    return `${formattedDate}`;
  };
  let colorTopic = "";
  if (card.topic == "Research") colorTopic = "_green";
  else if (card.topic == "Web Design") colorTopic = "_orange";
  else if (card.topic == "Copywriting") colorTopic = "_purple";
  return (
    <>
    <Link to={"/card/" + card._id}>
      <Scards__item  ref={drag} style={{opacity: isDragging ? 0.5 : 1}}>
        <Scards__card style={{background: !theme ? "#20202C" : ""}}>
          <Scards__group>
            <div className={"card__theme " + colorTopic}>
              <p className={colorTopic}>{card.topic}</p>
            </div>
            <Link to={"/card/" + card._id}>
              <Scard__btn>
                <Scircle></Scircle>
                <Scircle></Scircle>
                <Scircle></Scircle>
              </Scard__btn>
            </Link>
          </Scards__group>
          <Scard__content>
            <a href="#" target="_blank">
              <Scard__title style={{color: !theme ? "#FFFFFF" : ""}}>{card.title}</Scard__title>
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
              <p>{formatDate(card.date)}</p>
            </Scard__date>
          </Scard__content>
        </Scards__card>
      </Scards__item>
    </Link>
    </>
  );
}

export default Card;
