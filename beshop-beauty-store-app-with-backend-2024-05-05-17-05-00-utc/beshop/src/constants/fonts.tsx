import {Platform} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {sizes} from './sizes';

const Lato_700Bold = {fontFamily: 'Lato-Bold'};
const Lato_400Regular = {fontFamily: 'Lato-Regular'};

const TenorSans_400Regular = {
  fontFamily: Platform.OS === 'ios' ? 'TenorSans' : 'TenorSans-Regular',
};

export const fonts = {
  Lato_700Bold: {...Lato_700Bold},
  Lato_400Regular: {...Lato_400Regular},

  H1: {...TenorSans_400Regular, fontSize: RFValue(32, sizes.height)},
  H2: {...TenorSans_400Regular, fontSize: RFValue(22, sizes.height)},
  H3: {...TenorSans_400Regular, fontSize: RFValue(20, sizes.height)},
  H4: {...TenorSans_400Regular, fontSize: RFValue(18, sizes.height)},
  H5: {...TenorSans_400Regular, fontSize: RFValue(16, sizes.height)},
  H6: {...TenorSans_400Regular, fontSize: RFValue(14, sizes.height)},

  textStyle_14: {...Lato_400Regular, fontSize: RFValue(14, sizes.height)},
  textStyle_16: {...Lato_400Regular, fontSize: RFValue(16, sizes.height)},
};
