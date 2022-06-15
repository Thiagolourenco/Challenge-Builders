import {StyleSheet, ViewStyle} from 'react-native';

interface IindicatorStyles {
  indicator: ViewStyle;
}

export default (): IindicatorStyles => {
  return StyleSheet.create({
    indicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
