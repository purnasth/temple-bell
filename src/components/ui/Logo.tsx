import React from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

interface LogoProps {
  aprops?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ aprops, className }) => {
  return (
    <Link
      to="/"
      className={aprops ? aprops : 'cursor-pointer'}
      aria-label="Temple Bell"
      title="Temple Bell"
    >
      <img src={logo} alt="Temple Bell Logo" className={className} />
    </Link>
  );
};

export default Logo;
