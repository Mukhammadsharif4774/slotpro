import React from 'react';
import {Text, StyleSheet, ImageBackground, View} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import SlotProHeader from '../components/SlotProHeader';
import SlotProComponent from '../components/SlotProComponent';
import BackgroundImage from '../assets/success_background.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'SlotProHomeScreen'});
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <SlotProHeader />

      <Text style={styles.description}>
        Столик забронирован! {'\n'} Спасибо
      </Text>

      <SlotProComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.white,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  description: {
    paddingVertical: 15,
    textAlign: 'center',
    color: COLORS.main,
    fontFamily: FONTS.black,
    fontSize: 45,
    marginTop: '25%',
  },
});
