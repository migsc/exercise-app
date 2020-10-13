import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import { ListItem, Header, Button } from "react-native-elements";
import Constants from "expo-constants";
import * as Speech from "expo-speech";
import { indexLast, sum, idify } from "../utils";
import useStopWatch from "../hooks/useStopWatch";

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
    duration: 30,
  },
  {
    name: "rest",
    type: SetType.Timed,
    duration: 10,
  },
  { name: "pushups", type: SetType.Timed, duration: 30 },
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
    name: "side planks right side",
    type: SetType.Timed,
    duration: 60,
    twoSided: true,
  },
  {
    name: "side planks left side",
    type: SetType.Timed,
    duration: 60,
    twoSided: true,
  },
  // more items
]);

import { Text, View } from "../components/Themed";

// const keyExtractor = (item, index) => index.toString();

const announceSet = (set: Set) => {
  Speech.stop();
  const sentence = `${set.name} for ${set.duration} seconds`;
  Speech.speak(sentence, {
    volume: 1,
  });
};

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
    announceSet(sets[indexCurrentSet]);
  };

  const handlePauseWorkout = () => {
    pauseStopWatch();
  };

  const handleStopWorkout = () => {
    resetStopWatch();
  };

  const handleMoveToNextSet = () => {
    if (indexCurrentSet === indexLast(sets)) {
      pauseStopWatch();
      Speech.stop();
      Speech.speak("done");
    } else {
      announceSet(sets[indexCurrentSet + 1]);
      lapStopWatch();
    }
  };

  // Auto lapping
  React.useEffect(() => {
    if (getCurrentLapSeconds() === sets[indexCurrentSet].duration) {
      handleMoveToNextSet();
    }
  }, [laps]);

  React.useEffect(() => {
    (async () => {
      const voices = await Speech.getAvailableVoicesAsync();
      console.log({ voices });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.header}
        leftComponent={
          <Button
            onPress={handleStopWorkout}
            icon={{
              type: "font-awesome",
              name: "times",
              size: 26,
              color: "white",
            }}
          />
        }
        centerComponent={
          stopWatchIsRunning ? (
            <Button
              title="Skip"
              type="solid"
              icon={{
                name: "fast-forward",
                size: 26,
                color: "white",
              }}
              iconRight
              onPress={handleMoveToNextSet}
            />
          ) : null
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
        contentContainerStyle={styles.listContent}
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
                {item.duration - getLapSeconds(indexSet)}s
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
  listContent: {
    paddingBottom: 100,
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
