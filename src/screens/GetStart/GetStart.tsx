/**
 * @format
 */

import React from 'react';
import {View, Text, Pressable} from 'react-native';

import useStyles from './GetStart.style';

const GetStart = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Previsão{'\n'} <Text style={styles.subTitle}>Climática</Text>
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Ver Previsão</Text>
      </Pressable>
    </View>
  );
};

export default GetStart;
