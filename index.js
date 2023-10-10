const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here// Define an array of batteries with values
const batteries = [
    { type: 'AA', count: 7 },
    { type: 'AAA', count: 8 },
    { type: 'C', count: 7 },
    { type: 'D', count: 9 },
  ];
  
  // Reducer function to calculate the total number of batteries
  function batteryReducer(batteries) {
    return batteries.reduce((total, battery) => {
      return total + battery.count;
    }, 0);
  }
  
  // Create a variable to store the total number of batteries
  const totalBatteries = batteryReducer(batteries);
  
  console.log(`Total batteries assembled: ${totalBatteries}`);
  
  // Export the totalBatteries variable if needed
  module.exports = { totalBatteries };
  

