import React, { useEffect, useState } from "react";
import skyrushub from '../assets/SkyrusHubFullWhite.png';
import './Styled.mainView.css';

interface MainViewProps {
    initGame: boolean;
    updateGameState: React.Dispatch<React.SetStateAction<boolean>>;
  }

export const MainView: React.FC<MainViewProps> = ({ initGame, updateGameState }) => {
    const [glitchButtons, setGlitchButtons] = useState(false);
    const [glitchFull, setGlitchFull] = useState(false);
    const [isStarted, updateExp] = useState(false);
    const [showMessage, updateShowMessage] = useState(false)
    const [cursorLocked, setCursorLocked] = useState(false);
    
    function initExp() {
        setTimeout(() => {
            setGlitchFull(true)
        }, 2000);

        setTimeout(() => {
            updateExp(true);
            updateShowMessage(true);
            console.log(isStarted)
        }, 2666.67);
    }

    function hanndleClickrReady() {
        setGlitchButtons(true);
        setCursorLocked(true);
        initExp();
        setTimeout(() => {
            updateExp(true);
            setCursorLocked(false);
            setGlitchButtons(false);
            setGlitchFull(false);
        }, 5000);
        
        setTimeout(() => {
            setGlitchFull(true);
        }, 7000);

        setTimeout(() => {
            setGlitchFull(false);
            updateGameState(true)
            updateShowMessage(false);
        }, 8000);
    }

    useEffect(() => {
        if (cursorLocked) {
          document.body.classList.add('cursor-locked');
        } else {
          document.body.classList.remove('cursor-locked');
        }
      }, [cursorLocked]);
    return (
        <div className={`glass ${glitchFull ? "glassGlitch" : ""}`}>
            <div className={`MainApp ${initGame ? "Skyrushub" : ""}`}>
            <header className="Header">
                <div className="hContainer">
                    <img src={skyrushub} width={"370px"} onDragStart={(e) => e.preventDefault()} />
                    <p className="NotifyButton">Notify me</p>
                </div>
            </header>
            <div className="content">
                <h1 className="typewriter-text">{ !showMessage ? "Coming Soon..." : "SEJA BEM VINDO A REAL EXPERIÊNCIA"}</h1>
                <div className="bottomM">
                    <p className={`readyButton ${glitchButtons ? "glitch" : ""} ${cursorLocked ? "cursor-locked" : ""}`} onClick={() => hanndleClickrReady()}>Ready?</p>
                </div>
                      <p className="copyright">Copyright © 2023 - 2024, SkyrusHub LTDA. Todos os direitos reservados.</p>
            </div>
        </div>
        </div>
    )
}