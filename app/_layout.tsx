import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './home';
import { Stack } from 'expo-router';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
   
      <Stack initialRouteName='home' screenOptions={{headerShown: false}}> 
       
        <Stack.Screen name="addExpense" options={{headerShown: false}}/>
        <Stack.Screen name="expenseList" options={{headerShown: false}}/>
       
      
      </Stack>
    
  );
}
