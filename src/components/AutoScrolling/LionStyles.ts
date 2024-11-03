import styled, { keyframes, css } from 'styled-components';

export const AppContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  margin: 2rem auto;
  color: #333333;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;

  @media (max-width: 1200px) {
    margin: 1.5rem;
  }

  @media (max-width: 992px) {
    margin: 1rem;
    max-width: 450px;
  }

  @media (max-width: 768px) {
    margin: 0.5rem;
    max-width: 350px;
  }

  @media (max-width: 576px) {
    margin: 0.25rem;
    max-width: 320px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Marquee = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );

  @media (max-width: 1200px) {
    padding: 0 1rem;
  }

  @media (max-width: 992px) {
    padding: 0 0.5rem;
  }

  @media (max-width: 768px) {
    padding: 0 0.25rem;
  }
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;

  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 992px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

export const MarqueeGroup = styled.div`
  ${common}
  max-width: 100%;
`;

export const TextGroup = styled.div`
  font-size: 2.2rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media (max-width: 992px) {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;
