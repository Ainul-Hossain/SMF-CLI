import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './Src/Screens/SplashScreen';
import BottomNavigation from './Src/BottomNav/BottomNavigation';
import { PlayerContext } from './Src/Context/PlayerContext';
import { registerRootComponent } from 'expo';


const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
  }, []);

  return (
    <PlayerContext>
    <NavigationContainer>
      <Stack.Navigator>
        {showSplashScreen ? (
          <Stack.Screen
            name='splash'
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        ) : null}
        <Stack.Screen
         name='Bottom'
         component={BottomNavigation}
         options={{ headerShown: false }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
    </PlayerContext>
  );
};

export default App;

const styles = StyleSheet.create({});
