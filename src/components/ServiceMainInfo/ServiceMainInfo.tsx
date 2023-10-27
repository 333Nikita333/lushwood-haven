import { FC } from 'react';
import { InfoItem, InfoList, Wrapper } from './ServiceMainInfo.styled';
import { BiSearchAlt } from 'react-icons/bi';
const ServiceMainInfo: FC = () => {
  return (
    <Wrapper>
      <InfoList>
        <InfoItem>
          <BiSearchAlt color="red" size="3rem" />
          <h3 style={{ fontSize: '25px' }}>Some Service</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae error quidem
            beatae reiciendis facilis earum eveniet, placeat cupiditate quae ut aliquam assumenda
            iure hic cumque, sed dolorum. Voluptatibus, laborum!
          </p>
        </InfoItem>
        <InfoItem>
          <BiSearchAlt color="red" size="3rem" />
          <h3 style={{ fontSize: '25px' }}>Some Service</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae error quidem
            beatae reiciendis facilis earum eveniet, placeat cupiditate quae ut aliquam assumenda
            iure hic cumque, sed dolorum. Voluptatibus, laborum!
          </p>
        </InfoItem>
        <InfoItem>
          <BiSearchAlt color="red" size="3rem" />
          <h3 style={{ fontSize: '25px' }}>Some Service</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae error quidem
            beatae reiciendis facilis earum eveniet, placeat cupiditate quae ut aliquam assumenda
            iure hic cumque, sed dolorum. Voluptatibus, laborum!
          </p>
        </InfoItem>
      </InfoList>
    </Wrapper>
  );
};

export default ServiceMainInfo;
