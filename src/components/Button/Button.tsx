/**
 * @format
 */

import React from 'react';
import {Text, Pressable} from 'react-native';

import useStyles from './Button.style';

interface IButton {
  onPress: () => void;
  text: string;
}

const Button = ({onPress, text}: IButton) => {
  const styles = useStyles();

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default Button;
