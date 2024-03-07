import { faker } from "@faker-js/faker";

export const generateLondonWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generateDublinWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generateRomeWeatherData = (): WeatherData => {
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: 2, max: 17 }),
    humidity: faker.number.int({ min: 35, max: 80  }),
    wind: faker.number.int({ min: 1, max: 3 }),
    rain: faker.number.int({ min: 0, max : 0}),
  };
  return generatedWeatherData;
};

export const generateLondonWeatherDailyData = (): WeatherDailyData => {
  const generatedWeatherDailyData ={
    dayOne: 12,
    dayTwo: 15,
    dayThree: 11,
  };
  return generatedWeatherDailyData;
};

