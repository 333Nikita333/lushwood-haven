import styled from 'styled-components';

export const MobileMenuContainer = styled.div<{ $isMobileMenuOpen: boolean }>`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: ${({ $isMobileMenuOpen }) => ($isMobileMenuOpen ? '0' : '-100%')};
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-width: 150px;
  border-bottom-right-radius: 45px;
  background-color: #8b4513;
  background-image: linear-gradient(
      45deg,
      transparent 25%,
      rgba(0, 0, 0, 0.05) 25%,
      rgba(0, 0, 0, 0.05) 50%,
      transparent 50%,
      transparent 75%,
      rgba(0, 0, 0, 0.05) 75%,
      rgba(0, 0, 0, 0.05) 100%
    ),
    linear-gradient(
      135deg,
      transparent 25%,
      rgba(0, 0, 0, 0.05) 25%,
      rgba(0, 0, 0, 0.05) 50%,
      transparent 50%,
      transparent 75%,
      rgba(0, 0, 0, 0.05) 75%,
      rgba(0, 0, 0, 0.05) 100%
    );
  background-size: 40px 40px;
  transition: left 0.3s ease-in-out;

  @media screen and (min-width: 481px) {
    display: none;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.primary};
  margin-bottom: 20px;
  margin-left: auto;
  transition: color 0.3s ease-in-out, opacity 3s ease-in-out;

  & > svg {
    width: 40px;
    height: 40px;
    color: #000000;
    transition: color 0.3s ease-in-out;
  }
  &:hover > svg {
    color: #ffffff;
  }
`;
export const ListLinks = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
`;
export const LinkItem = styled.li`
  display: flex;
  align-items: center;

  & > a {
    padding: 10px calc(var(--index) * 2);
    font-weight: 700;
    color: #000000;
    border: 2px solid #000000;
    background-color: ${({ theme }) => theme.colors.primaryBrown};
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;

    &.active {
      color: ${({ theme }) => theme.colors.primary};
      border: 2px solid ${({ theme }) => theme.colors.primary};
      text-shadow: none;
    }

    & > span {
      font-size: calc(var(--index) * 2);
    }
  }
`;
