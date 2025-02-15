import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {driverContent} from '../../ComanScreens/DriverContent';
import {fontSize, screenSize, themeColor} from '../../../constant';
import {useNavigation} from '@react-navigation/native';

const SetAll = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text style={style.title}>{driverContent.setAllTitle}</Text>
      <Text style={style.text}>{driverContent.setAllTxt}</Text>
      <TouchableOpacity
        style={style.btn}
        onPress={() => navigation.navigate('RaidoChoose')}>
        <Text style={style.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: screenSize.containerPaddingVertical,
    width: screenSize.wrapperWidth,
    alignSelf: 'center',
  },
  title: {
    fontSize: fontSize.title,
    color: themeColor.titleColor,
    textAlign: 'justify',
  },
  text: {
    color: themeColor.txtColor,
    fontSize: fontSize.txt,
    marginVertical: 20,
  },
  btn: {
    width: screenSize.btnWidth,
    padding: screenSize.btnPadding,
    alignSelf: 'center',
    backgroundColor: themeColor.driverBtnBgColor,
    borderRadius: screenSize.btnRadius,
    marginTop: screenSize.btnTopMargin,
  },
  btnText: {
    fontSize: fontSize.btnTxt,
    alignSelf: 'center',
    color: themeColor.bgCard,
  },
});

export default SetAll;
