import React from "react";
import skyrushub from '../assets/SkyrusHubFullWhite.png';
import './Styled.mainView.css'

export const MainView: React.FC = () => {
    return (
        <div className="MainApp">
            <header className="Header">
                <div className="hContainer">
                    <img src={skyrushub} width={"370px"} onDragStart={(e) => e.preventDefault()} />
                    <p className="NotifyButton">Notify me</p>
                </div>
            </header>
            <div className="content">
                <h1 className="typewriter-text">Coming Soon...</h1>
                <div className="bottomM">
                    <p className="readyButton">Ready?</p>
                </div>
                      <p className="copyright">Copyright © 2023 - 2024, SkyrusHub LTDA. Todos os direitos reservados.</p>
            </div>
        </div>
    )
}