import styled, { keyframes } from "styled-components";

const glow = keyframes`
  0% {
    border-radius: 20px;
    box-shadow: 0 0 5px rgba(255, 0, 0, 0.7);
  }

  25% {
    border-radius: 20px;
    box-shadow: 0 0 5px rgba(255, 0, 0, 0.7);
  }

  50% {
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(142, 255, 27, 0.9);
  }

  70% {
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.9);
}

  100% {
    border-radius: 20px;
    box-shadow: 1 2px 5px rgba(0, 0, 255, 0.7);
  }
`;

interface Props {
  animateBroadcast: Boolean
}

export const GlassView = styled.div`
    width: 90vw;
    height: 80vh;
    margin: 0;
    place-items: center;
    min-width: 320px;
    min-height: 80vh;
    background-color: rgba(134, 25, 107, 0.3);
    border-radius: 10px;
    padding: 20px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 182, 193, 0.5);
`;

export const ContentView = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Version = styled.div``;

export const ContainerView = styled.div`
    width: 100%;
    height: 97%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContainerViewElements = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const DescriptionText = styled.p`
    width: 100%;
    display: flex;
    align-text: center;
    flex-direction: colum;
    justify-content: center;

    font-weight: bold;
    font-size: 14px;
    margin-bottom: -5px;
    transition: opacity 2s ease-in-out;
    
    &.activeView {
      opacity: 0;
    }
`;

export const TitleText = styled.h1<Props>`
    font-family: "Aero Matics Display", sans-serif;
    font-style: italic;
    font-weight: bold;
    line-height: normal;
    text-transform: uppercase;
    color: #212121;
    font-size: 65px;
    justify-content: center;
    align-items: center;
    margin: 0;
    transition: opacity 2s ease-in-out;
    
    &.activeView {
      opacity: 0;
    }
`;

export const Highlight = styled.span`
    color: #35ff00;
    flex-direction: row;

    &.activeView {
      display: none;
    }
`;

export const ContainerCountDown = styled.div<Props>`
  width: ${(props) => props.animateBroadcast ? '100%' : '70%'};
  height: ${(props) => props.animateBroadcast ? '100%' : '100px'};;
  background: #212121;
  margin-top: 60px;
  border-radius: 20px;
  border-image-slice: 1;
  animation: ${glow} 2s infinite ease-in;
  transition: width 5s ease-in-out, height 4s ease-in-out;

  &.activeView {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;

export const CountdownValue = styled.p`
    font-family: "Aero Matics Display", sans-serif;
    font-style: italic;
    font-weight: bold;
    line-height: normal;
    text-transform: uppercase;
    color: #FFF;
    font-size: 90px;
    justify-content: center;
    align-items: center;
    margin: 0;
`;
