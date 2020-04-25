import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ContainerProps {
  size?: 'small' | 'large';
}

interface Selected {
  selected?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const MenuItem = styled(Link)<Selected>`
  position: relative;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.2s;

  ${props =>
    props.selected === true &&
    css`
      &::after {
        transition: 0.2s;
        content: ' ';
        position: absolute;
        bottom: -10px;
        left: 0px;
        display: block;
        width: 100%;
        height: 2px;
        background-color: #ff872c;
      }
    `}

  & + a {
    margin-left: 32px;
  }

  &:hover {
    opacity: 0.6;
  }
`;
