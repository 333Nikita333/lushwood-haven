import { FC } from 'react';
import { ParallaxBg, ParallaxSection, Wrapper, WrapperOuter } from './Services.styled';

const bgImageOne: string = 'images/services_images/page1.png';
const bgImageTwo: string = 'images/services_images/page2.png';
const bgImageThree: string = 'images/services_images/page3.png';

const Services: FC = () => {
  return (
    <WrapperOuter>
      <Wrapper>
        <ParallaxSection>
          <ParallaxBg style={{ backgroundImage: `url(${bgImageOne})` }}></ParallaxBg>
          <h2>Section 1</h2>
        </ParallaxSection>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti facere dolorem in.
          Maiores nihil dolorum hic accusamus eaque adipisci ad facere, obcaecati eius aspernatur.
          Numquam dolore maiores aliquam. Adipisci, distinctio. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Corrupti facere dolorem in. Maiores nihil dolorum hic
          accusamus eaque adipisci ad facere, obcaecati eius aspernatur. Numquam dolore maiores
          aliquam. Adipisci, distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Corrupti facere dolorem in. Maiores nihil dolorum hic accusamus eaque adipisci ad facere,
          obcaecati eius aspernatur. Numquam dolore maiores aliquam. Adipisci, distinctio.
        </div>
        <ParallaxSection>
          <ParallaxBg style={{ backgroundImage: `url(${bgImageTwo})` }}></ParallaxBg>
          <h2>Section 2</h2>
        </ParallaxSection>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti facere dolorem in.
          Maiores nihil dolorum hic accusamus eaque adipisci ad facere, obcaecati eius aspernatur.
          Numquam dolore maiores aliquam. Adipisci, distinctio. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Corrupti facere dolorem in. Maiores nihil dolorum hic
          accusamus eaque adipisci ad facere, obcaecati eius aspernatur. Numquam dolore maiores
          aliquam. Adipisci, distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Corrupti facere dolorem in. Maiores nihil dolorum hic accusamus eaque adipisci ad facere,
          obcaecati eius aspernatur. Numquam dolore maiores aliquam. Adipisci, distinctio.
        </div>
        <ParallaxSection>
          <ParallaxBg style={{ backgroundImage: `url(${bgImageThree})` }}></ParallaxBg>
          <h2>Section 3</h2>
        </ParallaxSection>
      </Wrapper>
    </WrapperOuter>
  );
};

export default Services;
