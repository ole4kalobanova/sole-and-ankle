import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper key={shoe.slug} >
          <ShoeCard {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
/* new styles */
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
`;

/* new div */
const ShoeWrapper = styled.div`
  min-width: 275px;
  flex: 1;
`;

export default ShoeGrid;
