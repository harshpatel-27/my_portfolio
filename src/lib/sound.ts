import { Howl } from "howler";

export const sounds = {
  //   start: new Howl({
  //     src: ["/sounds/start.wav"],
  //     volume: 0.6,
  //   }),

  //   after: new Howl({
  //     src: ["/sounds/after.wav"],
  //     volume: 0.6,
  //   }),

  background: new Howl({
    src: ["/sounds/background.mp3"],
    loop: true, // 🔁 non-stop
    volume: 0.15, // soft background
  }),
};
