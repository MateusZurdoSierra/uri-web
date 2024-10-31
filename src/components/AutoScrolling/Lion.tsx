'use client';

import React from 'react';
import Image from 'next/image';
import {
  AppContainer,
  Wrapper,
  Marquee,
  MarqueeGroup,
  TextGroup,
} from './LionStyles';

function Lion() {
  const row1Text = 'O LEÃO DA SUA VIZINHANÇA';

  return (
    <AppContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {[...Array(8)].map((_, index) => (
              <TextGroup key={index}>
                <Image
                  src="/svg/logo.svg"
                  alt="Leão"
                  width={50}
                  height={50}
                  style={{ fill: '#d6d6d6' }}
                />
                {row1Text}
              </TextGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default Lion;
