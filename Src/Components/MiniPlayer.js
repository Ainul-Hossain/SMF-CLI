import { Text, View, Pressable, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { Player } from '../Context/PlayerContext'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TrackPlayer, { State, usePlaybackState, useProgress } from 'react-native-track-player';
import { HEIGHT, WIDTH, GAP, COLOR, FLEX, FONTSIZE, FONTWEIGHT } from '../Theme/theme';
const MiniPlayer = ({setMusicModalVisible, setminiPlayer}) => {
  const {item, setCurrentTrack, seconds,set_user_given_time,user_given_time,setSeconds,
    minutes, editMusicSound,setisPlaying, isPlaying, currentTrack} = useContext(Player)

    
  const playBackState = usePlaybackState()
  let Progress = useProgress()

  
const handlePause = async () => {
      try {
        if (isPlaying) {
          await Promise.all(editMusicSound.map((sound) => sound.pauseAsync()));
          setisPlaying(false);
        }
      } catch (error) {
        console.error("Error pausing the audio", error);
      }
  };

const handleResume = async () => {
    try {
      // Pause all playing sounds
      await Promise.all(editMusicSound.map((sound) => sound.playAsync()));
      setisPlaying(true);
    } catch (error) {
      console.error("Error pausing the audio", error);
    }
  };
  
  return (
    <Pressable
    onPress={() => {
     setMusicModalVisible(true)
     setminiPlayer(false)
     
    }}
    style={styles.MiniPlayerContainer}
  >
    <View style={styles.ChildContainer}>
      <View style={styles.musicInfoContainer}>
        <Image style={styles.musicImage} source={item.artwork} />
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.musicName}>{item.title}</Text>
          <View style={styles.musicDuration}>
            <Image
              style={styles.clockIcon}
              source={require("../../assets/icons/blurClock.png")}
            />
            

          {user_given_time > 0 ? (
                    <Text style={styles.musicTime}>
                      {minutes}:{seconds < 10 ? "0" : ""}{seconds}
                    </Text>
                  ) : (
                      playBackState.state === State.Stopped ?(
                        <Text style={styles.musicTime}>
                        {item.t_data}
                    </Text>
                      ) :(
                        <Text style={styles.musicTime}>{new Date((Progress.duration-Progress.position)*1000).toISOString().substring(15, 19)}</Text>
                      )
                      )         
                  }
          </View>
        </View>
      </View>
    
   

<View style={styles.playCloseContainer}>

{playBackState.state === State.Playing ?(
  <TouchableOpacity
  onPress={async() => {
    await TrackPlayer.pause()
    handlePause()
  }}
>
  <View style={{ padding: 10 }}>
    <MaterialCommunityIcons name="pause" size={16} color="#fff" />
  </View>
</TouchableOpacity>
) :(
  <TouchableOpacity
  onPress={async() => {
    if(currentTrack === false){
      await TrackPlayer.skip(item.id-1)
      await TrackPlayer.play()
      setCurrentTrack(true)
    }else{
      await TrackPlayer.play()
      handleResume()
    }
  }}
>
  <View style={{ padding: 10 }}>
    <Image
      style={styles.playClossIcon}
      source={require("../../assets/icons/playbtn.png")}
    />
  </View>
</TouchableOpacity>
) }
<TouchableOpacity
onPress={async() => {
  await TrackPlayer.stop()
  setCurrentTrack(false)
  setminiPlayer(false)
  set_user_given_time(0)
  setSeconds(0)
  handlePause()
}}
style={{ padding: 10 }}
>
<Image
  style={styles.playClossIcon}
  source={require("../../assets/icons/cross.png")}
/>
</TouchableOpacity>
</View>
  
    </View>
  </Pressable>
  )
}

export default MiniPlayer

const styles = StyleSheet.create({
  MiniPlayerContainer: {
    width: WIDTH.width_100,
    height: HEIGHT.height_60,
    backgroundColor: COLOR.black_color09,
    padding: 8,
    marginBottom: 60,
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: GAP.gap_10,
  },
  ChildContainer: {
    flexDirection: "row",
    flex: FLEX.flex_1,
    justifyContent: "space-between",
  },
  musicInfoContainer: { flexDirection: "row", gap: GAP.gap_10 },
  musicImage: {
    width: WIDTH.width_48,
    height: HEIGHT.height_42,
    borderRadius: 4,
  },
  musicName: {
    color: COLOR.white_color,
    fontFamily: "RobotoCondensed_400",
    fontSize: FONTSIZE.fontSize_12,
    lineHeight: 13,
  },
  musicDuration: { flexDirection: "row", gap: GAP.gap_5 },
  clockIcon: {
    width: WIDTH.width_10,
    height: HEIGHT.height_11,
    resizeMode: "contain",
  },
  musicTime: {
    color: COLOR.white_color,
    fontSize: FONTSIZE.fontSize_10,
    lineHeight: 13,
  },
  playCloseContainer: {
    flexDirection: "row",
    gap: GAP.gap_20,
    alignItems: "center",
    right: 25,
  },
  playClossIcon: {
    width: WIDTH.width_12,
    height: HEIGHT.height_18,
    resizeMode: "contain",
  },
  
})