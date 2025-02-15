import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import React from 'react';
import {fontSize, themeColor} from '../constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DocumentPicker from 'react-native-document-picker';

const UserEdit = ({name, fieldName, iconColor}) => {
  return (
    <TouchableOpacity style={style.btn}>
      <Text style={{color: themeColor.txtColor}}>{fieldName}</Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: themeColor.titleColor,
            fontSize: fontSize.txt,
            fontWeight: fontSize.bold,
          }}>
          {name}
        </Text>
        <Ionicons
          style={[style.icon, {color: iconColor}]}
          name="chevron-forward-outline"
        />
      </View>
    </TouchableOpacity>
  );
};

const ProfileEdit = ({iconColor}) => {
  // cover image
  const coverImage = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
        copyTo: 'cachesDirectory',
      });
      Alert.alert('Alert', 'Cover image upload successful');
    } catch (error) {
      Alert.alert('Alert', 'Image not upload! ');
    }
  };
  // profile image
  const profileImage = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
        copyTo: 'cachesDirectory',
      });
      Alert.alert('Alert', 'Profile image upload successful');
    } catch (error) {
      Alert.alert('Alert', 'Image not upload! ');
    }
  };

  return (
    <View style={style.container}>
      {/* user image */}
      <View style={{height: 250}}>
        {/* cover image */}
        <Image
          source={require('../assets/img/bgimg.jpg')}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <TouchableOpacity
          style={[style.cameraIcon, {top: 15, right: 15, zIndex: 999}]}
          onPress={() => coverImage()}>
          <Ionicons
            style={{fontSize: 30, color: iconColor}}
            name="camera-outline"
          />
        </TouchableOpacity>

        {/* user profile image */}
        <View style={[StyleSheet.absoluteFill, {justifyContent: 'flex-end'}]}>
          <Image
            source={require('../assets/img/profile.jpg')}
            style={{
              width: 90,
              height: 90,
              borderRadius: 50,
              alignSelf: 'center',
              bottom: -40,
            }}
          />
          <TouchableOpacity
            style={[
              style.cameraIcon,
              {
                alignSelf: 'center',
                bottom: -50,
                left: '40%',
                elevation: 3,
              },
            ]}
            onPress={() => profileImage()}>
            <Ionicons
              style={{fontSize: 30, color: iconColor}}
              name="camera-outline"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* user details */}
      <View style={{marginTop: 60}}>
        <UserEdit
          name="Daval Max"
          fieldName="first name"
          iconColor={iconColor}
        />
        <UserEdit name="Max" iconColor={iconColor} fieldName="surname" />
        <UserEdit
          name="talha@gmail.com"
          fieldName="email"
          iconColor={iconColor}
        />
        <UserEdit name="03XXXXXXXXX" fieldName="mobile" iconColor={iconColor} />
        <UserEdit
          name="***********"
          fieldName="password"
          iconColor={iconColor}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraIcon: {
    backgroundColor: themeColor.bgCard,
    width: 40,
    height: 40,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    alignSelf: 'flex-end',
    padding: 3,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    elevation: 1,
    marginVertical: 5,
    borderBottomWidth: 0.01,
  },
  icon: {
    fontSize: 30,
    color: themeColor.userIconColor,
  },
});

export default ProfileEdit;
