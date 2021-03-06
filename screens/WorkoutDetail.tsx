import * as React from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import { Header, Button } from "react-native-elements";
import Constants from "expo-constants";
import * as Speech from "expo-speech";
import { indexLast, sum } from "../utils";
import useStopWatch from "../hooks/useStopWatch";
import { Set } from "../types";

import { View } from "../components/Themed";
import { Workout } from "../types";

// const keyExtractor = (item, index) => index.toString();

const announceSet = (set: Set) => {
  Speech.stop();
  const sentence = `${set.name} for ${set.duration} seconds`;
  Speech.speak(sentence, {
    volume: 1,
  });
};

type Props = {
  route: { params: { workout: Workout } };
};

export default function WorkoutDetail({
  route: {
    params: {
      workout: { sets },
    },
  },
}: Props) {
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
          <View style={styles.listItem} key={item.name}>
            <View>
              <Text>{item.name}</Text>
            </View>
            <View>
              <Text>{item.duration - getLapSeconds(indexSet)}s</Text>
            </View>
          </View>
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
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e0e0e0",
  },
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
