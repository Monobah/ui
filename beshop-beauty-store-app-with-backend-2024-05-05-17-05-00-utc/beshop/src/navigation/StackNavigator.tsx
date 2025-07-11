import React from 'react';

import {screens} from '../screens';
import {Stack, hooks} from '../hooks';
import {UserType} from '../types';

const StackNavigator: React.FC = () => {
  const user = hooks.useSelector(
    (state: {userSlice?: {user?: UserType | null}}) =>
      state.userSlice?.user ?? undefined,
  );
  const start = hooks.useSelector(
    (state: {startSlice?: {start?: boolean}}) =>
      state.startSlice?.start ?? undefined,
  );

  return (
    <Stack.Navigator>
      {start && (user === null || !user) && (
        <Stack.Group>
          <Stack.Screen
            name='Onboarding'
            component={screens.Onboarding}
            options={{headerShown: false}}
          />
        </Stack.Group>
      )}
      {!start && (user === null || !user) && (
        <Stack.Group>
          <Stack.Screen
            name='SignIn'
            component={screens.SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='SignUp'
            component={screens.SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='ForgotPassword'
            component={screens.ForgotPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='NewPassword'
            component={screens.NewPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='ConfirmationCode'
            component={screens.ConfirmationCode}
            options={{headerShown: false}}
          />
        </Stack.Group>
      )}
      {!start && user !== null && user && true && (
        <Stack.Group>
          <Stack.Screen
            name='TabNavigator'
            component={screens.TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='EditProfile'
            component={screens.EditProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='Gravatar'
            component={screens.Gravatar}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='FAQ'
            component={screens.FAQ}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='TrackYourOrder'
            component={screens.TrackYourOrder}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='OrderHistory'
            component={screens.OrderHistory}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='Shop'
            component={screens.Shop}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='Product'
            component={screens.Product}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='Reviews'
            component={screens.Reviews}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='MyPromocodes'
            component={screens.MyPromocodes}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='Checkout'
            component={screens.Checkout}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='OrderSuccessful'
            component={screens.OrderSuccessful}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='OrderFailed'
            component={screens.OrderFailed}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='Filter'
            component={screens.Filter}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='PaymentMethod'
            component={screens.PaymentMethod}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='AddANewCard'
            component={screens.AddANewCard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='MyAddress'
            component={screens.MyAddress}
            options={{headerShown: false}}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
