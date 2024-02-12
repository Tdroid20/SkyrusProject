import React from "react";
import { VideoContainer } from "./Styled.streamPlace";
import stream from "./SkyrusHubVideo.mp4";

interface Props {
  endStream: () => void;
}

export const StreamComponent: React.FC<Props> = ({ endStream }) => {
    return (
      <VideoContainer>
        <video width="100%" height="100%" autoPlay onEnded={endStream}>
          <source src={stream} type="video/mp4" />
          Seu navegador não suporta o vídeo.
        </video>
      </VideoContainer>
    );
  };