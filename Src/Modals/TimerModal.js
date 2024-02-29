import { 
  Text,
  View,
  Modal,
  Pressable,
  FlatList,
  StyleSheet,
  TouchableOpacity,} from 'react-native'
import { COLOR, FLEX, HEIGHT, WIDTH, FONTSIZE, FONTWEIGHT, GAP } from "../Theme/theme";
import LinearGradient from 'react-native-linear-gradient';
import React, { useContext, useState } from 'react'
import { TimeData } from '../Data/Data';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Player } from '../Context/PlayerContext';
import { TimerPickerModal } from 'react-native-timer-picker';
const TimerModal = ({timerModal, setTimerModal}) => {
  console.log('From TimerModal.js...')
  const TimeColor = [
    "rgba(85, 53, 124, 0.9)",
    "rgba(52, 33, 88, 0.9)",
    "rgba(28, 17, 44, 0.9)",
  ];
  const { user_given_time, set_user_given_time} = useContext(Player)
  const [showPicker, setShowPicker] = useState(false)

  //Handle Custom Time Given By User
  const handleCustomTime = (pickedDuration)=>{
   if(pickedDuration.hours===0 && pickedDuration.minutes===0){
    //  set_user_given_time()
    console.log('hours is zero')
   }else{
    let hoursinmin = pickedDuration.hours*60
    if(pickedDuration.minutes !==0){
      hoursinmin += pickedDuration.minutes 
      console.log(`Hour and Min ${hoursinmin}`)
      set_user_given_time(hoursinmin)
    }else{
      console.log(`Hours in Min: ${hoursinmin}`)
      set_user_given_time(hoursinmin)
    }
   }

   setShowPicker(false)
  }
  return (
    <Modal
    statusBarTranslucent={true}
    transparent={true}
    animationType="slide"
    visible={timerModal}
  >
    <LinearGradient
      style={[{ flex: FLEX.flex_1 }, styles.MainView]}
      colors={TimeColor}
    >
    <Pressable
    style={styles.TimerView}
    onPress={() => {
      setTimerModal(false);
    }}
  >
    <View style={styles.closeBtnContainer}>
      <View style={styles.closeBtnChild}>
        <AntDesign style={styles.closeBtnIcon} name="close" />
      </View>
    </View>
    <Text style={styles.closeText}>Close</Text>
  </Pressable>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={styles.TimeContainer}>
          <Text style={styles.setTimeText}>Set Time</Text>
          <FlatList
            data={TimeData}
            keyExtractor={(time) => time.id.toString()}
            renderItem={({ item, index }) => (

              <TouchableOpacity
              onPress={() => {
                if(item.min !=='Custom'){
                  setTimerModal(false)
                }
                if (item.min === "Custom") {
                  setShowPicker(true)
                } else {
                  set_user_given_time(item.value);
                
                }
              }}
              style={[
                styles.TimeBtn,
                user_given_time && user_given_time.id === item.id
                  ? styles.userSelectBorder
                  : { borderColor: COLOR.purple42 },
              ]}
            >
              <Text
                style={[
                  styles.TimeText,
                  user_given_time && user_given_time.id === item.id
                    ? { color: COLOR.white_color }
                    : { color: COLOR.white_color68 },
                ]}
              >
                {" "}
                {item.min}
              </Text>
            </TouchableOpacity>
            )}
          />
        </View>
      </View>

      <TimerPickerModal
            visible={showPicker}
            setIsVisible={setShowPicker}
            
          
            onCancel={() => setShowPicker(false)}
            closeOnOverlayPress
            onConfirm={(pickedDuration)=>{
              handleCustomTime(pickedDuration)
            }}
            LinearGradient={LinearGradient}
            styles={{
                theme: "dark",
            }}
            modalProps={{
                overlayOpacity: 0.2,
            }}
           hideSeconds
        />
    </LinearGradient>
  </Modal>
  )
}

export default TimerModal

const styles = StyleSheet.create({
  MainView: {
    flex: FLEX.flex_1,
    paddingHorizontal: 16,
  },
  TimerView: { marginTop: 40, gap: GAP.gap_6 },
  TimeContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: GAP.gap_24,
  },
  closeBtnContainer: { flexDirection: "row", justifyContent: "flex-end"},
  closeBtnChild: {
    height: HEIGHT.height_40,
    width: WIDTH.width_40,
    padding: 10,
    backgroundColor: COLOR.white_color6,
    borderRadius: 20,
  },
  closeBtnIcon: {
    lineHeight: 20,
    textAlign: "center",
    fontSize: FONTSIZE.fontSize_20,
    color: COLOR.secondary_color,
  },
  closeText: {
    alignSelf: "flex-end",
    fontSize: FONTSIZE.fontSize_14,
    lineHeight: 15.4,
    fontFamily: "RobotoCondensed_400",
    color: COLOR.white_color,
    textAlign: "center",
    right: 5,
  },
  setTimeText: {
    lineHeight: 22,
    fontFamily: "RobotoCondensed_400",
    fontWeight: FONTWEIGHT.fontWeight_700,
    color: COLOR.white_color,
    fontSize: FONTSIZE.fontSize_20,
    textAlign: "center",
  },
  TimeBtn: {
    margin: 10,
    minWidth: 220,
    width: "80%",
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    alignItems:'center'
  },
  userSelectBorder: { borderWidth: 1, borderColor: "rgba(255, 255, 255, 1)" },
  TimeText: {
    fontFamily: "RobotoCondensed_400",
    fontWeight: FONTWEIGHT.fontWeight_500,
    lineHeight: 15.4,
  },
})