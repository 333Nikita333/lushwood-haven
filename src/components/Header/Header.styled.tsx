import styled from 'styled-components';

export const HeaderContainer = styled.header<{ $isMobileMenuOpen: boolean }>`
  position: fixed;
  z-index: 2;
  display: flex;
  gap: 15px;
  padding: ${({ theme }) => theme.paddings.small};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.primary};
  color: ${({ theme }) => theme.colors.primaryTextColor};
  background: transparent;
  transition: transform 0.3s ease-in-out;

  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: ${({ $isMobileMenuOpen }) => ($isMobileMenuOpen ? '1' : '0')};
    pointer-events: ${({ $isMobileMenuOpen }) => ($isMobileMenuOpen ? 'auto' : 'none')};
    transition: opacity 0.3s ease-in-out;
    z-index: -1;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LinkList = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;
export const LinkListItem = styled.li``;

export const OrderButton = styled.button`
  margin-left: auto;
`;
export const MobileMenuButton = styled.button`
  color: ${({ theme }) => theme.colors.primaryTextColor};
  background: transparent;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.secondary};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  @media screen and (min-width: 481px) {
    display: none;
  }
`;
export const ListButtons = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-left: auto;
`;
