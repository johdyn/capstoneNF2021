export function calculateTrainEstimate(distance, passengers, radioButton) {
  if (radioButton === 1) {
    return passengers * (distance * 0.029);
  } else if (radioButton === 2) {
    return passengers * (distance * 0.055);
  }
}
