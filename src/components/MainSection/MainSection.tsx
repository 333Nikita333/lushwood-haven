import { FC } from 'react';
import {
  Copy,
  MainArticle,
  MainArticleContent,
  MainArticleText,
  MainArticleTitle,
} from './MainSection.styled';

const bgImageDungeon: string = 'images/dungeon.jpg';

const MainSection: FC = () => {
  return (
    <MainArticle style={{ backgroundImage: `url(${bgImageDungeon})` }}>
      <MainArticleContent>
        <MainArticleTitle>To be continued</MainArticleTitle>
        <MainArticleText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, incidunt veniam mollitia
          nobis voluptatem saepe quas dolore sequi inventore maiores esse dolorum sit omnis
          temporibus pariatur veritatis vitae? Corrupti, nobis?
        </MainArticleText>
      </MainArticleContent>
      <Copy>© 2023. Mykyta Hilis</Copy>
    </MainArticle>
  );
};
export default MainSection;
