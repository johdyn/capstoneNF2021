export function calculateBusEstimate(distance, passengers, radioButton) {
  if (radioButton === 1) {
    return passengers * (distance * 0.08);
  } else if (radioButton === 2) {
    return passengers * (distance * 0.029);
  }
}
