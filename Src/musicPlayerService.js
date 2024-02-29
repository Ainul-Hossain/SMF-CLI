import TrackPlayer, { Event } from "react-native-track-player";

export async function playBackService() {
  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play(); // Added parentheses to invoke the function
  });
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause(); // Added parentheses to invoke the function
  });
  TrackPlayer.addEventListener(Event.RemoteStop, () => {
    TrackPlayer.stop(); // Added parentheses to invoke the function
  });
  TrackPlayer.addEventListener(Event.RemoteSkip, () => {
    TrackPlayer.skip(); // Added parentheses to invoke the function
  });

}
