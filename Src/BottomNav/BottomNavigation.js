import { View, Text, Image, StatusBar, StyleSheet } from "react-native";
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import SoundsScreen from "../Screens/SoundsScreen";
import SettingsScreen from "../Screens/SettingsScreen";
const BottomNavigation = () => {
  const Tab = createBottomTabNavigator()
  return (
    <>
      <StatusBar backgroundColor={"rgba(85, 53, 124, 1)"} />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: [styles.bottomNavigationBar, styles.secondary_color],
        }}
      >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return focused ? (
                  <View style={[styles.bottomNavMenuItem, styles.bottomNavMenuItem_selected ]}>
                    <Image style={[styles.bottomNavMenu_icon]} source={require("../../assets/icons/wave.png")}/>
                    <Text style={[styles.bottomNavMenu_text, styles.white_color]}>Home</Text>
                  </View>
                ) : (
                  <View style={styles.bottomNavMenuItem}>
                    <Image style={[styles.bottomNavMenu_icon]} source={require("../../assets/icons/wave.png")}/>
                    <Text style={[styles.bottomNavMenu_text, styles.white_color]}>Home</Text>
                  </View>
                );
              },
            }}
          />

          <Tab.Screen
            name="Sound"
            component={SoundsScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return focused ? (
                  <View style={[styles.bottomNavMenuItem, styles.bottomNavMenuItem_selected ]}>
                    <Image style={[styles.bottomNavMenu_icon]} source={require("../../assets/icons/music.png")}/>
                    <Text style={[styles.bottomNavMenu_text, styles.white_color]}>Sounds</Text>
                  </View>
                ) : (
                  <View style={styles.bottomNavMenuItem}>
                    <Image style={[styles.bottomNavMenu_icon]} source={require("../../assets/icons/music.png")}/>
                    <Text style={[styles.bottomNavMenu_text, styles.white_color]}>Sounds</Text>
                  </View>
                );
              },
            }}
          />

          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return focused ? (
                  <View style={[styles.bottomNavMenuItem, styles.bottomNavMenuItem_selected ]}>
                    <Image style={[styles.bottomNavMenu_icon]} source={require("../../assets/icons/Settings.png")}/>
                    <Text style={[styles.bottomNavMenu_text, styles.white_color]}>Settings</Text>
                  </View>
                ) : (
                  <View style={styles.bottomNavMenuItem}>
                    <Image style={[styles.bottomNavMenu_icon]} source={require("../../assets/icons/Settings.png")}/>
                    <Text style={[styles.bottomNavMenu_text, styles.white_color]}>Settings</Text>
                  </View>
                );
              },
            }}
          />

      </Tab.Navigator>
    </>
  );
}

export default BottomNavigation

const styles = StyleSheet.create({
  bottomNavigationBar: {
    position:'absolute',
    paddingHorizontal: 8,
    paddingVertical:0,
    left:26,
    right:26,
    bottom:12,
    height:46,
    borderRadius:50,
    borderTopWidth: 0,
  },
  secondary_color: {
    backgroundColor: "rgba(85, 53, 124, 1)"
  },
  bottomNavMenuItem: {
    borderRadius: 30,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    opacity: 0.6,
    height: 36,
    width: '100%',
  },
  bottomNavMenuItem_selected: {
    backgroundColor: 'rgba(0, 0, 0, 0.20)',
    opacity: 1,
  },
  bottomNavMenu_icon: {
    width: 14,
    resizeMode: 'contain',
  },
  bottomNavMenu_text: {
    fontSize: 12,
    fontFamily:'RobotoCondensed_500',
    lineHeight:14.6
  },
  white_color: {
    color: '#fff'
  },

})


