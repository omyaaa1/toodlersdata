export type WeatherSnapshot = {
  location: string;
  temp: number;
  humidity: number;
  wind: number;
  rainChance: number;
  condition: string;
};

export function getMockWeather(): WeatherSnapshot {
  return {
    location: "Andhra Pradesh, IN",
    temp: 29,
    humidity: 52,
    wind: 12,
    rainChance: 35,
    condition: "Partly Cloudy",
  };
}
