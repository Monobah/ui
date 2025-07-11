import {View, Text, TouchableOpacity, TextStyle, ViewStyle} from 'react-native';
import React, {useState} from 'react';

import {utils} from '../utils';
import {svg} from '../assets/svg';
import {theme} from '../constants';

type Props = {
  type: string;
  sale?: boolean;
  newProduct?: boolean;
  setSale?: (value: boolean) => void;
  setNewProduct?: (value: boolean) => void;
};

const Status: React.FC<Props> = ({
  type,
  sale,
  setSale,
  newProduct,
  setNewProduct,
}) => {
  const squareStyle: ViewStyle = {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textStyle: TextStyle = {
    ...theme.fonts.Lato_700Bold,
    fontSize: utils.responsiveFontSize(10),
    // lineHeight: utils.responsiveFontSize(10) * 1.7,
    textTransform: 'uppercase',
    color: theme.colors.white,
  };

  if (type == 'sale') {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 50,
        }}
        onPress={() => {
          if (setSale) {
            setSale(!sale);
          }
        }}
      >
        <View style={{...squareStyle}}>
          {sale == true && <svg.RememberCheckSvg />}
        </View>
        <View
          style={{
            height: 18,
            backgroundColor: '#A3D2A2',
            paddingHorizontal: 10,
            paddingVertical: 2,
            justifyContent: 'center',
          }}
        >
          <Text style={{...textStyle}}>sale</Text>
        </View>
      </TouchableOpacity>
    );
  }

  if (type == 'new') {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 50,
        }}
        onPress={() => {
          if (setNewProduct) {
            setNewProduct(!newProduct);
          }
        }}
      >
        <View style={{...squareStyle}}>
          {newProduct == true && <svg.RememberCheckSvg />}
        </View>
        <View
          style={{
            height: 18,
            backgroundColor: `${theme.colors.accent}70`,
            paddingHorizontal: 10,
            paddingVertical: 2,
            justifyContent: 'center',
          }}
        >
          <Text style={{...textStyle}}>new</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return null;
};

export default Status;
