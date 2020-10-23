import * as React from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import {
  ListItem,
  Header,
  Button,
  Input,
  Divider,
} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, View } from "../components/Themed";
import { Workout, SetType } from "../types";

type Props = {
  route: { params: { workout: Workout } };
};

export default function WorkoutEdit({
  route: {
    params: { workout },
  },
}: Props) {
  const [state, setState] = React.useState(workout);

  const [addForm, setAddForm] = React.useState({
    name: "",
    type: SetType.Timed,
    duration: 0,
  });

  const handleAddSet = () => {
    handleAddSet();
  };

  const handleAddFormNameChange = (value: string) => {
    setAddForm({ ...addForm, name: value.toLowerCase() });
  };

  const handleAddFormDurationChange = (value: string) => {
    if (Number.isNaN(value)) {
      return;
    }

    setAddForm({ ...addForm, duration: Number(value) });
  };

  return (
    <>
      <View style={styles.container}>
        <Input
          label="Workout Title"
          placeholder="Name this workout"
          value={state.name}
        />

        <Divider />

        <FlatList
          style={styles.list}
          data={
            [
              {
                name: "jump rope",
                type: SetType.Timed,
                duration: 15,
              },
              {
                name: "rest",
                type: SetType.Timed,
                duration: 5,
              },
            ] || state.sets
          }
          renderItem={({ item, index: indexSet }) => (
            <ListItem
              //   onPress={() => handleViewWorkout(item)}
              //   style={styles.listItem}

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
                <ListItem.Title>{item.duration}s</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          )}
        />

        <ListItem
          //   onPress={() => handleViewWorkout(item)}
          containerStyle={styles.addForm}
          bottomDivider
        >
          <ListItem.Content>
            <Input
              placeholder="Name"
              value={addForm.name}
              onChangeText={handleAddFormNameChange}
            />

            <Input
              placeholder="Duration"
              value={addForm.duration.toString()}
              onChangeText={handleAddFormDurationChange}
            />
          </ListItem.Content>
        </ListItem>
        <Button
          onPress={handleAddSet}
          title="Add set"
          icon={<Icon name={"plus"} size={15} color="white" />}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%",
  },
  addForm: {
    width: "100%",
    padding: 8,
  },
});
