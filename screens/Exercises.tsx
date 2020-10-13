import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import { ListItem, Header, Button } from "react-native-elements";

import dayjs from "dayjs";

const last = (arr: any[]) => arr[arr.length - 1];
const indexLast = (arr: any[]) => arr.length - 1;
const sum = (arr: number[]) => arr.reduce((total, n) => total + n, 0);
const idify = (arr: any[]) => {
  let i = -1;
  return arr.map((item) => ({ id: (++i).toString(), ...item }));
};

enum SetType {
  Timed = "TIMED",
  Rep = "REP",
}

interface Set {
  id: string;
  name: string;
  type: string;
  duration?: number;
  reps?: number;
}

const sets: Set[] = idify([
  {
    name: "jumping jacks",
    type: SetType.Timed,
    duration: 60,
  },
  {
    name: "rest",
    type: SetType.Timed,
    duration: 10,
  },
  {
    name: "wall sit",
    type: SetType.Timed,
    duration: 45,
  },
  {
    name: "rest",
    type: SetType.Timed,
    duration: 10,
  },
  { name: "pushups", type: SetType.Timed, duration: 30, duration: 5 },
  {
    name: "rest",
    type: SetType.Timed,
    duration: 10,
  },
  { name: "box crunches", type: SetType.Timed, duration: 60 },
  {
    name: "rest",
    type: SetType.Timed,
    duration: 10,
  },
  { name: "step ups", type: SetType.Timed, duration: 60 },
  {
    name: "rest",
    type: SetType.Timed,
    duration: 10,
  },
  { name: "squats", type: SetType.Timed, duration: 60 },
  {
    name: "rest",
    type: SetType.Timed,
    duration: 10,
  },
  { name: "tricep dips", type: SetType.Timed, duration: 60 },
  {
    name: "rest",
    type: SetType.Timed,
    duration: 10,
  },
  { name: "plank core", type: SetType.Timed, duration: 60 },
  {
    name: "rest",
    type: SetType.Timed,
    duration: 10,
  },
  { name: "high knees", type: SetType.Timed, duration: 60 },
  {
    name: "rest",
    type: SetType.Timed,
    duration: 10,
  },
  { name: "lunges", type: SetType.Timed, duration: 60 },
  {
    name: "rest",
    type: SetType.Timed,
    duration: 10,
  },
  { name: "push up rotations", type: SetType.Timed, duration: 60 },
  {
    name: "rest",
    type: SetType.Timed,
    duration: 10,
  },
  {
    name: "side planks",
    type: SetType.Timed,
    duration: 60,
    twoSided: true,
  },
  // more items
]);

import { Text, View } from "../components/Themed";

const useStopWatch = (): [
  { seconds: number; laps: number[]; running: boolean; indexLap: number },
  {
    start: () => void;
    pause: () => void;
    reset: () => void;
    lap: () => void;
    getLapSeconds: (index: number) => number;
    getCurrentLapSeconds: () => number;
  }
] => {
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
      interval = setInterval(increment, 1000);
    } else if (!running && seconds !== 0) {
      clearInterval(interval);
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
};

// const keyExtractor = (item, index) => index.toString();

export default function Exercises() {
  const [
    {
      seconds: totalSecondsElapsed,
      laps,
      indexLap: indexCurrentSet,
      running: stopWatchIsRunning,
    },
    {
      start: startStopWatch,
      pause: pauseStopWatch,
      reset: resetStopWatch,
      lap: lapStopWatch,
      getLapSeconds,
      getCurrentLapSeconds,
    },
  ] = useStopWatch();

  const handleStartWorkout = () => {
    startStopWatch();
  };

  const handlePauseWorkout = () => {
    pauseStopWatch();
  };

  const handleStopWorkout = () => {
    resetStopWatch();
  };

  // Auto lapping
  React.useEffect(() => {
    if (getCurrentLapSeconds() === sets[indexCurrentSet].duration) {
      if (indexCurrentSet === indexLast(sets)) {
        pauseStopWatch();
      } else {
        lapStopWatch();
      }
    }
  }, [laps]);

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.header}
        leftComponent={
          <Button
            onPress={handleStopWorkout}
            icon={{
              type: "font-awesome",
              name: "stop",
              size: 26,
              color: "white",
            }}
          />
        }
        centerComponent={
          <View style={{ flexDirection: "row" }}>
            <Button
              onPress={lapStopWatch}
              type="font-awesome"
              icon={{
                name: "chevron-right",
                size: 26,
                color: "white",
              }}
            />
            <Text>
              {totalSecondsElapsed}s / {laps.join("+")} = {sum(laps)}
            </Text>
          </View>
        }
        rightComponent={
          stopWatchIsRunning ? (
            <Button
              onPress={handlePauseWorkout}
              icon={{
                type: "font-awesome",
                name: "pause",
                size: 26,
                color: "white",
              }}
            />
          ) : (
            <Button
              onPress={handleStartWorkout}
              icon={{
                type: "font-awesome",
                name: "play",
                size: 26,
                color: "white",
              }}
            />
          )
        }
      />

      <FlatList
        style={styles.list}
        data={sets}
        renderItem={({ item, index: indexSet }) => (
          <ListItem style={styles.listItem} key={item.name} bottomDivider>
            {/* <Icon name={item.icon} /> */}
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Content
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <ListItem.Title>
                {item.duration - getLapSeconds(indexSet)}s [{indexSet}]
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    margin: 0,
  },
  list: {
    width: "100%",
  },
  listItem: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
