/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

const calculateNewVelocity = ({ givenVelocity, acceleration, time }) => {
  const givenVelocityInMps = (givenVelocity * 1000) / 3600; // Function converts velocity from km/h to m/s
  const newVelocityInMps = givenVelocityInMps + acceleration * time; // Calculates new velocity in m/s
  return (newVelocityInMps * 3600) / 1000; // Function converts new velocity back to km/h
};

try {
  // Given parameters 
  const givenParameters = {
    initialVelocity: 10000, // / velocity (km/h)
    acceleration: 3, // acceleration m/s^2
    time: 3600, // seconds (1 hour)
    initialDistance: 0, // distance (km)
    Fuel: 5000, // remaining fuel (kg)
    fuelBurnRate: 0.5, // fuel burn rate (kg/s)
  };


// Calculates new distance 
  const newDistance =
    givenParameters.initialDistance +
    (givenParameters.initialVelocity * givenParameters.time) / 3600;

  // Calculates the remaining fuel
  const remainingFuel =
  givenParameters.Fuel -
  givenParameters.fuelBurnRate * givenParameters.time;

  // calculates new velocity based on acceleration
  const newVelocity = calculateNewVelocity(givenParameters.acceleration);

  // Console Log to show the new velocity, distance covered, and remaining fuel
  console.log(`Corrected New Velocity: ${newVelocity} km/h`);
  console.log(`Corrected New Distance: ${newDistance} km`);
  console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
} catch (error) {
  // Error console for any errors that occur
  console.error("An error occurred:", error);
}




