import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'
import PostScreen from './PostScreen'
import ProfileScreen from './ProfileScreen'
import MessageScreen from './MessageScreen'
import SettingsScreen from './SettingsScreen'


const HomeStack = createStackNavigator();
const MoviesStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#333333',
          tabBarIcon: ({ color }) => (
            <Icon name="people" color={color} size={26} />
          ),
        }}
      />
  
        <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: 'Message',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="mail-outline" color={color} size={26} />
          ),
        }}
      /> 
      
      <Tab.Screen
      name="Post"
      component={PostScreen}
      options={{
        backgroundColor:'#ff6200',
        tabBarLabel: 'New Post',
        tabBarColor: '#ff6200',
        tabBarIcon: ({ color }) => (
          <Icon name="add-circle" color={color} size={28} />
        ),
      }}
    />
      <Tab.Screen
        name="Search"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'List',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="list-outline" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
    name="Settings"
    component={SettingsScreen}
    options={{
      tabBarLabel: 'Settings',
      tabBarColor: '#d02860',
      tabBarIcon: ({ color }) => (
        <Icon name="settings-outline" color={color} size={26} />
      ),
    }}
  />
  
    </Tab.Navigator>
    
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        },
        h
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen}  />
</HomeStack.Navigator>
);

const MoviesStackScreen = ({navigation}) => (
<MoviesStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <MoviesStack.Screen name="Details" component={MoviesScreen} options={{
       
        }} />
</MoviesStack.Navigator>
);
  