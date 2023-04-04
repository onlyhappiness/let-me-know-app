import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Auth from '../stack/Auth';
import Tab from '../stack/Tab';
import quitApp from '../util/quitApp';
import {useSelector} from 'react-redux';
import checkUser from '../util/checkUser';

export default () => {
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  const {principal: loginInfo} = useSelector((state: any) => state.auth);

  checkUser();

  quitApp();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!loginInfo ? (
          <Stack.Screen name="AuthStack" component={Auth} />
        ) : (
          <Stack.Screen name="TabStack" component={Tab} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
