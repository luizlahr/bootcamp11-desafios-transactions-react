import React from 'react';

import { Container, MenuItem } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const url = window.location.pathname;

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <MenuItem to="/" selected={url === '/'}>
            Listagem
          </MenuItem>
          <MenuItem to="/import" selected={url === '/import'}>
            Importar
          </MenuItem>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
