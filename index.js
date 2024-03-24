// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    const headQuarters = 42;
    return Math.abs(pickupLocation - headQuarters);
}

function distanceFromHqInFeet(pickupLocation){
    const numberOfBlocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return numberOfBlocks * feetPerBlock;
}

function distanceTravelledInFeet(startBlock, destinationBlock){
    const feetPerBlock = 264;
    const feetTravelled = Math.abs(startBlock - destinationBlock) * feetPerBlock;
    return feetTravelled;
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = Math.abs(start - destination);

    if (distanceInFeet <= 400) {
        return 0; // Free sample
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return parseFloat(((distanceInFeet - 400) * 0.02).toFixed(2)); // 2 cents per foot after the first 400 feet
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25; // $25 for a distance over 2000 feet
    } else {
        return "cannot travel that far"; // Rides over 2500 feet are not allowed
    }
}

module.exports = calculatesFarePrice;