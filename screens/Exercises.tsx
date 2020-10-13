import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import { ListItem, Header, Button } from "react-native-elements";
import dayjs from "dayjs";

enum ExerciseType {
  Timed = "TIMED",
  Rep = "REP",
}

interface Exercise {
  name: string;
  type: string;
  duration?: number;
  reps?: number;
}

const sets = [
  { name: "jumping jacks", type: ExerciseType.Timed, duration: 60 },
  { name: "wall sit", type: ExerciseType.Timed, duration: 45 },
  { name: "pushups", type: ExerciseType.Timed, duration: 30 },
  { name: "box crunches", type: ExerciseType.Timed, duration: 60 },
  { name: "step ups", type: ExerciseType.Timed, duration: 60 },
  { name: "squats", type: ExerciseType.Timed, duration: 60 },
  { name: "tricep dips", type: ExerciseType.Timed, duration: 60 },
  { name: "plank core", type: ExerciseType.Timed, duration: 60 },
  { name: "high knees", type: ExerciseType.Timed, duration: 60 },
  { name: "lunges", type: ExerciseType.Timed, duration: 60 },
  { name: "push up rotations", type: ExerciseType.Timed, duration: 60 },
  {
    name: "side planks",
    type: ExerciseType.Timed,
    duration: 60,
    twoSided: true,
  },
  // more items
];

import { Text, View } from "../components/Themed";

const useStopWatch = () => {
  const [isRunning, setIsRunning] = React.useState(false);
  const [secondsElapsed, setSecondsElapsed] = React.useState(0);
  const [intervalID, setIntervalID] = React.useState<NodeJS.Timeout>();

  const increment = () => setSecondsElapsed(secondsElapsed + 1);

  const start = () => {
    if (!intervalID) {
      setIntervalID(setInterval(increment, 1000));
    }
  };

  const stop = () => {
    clearInterval(intervalID);
  };

  React.useEffect(() => {
    const intervalID = setInterval(() => increment, 1000);
    return () => clearInterval(intervalID);
  }, []);
};

// const keyExtractor = (item, index) => index.toString();

export default function Exercises() {
  const [isRunning, setIsRunning] = React.useState(false);
  const [indexActiveSet, setIndexActiveSet] = React.useState(0);

  useStopWatch();

  const handleStartWorkout = () => {
    setIsRunning(true);
  };

  const handlePauseWorkout = () => {
    setIsRunning(false);
  };

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.header}
        rightComponent={
          isRunning ? (
            <Button
              onPress={handlePauseWorkout}
              style={{ margin: 0, padding: 0 }}
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
              style={{ margin: 0, padding: 0 }}
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
        renderItem={({ item }) => (
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
              <ListItem.Title>{item.duration.toString()}s</ListItem.Title>
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
