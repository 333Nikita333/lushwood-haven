import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 325px;

  @media (min-width: 480px) and (max-width: 767px) {
    max-width: 440px;
  }
  @media (min-width: 768px) {
    max-width: calc(var(--index) * 23);
  }
  @media (min-width: 1024px) {
    max-width: calc(var(--index) * 18);
  }
`;
