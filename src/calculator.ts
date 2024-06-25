export function add(numbers: string): number {
  if (numbers === "") return 0;

  if (numbers.endsWith(","))
    throw new Error("Invalid input: Trailing separator");

  let originalNumbers = numbers;
  let delimiter = /[\n,]/;
  let expectedDelimiter = ", or newline";

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n", 2);
    delimiter = new RegExp(`[${parts[0].slice(2)}]`);
    expectedDelimiter = parts[0].slice(2);
    numbers = parts[1];
  }

  const nums = numbers.split(delimiter).map(Number);

  if (nums.some(isNaN)) {
    const pos = originalNumbers.search(/[^0-9,\n]/);
    const foundChar = originalNumbers[pos];
    throw new Error(
      `'${expectedDelimiter}' expected but '${foundChar}' found at position ${pos}`
    );
  }
  return nums.reduce((acc, curr) => acc + curr, 0);
}
