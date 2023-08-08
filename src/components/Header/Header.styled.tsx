import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 10000;
  display: flex;
  gap: 15px;
  padding: ${({ theme }) => theme.paddings.small};

  font-size: ${({ theme }) => theme.fontSizes.primary};
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  transition: transform 0.3s ease-in-out;
`;

export const LinkList = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;
export const LinkListItem = styled.li``;
