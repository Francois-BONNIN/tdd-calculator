export function add(numbers: string): number {
  if (numbers === "") return 0;

  if (numbers.endsWith(",") || numbers.endsWith("\n")) {
    throw new Error("Invalid input: Trailing separator");
  }
  const nums = numbers.split(/[\n,]/).map(Number);
  return nums.reduce((acc, num) => acc + num, 0);
}
