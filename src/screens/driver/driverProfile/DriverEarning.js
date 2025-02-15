import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import UserProfileHeader from '../../../components/UserProfileHeader';
import {fontSize, screenSize, themeColor} from '../../../constant';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DriverEarning = () => {
  return (
    <View style={style.container}>
      <UserProfileHeader
        iconColor={themeColor.driverIconColor}
        title={'Earnings'}
      />

      <View style={style.body}>
        <Text style={{color: themeColor.txtColor}}>May 23-2022</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={style.normalTiltle}>Total Cash</Text>
          <Text style={style.normalTiltle}>RS 70,805</Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 25,
            justifyContent: 'space-between',
          }}>
          <Card icon="star-outline" title="Rating " text="100%" />
          <Card icon="timer-outline" title="Available Hours " text="00:00:00" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 25,
            justifyContent: 'space-between',
          }}>
          <Card icon="compass-outline" title="Acceptance Rate " text="100%" />
          <Card
            icon="checkmark-done-outline"
            title="Ride Completion"
            text="100%"
          />
        </View>
        <View style={style.cashView}>
          <Cash title="Cash Trips" text="0.0" />
          <Cash title="Credit Trips " text="0.0" />
          <Cash title="Bonu" text="0.0" />
          <Cash title="Passenger Cancel " text="0.0" />
          <Cash title="Driver Cancel" text="0.0" />
          <Cash title="Tex" text="0.0" />
        </View>
        <View style={{width: screenSize.wrapperWidth, alignSelf: 'center'}}>
          <Text
            style={{
              fontSize: fontSize.normalTitle,
              color: themeColor.titleColor,
            }}>
            Invite someone
          </Text>
          <Text
            style={{
              fontSize: fontSize.txt,
              color: themeColor.txtColor,
            }}>
            Make up to PKR 1,000 for each new Driver for you Invite who
            completes 50 trips. Terms apply
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const Card = ({title, text, icon}) => {
  return (
    <View
      style={{
        flex: 1,
        padding: screenSize.btnPadding,
        backgroundColor: themeColor.bgCard,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        elevation: 2,
        borderRadius: 10,
      }}>
      <Ionicons name={icon} style={style.icon} />
      <View style={{flex: 1}}>
        <Text style={{color: themeColor.txtColor}}>{text}</Text>
        <Text style={{color: themeColor.txtColor}}>{title}</Text>
      </View>
    </View>
  );
};

const Cash = ({title, text}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingVertical: 15,
        borderColor: themeColor.bgColor,
      }}>
      <Text style={style.text}>{title}</Text>
      <Text style={style.text}>RS {text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: screenSize.containerPaddingVertical,
  },
  body: {
    width: screenSize.wrapperWidth,
    marginVertical: 10,
    borderBottomWidth: 1,
    paddingBottom: 15,
    borderColor: themeColor.bgColor,
    alignSelf: 'center',
  },
  cashView: {
    flex: 1,
    marginVertical: 20,
    paddingHorizontal: 15,
    paddingBottom: 20,
    backgroundColor: themeColor.bgCard,
    width: screenSize.wrapperWidth,
    borderRadius: 10,
    alignSelf: 'center',
    elevation: 1,
    borderBottomWidth: 0.01,
  },
  normalTiltle: {
    color: themeColor.titleColor,
    fontSize: fontSize.normalTitle,
  },
  icon: {
    color: themeColor.white,
    marginRight: 10,
    backgroundColor: themeColor.driverIconColor,
    padding: 5,
    paddingHorizontal: 6,
    borderRadius: screenSize.btnRadius,
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: themeColor.txtColor,
    fontSize: fontSize.txt,
  },
});

export default DriverEarning;
