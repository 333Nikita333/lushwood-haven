import styled from 'styled-components';

export const ScrollIndicatorWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  z-index: 999;
  transition: width 0.2s ease-in-out;
`;
