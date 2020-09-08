import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import CategoryScreen from './PostScreens/CategoriesList';
import ImageScreen from './PostScreens/ImageScreen';
import LocationScreen from './PostScreens/Location';
import SummaryScreen from './PostScreens/SummaryScreen';




const RootStack = createStackNavigator();

const PostStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Image" component={ImageScreen}/>
        <RootStack.Screen name="Category" component={CategoryScreen}/>
        <RootStack.Screen name="Location" component={LocationScreen}/>
        <RootStack.Screen name="Summary" component={SummaryScreen}/>
    </RootStack.Navigator>
);

export default PostStackScreen;