import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Modal,
  ImageBackground,
  Pressable,
  Image,
  ActivityIndicator
} from 'react-native';
import React, {lazy, useContext, useEffect, useState} from 'react';
import {
  COLOR,
  FONTSIZE,
  FLEX,
  HEIGHT,
  WIDTH,
  FONTWEIGHT,
  GAP,
} from '../Theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import {Player} from '../Context/PlayerContext';
import EditModal from './EditModal';
import TrackPlayer, { Event, Capability, State, usePlaybackState, useProgress, useTrackPlayerEvents } from 'react-native-track-player';
import { MusicDatas } from '../Data/Data';
import TimerModal from './TimerModal';
const MusicModal = ({MusicModalVisible, setMusicModalVisible}) => {
  console.log('From MusicModal.js...');
  const {item, setItem, miniPlayer,setminiPlayer,  user_given_time, set_user_given_time, currentTrack, setCurrentTrack, EditMusic,setEditMusic, setUserItem, 
  loadedSounds, setLoadedSounds, rain_sound, set_rain_sound,
  leaf_rain_sound, set_leaf_rain_sound,
  strom_sound, set_strom_sound,
  thunder_sound, set_thunder_sound,
  water_sound, set_water_sound,
  wind_sound, set_wind_sound,
  snowrain_sound, set_snowrain_sound,
  forest_sound, set_forest_sound,
  fire_sound, set_fire_sound,
  waterdrops_sound, set_waterdrops_sound,
  river_sound, set_river_sound,
  houserain_sound, set_houserain_sound,
  deepnight_sound, set_deepnight_sound,
  bird_sound, set_bird_sound,
  train_sound, set_train_sound,
  piano_sound, set_piano_sound,
  flute_sound, set_flute_sound,
  owl_sound, set_owl_sound,
  setPlayingSounds,
  seconds, setSeconds,
  minutes, setMinutes,
  editMusicSound, 
  setEditMusicSound,
  isPlaying, setisPlaying
  } = useContext(Player);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [timerModal, setTimerModal] = useState(false)
  const [duration, setDuration] = useState(0)
  

  const Music_Modal_Color = [
    'rgba(123, 62, 198, 0.68)',
    'rgba(75, 40, 121, 0.68)',
    'rgba(34, 21, 54, 0.68)',
  ];
 const playBackState = usePlaybackState()
 let Progress = useProgress()
 

//Initializing user custom time 
 useEffect(()=>{
  setMinutes(user_given_time)
  setSeconds(0)
 },[user_given_time])

 //Audio Repeating according user given time
 useEffect(()=>{
  if(minutes>=0){
    if(playBackState.state === State.Stopped){
       TrackPlayer.skip(item.id-1)
       TrackPlayer.play()
    }
   
    else{
      console.log(`Here Playback State: ` + playBackState.state)
      console.log(`Nothing.....${minutes}::${seconds}`)
      if(seconds === 0 && minutes<=0){
        TrackPlayer.stop()
        setCurrentTrack(false)
      }
    }
  }
 },[seconds])

//Initializing Music Data Before Render
useEffect(() => {
    setupAudioPlayer();
  }, []);

//Use Given Custom Timer & make it countdown
var timer;
useEffect(() => {
  timer = setInterval(() => {
    if (seconds === 0 && minutes === 0) {
      clearInterval(timer);
      // Timer reached zero, you may want to handle this case
     
    } else if (seconds === 0) {
      if(playBackState.state === State.Paused || playBackState.state === State.Stopped){
        console.log('Here is the problem..')
      }else{
        
        setMinutes((prevMinutes) => prevMinutes - 1);
        setSeconds(59);
      }
     
    } else {
      if(playBackState.state === State.Paused || playBackState.state === State.Stopped){
         
         if(minutes>0 && playBackState.state === State.Stopped){
          
          TrackPlayer.skip(item.id-1)
          TrackPlayer.play()
         }
      }
      else if(minutes !== 0 || minutes ===0){
       
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
      else{
        console.log('It is Here')
      }
     
    }
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, [seconds, minutes, playBackState.state === State.Stopped, playBackState.state === State.Paused]);



//Format The Counter in 12hour
  const formatTime = () => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    
    console.log(`Minutes ${minutes}`)
    if (minutes < 0) {
      return `${0}${0}:${0}${0}`;
    } else {
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }
  };

//Reset All Functionality from Parent Modal
  const handle_reset = async () => {
    // try {
    //   await Promise.all(
    //     playingSounds.map(async (playingSound, index) => {
    //       try {
    //         const status = await playingSound.getStatusAsync();

    //         if (status.isPlaying) {
    //           await playingSound.stopAsync();
    //           await playingSound.unloadAsync();
    //           console.log(`Sound ${index + 1} stopped and unloaded.`);
    //         } else {
    //           console.log(`Sound ${index + 1} not stopped. Status:`, status);
    //         }
    //       } catch (error) {
    //         console.error(`Error with sound ${index + 1}:`, error);
    //       }
    //     })
    //   );

    //   setPlayingSounds([]);
    //   setUserItem([]);
    //   setEditMusic([]);
    // } catch (error) {
    //   console.error("Error in handle_reset:", error);
    // }

    if (rain_sound !== null) {
      rain_sound.pauseAsync();
      rain_sound.unloadAsync();
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log("Not Available");
    }

    if (leaf_rain_sound !== null) {
      leaf_rain_sound.pauseAsync();
      leaf_rain_sound.unloadAsync();
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log("Not Available");
    }

    if (strom_sound !== null) {
      strom_sound.pauseAsync();
      strom_sound.unloadAsync();
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log("Not Available");
    }

    if (thunder_sound !== null) {
      thunder_sound.pauseAsync();
      thunder_sound.unloadAsync();
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log("Not Available");
    }

    if (water_sound !== null) {
      water_sound.pauseAsync();
      water_sound.unloadAsync();
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log("Not Available");
    }

    if (wind_sound !== null) {
      wind_sound.pauseAsync();
      wind_sound.unloadAsync();
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log("Not Available");
    }

    if (snowrain_sound !== null) {
      snowrain_sound.pauseAsync();
      snowrain_sound.unloadAsync();
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log("Not Available");
    }

    if (forest_sound !== null) {
      forest_sound.pauseAsync();
      forest_sound.unloadAsync();
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log("Not Available");
    }

    if (fire_sound !== null) {
      fire_sound.pauseAsync();
      fire_sound.unloadAsync();
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log("Not Available");
    }

    if (waterdrops_sound !== null) {
      waterdrops_sound.pauseAsync();
      waterdrops_sound.unloadAsync();
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log("Not Available");
    }

    if (river_sound !== null) {
      river_sound.pauseAsync();
      river_sound.unloadAsync();
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log("Not Available");
    }

    if (houserain_sound !== null) {
      houserain_sound.pauseAsync();
      houserain_sound.unloadAsync();
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log("Not Available");
    }

    if (deepnight_sound !== null) {
      deepnight_sound.pauseAsync();
      deepnight_sound.unloadAsync();
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log("Not Available");
    }

    if (bird_sound !== null) {
      bird_sound.pauseAsync();
      bird_sound.unloadAsync();
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log("Not Available");
    }

    if (train_sound !== null) {
      train_sound.pauseAsync();
      train_sound.unloadAsync();
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log("Not Available");
    }

    if (piano_sound !== null) {
      piano_sound.pauseAsync();
      piano_sound.unloadAsync();
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log("Not Available");
    }

    if (flute_sound !== null) {
      flute_sound.pauseAsync();
      flute_sound.unloadAsync();
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log("Not Available");
    }

    if (owl_sound !== null) {
      owl_sound.pauseAsync();
      owl_sound.unloadAsync();
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log("Not Available");
    }
  };

  //Setup The Audio Player
  const setupAudioPlayer = async () => {
    try {
     
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        capabilities: [
          Capability.Play,
          Capability.Pause
          
        ],
        compactCapabilities: [
          Capability.Play,
          Capability.Pause
        ],
        
      });

     

      await TrackPlayer.add(MusicDatas);
    } catch (error) {
      console.error('Error setting up audio player:', error);
    }
  };

  //Play & Pause Functionality 
  const togglePlayBack = async () => {
    if (playBackState.state === State.Playing) {
      await TrackPlayer.pause();
      handlePause()
      console.log('Paused...');
    } else {
      await TrackPlayer.play();
      await TrackPlayer.setVolume(1);
      setCurrentTrack(true)
      handleResume()
      console.log('Playing...');
    }
  };

  //Stoping Audio Functionality
  const handleStopingAudio =async ()=>{
        setMusicModalVisible(false);
        await TrackPlayer.stop()
        setCurrentTrack(false)
        handle_reset();
        setLoadedSounds([]);
        setUserItem([]);
  }
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

  
//Prevent Repeating Audios
const events = [
    Event.PlaybackActiveTrackChanged,
  ];
 useTrackPlayerEvents(events, async(event)=>{
  if(event.type === Event.PlaybackActiveTrackChanged && playBackState.state === State.Playing ){
    setCurrentTrack(false)
    await TrackPlayer.stop()
  }
 }) 

  return (
    <Modal
      statusBarTranslucent={true}
      animationType="slide"
      visible={MusicModalVisible}>
      <ImageBackground source={item.artwork} style={{flex: FLEX.flex_1}}>
        <LinearGradient colors={Music_Modal_Color} style={[styles.MainViewLin]}>
          <View style={styles.MusicModalNav}>
            <Pressable onPress={() => {
              setminiPlayer(true)
              setMusicModalVisible(false)

            }} style={{padding: 10}}>
              <Image
                style={styles.downIcon}
                source={require('../../assets/icons/down.png')}
              />
            </Pressable>

            <View style={{padding: 10}}>
              <Text style={styles.ModalMusicText}>{item.title}</Text>
            </View>

            <Pressable
              onPress={async() => {
                await handleStopingAudio()
                setEditMusicSound([])
                set_user_given_time(0)
                setSeconds(0)
              }}
              style={styles.MusicModalCrossIcon}>
              <Image
                style={styles.crossIcon}
                source={require('../../assets/icons/cross.png')}
              />
            </Pressable>
          </View>

          <View style={styles.MusicCircle}>
            <View style={styles.CircleBit2}>
              <View style={styles.CircleBit1}>
                <View style={styles.CircleBit}>
                <View style={styles.MusicTimeContainer}>
                  {user_given_time > 0 ? (
                    <Text style={styles.MusicDuration}>
                      {minutes}:{seconds < 10 ? "0" : ""}{seconds}
                    </Text>
                  ) : (
                      playBackState.state === State.Stopped ?(
                        <Text style={styles.MusicDuration}>
                        {item.t_data}
                    </Text>
                      ) :(
                        <Text style={styles.MusicDuration}>
                          
                          {new Date((Progress.duration - Progress.position) * 1000)
                          .toISOString()
                          .substr(14, 5)}
                          </Text>
                      )
                      )
                  }
                  

                  </View>
                    {/* {playBackState.state === State.Stopped ?(
                         <Text style={styles.MusicDuration}>00:00</Text>
                    ) :(
                <Text style={styles.MusicDuration}>{new Date((Progress.duration-Progress.position)*1000).toISOString().substring(15, 19)}</Text>
                    ) } */}
                 
                </View>
              </View>
            </View>
          </View>

          <View style={styles.TimerEditContainer}>
            <TouchableOpacity
              onPress={() => {
                setTimerModal(true)
                
              }}
              style={[
                styles.gap6,
                {justifyContent: 'center', alignItems: 'center'},
              ]}>
              <View style={styles.ClockContainer}>
                <Image
                  style={{width: WIDTH.width_20, height: HEIGHT.height_20}}
                  source={require('../../assets/icons/Playerclock.png')}
                />
              </View>
              <Text style={styles.ClockIconText}>Set Timer</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setEditModalVisible(true);
              }}
              style={{gap: 6}}>
              <View style={styles.ClockContainer}>
                <Image
                  style={{width: WIDTH.width_20, height: HEIGHT.height_20}}
                  source={require('../../assets/icons/pen.png')}
                />

                <View style={styles.EditView}>
                  <Text style={styles.lengthText}>{EditMusic.length}</Text>
                </View>
              </View>
              <Text style={styles.ClockIconText}>Edit</Text>
            </TouchableOpacity>
          </View>
            <View style={{flex:1, alignItems:'center'}}>
              <TouchableOpacity onPress={async()=>{
                
                if(currentTrack != true){
                  await TrackPlayer.skip(item.id-1)
                  togglePlayBack(playBackState)
                }else{
                  togglePlayBack(playBackState)
                } 
              }} style={styles.PlayerButton}>
              {playBackState.state === State.Buffering ?(
                <ActivityIndicator size={'large'} color={'#fff'}/>
              ) :(
                <View style={styles.Play_Pause_View}>
                <Image
                  source={ playBackState.state === State.Playing ? require('../../assets/icons/Pause.png') : require('../../assets/icons/Playbutton2.png')}
                  style={styles.PlayBtn}
                />
              </View>
              )}
              
              </TouchableOpacity>
          </View>

          <View style={styles.ModlaGoogleAdv}>
            <View style={styles.ImageContainer}>
              <Image
                style={styles.ModalGoogleContainer}
                source={require('../../assets/Images/googleAd.png')}
              />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
      {/* Nested Set Timer Modal */}

      <TimerModal timerModal={timerModal} setTimerModal={setTimerModal} />
      <EditModal
        editModalVisible={editModalVisible}
        setEditModalVisible={setEditModalVisible}
      />
    </Modal>
  );
};

