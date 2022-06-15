/**
 * @format
 */

import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ListRenderItem} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {APP_ID} from '@env';

import {Daily, DataForecasts} from '../../@types';
import {Indicator, Button} from '../../components';
import {api} from '../../services';

import useStyles from './Home.style';

const Home = (): JSX.Element => {
  const [dataForecasts, setDataForecasts] = useState<DataForecasts>();
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [location, setTocation] = useState({lat: 0, long: 0});

  const styles = useStyles();

  useEffect(() => {
    loadLocation();
    LoadForecasts();
    LoadForecastsDayts();
  }, []);

  const loadLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setTocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      () => {},
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const LoadForecasts = async () => {
    try {
      setLoading(true);
      const response = await api.get(
        `/weather?lat=${location.lat}&lon=${location.long}&units=metric&lang=pt_br&appid=${APP_ID}`,
      );

      setDataForecasts(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const LoadForecastsDayts = async () => {
    try {
      const response = await api.get(
        `/onecall?lat=${location.lat}&lon=${location.long}&units=metric&lang=pt_br&exclude=hourly,minutely&appid=${APP_ID}`,
      );

      setDays(response.data.daily);
    } catch (error) {}
  };

  const NewForecasts: ListRenderItem<Daily> = ({item}) => {
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
      {loading ? (
        <Indicator />
      ) : (
        <>
          <View style={styles.contentInfo}>
            <Text style={styles.textLocation}>{dataForecasts?.name}</Text>

            <Text style={styles.textTemperature}>
              {dataForecasts?.main.temp}
            </Text>
            <Text style={styles.textStatus}>
              {dataForecasts?.weather[0].description}
            </Text>
          </View>

          <View style={styles.weatherInformation}>
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
            <Text style={styles.nextForecastsText}>Próximos Dias</Text>
            <FlatList
              data={days}
              renderItem={NewForecasts}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.viewButton}>
            <Button text="Atualizar" onPress={LoadForecasts} />
          </View>
        </>
      )}
    </View>
  );
};

export default Home;
