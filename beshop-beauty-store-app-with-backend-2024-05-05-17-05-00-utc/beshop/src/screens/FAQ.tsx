import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import {text} from '../text';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';

const frequentlyQuestions = [
  {
    id: '1',
    question: "What's included with a free plan ?",
    answer:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '2',
    question: 'What content will my app have ?',
    answer:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '3',
    question: 'Can I change my icon ?',
    answer:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '4',
    question: 'What is a hybrid app ?',
    answer:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '5',
    question: 'How do Push Alerts work ?',
    answer:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '6',
    question: 'Why can’t the app upload files ?',
    answer:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const FAQ: React.FC = () => {
  const [activeSections, setActiveSections] = useState([]);

  const setSections = (sections: any) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderStatusBarIOS = () => {
    return <custom.StatusBarIOS backgroundColor={theme.colors.pastel} />;
  };

  const renderStatusBarAndroid = () => {
    return (
      <custom.StatusBarAndroid
        barStyle='dark-content'
        translucent={true}
        backgroundColor={theme.colors.pastel}
      />
    );
  };

  const renderHeader = () => {
    return (
      <components.Header
        title='FAQ'
        goBack={true}
        style={{
          backgroundColor: theme.colors.pastel,
        }}
      />
    );
  };

  const renderFaqHeader = (section: any, _: any, isActive: boolean) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 13,
        }}
      >
        <text.H5 numberOfLines={1} style={{color: theme.colors.mainColor}}>
          {section.question}
        </text.H5>
        {isActive ? <svg.ArrowCloseSvg /> : <svg.ArrowOpenSvg />}
      </View>
    );
  };

  const renderFaqContent = (section: any, _: any, isActive: boolean) => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <text.T16
          style={{
            color: theme.colors.textColor,
            lineHeight: 24,
          }}
        >
          {section.answer}
        </text.T16>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <custom.ScrollView contentContainerStyle={{flexGrow: 1, paddingTop: 20}}>
        <Accordion
          activeSections={activeSections}
          sections={frequentlyQuestions}
          touchableComponent={TouchableOpacity}
          renderHeader={renderFaqHeader}
          renderContent={renderFaqContent}
          duration={400}
          onChange={setSections}
          sectionContainerStyle={{
            marginBottom: 8,
            borderWidth: 1,
            borderColor: '#EEEEEE',
            marginHorizontal: 20,
          }}
        />
      </custom.ScrollView>
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

export default FAQ;
