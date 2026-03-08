import React from 'react';
import styled from 'styled-components';

// Стилизированные компоненты
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  text-align: center;
  color: white;
  font-family: 'Arial', sans-serif;
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  margin: 0;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HomeLink = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background-color: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
  transition: all 0.3s ease;
  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

// Основной компонент
const PageNotFound = () => {
  return (
    <Container>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>Ой! Страница, которую вы ищете, не существует.</ErrorMessage>
      <HomeLink href="/">Вернуться на главную</HomeLink>
    </Container>
  );
};

export default PageNotFound;
