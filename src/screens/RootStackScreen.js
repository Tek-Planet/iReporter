import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ListViewScreen from './ListViewScreen';
import MapViewScreen from './MapViewScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Map" component={MapViewScreen}/>
        <RootStack.Screen name="List" component={ListViewScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;