import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import { ListItem, Header, Button } from "react-native-elements";
import { StackNavigationProp } from "@react-navigation/stack";

import { Text, View } from "../components/Themed";
import { RootStackParamList, Workout, SetType } from "../types";
import { workouts } from "../data";

type WorkoutsListNavigationProp = StackNavigationProp<
  RootStackParamList,
  "WorkoutsList"
>;

type Props = {
  navigation: WorkoutsListNavigationProp;
};

export default function WorkoutsList({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={workouts}
        renderItem={({ item, index: indexSet }) => (
          <ListItem
            onPress={() =>
              navigation.navigate("WorkoutDetailScreen", { workout: item })
            }
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
