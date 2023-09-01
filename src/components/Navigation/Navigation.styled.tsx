import styled from 'styled-components';

export const Nav = styled.nav`
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const LinkList = styled.ul`
  display: flex;
  gap: calc(var(--gallery-gap) * 0.2);
`;
export const LinkListItem = styled.li`
  & .active {
    color: ${({ theme }) => theme.colors.primary};
    background: #8b4513;
    border: 1px solid #8b4513;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
    box-shadow: 0 0 5px #8b4513, 0 0 20px #8b4513, 0 0 50px #8b4513,
      0 0 100px #8b4513;
  }
`;
