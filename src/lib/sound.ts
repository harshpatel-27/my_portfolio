import { Howl } from "howler";

export const sounds = {
  startButton: new Howl({
    src: ["/sounds/start_button.mp3"],
    volume: 0.6,
  }),

  missionOpen: new Howl({
    src: ["/sounds/mission_sound.mp3"],
    volume: 0.6,
  }),

  background: new Howl({
    src: ["/sounds/background.mp3"],
    // loop: true, // non-stop
    volume: 0.05, // soft background
  }),
};
