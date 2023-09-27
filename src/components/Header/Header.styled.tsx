import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 1;
  display: flex;
  gap: 15px;
  padding: ${({ theme }) => theme.paddings.small};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.primary};
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  transition: transform 0.3s ease-in-out;
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
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.secondary};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  @media screen and (min-width: 481px) {
    display: none;
  }
`;
