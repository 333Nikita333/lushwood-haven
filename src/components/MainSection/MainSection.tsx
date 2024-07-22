import { FC } from 'react';
import { imagesHome } from '../../data/photos';
import {
  Copy,
  MainArticle,
  MainArticleContent,
  MainArticleText,
  MainArticleTitle,
} from './MainSection.styled';

const MainSection: FC = () => {
  return (
    <MainArticle style={{ backgroundImage: `url(${imagesHome.dungeon})` }}>
      <MainArticleContent>
        <MainArticleTitle>Discover the Enchanted Haven</MainArticleTitle>
        <MainArticleText>
          Immerse yourself in the tranquil embrace of nature at Lushwood Haven. Nestled deep within
          the heart of a lush forest, our haven offers you an unparalleled escape from the mundane.
          Explore the serenity of the woods during guided hikes, embark on thrilling cave
          expeditions, or simply unwind in the comfort of our luxurious rooms. Our enchanting
          retreat promises an experience like no other.
        </MainArticleText>
      </MainArticleContent>
      <Copy>© 2024. Mykyta Hilis</Copy>
    </MainArticle>
  );
};
export default MainSection;
