import { FC } from 'react';
import { Container, Preloader, PreloaderSquare, Wrapper } from './Loader.styled';

const Loader: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Preloader>
          <PreloaderSquare />
          <PreloaderSquare />
          <PreloaderSquare />
          <PreloaderSquare />
        </Preloader>
      </Container>
    </Wrapper>
  );
};

export default Loader;
