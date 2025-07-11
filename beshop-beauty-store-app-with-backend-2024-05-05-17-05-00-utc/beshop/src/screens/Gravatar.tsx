import React from 'react';
import {WebView} from 'react-native-webview';

import {custom} from '../custom';
import {components} from '../components';

const Gravatar: React.FC = () => {
  const renderStatusBarIOS = () => {
    return <custom.StatusBarIOS />;
  };

  const renderStatusBarAndroid = () => {
    return <custom.StatusBarAndroid />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Gravatar' />;
  };

  const renderHomeIndicator = () => {
    return <custom.HomeIndicator />;
  };

  const renderContent = () => {
    return (
      <WebView source={{uri: 'https://gravatar.com/'}} style={{flex: 1}} />
    );
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

export default Gravatar;
