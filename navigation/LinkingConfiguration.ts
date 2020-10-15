import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Workouts: {
            screens: {
              Workouts: "workouts",
              WorkoutDetailScreen: "workouts/:id",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
