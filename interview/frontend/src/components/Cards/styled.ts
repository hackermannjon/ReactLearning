import styled from 'styled-components';

interface ContainerProps {
  isActive?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: rebeccapurple;
  width: 15rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: xx-large;
  border-radius: 2rem;
  animation: ${({ isActive }) =>
    isActive
      ? 'flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both'
      : 'none'};

  @-webkit-keyframes flip-horizontal-bottom {
    0% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
    }
    100% {
      -webkit-transform: rotateX(-180deg);
      transform: rotateX(-180deg);
    }
  }
  @keyframes flip-horizontal-bottom {
    0% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
    }
    100% {
      -webkit-transform: rotateX(-180deg);
      transform: rotateX(-180deg);
    }
  }
`;
