import { Ionicons, Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import WorkoutsListScreen from "../screens/WorkoutsList";
import WorkoutDetailScreen from "../screens/WorkoutDetail";
import WorkoutEditScreen from "../screens/WorkoutEdit";
import { BottomTabParamList, WorkoutsStackParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="WorkoutsTab"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="WorkoutsTab"
        component={WorkoutsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo
              name="list"
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const WorkoutsStack = createStackNavigator<WorkoutsStackParamList>();

function WorkoutsNavigator() {
  return (
    <WorkoutsStack.Navigator>
      <WorkoutsStack.Screen
        name="WorkoutsListScreen"
        component={WorkoutsListScreen}
        options={{ headerTitle: "Workouts" }}
      />
      <WorkoutsStack.Screen
        name="WorkoutDetailScreen"
        component={WorkoutDetailScreen}
        options={{ headerTitle: "Workout Detail" }}
      />
      <WorkoutsStack.Screen
        name="WorkoutEditScreen"
        component={WorkoutEditScreen}
        options={{ headerTitle: "Edit Workout" }}
      />
    </WorkoutsStack.Navigator>
  );
}
