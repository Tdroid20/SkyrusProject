import React, { useEffect, useState } from "react";
import {
  ContainerCountDown,
  ContainerView,
  ContainerViewElements,
  ContentView,
  CountdownValue,
  DescriptionText,
  GlassView,
  Highlight,
  TitleText,
  Version
} from "./Styled.LauchGame";
import { CopyrightContent } from "../Docs/Components/Styles/Styled.guideStartView";
import Countdown, { zeroPad } from "react-countdown";
import { MaintenanceComponent } from "./Maintence/MaintenanceView";

export const LauchGameComponent: React.FC = () => {
  let nextEvent = new Date("2024-02-12T21:47:24.851Z").getTime();
  const [isOnline, setStatus] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [sharedStream, updateStream] = useState(false);
  const [showContainer, updateContainer] = useState(true);
  const [showTexts, updateStatusText] = useState(true);
  const [ animateBroadcast, updateAnimation ] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function updateStreamAndAnimation() {
    updateStream(!sharedStream);
    updateAnimation(!animateBroadcast);

    setTimeout(() => {
      updateStatusText(!showTexts);
    }, 1800);

    setTimeout(() => {
      endStream()
    }, 15000);
  };

  function restartCount() {
    updateStreamAndAnimation()

    setTimeout(() => {
      setStatus(true);
      nextEvent = new Date().getTime() + 5000;
    }, 6000);
  }

  function endStream() {
    updateStreamAndAnimation()

    setTimeout(() => {
    updateContainer(false)
    }, 10000);
  }
  

  useEffect(() => {

    const handleKeyPress = (event: any) => {
      if (event.ctrlKey && event.key === " ") {
        setIsOpen(true)
      }
    };

    window.addEventListener("keydown", handleKeyPress)
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  /* let endDate = Date.now();
  let hasNotification = false */

  /* const TitleApp = !isOnline ? (
    <TitleText className={showTexts ? "" : "activeView"}>Next update <Highlight>broadcast</Highlight> <br /> comming <Highlight>soon</Highlight></TitleText>
  ) : (
    <TitleText className={showTexts ? "activeView" : ""}>Next update <Highlight>broadcast</Highlight> on</TitleText>
  ) */


  const TitleApp = (
    <TitleText
    className={ sharedStream ? "activeView" : ""}
    animateBroadcast={animateBroadcast}
    style={{ display: !showTexts ? "none" : "" }}>
      Next update <Highlight>broadcast</Highlight>
      {!isOnline && <br />} comming {!isOnline && <Highlight>soon</Highlight>}
    </TitleText>
  );

  const renderer: any = ({ days, hours, minutes, seconds, completed }: any) => {
    if (!completed) {
      let refDays = zeroPad(days)
      let refHours = zeroPad(hours)
      let refMinutes = zeroPad(minutes)
      let refSeconds = zeroPad(seconds)

      let DayCounter = refDays === "00" ? (<Highlight>{refDays}</Highlight>) : refDays
      let HoursCounter = refHours === "00" ? (<Highlight>{refHours}</Highlight>) : refHours
      let MinutesCounter = refMinutes === "00" ? (<Highlight>{refMinutes}</Highlight>) : refMinutes
      // Render a countdown
      /* if (nextEvent - endDate <= 15 * 60 * 1000 && !hasNotification) {
        hasNotification = true;
        alert("Falta pouco! 15 minutos restantes");
      }  */
      setStatus(true)

      return <CountdownValue>{DayCounter}:{HoursCounter}:{MinutesCounter}:{refSeconds}</CountdownValue>;
    } else {
      setStatus(false)
    }
  };

  console.log(renderer)
  return (
    <ContentView>
      <MaintenanceComponent closeModal={closeModal} isOpen={isOpen} updateStatusApp={setStatus} restartFunc={restartCount} />
      <GlassView>
        <Version>Alpha Version 0.0.9-Dev</Version>
        <ContainerView>
          <ContainerViewElements>
            <DescriptionText className={sharedStream ? "activeView" : ""}>SkyrusHub Project</DescriptionText>
            {TitleApp}

            {showContainer && (
              <ContainerCountDown className={sharedStream ? "activeView" : ""} animateBroadcast={animateBroadcast}>
                {isOnline && (
                  <Countdown
                    date={nextEvent}
                    renderer={renderer}
                    zeroPadTime={2}
                    daysInHours={true}
                    autoStart={true}
                    zeroPadDays={2}
                    onComplete={updateStreamAndAnimation}
                    />
                )}

                { sharedStream && (
                  <>
                    stream place
                  </>
                ) }

              </ContainerCountDown>
            )}
          </ContainerViewElements>
        </ContainerView>
      </GlassView>
      <CopyrightContent>Copyright © 2023 - 2024, SkyrusHub LTDA. Todos os direitos reservados.</CopyrightContent>
    </ContentView>
  )
}