import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';
import MapViewScreen from './MapViewScreen'
import ListViewScreen from './ListViewScreen'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


const TopTabScreen = () => (
  <SafeAreaView  style={{flex:1}}>
    
    <View  style={{flex:1,}}>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'MapView') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'ListView') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="MapView" component={MapViewScreen} />
      <Tab.Screen name="ListView" component={ListViewScreen}        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
    </Tab.Navigator>
    </View>
    </SafeAreaView>
);
    

export default TopTabScreen;


  