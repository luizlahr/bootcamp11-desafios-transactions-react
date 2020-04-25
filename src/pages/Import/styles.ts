import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ErrorMessage {
  show: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #363f5f;
  text-align: center;
`;

export const ImportFileContainer = styled.section`
  background: #fff;
  margin-top: 40px;
  border-radius: 5px;
  padding: 64px;
`;

export const Footer = styled.section`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
    color: #969cb3;

    img {
      margin-right: 5px;
    }
  }

  button {
    background: #ff872c;
    color: #fff;
    border-radius: 5px;
    padding: 15px 80px;
    border: 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff872c')};
    }
  }
`;

export const ImportError = styled.section<ErrorMessage>`
  display: none;
  opacity: 0;
  justify-content: center;
  flex: 1;
  padding: 16px 0;
  background-color: rgba(210, 50, 50, 0.8);
  color: #fff;
  margin-bottom: 16px;
  transition: all 0.2s;

  ${props =>
    props.show &&
    css`
      display: flex;
      height: auto;
      opacity: 1;
    `}
`;
