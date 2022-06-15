/**
 * @format
 */

import React, {useEffect} from 'react';
import {View, Text, PermissionsAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Button} from '../../components';

import {NavigationProps} from '../../@types';

import useStyles from './GetStart.style';

type NavigationGetStartProps = StackNavigationProp<NavigationProps, 'Home'>;

const GetStart = (): JSX.Element => {
  const styles = useStyles();

  const {navigate} = useNavigation<NavigationGetStartProps>();

  useEffect(() => {
    handleLocation();
  }, []);

  const handleLocation = async () => {
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    } catch (error) {}
  };

  const handleHome = () => navigate('Home');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Previsão{'\n'} <Text style={styles.subTitle}>Climática</Text>
      </Text>

      <Button text="Ver Previsão" onPress={handleHome} />
    </View>
  );
};

export default GetStart;
