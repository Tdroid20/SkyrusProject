import styled from "styled-components";

type props = {
    $isReady: Boolean
}

export const StartApp = styled.div`
    width: 100%;
    height: 100%;
    background-color: #212121;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DialogBox = styled.div`
    width: 85%;
    height: 85%;
    border-radius: 10px;
    background: rgba(140, 140, 140, 0.1);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: space-around;
    align-items: center;
  
    /* Adiciona luz nas bordas */
    &:before {
      content: "";
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      border-radius: 15px;
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
      z-index: -1;
    }
`;

export const SkyrusHubIcon = styled.img`
    width: 500px;
    height: 500px;
`;

export const Divider = styled.div`
    height: 400px;
    border-radius: 10px;
    border-right: 7px solid #212121;
`;

export const InstructionSection = styled.div`
    width: 50%;
`;

export const TitleView = styled.p<props>`
    font-size: ${(props) => (props.$isReady ? "100px" : "44px")};
    color: #35FF;
`;

export const DescriptionView = styled.p<props>`
  margin-top: 80px;
  font-size: ${(props) => (props.$isReady ? "19px" : "")};
`;

export const SwitchButton = styled.button`
    width: 240px;
    height: 50px;
    
    font-family: "Aero Matics Display", sans-serif;
    font-style: italic;
    font-weight: bold;
    line-height: normal;
    text-transform: uppercase;
    color: #212121;
    font-size: 24px;

    background-color: #35FF;
    border: none;
    margin-top: 40px;
    border-radius: 20px;
    cursor: pointer;
    
    transition: color 0.3s, box-shadow 0.3s;

    &:hover {
      color: #FFF;
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }
`;

export const CopyrightContent = styled.p`
    position: fixed;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
`;