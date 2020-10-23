import * as React from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import { ListItem, Header, Button } from "react-native-elements";
import { StackNavigationProp } from "@react-navigation/stack";
import { v4 as uuid } from "uuid";
import { Text, View } from "../components/Themed";
import { RootStackParamList, Workout, SetType } from "../types";
import { workouts as workoutsInitialData } from "../data";
import useAsyncStorageState from "../hooks/useAsyncStorageState";
import AsyncStorage from "@react-native-community/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";

//() => setWorkouts([...workouts, { name: "Test", sets: [] }])

type FloatingActionButtonProps = {
  title?: string;
  iconName?: string;
  onPress?: any;
};

function FloatingActionButton({
  title = "",
  iconName = "question",
  onPress = () => {},
}: FloatingActionButtonProps) {
  return (
    <Button
      containerStyle={{
        position: "absolute",
        // alignItems: "center",
        // justifyContent: "center",
        right: 30,
        bottom: 30,
      }}
      buttonStyle={{
        width: 65,
        height: 65,
        borderRadius: 65,
      }}
      title={title}
      icon={<Icon name={iconName} size={15} color="white" />}
      onPress={onPress}
    />
  );
}

type WorkoutsListNavigationProp = StackNavigationProp<
  RootStackParamList,
  "WorkoutsList"
>;

type Props = {
  navigation: WorkoutsListNavigationProp;
};

function getEmptyWorkout(): Workout {
  return {
    id: uuid(),
    name: "Untitled",
    sets: [],
  };
}

export default function WorkoutsList({ navigation }: Props) {
  const [workouts, setWorkouts] = useAsyncStorageState(
    "@workouts",
    workoutsInitialData
  );

  const handleViewWorkout = (workout) => {
    navigation.navigate("WorkoutDetailScreen", { workout });
  };

  const handleAddWorkout = () => {
    const workout = getEmptyWorkout();
    navigation.navigate("WorkoutEditScreen", { workout });
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContent}
          data={workouts}
          renderItem={({ item, index: indexSet }) => (
            <ListItem
              onPress={() => handleViewWorkout(item)}
              style={styles.listItem}
              key={item.name}
              bottomDivider
            >
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Content
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <ListItem.Chevron />
              </ListItem.Content>
            </ListItem>
          )}
        />
      </View>
      <FloatingActionButton iconName="plus" onPress={handleAddWorkout} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
