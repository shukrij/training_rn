import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingPage } from '../pages/LandingPage';
import { NextPage } from '../pages/NextPage';
import { ThemeProvider } from 'styled-components';
import { COLORS } from '../constant/COLORS';

const StackPublic = createNativeStackNavigator();

export const Routing = () => {
    return (

      <ThemeProvider theme={COLORS}>
        <NavigationContainer>
          <StackPublic.Navigator>
            <StackPublic.Screen name="Home" component={LandingPage} />
            <StackPublic.Screen name="Next Page" component={NextPage} />
          </StackPublic.Navigator>
        </NavigationContainer>
        </ThemeProvider>
    );
};
