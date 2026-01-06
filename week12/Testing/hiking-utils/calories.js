export function caloriesBurned(weightInKg, distanceInKm) {
    if (typeof(weightInKg) !== "number" || typeof(distanceInKm) !== "number" || weightInKg <= 0 || distanceInKm <= 0) return false
    return weightInKg * distanceInKm * 1.036
} 
