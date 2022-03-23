export function greeter(name: string) {
  return `Olá ${name}`;
};

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
};

export function add(x: number, y: number): number {
  return x + y;
};

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
};

export function triangle(base: number, height: number): number {
  return (base * height / 2);
};

export function square(side: number): number {
  return Math.pow(side, 2);
};

export function rectangle(base: number, height: number): number {
  return base * height;
};

export function trapeze(majorDiag: number, minorDiag: number, height: number): number {
  return (majorDiag + minorDiag) * height / 2;
};

export function diamond(D: number, d: number): number {
  return (D + d) / 2;
};

export function circumference(r: number): number {
  return Math.PI * Math.pow(r, 2);
};