/**
 * @format
 */

import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface IHomeStyle {
  container: ViewStyle;
  contentInfo: ViewStyle;
  textLocation: TextStyle;
  textInfo: TextStyle;
  textTemperature: TextStyle;
  textStatus: TextStyle;
  weatherInformation: ViewStyle;
  weatherInformationContent: ViewStyle;
  weatherInformationContentText: TextStyle;
  weatherInformationContentTextPerc: TextStyle;
  nextForecasts: ViewStyle;
  nextForecastsText: TextStyle;
  nextForecastsContent: ViewStyle;
  nextForecastsContentDay: TextStyle;
  nextForecastsContentNumberMax: TextStyle;
  nextForecastsContentNumberMin: TextStyle;
}

export default (): IHomeStyle => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8C9CDE',
    },
    contentInfo: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 32,
    },
    textLocation: {
      fontSize: 14,
      color: '#fff',
      fontWeight: 'bold',
      marginBottom: 4,
      // marginVertical: 8,
    },
    textInfo: {
      fontSize: 14,
      color: '#fff',
      fontWeight: '600',
      // marginVertical: 8,
    },
    textTemperature: {
      fontSize: 100,
      fontWeight: 'bold',
      color: '#fff',
    },
    textStatus: {
      fontSize: 18,
      fontWeight: '700',
      color: '#fff',
    },
    weatherInformation: {
      backgroundColor: 'rgba(255,255,255,0.4)',
      marginHorizontal: 20,
      borderRadius: 32,
      paddingVertical: 14,
      opacity: 0.5,
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 28,
    },
    weatherInformationContent: {
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 12,
    },
    weatherInformationContentText: {
      fontSize: 14,
      color: '#3348D6',
      fontWeight: '400',
    },
    weatherInformationContentTextPerc: {
      fontSize: 16,
      color: '#3348D6',
      fontWeight: 'bold',
    },
    nextForecasts: {
      marginHorizontal: 14,
      marginTop: 40,
    },
    nextForecastsText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#3348D6',
    },
    nextForecastsContent: {
      backgroundColor: '#3348D6',
      marginHorizontal: 12,
      paddingVertical: 14,
      paddingHorizontal: 14,
      borderRadius: 30,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center',
    },
    nextForecastsContentDay: {
      fontSize: 14,
      color: '#fff',
      fontWeight: 'bold',
      marginVertical: 6,
    },
    nextForecastsContentNumberMax: {
      fontSize: 14,
      color: '#fff',
      fontWeight: '600',
    },
    nextForecastsContentNumberMin: {
      fontSize: 12,
      color: '#fff',
      fontWeight: '600',
    },
  });
};
