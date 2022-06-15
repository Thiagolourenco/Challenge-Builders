/**
 * @format
 */

import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';

import useStyles from './Home.style';

const Home = (): JSX.Element => {
  const [dataForecasts, setDataForecasts] = useState();
  const [days, setDays] = useState([]);

  const styles = useStyles();

  const data = [0, 1, 2, 3, 4, 5, 6];

  useEffect(() => {
    LoadForecasts();
    LoadForecastsDayts();
  }, []);

  const LoadForecasts = async () => {
    try {
      // Pegar data atual, atráves do Timezone

      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?lat=-3.9014&lon=-38.3911&units=metric&lang=pt_br&appid=7aab7fb1cf46d47793aaefc9cbab1f90',
      );

      setDataForecasts(response.data);
    } catch (error) {
      console.log('ERRO => ', error);
    }
  };

  // Melhorar

  const LoadForecastsDayts = async () => {
    try {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/onecall?lat=-3.9014&lon=-38.3911&units=metric&lang=pt_br&exclude=hourly,minutely&appid=7aab7fb1cf46d47793aaefc9cbab1f90',
      );

      setDays(response.data.daily);

      console.log('RESPONSE => ', response.data);
    } catch (error) {
      console.log('ERROR => ', error);
    }
  };

  const NewForecasts = ({item}) => {
    const newData = new Date(item.dt * 1000);
    const daysArray = ['Dom', 'Seg', 'Ter', 'Qua', 'Quin', 'Sex', 'Sab'];
    const newDay = daysArray[newData.getDay()];

    return (
      <View style={styles.nextForecastsContent}>
        <Text style={styles.nextForecastsContentDay}>{newDay}</Text>

        <Text style={styles.nextForecastsContentNumberMax}>
          {item.temp.max}
        </Text>
        <Text style={styles.nextForecastsContentNumberMin}>
          {item.temp.min}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentInfo}>
        <Text style={styles.textLocation}>{dataForecasts?.name}</Text>

        <Text style={styles.textTemperature}>{dataForecasts?.main.temp}</Text>
        <Text style={styles.textStatus}>
          {dataForecasts?.weather[0].description}
        </Text>
      </View>

      <View style={styles.weatherInformation}>
        <View style={styles.weatherInformationContent}>
          <Text style={styles.weatherInformationContentTextPerc}>30%</Text>
          <Text style={styles.weatherInformationContentText}>Precipitação</Text>
        </View>
        <View style={styles.weatherInformationContent}>
          <Text style={styles.weatherInformationContentTextPerc}>
            {dataForecasts?.main?.humidity}%
          </Text>
          <Text style={styles.weatherInformationContentText}>Humidade</Text>
        </View>
        <View style={styles.weatherInformationContent}>
          <Text style={styles.weatherInformationContentTextPerc}>
            {dataForecasts?.wind.speed}%
          </Text>
          <Text style={styles.weatherInformationContentText}>
            Velocidade do Vento
          </Text>
        </View>
      </View>

      <View style={styles.nextForecasts}>
        <Text style={styles.nextForecastsText}>Previsão de 7 dias</Text>
        <FlatList
          data={days}
          renderItem={NewForecasts}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Home;
