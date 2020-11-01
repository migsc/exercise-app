import { Workout, SetType } from "./types";
import { idify } from "./utils";

export const workouts: Workout[] = idify([
  {
    name: "Full Body HIT",
    sets: idify([
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
    ]),
  },
  {
    name: "10 Min Beginner Jump Rope Workout",
    sets: idify([
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jumping jacks",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "air squats",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "pushups",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "high knees",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "butt kickers",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "front lunges",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jumping jacks",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "air squats",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "pushups",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "high knees",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
    ]),
  },
]);
