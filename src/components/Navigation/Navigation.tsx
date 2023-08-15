import { FC } from 'react';
import { LinkName } from '../../types';
import NavLinkItem from '../NavLinkItem';
import { LinkList, LinkListItem, Nav } from './Navigation.styled';

const listLinkNames: LinkName[] = ['Home', 'About', 'Search', 'Gallery'];

const Navigation: FC = () => {
  return (
    <Nav>
      <LinkList>
        {listLinkNames.map(linkName => (
          <LinkListItem key={linkName}>
            <NavLinkItem linkName={linkName.toLowerCase()} />
          </LinkListItem>
        ))}
      </LinkList>
    </Nav>
  );
};

export default Navigation;
