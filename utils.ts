export const indexLast = (arr: any[]) => arr.length - 1;

export const last = (arr: any[]) => arr[arr.length - 1];

export const sum = (arr: number[]) => arr.reduce((total, n) => total + n, 0);

export const idify = (arr: any[]) => {
  let i = -1;
  return arr.map((item) => ({ id: (++i).toString(), ...item }));
};
