import { WeatherAPIResponseProps } from "@services/getWeatherByCityService";

const currentDay = new Date();
const nextDays = new Date();

nextDays.setDate(nextDays.getDate() + 1);

export const mockWeatherAPIResponse: WeatherAPIResponseProps = {
  list: [
    {
      pop: 0.5,
      main: {
        temp: 20,
        temp_min: 10,
        temp_max: 30,
        feels_like: 15,
        humidity: 50,
        temp_kf: 0,
      },
      wind: {
        speed: 10,
      },
      weather: [
        {
          description: "Céu limpo",
          main: "Clear",
        }
      ],
      dt_txt: currentDay.toISOString(),
    },  
    {
      pop: 0.5,
      main: {
        temp: 20,
        temp_min: 10,
        temp_max: 30,
        feels_like: 15,
        humidity: 50,
        temp_kf: 0,
      },
      wind: {
        speed: 10,
      },
      weather: [
        {
          description: "Céu limpo",
          main: "Clear",
        }
      ],
      dt_txt: nextDays.toISOString(),
    }
  ]
}