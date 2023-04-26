const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Calculate the sum of all battery amounts using reduce()
const totalBatteries = batteryBatches.reduce((acc, curr) => acc + curr, 0);

console.log(totalBatteries); // Output: 31

