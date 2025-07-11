import React from 'react';

import {tabs} from '../screens/tabs';
import {hooks} from '../hooks';
import {actions} from '../store/actions';

const TabNavigator: React.FC = (): JSX.Element => {
  const dispatch = hooks.useDispatch();

  const user = hooks.useSelector((state) => state.userSlice.user);
  const currentTabScreen = hooks.useSelector((state) => state.tab.screen);

  if (!user) {
    dispatch(actions.logOut());
    return <React.Fragment />;
  }

  const renderScreen = () => {
    return (
      <React.Fragment>
        {currentTabScreen === 'Home' && <tabs.Home />}
        {currentTabScreen === 'Search' && <tabs.Categories />}
        {currentTabScreen === 'Order' && <tabs.Order />}
        {currentTabScreen === 'Wishlist' && <tabs.Wishlist />}
        {currentTabScreen === 'Profile' && <tabs.Profile />}
      </React.Fragment>
    );
  };

  return renderScreen();
};

export default TabNavigator;
