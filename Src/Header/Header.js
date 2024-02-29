import { Text, View, Image, StyleSheet } from "react-native";
import React from 'react'

const Header = () => {
 console.log('From Header.js...')
  return (
    <View style={styles.HeaderContainer}>
      <Image
        style={styles.HeaderLogo}
        source={require("../../assets/logo/NavLogo.png")}
      />
      <View style={styles.LoginView}>
       
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  HeaderContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop:0,
    
  },
  HeaderLogo:{
    resizeMode: "contain",
    width: 106,
    height:30,
    gap:7
  },
  LoginView:{ 
  flexDirection: "row", 
  gap:10 
}
})