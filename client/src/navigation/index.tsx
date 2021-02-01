import React, {FunctionComponent} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StackParamList} from './types';
import ProductsList from '../screens/ProductsList';
import ProductDetail from '../screens/ProductDetail';

export * from './types';

const Stack = createStackNavigator<StackParamList>();

const Navigator: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: 'black',
        }}>
        <Stack.Screen name="ProductsList" component={ProductsList} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
