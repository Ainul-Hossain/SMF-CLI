import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Header from "../Header/Header";
import { MainLinearColor } from "../Styles/Styles";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const SettingsScreen = () => {
  console.log('From SettingsScreen.js...')
   const TrailColor= [
    "rgba(116, 33, 154, 1)",
    "rgba(75, 8, 105, 1)"
  ];
  return (
    <LinearGradient colors={MainLinearColor} style={[styles.container]}>
    <Header/>
   
   <ScrollView>
    <View style={styles.settingsContainer}>
    <View style={{marginBottom:20}}>
    <Text style={styles.TitleText}>Settings__</Text>
    </View>
      <View style={styles.settingsWrapRow}>
        <Text style={[styles.goTitle, styles.colorWhite]}>Go Premium</Text>
        <View style={styles.settingsGoContent}>
          <View style={[styles.settingsGoContentRow, styles.opacity68]}>
            <Ionicons style={[styles.settingsGoContentIcon, styles.colorWhite]} name="checkmark-done-sharp" />
            <Text style={[styles.settingsGoContentText, styles.colorWhite]}>Unlock all sounds</Text>
          </View>
          <View style={[styles.settingsGoContentRow, styles.opacity68]}>
            <Ionicons style={[styles.settingsGoContentIcon, styles.colorWhite]} name="checkmark-done-sharp" />
            <Text style={[styles.settingsGoContentText, styles.colorWhite]}>Remove ads</Text>
          </View>

        <TouchableOpacity>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 0.7, y: 0}} colors={TrailColor} style={[styles.settingsGoContentRow, styles.startFreeTrailButton]}>
            
              <Text style={[styles.startFreeTrailButtonText, styles.colorWhite]}>Start Free Trail</Text>
              <Image style={styles.BtnIcon} source={require('../../assets/icons/queen.png')}/>
      
          </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={()=>{}}  style={[styles.settingsWrapRow, styles.settingsMenuItems]}>
        <Ionicons style={[styles.settingsMenuItemsIcon, styles.colorWhite]} name="chatbox-ellipses"/>
        <Text style={[styles.settingsMenuItemsText, styles.colorWhite]}>Feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.settingsWrapRow, styles.settingsMenuItems]}>
        <Entypo style={[styles.settingsMenuItemsIcon, styles.colorWhite]} name="share"/>
        <Text style={[styles.settingsMenuItemsText, styles.colorWhite]}>Share now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.settingsWrapRow, styles.settingsMenuItems]}>
        <Ionicons style={[styles.settingsMenuItemsIcon, styles.colorWhite]} name="eye-off"/>
        <Text style={[styles.settingsMenuItemsText, styles.colorWhite]}>Privacy & Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.settingsWrapRow, styles.settingsMenuItems]}>
        <MaterialIcons style={[styles.settingsMenuItemsIcon, styles.colorWhite]} name="live-help"/>
        <Text style={[styles.settingsMenuItemsText, styles.colorWhite]}>Help and FAQs</Text>
      </TouchableOpacity>
      < TouchableOpacity style={[styles.settingsWrapRow, styles.settingsMenuItems]}>
        <Ionicons style={[styles.settingsMenuItemsIcon, styles.colorWhite]} name="chatbox-ellipses"/>
        <Text style={[styles.settingsMenuItemsText, styles.colorWhite]}>Contact Us</Text>
      </TouchableOpacity>
      <View style={[styles.settingsMenuFooter, styles.opacity68]}>
        <Text style={[styles.settingsMenuFooterText, styles.colorWhite]}>Version 1.0.0.1</Text>
        <Text style={[styles.settingsMenuFooterText, styles.colorWhite]}>Copyright by Codebook IT Ltd.</Text>
      </View>
    </View>
    </ScrollView>
</LinearGradient>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
   
  },
  TitleText:{
    fontFamily:'RobotoCondensed_700',
    color:'#fff',
    fontSize:16,
    lineHeight:17.6
  },
  settingsContainer: {
    padding: 10,
    flex: 1,
   marginBottom:50
  },
  settingsWrapRow: {
    borderTopWidth:1,
    borderTopColor: 'rgba(255, 255, 255, 0.16)',
    paddingVertical: 18,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255, 255, 255, 0.16)',
  },
  goTitle: {
    fontSize: 18,
    fontFamily:'RobotoCondensed_700',
    marginBottom: 8,
  },
  colorWhite: {
    color: '#FFFFFF',
  },
  settingsGoContent: {
    paddingHorizontal: 20,
  },
  settingsGoContentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  opacity68: {
    opacity: 0.68,
  },
  settingsGoContentIcon: {
    fontSize: 18,
    fontWeight: 500,
  },
  settingsGoContentText: {
    fontSize: 14,
    fontFamily:'RobotoCondensed_500',
    paddingVertical: 8,
  },
  startFreeTrailButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 12,
    marginBottom: 5,
    borderRadius: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  startFreeTrailButtonText: {
    fontSize: 14,
    fontWeight: 600,
  },
  startFreeTrailButtonIcon: {
    fontSize: 20,
    fontWeight: 700,
  },
  settingsMenuItems: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingsMenuItemsIcon: {
    fontSize: 18,
    fontWeight: 900,
  },
  settingsMenuItemsText: {
    fontSize: 16,
    fontFamily:'RobotoCondensed_500'
  },
  settingsMenuFooter: {
    alignItems: 'center',
    gap: 6,
    paddingVertical: 20,
  },
  settingsMenuFooterText: {
    fontSize: 16,
    lineHeight:16.7,
    fontFamily:'RobotoCondensed_500'
  },
  BtnIcon:{
    resizeMode:'contain',
    maxHeight:14,
    maxWidth:16,
  }
});