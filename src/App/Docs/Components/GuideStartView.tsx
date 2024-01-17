import React, { useCallback, useEffect, useState } from "react";
import { CopyrightContent, DescriptionView, DialogBox, Divider, InstructionSection, SkyrusHubIcon, StartApp, SwitchButton, TitleView } from "./Styles/Styled.guideStartView";
import SkyrusHubLogo from '../../../assets/SkyrusHub_Icon.png';

interface Props {
    exitButton: VoidFunction
}

export const GuideStartView: React.FC<Props> = ({ exitButton }) => {
    const doc = document as any;
    const [isReady, updateReady] = useState(doc.fullscreenElement);
    const [isVisible, setIsVisible] = useState(true);
    const [getStarted, updateStart] = useState(false)

    function checkScreenState() {
        if (doc.fullscreenElement) {
            updateStart(true)
            setTimeout(() => {
                setIsVisible(false);
              }, 500);
        }
    }

    function exitFullScreen() {
        if (doc.exitFullscreen) {
            doc.exitFullscreen();
          } else if (doc.mozCancelFullScreen) {
            doc.mozCancelFullScreen();
          } else if (doc.webkitExitFullscreen) {
            doc.webkitExitFullscreen();
          } else if (doc.msExitFullscreen) {
            doc.msExitFullscreen();
          }
    }

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if (event.key === "F11") {
          console.log("Usuário pressionou F11");
        } else if (event.key === "Escape") {
            console.log("Usuário pressionou Esc");
            setIsVisible(true);
            updateReady(false);
            updateStart(false)
            setTimeout(() => {
              exitFullScreen(); // Função a ser chamada para sair da tela cheia
            }, 500);
          }
        },
        [isVisible, isReady]
      );
    
      
      useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
      
        return () => {
          document.removeEventListener("keydown", handleKeyPress);
        };
      }, [handleKeyPress]);
      
    

    return (
        <>
            {isVisible && (
                <StartApp className={!getStarted ? "fade-in" : "fade-out"}>
                    <DialogBox>
                        {!isReady && (
                            <>
                                <SkyrusHubIcon src={SkyrusHubLogo} />
                                <Divider />
                            </>
                        )}
                        <InstructionSection>
                            <TitleView $isReady={isReady}>{isReady ? "Welcome!" : "Full Screen Requested"}</TitleView>
                            <DescriptionView $isReady={isReady}>
                                {!isReady
                                    ? "To improve your experience on our platform, we recommend activating full screen mode. This feature optimizes the display, providing a more engaging and enjoyable interaction. To activate the full screen, simply click the button below or use the F11 key on your keyboard."
                                    : "Welcome to our Exciting Project! Get ready for a thrilling adventure in the world of SkyrusHub. Our launch is just around the corner, and we can't wait to share the excitement with you! Launching Soon. Did you know? A SkyrusHub é o projeto que mais te diverte enquanto aguarda"}
                            </DescriptionView>
                            <SwitchButton onClick={() => {
                                updateReady(true)
                                exitButton();
                                checkScreenState()
                            }}>Start experiment</SwitchButton>
                        </InstructionSection>
                    </DialogBox>
                    <CopyrightContent>Copyright © 2023 - 2024, SkyrusHub LTDA. Todos os direitos reservados.</CopyrightContent>
                </StartApp>
            )}
        </>
    )
}