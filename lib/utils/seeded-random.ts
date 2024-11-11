// Seeded random number generator for consistent values between server and client
export class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  // Returns a random number between 0 and 1
  next(): number {
    const x = Math.sin(this.seed++) * 10000;
    return x - Math.floor(x);
  }

  // Returns a random number between min and max
  range(min: number, max: number): number {
    return min + this.next() * (max - min);
  }
}