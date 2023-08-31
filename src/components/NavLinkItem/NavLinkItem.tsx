import { FC } from 'react';
import { INavLinkItemProps } from '../../types';
import { Link } from './NavLinkItem.styled';

const NavLinkItem: FC<INavLinkItemProps> = ({ linkName }) => {
  return (
    <Link to={linkName === 'home' ? '/' : `/${linkName}`}>
      <span>{linkName}</span>
    </Link>
  );
};
export default NavLinkItem;
