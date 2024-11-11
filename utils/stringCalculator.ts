// utils/stringCalculator.ts

export function add(numbers: string): number {
  if (!numbers) return 0;

  let normalizedStr = numbers.replace(/\\n/g, "\n"); // Convert '\\n' to '\n'

  // Check for custom delimiter at the start, supporting both \n and \r\n
  const customDelimiterMatch = normalizedStr.match(/^\/\/\s*(\S+)\s*\n/);

  if (customDelimiterMatch) {
    const delimiter = customDelimiterMatch[1];
    const numbersString = normalizedStr.slice(customDelimiterMatch[0].length);

    const numbersArray = numbersString.split(delimiter).map(Number);
    // Check for negative numbers
    nagativeNumbers(numbersArray);
    return numbersArray.reduce((sum, num) => sum + num, 0);
  }

  // Default delimiters: comma or newline
  const numArray = normalizedStr
    .split(/[,\n]/)
    .map((num) => Number(num.trim()))
    .filter((num) => !isNaN(num)); // Filter out non-numeric values

  // Check for negative numbers
  nagativeNumbers(numArray);
  return numArray.reduce((sum, num) => sum + num, 0);
}

const nagativeNumbers = (arr: any) => {
  const negatives = arr.filter((num: number) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }
};
