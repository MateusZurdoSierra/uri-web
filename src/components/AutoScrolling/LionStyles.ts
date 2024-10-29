import styled, { keyframes, css } from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  padding: 4rem 0;
  margin: 2rem auto;
  color: #d6d6d6;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
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
`;

export const MarqueeGroup = styled.div`
  ${common}
`;

export const TextGroup = styled.div`
  font-size: 2rem; // Ajuste o tamanho da fonte conforme necessário
  padding: 0 1rem; // Adicione algum espaçamento lateral
`;
