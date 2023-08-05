export interface TimePeriod {
  weatherId: number
  period: string
  iconName: string
  visibility: string
  windSpeed: string
  windDir: string
  waveHeight: string
  airTemp: string
  pressure: string
}

export interface ShortWeatherDay {
  synopsis: string
  times: TimePeriod[]
}

export interface ShortWeather {
  name: string
  weatherId: number
  days: ShortWeatherDay[]
  today: string
  synopsis: string
}

export interface LongWeatherDay {
  weatherId: number
  date: string
  minTemp: string
  maxTemp: string
  minWaveHeight: string
  maxWaveHeight: string
  minWindSpeed: string
  maxWindSpeed: string
  description: string
  iconName: string
}

export interface LongWeather {
  name: string | null
  weatherId: number
  days: LongWeatherDay[]
  today: string | null
  airTemp: string | null
}
