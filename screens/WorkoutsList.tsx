import * as React from "react";
import { StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button } from "react-native-elements";

import { Text, View } from "../components/Themed";
import { RootStackParamList } from "../types";

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
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button
        onPress={() => navigation.navigate("WorkoutDetailScreen")}
        title="go to workout detail "
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
