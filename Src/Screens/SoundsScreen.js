import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Header/Header';
import {MainLinearColor} from '../Styles/Styles';
import {
  COLOR,
  FONTSIZE,
  FLEX,
  HEIGHT,
  WIDTH,
  FONTWEIGHT,
  GAP,
} from '../Theme/theme';
import {SoundsData} from '../Data/Data';
import TrackPlayer from 'react-native-track-player';
import Feather from 'react-native-vector-icons/Feather';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import { load } from 'react-native-track-player/lib/trackPlayer';
const SoundsScreen = () => {
  console.log('From SoundsScreen.js...');
  const Apply_Color = [
    "rgba(148, 70, 184, 1)",
    "rgba(148, 70, 184, 1)",
    "rgba(116, 33, 154, 1)",
    "rgba(75, 8, 105, 1)",
  ];
  const [s_data, set_s_data] = useState([]);
  const [SoundMusic, setSoundMusic] = useState([]);
  const [volume, setVolume] = useState(5);
  const [rain_sound, set_rain_sound] = useState(null);
  const [leaf_rain_sound, set_leaf_rain_sound] = useState(null);
  const [strom_sound, set_strom_sound] = useState(null);
  const [thunder_sound, set_thunder_sound] = useState(null);
  const [water_sound, set_water_sound] = useState(null);
  const [wind_sound, set_wind_sound] = useState(null);
  const [snowrain_sound, set_snowrain_sound] = useState(null);
  const [forest_sound, set_forest_sound] = useState(null);
  const [fire_sound, set_fire_sound] = useState(null);
  const [waterdrops_sound, set_waterdrops_sound] = useState(null);
  const [river_sound, set_river_sound] = useState(null);
  const [houserain_sound, set_houserain_sound] = useState(null);
  const [deepnight_sound, set_deepnight_sound] = useState(null);
  const [bird_sound, set_bird_sound] = useState(null);
  const [train_sound, set_train_sound] = useState(null);
  const [piano_sound, set_piano_sound] = useState(null);
  const [flute_sound, set_flute_sound] = useState(null);
  const [owl_sound, set_owl_sound] = useState(null);

  const [duration, setDuration] = useState(0)
  const [playingSounds, setPlayingSounds] = useState([]);
  const [isPlaying, setisPlaying] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [loaded, setLoaded] = useState(false);
//Handle Audio's Volume   
const handleVolumeChange = useCallback((value, itemId) => {
    setVolume((prevVolume) => ({ ...prevVolume, [itemId]: value }));
    const playingSound = playingSounds.find((sound) => sound._loaded);
    if (playingSound) {
      playingSound.setVolumeAsync(value);
    }
  }, [playingSounds]);


//Stop & Unload Atudio
const deleteAudio = async (item) => {
    console.log(item);
    if (item === "Rain" && rain_sound) {
      try{
        await rain_sound.pauseAsync();
        await rain_sound.unloadAsync();
      set_rain_sound(null)
      console.log(`${item} Stop Successfully`)

      setPlayingSounds((prevSounds) =>
        prevSounds.filter((sound) => sound !== rain_sound)
      );
      setSoundMusic((prevSounds) =>
        prevSounds.filter((sound) => sound.title !== "Rain")
      );
      }
      catch(err){
        console.log(err)
      }
    } 
    if (item === "Leaf Rain" && leaf_rain_sound) {
        await leaf_rain_sound.pauseAsync();
        await leaf_rain_sound.unloadAsync();
      set_leaf_rain_sound(null)
      console.log(`${item} Stop Successfully`)
      setPlayingSounds((prevSounds) =>
        prevSounds.filter((sound) => sound !== leaf_rain_sound)
      );
      setSoundMusic((prevSounds) =>
        prevSounds.filter((sound) => sound.title !== "Leaf Rain")
      );
    }


    if (item === "Strom" && strom_sound) {
      await strom_sound.pauseAsync();
      await strom_sound.unloadAsync();
      set_strom_sound(null);
      console.log(`${item} Stop Successfully`);
      setPlayingSounds((prevSounds) =>
        prevSounds.filter((sound) => sound !== strom_sound)
      );
      setSoundMusic((prevSounds) =>
        prevSounds.filter((sound) => sound.title !== "Strom")
      );
    }


   if (item === "Thunder" && thunder_sound) {
   await thunder_sound.pauseAsync();
   await thunder_sound.unloadAsync();
    set_thunder_sound(null)
   console.log(`${item} Stop Successfully`)
   setPlayingSounds((prevSounds) =>
     prevSounds.filter((sound) => sound !== thunder_sound)
   );
   setSoundMusic((prevSounds) =>
     prevSounds.filter((sound) => sound.title !== "Thunder")
   );
  }

  if (item === "Water" && water_sound) {
   await water_sound.pauseAsync();
   await water_sound.unloadAsync();
    set_water_sound(null)
   console.log(`${item} Stop Successfully`)
   setPlayingSounds((prevSounds) =>
     prevSounds.filter((sound) => sound !== water_sound)
   );
   setSoundMusic((prevSounds) =>
     prevSounds.filter((sound) => sound.title !== "Water")
   );
  }

  if (item === "Wind" && wind_sound) {
    await wind_sound.pauseAsync();
    await wind_sound.unloadAsync();
    set_wind_sound(null)
   console.log(`${item} Stop Successfully`)
   setPlayingSounds((prevSounds) =>
     prevSounds.filter((sound) => sound !== wind_sound)
   );
   setSoundMusic((prevSounds) =>
     prevSounds.filter((sound) => sound.title !== "Wind")
   );
  }

  if (item === "Snow Rain" && snowrain_sound) {
   await snowrain_sound.pauseAsync();
    await snowrain_sound.unloadAsync();
    set_snowrain_sound(null)
   console.log(`${item} Stop Successfully`)
   setPlayingSounds((prevSounds) =>
     prevSounds.filter((sound) => sound !== snowrain_sound)
   );
   setSoundMusic((prevSounds) =>
     prevSounds.filter((sound) => sound.title !== "Snow Rain")
   );
  }
  if (item === "Forest" && forest_sound) {
    await forest_sound.pauseAsync();
    await forest_sound.unloadAsync();
    set_forest_sound(null)
   console.log(`${item} Stop Successfully`)
   setPlayingSounds((prevSounds) =>
     prevSounds.filter((sound) => sound !== forest_sound)
   );
   setSoundMusic((prevSounds) =>
     prevSounds.filter((sound) => sound.title !== "Forest")
   );
  }

  if (item === "Fire" && fire_sound) {
    await fire_sound.pauseAsync();
    await fire_sound.unloadAsync();
    set_fire_sound(null)
   console.log(`${item} Stop Successfully`)
   setPlayingSounds((prevSounds) =>
     prevSounds.filter((sound) => sound !== fire_sound)
   );
   setSoundMusic((prevSounds) =>
     prevSounds.filter((sound) => sound.title !== "Fire")
   );
  }


  if (item === "Water Drops" && waterdrops_sound) {
    await waterdrops_sound.pauseAsync();
    await waterdrops_sound.unloadAsync();
    set_waterdrops_sound(null)
   console.log(`${item} Stop Successfully`)
   setPlayingSounds((prevSounds) =>
     prevSounds.filter((sound) => sound !== waterdrops_sound)
   );
   setSoundMusic((prevSounds) =>
     prevSounds.filter((sound) => sound.title !== "Water Drops")
   );
  }


  if (item === "River" && river_sound) {
   await river_sound.pauseAsync();
   await river_sound.unloadAsync();
    set_river_sound(null)
   console.log(`${item} Stop Successfully`)
   setPlayingSounds((prevSounds) =>
     prevSounds.filter((sound) => sound !== river_sound)
   );
   setSoundMusic((prevSounds) =>
     prevSounds.filter((sound) => sound.title !== "River")
   );
  }

  if (item === "House Rain" && houserain_sound) {
   await houserain_sound.pauseAsync();
    await houserain_sound.unloadAsync();
    set_houserain_sound(null)
   console.log(`${item} Stop Successfully`)
   setPlayingSounds((prevSounds) =>
     prevSounds.filter((sound) => sound !== houserain_sound)
   );
   setSoundMusic((prevSounds) =>
     prevSounds.filter((sound) => sound.title !== "House Rain")
   );
  }

  if (item === "Deep Night" && deepnight_sound) {
    await deepnight_sound.pauseAsync();
    await deepnight_sound.unloadAsync();
    set_deepnight_sound(null)
   console.log(`${item} Stop Successfully`)
   setPlayingSounds((prevSounds) =>
     prevSounds.filter((sound) => sound !== deepnight_sound)
   );
   setSoundMusic((prevSounds) =>
     prevSounds.filter((sound) => sound.title !== "Deep Night")
   );
  }

  if (item === "Bird" && bird_sound) {
   await bird_sound.pauseAsync();
   await bird_sound.unloadAsync();
    set_bird_sound(null)
   console.log(`${item} Stop Successfully`)
   setPlayingSounds((prevSounds) =>
     prevSounds.filter((sound) => sound !== bird_sound)
   );
   setSoundMusic((prevSounds) =>
     prevSounds.filter((sound) => sound.title !== "Bird")
   );
  }

  if (item === "Train" && train_sound) {
    await train_sound.pauseAsync();
   await  train_sound.unloadAsync();
    set_train_sound(null)
   console.log(`${item} Stop Successfully`)
   setPlayingSounds((prevSounds) =>
     prevSounds.filter((sound) => sound !== train_sound)
   );
   setSoundMusic((prevSounds) =>
     prevSounds.filter((sound) => sound.title !== "Train")
   );
  }

  if (item === "Piano" && piano_sound) {
    await piano_sound.pauseAsync();
    await piano_sound.unloadAsync();
    set_piano_sound(null)
   console.log(`${item} Stop Successfully`)
   setPlayingSounds((prevSounds) =>
     prevSounds.filter((sound) => sound !== piano_sound)
   );
   setSoundMusic((prevSounds) =>
     prevSounds.filter((sound) => sound.title !== "Piano")
   );
  }


  if (item === "Flute" && flute_sound) {
    await flute_sound.pauseAsync();
    await flute_sound.unloadAsync();
    set_flute_sound(null)
   console.log(`${item} Stop Successfully`)
   setPlayingSounds((prevSounds) =>
     prevSounds.filter((sound) => sound !== flute_sound)
   );
   setSoundMusic((prevSounds) =>
     prevSounds.filter((sound) => sound.title !== "Flute")
   );
  }

  if (item === "Owl" && owl_sound) {
    await owl_sound.pauseAsync();
    await owl_sound.unloadAsync();
    set_owl_sound(null)
   console.log(`${item} Stop Successfully`)
   setPlayingSounds((prevSounds) =>
     prevSounds.filter((sound) => sound !== owl_sound)
   );
   setSoundMusic((prevSounds) =>
     prevSounds.filter((sound) => sound.title !== "Owl")
   );
  }
  };

//Playing Audio
const  Play_Audio = async(item, song_name)=>{
    try{
      
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
        shouldDuckAndroid: false,
      });
      setisPlaying(true)
      const { sound, status } = await Audio.Sound.createAsync({uri: item.url}, {
        shouldPlay: true,
        volume: volume[item.id] || 0.5
      })
     
     if(status.isLoaded){

      setPlayingSounds((prevSounds) => [...prevSounds, sound]);
      if (song_name === "Rain") {
        console.log("Rain Sound Added");
        set_rain_sound(sound);
        
        
      } else {
        console.log(`Nothing ${song_name}`);
      }


      if (song_name === "Leaf Rain") {
        console.log("Leaf Rain Sound Added");
        set_leaf_rain_sound(sound)
        
      } else {
        console.log(`Nothing ${song_name}`);
      }

      if (song_name === "Strom") {
        console.log("Strom Sound Added");
        set_strom_sound(sound)
      } else {
        console.log(`Nothing ${song_name}`);
      }

      if (song_name === "Thunder") {
        console.log("Thunder Added");
        set_thunder_sound(sound)
      } else {
        console.log(`Nothing ${song_name}`);
      }

      if (song_name === "Water") {
        console.log("Water Added");
        set_water_sound(sound)
      } else {
        console.log(`Nothing ${song_name}`);
      }


      if (song_name === "Wind") {
       console.log("Wind Added");
       set_wind_sound(sound)
      } else {
        console.log(`Nothing ${song_name}`);
      }

      if (song_name === "Snow Rain") {
        console.log("SnowRain Added");
         set_snowrain_sound(sound)
       } else {
         console.log(`Nothing ${song_name}`);
       }

       if (song_name === "Forest") {
        console.log("Forest Added");
         set_forest_sound(sound)
          
       } else {
         console.log(`Nothing ${song_name}`);
       }


       if (song_name === "Fire") {
        console.log("Fire Added");
         set_fire_sound(sound)
       } else {
         console.log(`Nothing ${song_name}`);
       }

       if (song_name === "Water Drops") {
        console.log("Water Drops Added");
         set_waterdrops_sound(sound)
       } else {
         console.log(`Nothing ${song_name}`);
       }

       if (song_name === "River") {
        console.log("River Added");
         set_river_sound(sound)
       } else {
         console.log(`Nothing ${song_name}`);
       }

       if (song_name === "House Rain") {
        console.log("HouseRain Added");
         set_houserain_sound(sound)
       } else {
         console.log(`Nothing ${song_name}`);
       }

       if (song_name === "Deep Night") {
        console.log("DeepNight Added");
        set_deepnight_sound(sound)
         
       } else {
         console.log(`Nothing ${song_name}`);
       }


       if (song_name === "Bird") {
        console.log("Bird Added");
         set_bird_sound(sound)
       } else {
         console.log(`Nothing ${song_name}`);
       }

       if (song_name === "Train") {
        console.log("Train Added");
        set_train_sound(sound)
       } else {
         console.log(`Nothing ${song_name}`);
       }

       if (song_name === "Piano") {
        console.log("Piano Added");
        set_piano_sound(sound)
         
       } else {
         console.log(`Nothing ${song_name}`);
       }

       if (song_name === "Flute") {
        console.log("Piano Added");
        set_flute_sound(sound)
       } else {
         console.log(`Nothing ${song_name}`);
       }

       if (song_name === "Owl") {
        console.log("Piano Added");
        set_owl_sound(sound)
         
       } else {
         console.log(`Nothing ${song_name}`);
       }
     }else{
      console.log('Not Loaded..')
     }
    } catch (error) {
      console.error("Error loading sound:", error);
    }

   
}

