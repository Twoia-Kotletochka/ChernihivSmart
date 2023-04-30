import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import { getWeather } from './api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  currentWeatherContainer: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  currentWeatherTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherDetailsContainer: {
    marginTop: 8,
  },
  weatherDetailsText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },
  dayContainer: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dayDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeather(48.8566, 2.3522); // Париж, Франция
      setWeatherData(data);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Прогноз погоды</Text>
      {weatherData && (
        <ScrollView>
          {/* текущая погода */}
          <View style={styles.currentWeatherContainer}>
            <Text style={styles.currentWeatherTitle}>Сегодня</Text>
            <Image
              source={{ uri: `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png` }}
              style={styles.weatherIcon}
            />
            <Text>{weatherData.current.weather[0].description}</Text>
            <View style={styles.weatherDetailsContainer}>
              <Text style={styles.weatherDetailsText}>Температура: {weatherData.current.temp}°C</Text>
              <Text style={styles.weatherDetailsText}>Ощущается как: {weatherData.current.feels_like}°C</Text>
              <Text style={styles.weatherDetailsText}>Влажность: {weatherData.current.humidity}%</Text>
              <Text style={styles.weatherDetailsText}>Давление: {weatherData.current.pressure} мм рт.ст.</Text>
              <Text style={styles.weatherDetailsText}>Скорость ветра: {weatherData.current.wind_speed} м/с</Text>
            </View>
          </View>

          {/* прогноз на следующие дни */}
          {weatherData.daily.slice(1, 6).map((day) => (
            <View key={day.dt} style={styles.dayContainer}>
              <Text style={styles.dayTitle}>{new Date(day.dt * 1000).toLocaleDateString()}</Text>
              <Image
                source={{ uri: `https://openweathermap.org/img/w/${day.weather[0].icon}.png` }}
                style={styles.weatherIcon}
              />
              <Text>{day.weather[0].description}</Text>
              <View style={styles.dayDetails}>
                <Text>Утро: {day.temp.morn}°C</Text>
                <Text>День: {day.temp.day}°C</Text>
                <Text>Вечер: {day.temp.eve}°C</Text>
                <Text>Ночь: {day.temp.night}°C</Text>
              </View>
              <View style={styles.dayDetails}>
                <Text>Влажность: {day.humidity}%</Text>
                <Text>Скорость ветра: {day.wind_speed} м/с</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
