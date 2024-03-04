import { Text, View, Pressable, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Player } from '../Context/PlayerContext'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TrackPlayer, { State, usePlaybackState, useProgress } from 'react-native-track-player';
import { HEIGHT, WIDTH, GAP, COLOR, FLEX, FONTSIZE, FONTWEIGHT } from '../Theme/theme';
const MiniPlayer = ({setMusicModalVisible, setminiPlayer}) => {
  const {item, setCurrentTrack, seconds,set_user_given_time,user_given_time,setSeconds,
    minutes, editMusicSound,setisPlaying, isPlaying, currentTrack,rain_sound,
    leaf_rain_sound,
    strom_sound,
    thunder_sound,
    water_sound,
    wind_sound,
    snowrain_sound,
    forest_sound,
    fire_sound,
    waterdrops_sound,
    river_sound,
    houserain_sound,
    deepnight_sound,
    bird_sound,
    train_sound,
    piano_sound,
    flute_sound,
    owl_sound} = useContext(Player)

    
const playBackState = usePlaybackState()
let Progress = useProgress()


useEffect(() => {
  const audio_status = async () => {
    const piano_status = await piano_sound.getStatusAsync();

    if (!piano_status.isPlaying && minutes >= 0 && piano_sound) {
      if (seconds === 0) {
        await piano_sound.stopAsync();
      } else {
        await piano_sound.stopAsync();
        await piano_sound.playAsync();
        await TrackPlayer.setVolume(1);
      }
    }
  };
  audio_status();
}, [seconds]);

useEffect(() => {
  const audio_status = async () => {
    const owl_status = await owl_sound.getStatusAsync();
    if (!owl_status.isPlaying && minutes >= 0 && owl_sound) {
      console.log(`Entering....owl ${seconds}`);
      if (seconds === 0) {
        await owl_sound.stopAsync();
      } else {
        await owl_sound.stopAsync();
        await owl_sound.playAsync();
        await TrackPlayer.setVolume(1);
      }
    }
  };
  audio_status();
}, [seconds]);

useEffect(() => {
  const audio_status = async () => {
    const train_status = await train_sound.getStatusAsync();
    if (!train_status.isPlaying && minutes >= 0 && train_sound) {
      console.log('Entering....train');
      if (seconds === 0) {
        await train_sound.stopAsync();
      } else {
        await train_sound.stopAsync();
        await train_sound.playAsync();
        await TrackPlayer.setVolume(1);
      }
    }
  };
  audio_status();
}, [seconds]);
useEffect(() => {
  const audio_status = async () => {
    const flute_status = await flute_sound.getStatusAsync();
    if (!flute_status.isPlaying && minutes >= 0 && flute_sound) {
      console.log('Entering....train');
      if (seconds === 0) {
        await flute_sound.stopAsync();
      } else {
        await flute_sound.stopAsync();
        await flute_sound.playAsync();
        await TrackPlayer.setVolume(1);
      }
    }
  };
  audio_status();
}, [seconds]);
useEffect(() => {
  const audio_status = async () => {
    const bird_status = await bird_sound.getStatusAsync();
    if (!bird_status.isPlaying && minutes >= 0 && bird_sound) {
      console.log('Entering....train');

      if (seconds === 0) {
        await bird_sound.stopAsync();
      } else {
        await bird_sound.stopAsync();
        await bird_sound.playAsync();
        await TrackPlayer.setVolume(1);
      }
    }
  };
  audio_status();
}, [seconds]);
useEffect(() => {
  const audio_status = async () => {
    const deepnight_status = await deepnight_sound.getStatusAsync();
    if (!deepnight_status.isPlaying && minutes >= 0 && deepnight_sound) {
      if (seconds === 0) {
        await deepnight_sound.stopAsync();
      } else {
        await deepnight_sound.stopAsync();
        await deepnight_sound.playAsync();
        await TrackPlayer.setVolume(1);
      }
    }
  };
  audio_status();
}, [seconds]);
useEffect(() => {
  const audio_status = async () => {
    const houserain_status = await houserain_sound.getStatusAsync();
    if (!houserain_status.isPlaying && minutes >= 0 && houserain_sound) {
      console.log('Entering....train');

      if (seconds === 0) {
        await houserain_sound.stopAsync();
      } else {
        await houserain_sound.stopAsync();
        await houserain_sound.playAsync();
        await TrackPlayer.setVolume(1);
      }
    }
  };
  audio_status();
}, [seconds]);
useEffect(() => {
  const audio_status = async () => {
    const river_status = await river_sound.getStatusAsync();
    if (!river_status.isPlaying && minutes >= 0 && river_sound) {
      console.log('Entering....train');

      if (seconds === 0) {
        await river_sound.stopAsync();
      } else {
        await river_sound.stopAsync();
        await river_sound.playAsync();
        await TrackPlayer.setVolume(1);
      }
    }
  };
  audio_status();
}, [seconds]);
useEffect(() => {
  const audio_status = async () => {
    const waterdrops_status = await waterdrops_sound.getStatusAsync();
    if (!waterdrops_status.isPlaying && minutes >= 0 && waterdrops_sound) {
      console.log('Entering....train');

      if (seconds === 0) {
        await water_sound.stopAsync();
      } else {
        await water_sound.stopAsync();
        await water_sound.playAsync();
        await TrackPlayer.setVolume(1);
      }
    }
  };
  audio_status();
}, [seconds]);

useEffect(() => {
  const audio_status = async () => {
    const fire_status = await fire_sound.getStatusAsync();
    if (!fire_status.isPlaying && minutes >= 0 && fire_sound) {
      console.log('Entering....train');

      if (seconds === 0) {
        await fire_sound.stopAsync();
      } else {
        await fire_sound.stopAsync();
        await fire_sound.playAsync();
        await TrackPlayer.setVolume(1);
      }
    }
  };
  audio_status();
}, [seconds]);
useEffect(() => {
  const audio_status = async () => {
    const forest_status = await forest_sound.getStatusAsync();
    if (!forest_status.isPlaying && minutes >= 0 && forest_sound) {
      console.log('Entering....train');

      if (seconds === 0) {
        await forest_sound.stopAsync();
      } else {
        await forest_sound.stopAsync();
        await forest_sound.playAsync();
        await TrackPlayer.setVolume(1);
      }
    }
  };
  audio_status();
}, [seconds]);
useEffect(() => {
  const audio_status = async () => {
    const snowrain_status = await snowrain_sound.getStatusAsync();
    if (!snowrain_status.isPlaying && minutes >= 0 && snowrain_sound) {
      console.log('Entering....train');

      if (seconds === 0) {
        await snowrain_sound.stopAsync();
      } else {
        await snowrain_sound.stopAsync();
        await snowrain_sound.playAsync();
        await TrackPlayer.setVolume(1);
      }
    }
  };
  audio_status();
}, [seconds]);
useEffect(() => {
  const audio_status = async () => {
    const wind_status = await wind_sound.getStatusAsync();
    if (!wind_status.isPlaying && minutes >= 0 && wind_sound) {
      console.log('Entering....train');

      if (seconds === 0) {
        await wind_sound.stopAsync();
      } else {
        await wind_sound.stopAsync();
        await wind_sound.playAsync();
        await TrackPlayer.setVolume(1);
      }
    }
  };
  audio_status();
}, [seconds]);
useEffect(() => {
  const audio_status = async () => {
    const water_status = await water_sound.getStatusAsync();
    if (!water_status.isPlaying && minutes >= 0 && water_sound) {
      console.log('Entering....train');
      if (seconds === 0) {
        await water_sound.stopAsync();
      } else {
        await water_sound.stopAsync();
        await water_sound.playAsync();
        await TrackPlayer.setVolume(1);
      }
    }
  };
  audio_status();
}, [seconds]);
useEffect(() => {
  const audio_status = async () => {
    const thunder_status = await thunder_sound.getStatusAsync();
    if (!thunder_status.isPlaying && minutes >= 0 && thunder_sound) {
      console.log('Entering....train');

      if (seconds === 0) {
        await thunder_sound.stopAsync();
      } else {
        await thunder_sound.stopAsync();
        await thunder_sound.playAsync();
        await TrackPlayer.setVolume(1);
      }
    }
  };
  audio_status();
}, [seconds]);
useEffect(() => {
  const audio_status = async () => {
    const strom_status = await strom_sound.getStatusAsync();
    if (!strom_status.isPlaying && minutes >= 0 && strom_sound) {
      console.log('Entering....train');

      if (seconds === 0) {
        await strom_sound.stopAsync();
      } else {
        await strom_sound.stopAsync();
        await strom_sound.playAsync();
        await TrackPlayer.setVolume(1);
      }
    }
  };
  audio_status();
}, [seconds]);
useEffect(() => {
  const audio_status = async () => {
    const leafrain_status = await leaf_rain_sound.getStatusAsync();
    if (!leafrain_status.isPlaying && minutes >= 0 && leaf_rain_sound) {
      console.log('Entering....train');

      if (seconds === 0) {
        await leaf_rain_sound.stopAsync();
      } else {
        await leaf_rain_sound.stopAsync();
        await leaf_rain_sound.playAsync();
        await TrackPlayer.setVolume(1);
      }
    }
  };
  audio_status();
}, [seconds]);
useEffect(() => {
  const audio_status = async () => {
    const rain_status = await rain_sound.getStatusAsync();
    if (!rain_status.isPlaying && minutes >= 0 && rain_sound) {
      console.log('Entering....train');

      if (seconds === 0) {
        await rain_sound.stopAsync();
      } else {
        await rain_sound.stopAsync();
        await rain_sound.playAsync();
        await TrackPlayer.setVolume(1);
      }
    }
  };
  audio_status();
}, [seconds]);


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