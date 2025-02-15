import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {fontSize, screenSize, themeColor} from '../../../constant';
import {useNavigation} from '@react-navigation/native';
import {userContent} from '../../ComanScreens/UserContent';
import BackButton from '../../../components/BackButton';

const UserOtp = () => {
  const [otpCode, setOtpCode] = useState(60);
  const [resend, setResend] = useState(false);

  const navigation = useNavigation();

  const [inp1, setInp1] = useState('');
  const [inp2, setInp2] = useState('');
  const [inp3, setInp3] = useState('');
  const [inp4, setInp4] = useState('');
  const [inp5, setInp5] = useState('');
  const [inp6, setInp6] = useState('');

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  const handleOtp = () => {
    try {
      if (!inp1 || !inp2 || !inp3 || !inp4 || !inp5 || !inp6) {
        Alert.alert('OTP', 'Please Enter Varification Code!');
      } else {
        navigation.navigate('UserPassword');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const otpResend = () => {
    setOtpCode(60);
    setResend(false);
  };

  useEffect(() => {
    const clear = setInterval(() => {
      if (otpCode === 0) {
        clearInterval(clear);
        setResend(true);
      } else {
        setOtpCode(otpCode - 1);
      }
    }, 1000);

    return () => {
      clearInterval(clear);
    };
  }, [otpCode]);

  return (
    <View style={style.container}>
      <BackButton iconColor={themeColor.userIconColor} />
      <View style={{alignSelf: 'center', width: screenSize.wrapperWidth}}>
        <Text style={style.title}>{userContent.phoneOtpTitle}</Text>
        <Text style={style.text}>{userContent.phoneOtpTxt}</Text>
        <View>
          <View
            style={{
              width: screenSize.inputWidth,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
            }}>
            <TextInput
              ref={ref1}
              style={[
                style.inputText,
                {
                  borderColor:
                    inp1.length >= 1 ? themeColor.userBorderColor : 'gray',
                },
              ]}
              keyboardType={'number-pad'}
              placeholderTextColor={themeColor.txtColor}
              maxLength={1}
              value={inp1}
              onChangeText={text => {
                setInp1(text);
                if (text.length >= 1) {
                  ref2.current.focus();
                }
              }}
            />
            <TextInput
              ref={ref2}
              style={[
                style.inputText,
                {
                  borderColor:
                    inp2.length >= 1 ? themeColor.userBorderColor : 'gray',
                },
              ]}
              keyboardType={'number-pad'}
              placeholderTextColor={themeColor.txtColor}
              maxLength={1}
              value={inp2}
              onChangeText={text => {
                setInp2(text);
                if (text.length >= 1) {
                  ref3.current.focus();
                } else if (text.length < 1) {
                  ref1.current.focus();
                }
              }}
            />
            <TextInput
              ref={ref3}
              style={[
                style.inputText,
                {
                  borderColor:
                    inp3.length >= 1 ? themeColor.userBorderColor : 'gray',
                },
              ]}
              keyboardType={'number-pad'}
              placeholderTextColor={themeColor.txtColor}
              maxLength={1}
              value={inp3}
              onChangeText={text => {
                setInp3(text);
                if (text.length >= 1) {
                  ref4.current.focus();
                } else if (text.length < 1) {
                  ref2.current.focus();
                }
              }}
            />
            <TextInput
              ref={ref4}
              style={[
                style.inputText,
                {
                  borderColor:
                    inp4.length >= 1 ? themeColor.userBorderColor : 'gray',
                },
              ]}
              keyboardType={'number-pad'}
              placeholderTextColor={themeColor.txtColor}
              maxLength={1}
              value={inp4}
              onChangeText={text => {
                setInp4(text);
                if (text.length >= 1) {
                  ref5.current.focus();
                } else if (text.length < 1) {
                  ref3.current.focus();
                }
              }}
            />
            <TextInput
              ref={ref5}
              style={[
                style.inputText,
                {
                  borderColor:
                    inp5.length >= 1 ? themeColor.userBorderColor : 'gray',
                },
              ]}
              keyboardType={'number-pad'}
              placeholderTextColor={themeColor.txtColor}
              maxLength={1}
              value={inp5}
              onChangeText={text => {
                setInp5(text);
                if (text.length >= 1) {
                  ref6.current.focus();
                } else if (text.length < 1) {
                  ref4.current.focus();
                }
              }}
            />
            <TextInput
              ref={ref6}
              style={[
                style.inputText,
                {
                  borderColor:
                    inp6.length >= 1 ? themeColor.userBorderColor : 'gray',
                },
              ]}
              keyboardType={'number-pad'}
              placeholderTextColor={themeColor.txtColor}
              maxLength={1}
              value={inp6}
              onChangeText={text => {
                setInp6(text);
                if (text.length >= 1) {
                  ref6.current.focus();
                } else if (text.length < 1) {
                  ref5.current.focus();
                }
              }}
            />
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 16, color: themeColor.inputTextColor}}>
              Please don't share your code
            </Text>

            {resend ? (
              <TouchableOpacity
                onPress={() => otpResend()}
                style={{padding: 10}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: fontSize.btnTxt,
                    color: themeColor.driverBtnBgColor,
                  }}>
                  Resend OTP
                </Text>
              </TouchableOpacity>
            ) : (
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '800',
                  color: themeColor.txtColor,
                }}>
                00:{otpCode}
              </Text>
            )}
          </View>
        </View>

        <View>
          <TouchableOpacity
            disabled={
              !inp1 || !inp2 || !inp3 || !inp4 || !inp5 || !inp6 ? true : false
            }
            style={[
              style.btn,
              {
                backgroundColor:
                  !inp1 || !inp2 || !inp3 || !inp4 || !inp5 || !inp6
                    ? 'gray'
                    : themeColor.userBtnBgColor,
              },
            ]}
            onPress={() => handleOtp()}>
            <Text style={style.btnTxt}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: screenSize.containerPaddingVertical,
  },
  title: {
    fontSize: fontSize.title,
    marginTop: screenSize.titleTopMargin,
    color: themeColor.titleColor,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: fontSize.txt,
    marginBottom: 10,
    alignSelf: 'flex-start',
    color: themeColor.txtColor,
  },
  inputText: {
    borderWidth: 1,
    marginTop: screenSize.inputMarginVertical,
    width: 50,
    height: 50,
    color: themeColor.txtColor,
    fontSize: fontSize.normalTitle,
    borderRadius: 10,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: themeColor.userBtnBgColor,
    width: screenSize.inputWidth,
    justifyContent: 'center',
    alignItems: 'center',
    padding: screenSize.btnPadding,
    borderRadius: screenSize.btnRadius,
    marginTop: screenSize.btnTopMargin,
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    fontWeight: fontSize.bold,
    color: themeColor.btnTxtColor,
  },
});

export default UserOtp;
