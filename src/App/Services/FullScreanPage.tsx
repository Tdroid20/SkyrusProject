import React from 'react';
import { GuideStartView } from '../Docs/Components/GuideStartView';

const FullscreenToggle: React.FC = () => {
 function toggleFullScreen() {
    const doc = document as any;

    if (!doc.fullscreenElement) {
      if (doc.documentElement.requestFullscreen) {
        doc.documentElement.requestFullscreen();
      } else if (doc.documentElement.mozRequestFullScreen) {
        doc.documentElement.mozRequestFullScreen();
      } else if (doc.documentElement.webkitRequestFullscreen) {
        doc.documentElement.webkitRequestFullscreen();
      } else if (doc.documentElement.msRequestFullscreen) {
        doc.documentElement.msRequestFullscreen();
      }
    } else {
      /* if (doc.exitFullscreen) {
        doc.exitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        doc.mozCancelFullScreen();
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      } else if (doc.msExitFullscreen) {
        doc.msExitFullscreen();
      } */
    }
  };
    return (
      <div>
        <GuideStartView exitButton={toggleFullScreen} />
      </div>
    );
}

export default FullscreenToggle;
