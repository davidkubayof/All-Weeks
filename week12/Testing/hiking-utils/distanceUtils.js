export function kmToMeters(numOfKm) {
    if ((typeof(numOfKm) !== "number" && isNaN(Number(numOfKm))) || numOfKm<0) return false
    return numOfKm * 1000
}