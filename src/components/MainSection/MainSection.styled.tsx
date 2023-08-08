import styled from 'styled-components';

export const MainArticle = styled.article`
  --main-article-transform: translate3d(0, calc(var(--scrollTop) / -7.5), 0);
  position: relative;
  top: -1px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const MainArticleContent = styled.div`
  will-change: transform;
`;

export const MainArticleTitle = styled.h2`
  margin-bottom: calc(var(--index) / 1.25);
  text-transform: uppercase;
  font-size: calc(var(--index) * 1.8);
  letter-spacing: calc(var(--index) / 7.5);
  transform: var(--main-article-transform);
  will-change: transform;
`;

export const MainArticleText = styled.p`
  max-width: calc(var(--index) * 30);
  font-size: calc(var(--index) * 0.9);
  transform: var(--main-article-transform);
  will-change: transform;
`;

export const Copy = styled.div`
  position: absolute;
  bottom: calc(var(--index) * 2.5);
  opacity: 0.45;
  font-size: calc(var(--index) * 0.75);
  letter-spacing: calc(var(--index) / 37.5);
`;
