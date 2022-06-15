/**
 * @format
 */

import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface IButtonStyle {
  button: ViewStyle;
  buttonText: TextStyle;
}

export default (): IButtonStyle => {
  return StyleSheet.create({
    button: {
      paddingVertical: 12,
      paddingHorizontal: 36,
      backgroundColor: '#575CAC',
      borderRadius: 32,
      marginTop: 32,
    },
    buttonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
  });
};
