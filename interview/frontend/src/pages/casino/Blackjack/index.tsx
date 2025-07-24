import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import Card from '../../../components/Cards';
import * as Styled from './styled';
import { getRandomNumber } from '../../../utils/random';

interface BlackjackProps {}
const Blackjack = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);
  useEffect(() => {
    setValue(getRandomNumber());
  }, [isActive]);

  return (
    <div>
      <Styled.Container>
        <Card isActive={isActive} value={value}></Card>
        <Button text="bid" onClick={() => setIsActive(!isActive)}></Button>
      </Styled.Container>
    </div>
  );
};

export default Blackjack;
