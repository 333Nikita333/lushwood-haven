import { FC } from 'react';
import { NavLinkItemProps } from '../../types';
import { Link } from './NavLinkItem.styled';

const NavLinkItem: FC<NavLinkItemProps> = ({ linkName }) => {
  return (
    <Link to={linkName === 'home' ? '/' : `/${linkName}`}>
      <span>{linkName}</span>
    </Link>
  );
};
export default NavLinkItem;
