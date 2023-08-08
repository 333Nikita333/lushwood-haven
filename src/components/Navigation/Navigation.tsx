import { FC } from 'react';
import { Link, LinkList, LinkListItem } from './Navigation.styled';

const Navigation: FC = () => {
  return (
    <nav>
      <LinkList>
        <LinkListItem>
          <Link to="/">Home</Link>
        </LinkListItem>
        <LinkListItem>
          <Link to="/about">About</Link>
        </LinkListItem>
        <LinkListItem>
          <Link to="/search">Search</Link>
        </LinkListItem>
        <LinkListItem>
          <Link to="/gallery">Gallery</Link>
        </LinkListItem>
      </LinkList>
    </nav>
  );
};

export default Navigation;
