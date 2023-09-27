import { FC } from 'react';
import { LinkName } from '../../types';
import NavLinkItem from '../NavLinkItem';
import { LinkList, LinkListItem, Nav } from './Navigation.styled';

export const listLinkNames: LinkName[] = ['Home', 'About', 'Gallery'];

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
