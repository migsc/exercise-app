export type BottomTabParamList = {
  WorkoutsTab: undefined;
};

export type WorkoutsListParamList = {
  WorkoutsListScreen: undefined;
  // WorkoutDetailScreen: undefined;
};

export type WorkoutDetailParamList = {
  WorkoutDetailScreen: undefined;
};

export type WorkoutsStackParamList = {
  WorkoutsListScreen: undefined;
  WorkoutDetailScreen: undefined;
};

export type RootStackParamList = {
  WorkoutsList: WorkoutsListParamList;
};

export enum SetType {
  Timed = "TIMED",
  Rep = "REP",
}

export interface Set {
  id: string;
  name: string;
  type: string;
  duration?: number;
  reps?: number;
}

export interface Workout {
  id: string;
  name: string;
  dateLastCompleted?: Date;
  sets: Set[];
}
