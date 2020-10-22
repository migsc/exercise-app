import * as React from "react";
import { indexLast, last } from "../utils";
import AsyncStorage from "@react-native-community/async-storage";

export default function useStopWatch(): [
  { seconds: number; laps: number[]; running: boolean; indexLap: number },
  {
    start: () => void;
    pause: () => void;
    reset: () => void;
    lap: () => void;
    getLapSeconds: (index: number) => number;
    getCurrentLapSeconds: () => number;
  }
] {
  const [running, setIsRunning] = React.useState(false);
  const [seconds, setSeconds] = React.useState(0);
  const [laps, setLaps] = React.useState([0]);
  const indexLap = indexLast(laps);

  const start = () => {
    if (!running) {
      setIsRunning(true);
    }
  };

  const pause = () => {
    if (running) {
      setIsRunning(false);
    }
  };

  const reset = () => {
    if (running) {
      pause();
    }
    setSeconds(0);
    setLaps([0]);
  };

  const lap = () => {
    setLaps((laps) => [...laps, 0]);
  };

  const getLapSeconds = (index: number) => {
    return laps[index] || 0;
  };

  const getCurrentLapSeconds = () => laps[indexLap];

  const increment = () => {
    setSeconds((seconds) => seconds + 1);
    setLaps((laps) => [...laps.slice(0, indexLast(laps)), last(laps) + 1]);
  };

  React.useEffect(() => {
    let interval: any = null;
    if (running) {
      // interval = setInterval(increment, 1000);
    } else if (!running && seconds !== 0) {
      // clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, seconds]);

  return [
    {
      seconds,
      laps,
      running,
      indexLap,
    },
    { start, pause, lap, reset, getLapSeconds, getCurrentLapSeconds },
  ];
}
