import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface IGetStart {
  container: ViewStyle;
  text: TextStyle;
  subTitle: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
}

export default (): IGetStart => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8C9CDE',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
    },
    subTitle: {
      fontSize: 46,
      fontWeight: 'normal',
    },
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
