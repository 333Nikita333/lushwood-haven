import { FC } from 'react';
import { ServiceMainInfoProps } from '../../types';
import { InfoItem, InfoList, Wrapper } from './ServiceMainInfo.styled';

const ServiceMainInfo: FC<ServiceMainInfoProps> = ({ listServices }) => {
  return (
    <Wrapper>
      <InfoList>
        {listServices.map(({ icon, name }) => (
          <InfoItem key={name}>
            {icon}
            <h3>{name.toUpperCase()}</h3>
          </InfoItem>
        ))}
      </InfoList>
    </Wrapper>
  );
};

export default ServiceMainInfo;
