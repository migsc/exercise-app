import { v4 as uuid } from "uuid";

export const indexLast = (arr: any[]) => arr.length - 1;

export const last = (arr: any[]) => arr[arr.length - 1];

export const sum = (arr: number[]) => arr.reduce((total, n) => total + n, 0);

// (new Date).getTime().toString() + Math.random().toString().slice(2)

export const idify = (arr: any[]) => {
  let i = -1;
  return arr.map((item) => ({ id: uuid(), ...item }));
};
