const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Calculate the total number of batteries using reduce
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

console.log("Total batteries assembled:", totalBatteries);
