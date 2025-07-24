import React from 'react';
import * as Styled from './styled';

interface cardProps {
  value: number;
  isActive?: boolean;
}

const Card = ({ value, isActive = false }: cardProps) => {
  return <Styled.Container isActive={isActive}>{value}</Styled.Container>;
};

export default Card;