const handle_sound_music = (item) => {
    set_s_data(item.id);
    
    // console.log(SoundMusic)
    // console.log('RESULT:' + !SoundMusic.some((existingItem) => areObjectsEqual(existingItem, item)));
    if (
      !SoundMusic.some((existingItem) => areObjectsEqual(existingItem, item))
    ) {
     
      setSoundMusic((prevArray) => [...prevArray, item]);
      Play_Audio(item, item.title);
      soundDuration()
      
      
    }
    
  };
//Pause Audio  
const handlePause = async () => {
    try {
      if (isPlaying) {
        await Promise.all(playingSounds.map((sound) => sound.pauseAsync()));
        setisPlaying(false);
      }
    } catch (error) {
      console.error("Error pausing the audio", error);
    }
};

//Resume Audio
const handleResume = async () => {
    try {
      // Pause all playing sounds
      await Promise.all(playingSounds.map((sound) => sound.playAsync()));
      setisPlaying(true);
    } catch (error) {
      console.error("Error pausing the audio", error);
    }
};

const areObjectsEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.id !== keys2.id) {
      return false;
    }

    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  };



let soundInstances = []
let totalDuration = 0;
const soundDuration = async () => {
    try {
      for (const track of SoundMusic) {
        const { sound, status } = await Audio.Sound.createAsync(
          {uri:track.url},
          { shouldPlay: false }
        );
        soundInstances.push(sound);
        if (status.isLoaded) {
          totalDuration += status.durationMillis;
        }
        
      }
   
      // Unload all the sound instances
      soundInstances.forEach((sound) => sound.unloadAsync());
      console.log(`Total Duration ${totalDuration}`)
      setDuration(totalDuration);
      console.log(`Here is the ${totalDuration}`);
    } catch (error) {
      console.error("Error loading sound:", error);
    }
};


  useEffect(() => {
    let timer;

    if (isPlaying) {
      timer = setInterval(() => {
        setDuration((prevDuration) => prevDuration - 1000);
      }, 1000);
    }
  }, [isPlaying]);

  const formatTime = () => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
     
    if (minutes < 0 || SoundMusic.length ===0) {
      return `${0}${0}:${0}${0}`;
    } else {
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }
  };
  
  const handleTime = (item) => {
    setTotalTime((prev) => {
      const newTotalTime = prev + item.time;
      
      return newTotalTime; // Return the updated value to setTotalTime
    });
    console.log(totalTime)
  };

  const thumb_image = require("../../assets/icons/circle.png");
  return (
    <LinearGradient
      style={styles.container}
      start={styles.LinearAxis}
      colors={MainLinearColor}>
      <Header />

      <View style={styles.SoundParentContainer}>
        <Text style={[styles.SoundText, styles.white_color]}>Sounds___</Text>
        <View>
          <FlatList
            data={SoundsData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.SoundScreenWraper}
                onPress={() => {
                handleTime(item)
                handle_sound_music(item)
                deleteAudio(item.title)
                setLoaded(!loaded)
                }}>
                <View>
                  {SoundMusic.some((edit_item) => edit_item.id === item.id) ? (
                     <View style={[styles.SoundIconContainer_ContentBox]}>
                     <LinearGradient
                       style={styles.IconBox}
                       colors={Apply_Color}
                     >
                       <Image
                         style={styles.SoundsIconImage}
                         source={item.artwork}
                       />
                     </LinearGradient>
                                         
                     <View style={[styles.SoundIcon_ContSlectedBox]}>
                       <Text style={[styles.SoundName, styles.white_color]}>
                           {item.title}
                         </Text>
                       <Slider
                         style={styles.slider}
                         minimumValue={0}
                          maximumValue={1}
                         minimumTrackTintColor={COLOR.purple1}
                         maximumTrackTintColor={COLOR.purple42}
                         thumbImage={thumb_image}
                         value={volume[item.id] || 0.3} // Use the stored volume or default to 0.5
                         onValueChange={(value) =>
                          handleVolumeChange(value, item.id)
                        }
                       />
                     </View>
                   </View>
                  ) : (
                    <View style={[styles.SoundIconContainer_ContentBox]}>
                    <View style={styles.IconBox}>
                      <Image
                        style={[styles.SoundsIconImage, {opacity: 0.68}]}
                        source={item.artwork}
                      />
                    </View>

                    <View style={[styles.SoundIcon_ContSlectedBox]}>
                      <Text style={[styles.SoundName, styles.white_color]}>
                        {item.title}
                      </Text>
                    </View>
                  </View>
                  )}
                
                </View>
              </TouchableOpacity>
            )}
            numColumns={3}
          />
        </View>
      </View>

      <View style={styles.BottomPlayerContainer}>
        <View style={styles.gap6}>
        <Feather
            name="clock"
            style={{textAlign: 'center'}}
            color={COLOR.white_color}
            size={FONTSIZE.fontSize_20}
          />
          {loaded?(
           <ActivityIndicator size={'small'} color={'#fff'}/>
           
          ) :(
            <>
            
          <Text style={styles.TimeText}>{formatTime()}</Text>
            </>
          )}
         
        </View>
        <TouchableOpacity
          onPress={() => {
            if (isPlaying) {
              console.log("I have Entered Here");
              handlePause(); // Pause the audio if it's currently playing
            } else {
              if (playingSounds) {
                console.log("I am here");
                handleResume();
              } else {
              }
            }
          }}
          disabled={SoundMusic.length === 0}
          style={styles.gap6}
        >
          <Image
            style={[styles.PlayBtn,{opacity:SoundMusic.length === 0  ? 0.68 : 1}]}
            source={
              isPlaying && playingSounds.length != 0
                ? require("../../assets/icons/Pause.png")
                : require("../../assets/icons/Playbutton.png")
            }
          />
        </TouchableOpacity>

        {/* Selected Sound  */}
        <View style={styles.gap6}>
          <View style={styles.SelectedNotification}>
            <Text style={styles.NotificationText}>{SoundMusic.length}</Text>
          </View>
          <Image
            style={styles.SelectedIcon}
            source={require('../../assets/icons/music.png')}
          />
          <Text style={[styles.SelectedText, styles.white_color]}>
            Selected
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SoundsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  SoundParentContainer: {
    flex: FLEX.flex_1,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  SoundText: {
    fontFamily: 'RobotoCondensed_700',
    fontSize: FONTSIZE.fontSize_17,
    lineHeight: 17.6,
  },
  white_color: {
    color: COLOR.white_color,
  },
  SoundScreenWraper: {
    paddingVertical: 12,
    width: '33.33%',
  },
  SoundIconContainer_ContentBox: {
    alignItems: 'center',
    gap: 10,
    paddingBottom: 0,
  },
  IconBox: {
    backgroundColor: COLOR.white_color32,
    borderRadius: 8,
    minHeight: 66,
    minWidth: 66,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SoundsIconImage: {
    maxHeight: HEIGHT.height_34,
    maxWidth: WIDTH.width_30,
    resizeMode: 'contain',
    opacity: 1,
  },
  SoundIcon_ContSlectedBox: {
    alignItems: 'center',
    height: 40,
    gap: 4,
  },
  SoundName: {
    fontFamily: 'RobotoCondensed_400',
    fontWeight: FONTWEIGHT.fontWeight_500,
    lineHeight: 15.4,
    fontSize: FONTSIZE.fontSize_14,
    textAlign: 'center',
  },
  BottomPlayerContainer: {
    height: HEIGHT.height_150,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gap6: {gap: GAP.gap_6},
  TimeText: {
    textAlign: 'center',
    fontFamily: 'RobotoCondensed_400',
    fontSize: FONTSIZE.fontSize_14,
    lineHeight: 15.4,
    color: COLOR.white_color68,
  },
  PlayBtn: {
    width: WIDTH.width_140,
    height: HEIGHT.height_44,
    resizeMode: 'cover',
  },
  SelectedNotification: {
    height: HEIGHT.height_18,
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH.width_16,
    position: 'absolute',
    zIndex: 1,
    left: 34,
    top: -8,
    borderRadius: 12,
    backgroundColor: COLOR.purple_color,
  },
  NotificationText: {
    color: COLOR.white_color,
    fontFamily: 'RobotoCondensed_400',
    fontSize: FONTSIZE.fontSize_10,
    lineHeight: 11,
    textAlign: 'center',
  },
  SelectedIcon: {
    height: HEIGHT.height_20,
    width: WIDTH.width_20,
    alignSelf: 'center',
  },
  SelectedText: {
    fontFamily: 'RobotoCondensed_400',
    fontWeight: FONTWEIGHT.fontWeight_500,
    lineHeight: 15.4,
  },
  slider: {
    width: 100,
    marginTop:0
  },
});
