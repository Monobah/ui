import React, {useState, useRef, useEffect} from 'react';
import {View, TextInput, ViewStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {text} from '../../text';
import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {components} from '../../components';
import {validation} from '../../utils/validation';

const ConfirmationCode: React.FC = () => {
  const navigation = hooks.useNavigation();

  const [inp1, setInp1] = useState<string>('');
  const [inp2, setInp2] = useState<string>('');
  const [inp3, setInp3] = useState<string>('');
  const [inp4, setInp4] = useState<string>('');
  const [inp5, setInp5] = useState<string>('');

  const otp = inp1 + inp2 + inp3 + inp4 + inp5;

  const inp1Ref = useRef<TextInput>({focus: () => {}} as TextInput);
  const inp2Ref = useRef<TextInput>({focus: () => {}} as TextInput);
  const inp3Ref = useRef<TextInput>({focus: () => {}} as TextInput);
  const inp4Ref = useRef<TextInput>({focus: () => {}} as TextInput);
  const inp5Ref = useRef<TextInput>({focus: () => {}} as TextInput);

  useEffect(() => {
    if (otp.length === 5) {
      navigation.navigate('SignUpAccountCreated');
    }
  }, [otp]);

  const renderStatusBarIOS = () => {
    return <custom.StatusBarIOS />;
  };

  const renderStatusBarAndroid = () => {
    return (
      <custom.StatusBarAndroid barStyle='dark-content' translucent={true} />
    );
  };

  const renderHeader = () => {
    return (
      <components.Header
        title='Verify your phone number'
        style={{marginBottom: 10}}
        goBack={true}
      />
    );
  };

  const renderBackgrounImage = () => {
    return (
      <custom.Image
        source={require('../../assets/png/03.png')}
        style={{
          width: theme.sizes.width - 40,
          position: 'absolute',
          aspectRatio: 335 / 271,
          bottom: 0,
        }}
      />
    );
  };

  const renderDescription = () => {
    return (
      <text.T16 style={{marginBottom: 30}}>Enter your OTP code here.</text.T16>
    );
  };

  const renderCodeInput = () => {
    const blockWidth = (theme.sizes.width - 80) / 5 - 10;

    const inputStyle: object = {
      textAlign: 'center',
      width: blockWidth,
      height: blockWidth,
      backgroundColor: theme.colors.white,
      fontSize: RFValue(22, theme.sizes.height),
      borderWidth: 1,
      borderColor: theme.colors.mainColor,
      color: theme.colors.mainColor,
      // ...theme.fonts.Mulish_Regular,
      // borderRadius: blockWidth / 2,
    };

    const containerStyle: ViewStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 30,
    };

    return (
      <View style={{...containerStyle}}>
        {/* Input 01 */}
        <TextInput
          ref={inp1Ref}
          maxLength={1}
          style={{...inputStyle}}
          keyboardType='number-pad'
          // editable={inp1 === '' ? true : false}
          onChangeText={(text) => {
            setInp1(text);
            if (text !== '') {
              inp2Ref.current.focus();
            } else if (text === '') {
              inp1Ref.current.focus();
            }
          }}
        />
        {/* Input 02 */}
        <TextInput
          ref={inp2Ref}
          maxLength={1}
          // editable={inp2 === '' ? true : false}
          style={{...inputStyle}}
          keyboardType='number-pad'
          onChangeText={(text) => {
            setInp2(text);
            if (text !== '') {
              inp3Ref.current.focus();
            } else if (text === '') {
              inp1Ref.current.focus();
            }
          }}
        />
        {/* Input 03 */}
        <TextInput
          ref={inp3Ref}
          maxLength={1}
          style={{...inputStyle}}
          // editable={inp3 === '' ? true : false}
          keyboardType='number-pad'
          onChangeText={(text) => {
            setInp3(text);
            if (text !== '') {
              inp4Ref.current.focus();
            } else if (text === '') {
              inp2Ref.current.focus();
            }
          }}
        />
        {/* Input 04 */}
        <TextInput
          ref={inp4Ref}
          maxLength={1}
          style={{...inputStyle}}
          // editable={inp4 === '' ? true : false}
          keyboardType='number-pad'
          onChangeText={(text) => {
            setInp4(text);
            if (text !== '') {
              inp5Ref.current.focus();
            } else if (text === '') {
              inp3Ref.current.focus();
            }
          }}
        />
        {/* Input 05 */}
        <TextInput
          ref={inp5Ref}
          maxLength={1}
          // editable={inp5 === '' ? true : false}
          style={{...inputStyle}}
          keyboardType='number-pad'
          onChangeText={(text) => {
            setInp5(text);
            if (text === '') {
              inp4Ref.current.focus();
            }
          }}
        />
      </View>
    );
  };

  const renderIfYouDontReceiveCode = () => {
    return (
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 30}}
      >
        <text.T16>Didn’t receive the OTP? </text.T16>
        <custom.TouchableOpacity>
          <text.T16 style={{color: theme.colors.accent}}>Resend.</text.T16>
        </custom.TouchableOpacity>
      </View>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='verify'
        // onPress={() => {
        //   validation({phoneNumber})
        //     ? navigation.navigate('SignUpAccountCreated')
        //     : null;
        // }}
        onPress={() => {
          navigation.navigate('ConfirmationCode');
        }}
      />
    );
  };

  const renderContent = () => {
    return (
      <components.KAScrollView
        contentContainerStyle={{
          paddingBottom: 50,
          paddingTop: 30,
          backgroundColor: theme.colors.pastel,
          marginHorizontal: 20,
          paddingHorizontal: 20,
          flexGrow: 0,
        }}
      >
        {renderBackgrounImage()}
        {renderDescription()}
        {renderCodeInput()}
        {renderIfYouDontReceiveCode()}
        {renderButton()}
      </components.KAScrollView>
    );
  };

  const renderHomeIndicator = () => {
    return <custom.HomeIndicator />;
  };

  return (
    <custom.SmartView>
      {renderStatusBarIOS()}
      {renderStatusBarAndroid()}
      {renderHeader()}
      {renderContent()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default ConfirmationCode;
