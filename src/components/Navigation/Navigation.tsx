import { FC } from 'react';
import useStore from '../../store';
import { LinkName } from '../../types';
import NavLinkItem from '../NavLinkItem';
import { LinkList, LinkListItem, Nav } from './Navigation.styled';

export const listLinkNames: LinkName[] = ['Home', 'About', 'Gallery', 'Services'];

const Navigation: FC = () => {
  const { isLoggedIn } = useStore(state => ({ isLoggedIn: state.isLoggedIn }));

  return (
    <Nav>
      <LinkList>
        {listLinkNames.map(linkName =>
          !isLoggedIn && linkName === 'Services' ? null : (
            <LinkListItem key={linkName}>
              <NavLinkItem linkName={linkName.toLowerCase()} />
            </LinkListItem>
          )
        )}
      </LinkList>
    </Nav>
  );
};

export default Navigation;
