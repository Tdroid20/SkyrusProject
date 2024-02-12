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
  let nextEvent = new Date("2024-01-20T03:00:00.000Z").getTime();
  const [isOnline, setStatus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
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

  const TitleApp = !isOnline ? (
    <TitleText>Next update <Highlight>broadcast</Highlight> <br /> comming <Highlight>soon</Highlight></TitleText>
  ) : (
    <TitleText>Next update <Highlight>broadcast</Highlight> on</TitleText>
  )

  const renderer: any = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      /* 
            let refDays = zeroPad(days)
            let refHours = zeroPad(hours)
            let refMinutes = zeroPad(minutes)
            let refSeconds = zeroPad(seconds) */


      return (
        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <DescriptionText style={{ fontSize: "24px" }}>Estamos em manuntenção</DescriptionText>
        </div>
      );
    } else {
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

      return <CountdownValue>{DayCounter}:{HoursCounter}:{MinutesCounter}:{refSeconds}</CountdownValue>;
    }
  };
  return (
    <ContentView>
      <MaintenanceComponent closeModal={closeModal} isOpen={isOpen} updateStatusApp={setStatus} />
      <GlassView>
        <Version>Alpha Version 0.0.9-Dev</Version>
        <ContainerView>
          <ContainerViewElements>
            <DescriptionText>SkyrusHub Project</DescriptionText>
            {TitleApp}

            {isOnline && (
              <ContainerCountDown>
                <Countdown
                  date={nextEvent}
                  renderer={renderer}
                  zeroPadTime={2}
                  daysInHours={true}
                  autoStart={true}
                  zeroPadDays={2} />
              </ContainerCountDown>
            )}
          </ContainerViewElements>
        </ContainerView>
      </GlassView>
      <CopyrightContent>Copyright © 2023 - 2024, SkyrusHub LTDA. Todos os direitos reservados.</CopyrightContent>
    </ContentView>
  )
}