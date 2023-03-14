import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
// map
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyDfKXLt9G6V5tpNtT5dY9GbhZS-FC60xXU';

import React, {useRef, useState} from 'react';
import {fontSize, themeColor} from '../../constant';

const {width} = Dimensions.get('screen');
const UserMainScreen = () => {
  const [location, setLocation] = useState({
    pickupCords: {
      latitude: 31.4545,
      longitude: 74.351,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    dropLocationCords: {
      latitude: 31.4758,
      longitude: 74.3426,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });
  const mapRef = useRef();

  const {pickupCords, dropLocationCords} = location;

  return (
    <View style={style.container}>
      {/* top */}
      <View style={{width: '100%', alignItems: 'flex-end'}}>
        <Text style={{marginVertical: 10, marginRight: 10, fontSize: 20}}>
          User Name
        </Text>
        <View style={{width: '100%'}}>
          <Image
            source={require('../../assets/img/location.png')}
            style={{width: width, height: 250}}
          />
          <View
            style={[
              StyleSheet.absoluteFill,
              {justifyContent: 'center', width: width - 160, marginLeft: 20},
            ]}>
            <Text
              style={{
                fontSize: fontSize.title,
                color: themeColor.btnBgColorTwo,
              }}>
              Make your life much easier
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: themeColor.bgColorOne,
                marginVertical: 15,
              }}>
              Order now & get 50% off of your first ride
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: themeColor.btnBgColorTwo,
                width: 100,
                padding: 8,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontSize: fontSize.btnTxt,
                  color: themeColor.btnTxtColor,
                }}>
                Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* center side */}
      <View
        style={{
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
          width: '80%',
        }}>
        <Text
          style={{
            fontSize: fontSize.title,
            marginVertical: 10,
            alignSelf: 'flex-start',
            color: themeColor.titleColor,
          }}>
          Select E-Rickshaw
        </Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#DCDCDC',
            height: 150,
            alignItems: 'center',
            padding: 20,
            borderRadius: 30,
          }}>
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: fontSize.title, fontWeight: fontSize.bold}}>
              Ride
            </Text>
            <Text style={{fontSize: fontSize.txt, color: 'gray'}}>
              Book E-Rickshaw on the go
            </Text>
          </View>
          <Image
            source={require('../../assets/img/car.png')}
            style={{height: 110, width: 130, borderRadius: 20, marginLeft: 10}}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#DCDCDC',
            width: width - 60,
            height: 60,
            marginVertical: 15,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <Text style={{fontSize: fontSize.btnTxt, fontWeight: fontSize.bold}}>
            Where to Go
          </Text>
        </TouchableOpacity>
      </View>
      {/* bottom  */}

      <View
        style={{
          flex: 1,
          width: width - 60,
        }}>
        <Text
          style={{
            color: themeColor.titleColor,
            fontSize: fontSize.title,
          }}>
          Around You
        </Text>
        <View style={{flex: 1}}>
          {/* <MapView
            style={[StyleSheet.absoluteFill, {borderRadius: 20}]}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          /> */}

          <MapView
            style={StyleSheet.absoluteFill}
            ref={mapRef}
            initialRegion={pickupCords}>
            <Marker coordinate={pickupCords} />
            {/* <Marker coordinate={dropLocationCords} /> */}
            {/* <MapViewDirections
              origin={pickupCords}
              destination={dropLocationCords}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="red"
              optimizeWaypoints={true}
              // splitWaypoints={true}
              onReady={result => {
                mapRef.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: 30,
                    bottom: 200,
                    right: 30,
                    top: 100,
                  },
                });
              }}
            /> */}
          </MapView>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default UserMainScreen;
