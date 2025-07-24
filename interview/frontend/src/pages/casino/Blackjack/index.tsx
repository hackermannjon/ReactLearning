import React, { useState } from 'react';
import Button from '../../../components/Button';
import Card from '../../../components/Cards';
import * as Styled from './styled';

interface BlackjackProps {}

const Blackjack = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <Styled.Container>
        <Card isActive={isActive} value={2}></Card>
        <Button text="bid" onClick={() => setIsActive(!isActive)}></Button>
      </Styled.Container>
    </div>
  );
};

export default Blackjack;
