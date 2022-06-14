/**
 * @format
 */

import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {NavigationProps} from '../../@types';

import useStyles from './GetStart.style';

type NavigationGetStartProps = StackNavigationProp<NavigationProps, 'Home'>;

const GetStart = (): JSX.Element => {
  const styles = useStyles();

  const {navigate} = useNavigation<NavigationGetStartProps>();

  const handleHome = () => navigate('Home');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Previsão{'\n'} <Text style={styles.subTitle}>Climática</Text>
      </Text>

      <Pressable style={styles.button} onPress={handleHome}>
        <Text style={styles.buttonText}>Ver Previsão</Text>
      </Pressable>
    </View>
  );
};

export default GetStart;
