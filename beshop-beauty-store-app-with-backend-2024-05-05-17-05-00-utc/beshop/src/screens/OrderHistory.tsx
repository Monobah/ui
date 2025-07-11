import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';

import {text} from '../text';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';

const history = [
  {
    id: 1,
    number: 648752,
    date: 'Feb 25, 2023 at 8:32 PM',
    total: 281.85,
    status: 'Shipping',
    delivery: 15,
    discount: 29.65,
    products: [
      {
        id: 1,
        name: 'Long sleeve shirt ',
        quantity: 1,
        price: 6.93,
      },
      {
        id: 2,
        name: 'Black sneakers',
        quantity: 1,
        price: 42.89,
      },
      {
        id: 3,
        name: 'Warm hat',
        quantity: 1,
        price: 30.0,
      },
    ],
  },
  {
    id: 2,
    number: 648752,
    date: 'Feb 25, 2023 at 8:32 PM',
    total: 281.85,
    status: 'Delivered',
    delivery: 15,
    discount: 29.65,
    products: [
      {
        id: 1,
        name: 'Long sleeve shirt ',
        quantity: 1,
        price: 6.93,
      },
      {
        id: 2,
        name: 'Black sneakers',
        quantity: 1,
        price: 42.89,
      },
      {
        id: 3,
        name: 'Warm hat',
        quantity: 1,
        price: 30.0,
      },
    ],
  },
  {
    id: 3,
    number: 648752,
    date: 'Feb 25, 2023 at 8:32 PM',
    total: 281.85,
    status: 'Canceled',
    delivery: 15,
    discount: 29.65,
    products: [
      {
        id: 1,
        name: 'Long sleeve shirt ',
        quantity: 1,
        price: 6.93,
      },
      {
        id: 2,
        name: 'Black sneakers',
        quantity: 1,
        price: 42.89,
      },
      {
        id: 3,
        name: 'Warm hat',
        quantity: 1,
        price: 30.0,
      },
    ],
  },
];

const OrderHistory: React.FC = () => {
  const [activeSections, setActiveSections] = useState<number[]>([]);
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
        title='Order history'
        style={{marginBottom: 10, backgroundColor: theme.colors.pastel}}
        goBack={true}
      />
    );
  };

  const accordionHeader = (section: any) => {
    return (
      <View
        // containerStyle={{
        //   backgroundColor: activeSections === section.id ? '#F7F7F7' : 'white',
        //   marginBottom: 10,
        // }}
        style={{
          backgroundColor:
            activeSections === section.id ? '#FAF9FF' : theme.colors.white,
          borderWidth: 1,
          padding: 20,
          borderColor: '#EEEEEE',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 7,
          }}
        >
          <text.H5>#{section.number}</text.H5>
          <text.T14>{section.status}</text.T14>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              ...theme.fonts.Lato_400Regular,
              color: theme.colors.textColor,
            }}
          >
            {section.date}
          </Text>
          <Text
            style={{...theme.fonts.Lato_700Bold, color: theme.colors.mainColor}}
          >
            ${section.total}
          </Text>
        </View>
      </View>
    );
  };

  const accordionContent = (section: any) => {
    return (
      <View
        style={{
          backgroundColor: '#FAF9FF',
          borderBottomWidth: 1,
          borderRightWidth: 1,
          borderLeftWidth: 1,
          borderColor: '#EEEEEE',
          padding: 20,
        }}
      >
        {section.products.map((product: any, index: number) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 6,
              }}
            >
              <text.T14
                style={{
                  color: theme.colors.textColor,
                }}
              >
                {product.name}
              </text.T14>
              <text.T14
                style={{
                  color: theme.colors.textColor,
                }}
              >{`${product.quantity} x $${product.price}`}</text.T14>
            </View>
          );
        })}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 14,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {/* <svg.RepeatSvg /> */}
            <text.T14
              style={{
                marginLeft: 6,
                textTransform: 'none',
              }}
            >
              Repeat order
            </text.T14>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('LeaveAReviews')}
          >
            <text.T14
              style={{
                color: theme.colors.accentColor,
                textTransform: 'none',
              }}
            >
              Leave a review
            </text.T14>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <View style={{flex: 1}}>
        <Accordion
          activeSections={activeSections}
          sections={history}
          renderHeader={accordionHeader}
          renderContent={accordionContent}
          onChange={setSections}
          touchableComponent={TouchableOpacity}
          sectionContainerStyle={{
            marginBottom: 8,
          }}
          containerStyle={{
            paddingHorizontal: 20,
            paddingTop: 20,
          }}
        />
      </View>
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

export default OrderHistory;
