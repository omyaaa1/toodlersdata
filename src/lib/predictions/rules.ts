type Inputs = {
  temp: number;
  humidity: number;
  soilMoisture: number;
  rainChance: number;
  powerStable: boolean;
};

export function irrigationNeedScore(inputs: Inputs) {
  let score = 0;
  if (inputs.soilMoisture < 35) score += 40;
  if (inputs.temp > 28) score += 20;
  if (inputs.humidity < 50) score += 15;
  if (inputs.rainChance > 60) score -= 30;
  if (!inputs.powerStable) score += 10;
  return Math.max(0, Math.min(100, score));
}

export function cropStressIndex(inputs: Inputs) {
  let score = 0;
  if (inputs.temp > 32) score += 30;
  if (inputs.humidity < 45) score += 20;
  if (inputs.soilMoisture < 30) score += 35;
  if (inputs.rainChance > 70) score -= 10;
  return Math.max(0, Math.min(100, score));
}
