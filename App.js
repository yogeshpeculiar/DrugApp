import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen  from './Components/Home';
import DetailsScreen from './Components/Details';
import CartScreen from './Components/Cart';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ 
            title: '',
            headerStyle: {
              backgroundColor: '#0F4899',
              height:50
            }
            }}
               />
        <Stack.Screen 
          name="Details"
          component={DetailsScreen} 
          options={{ 
            title: '',
            headerStyle: {
              backgroundColor: '#0F4899',
              height:70
            }
            }}
        />
        <Stack.Screen 
        name="Cart" 
        component={CartScreen}
        options={{ 
          title: '',
          headerStyle: {
            backgroundColor: '#0F4899',
            height:70
          }
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;