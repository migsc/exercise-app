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
    name: "Jump Rope Pyramids",
    sets: idify([
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
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 6,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 25,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 7,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 30,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 8,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 35,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 9,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 40,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 45,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 50,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 55,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 60,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 65,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 70,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 75,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 70,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 65,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 60,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 55,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 50,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 45,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 40,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 10,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 35,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 9,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 30,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 8,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 25,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 7,
      },
      {
        name: "jump rope",
        type: SetType.Timed,
        duration: 20,
      },
      {
        name: "rest",
        type: SetType.Timed,
        duration: 6,
      },
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
    ]),
  },
]);