export default React.memo(MusicModal);

const styles = StyleSheet.create({
  MainViewLin: {
    flex: FLEX.flex_1,
   
  },
  MusicModalNav: {
    marginTop: 40,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  downIcon: {
    width: WIDTH.width_14,
    height: HEIGHT.height_18,
    resizeMode: 'contain',
  },
  ModalMusicText: {
    fontFamily: 'RobotoCondensed_700',
    fontSize: FONTSIZE.fontSize_16,
    fontWeight: FONTWEIGHT.fontWeight_700,
    lineHeight: 17.6,
    color: COLOR.white_color,
  },
  MusicModalCrossIcon: {padding: 10, marginBottom: 93},
  crossIcon: {
    width: WIDTH.width_10,
    height: HEIGHT.height_18,
    resizeMode: 'contain',
  },
  MusicCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 53,
  },
  CircleBit2: {
    width: 230,
    height: 230,
    borderWidth: 1,
    borderRadius: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(255, 255, 255, 0.18)',
  },
  CircleBit1: {
    height: 209,
    width: 209,
    borderWidth: 2,
    borderRadius: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(255, 255, 255, 0.32)',
  },
  CircleBit: {
    width: 194.12,
    height: 194.12,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(255, 255, 255, 0.48)',
    borderWidth: 3,
    borderRadius: 110,
  },
  MusicTimeContainer: {
    justifyContent: 'center',
    width: WIDTH.width_178,
    height: HEIGHT.height_178,
    borderWidth: 2,
    borderColor: COLOR.white_color,
    backgroundColor: COLOR.white_color,
    borderRadius: 110,
  },
  MusicDuration: {
    fontFamily: 'RobotoCondensed_400',
    fontSize: FONTSIZE.fontSize_42,
    lineHeight: 49.22,
    textAlign: 'center',
    color: COLOR.secondary_color,
    
  },
  TimerEditContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: GAP.gap_23,
  },
  gap6: {gap: GAP.gap_6},
  ClockContainer: {
    height: HEIGHT.height_40,
    width: WIDTH.width_40,
    backgroundColor: COLOR.white_color6,
    padding: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ClockIconText: {
    fontFamily: 'RobotoCondensed_400',
    color: COLOR.white_color,
    fontSize: FONTSIZE.fontSize_14,
    lineHeight: 15,
    textAlign: 'center',
  },
  EditView: {
    width: 16,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(181, 86, 255, 1)',
    borderRadius: 20,
    position: 'absolute',
    top: -5,
    right: -5,
  },
  lengthText: {
    fontSize: 10,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'RobotoCondensed_700',
  },
  ClockIconText: {
    fontFamily: 'RobotoCondensed_400',
    color: COLOR.white_color,
    fontSize: FONTSIZE.fontSize_14,
    lineHeight: 15,
    textAlign: 'center',
  },
  PlayerButton: { width:140, marginTop: 60},
  Play_Pause_View: {paddingHorizontal: 10, paddingVertical: 16},
  PlayBtn: {
    width: WIDTH.width_140,
    height: HEIGHT.height_44,
    resizeMode: 'cover',
    
  },
  ModlaGoogleAdv: {
    flex: FLEX.flex_1,
    justifyContent: 'flex-end',
    marginBottom: 12,
    paddingHorizontal: 13,
  },
  ImageContainer: {
    height: HEIGHT.height_60,
    backgroundColor: COLOR.white_color2,
    padding: 10,
    borderRadius: 12,
  },
  ModalGoogleContainer: {
    width: WIDTH.width_158,
    height: HEIGHT.height_44,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
