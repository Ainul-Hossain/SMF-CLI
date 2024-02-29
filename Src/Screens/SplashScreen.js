import { Image, StyleSheet, Text, View, Animated, Easing, Dimensions, StatusBar } from 'react-native'
import React, { useRef, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { MainLinearColor } from '../Styles/Styles'
const SplashScreen = () => {
 console.log('From SplashScreen.js...')
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(Dimensions.get("window").height)).current;
  
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();

    Animated.timing(translateY, {
      toValue: 0,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();

   
  }, []);
  return (
   
    <LinearGradient style={styles.container} colors={MainLinearColor}>
      <Animated.View
        style={[
          {
            opacity: opacity,
            transform: [
              {
                translateY: translateY,
              },
            ],
            
          },
        ]}
      >
       <Image style={styles.image} source={require('../../assets/logo/logo.png')}/>
      </Animated.View>
    </LinearGradient>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  image: {
    flex:1,
    width:100,
    resizeMode: "contain",
  },
})