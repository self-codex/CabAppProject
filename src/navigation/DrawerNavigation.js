import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {
  DriverEarning,
  DriverHelp,
  DriverNotification,
  DriverProfile,
  DriverSetting,
  DriverTrips,
  DriverWallet,
} from './driverScreens';
import {fontSize, themeColor} from '../constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: themeColor.driverBtnBgColor,
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: themeColor.txtColor,
        drawerLabelStyle: {
          fontSize: fontSize.txt,
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={DriverProfile}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Earning"
        component={DriverEarning}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="cash-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Trips"
        component={DriverTrips}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="car-sport-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={DriverSetting}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Wallet"
        component={DriverWallet}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="card-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={DriverNotification}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="notifications-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={DriverHelp}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="help-outline" size={22} color={color} />
          ),
        }}
      />
      {/* <Drawer.Screen name="Raide Complete" component={RaideComplete} /> */}
    </Drawer.Navigator>
  );
};

// cutom drawer navigation
const CustomDrawer = props => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          // backgroundColor: themeColor.driverBtnBgColor,
          borderRadius: 20,
        }}>
        {/* profile  */}
        <TouchableOpacity
          style={{
            padding: 20,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            margin: -4,
            backgroundColor: themeColor.driverBtnBgColor,
          }}
          onPress={() => navigation.navigate('DriverEditAccount')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/img/profile.jpg')}
              style={{width: 80, height: 80, borderRadius: 35}}
            />
            <View style={{marginLeft: 15}}>
              <Text
                style={{
                  fontSize: fontSize.normalTitle,
                  fontWeight: fontSize.bold,
                  color: themeColor.titleColor,
                }}>
                OKALA
              </Text>
              <Text style={{fontSize: fontSize.txt, color: themeColor.white}}>
                4.94.1234
              </Text>
              <Text style={{fontSize: fontSize.txt, color: themeColor.white}}>
                ABCD-1818
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* item list style */}
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 20}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          justifyContent: 'center',
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: themeColor.bgCard,
        }}>
        <TouchableOpacity
          style={style.btn}
          onPress={() => navigation.navigate('DriverShareApp')}>
          <Ionicons name="share-social-outline" style={style.icon} />
          <Text style={style.text}>Tall a Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btn}>
          <Ionicons name="log-out-outline" style={style.icon} />
          <Text style={style.text}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {flexDirection: 'row', alignItems: 'center', marginVertical: 10},
  icon: {
    color: themeColor.driverIconColor,
    fontSize: 25,
    fontWeight: fontSize.bold,
  },
  text: {
    fontSize: fontSize.txt,
    color: themeColor.titleColor,
    marginLeft: 10,
    fontWeight: fontSize.bold,
  },
});

export default DrawerNavigation;
