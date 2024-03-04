import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import Swiper from 'react-native-swiper';
import Slider from '@react-native-community/slider';
import {AntDesign} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import {
  FLEX,
  GAP,
  HEIGHT,
  WIDTH,
  COLOR,
  FONTSIZE,
  FONTWEIGHT,
} from '../Theme/theme';
import {Player} from '../Context/PlayerContext';
import {Audio} from 'expo-av';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import {setMode} from 'react-native-sound';
const EditModal = ({editModalVisible, setEditModalVisible}) => {
  console.log('From Edit Modal...');

  const {
    EditMusic,
    setEditMusic,
    loadedSounds,
    setLoadedSounds,
    rain_sound,
    set_rain_sound,
    leaf_rain_sound,
    set_leaf_rain_sound,
    strom_sound,
    set_strom_sound,
    thunder_sound,
    set_thunder_sound,
    water_sound,
    set_water_sound,
    wind_sound,
    set_wind_sound,
    snowrain_sound,
    set_snowrain_sound,
    forest_sound,
    set_forest_sound,
    fire_sound,
    set_fire_sound,
    waterdrops_sound,
    set_waterdrops_sound,
    river_sound,
    set_river_sound,
    houserain_sound,
    set_houserain_sound,
    deepnight_sound,
    set_deepnight_sound,
    bird_sound,
    set_bird_sound,
    train_sound,
    set_train_sound,
    piano_sound,
    set_piano_sound,
    flute_sound,
    set_flute_sound,
    owl_sound,
    set_owl_sound,
    playingSounds,
    setPlayingSounds,
    setCurrentTrack,
  } = useContext(Player);

  // const [EditMusic,setEditMusic] = useState([])
  const [currentSoundVolume, setCurrentSoundVolume] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const {
    currentTrack,
    seconds,
    isPlaying,
    setisPlaying,
    userItem,
    setUserItem,
    currentSound,
    setcurrentSound,
    item,
    setItem,
    editMusicSound,
    setEditMusicSound,
    user_given_time,
    set_user_given_time,
    minutes,
    apply_sound,
    set_apply_sound,
    mood,
    set_Mood,
  } = useContext(Player);
  const [volume, setVolume] = useState(3);
  const [user_item, set_user_item] = useState(null);

const TimeColor = [
    'rgba(85, 53, 124, 0.9)',
    'rgba(52, 33, 88, 0.9)',
    'rgba(28, 17, 44, 0.9)',
  ];
  const TrailColor = ['rgba(116, 33, 154, 1)', 'rgba(75, 8, 105, 1)'];
  Apply_Color = [
    'rgba(148, 70, 184, 1)',
    'rgba(148, 70, 184, 1)',
    'rgba(116, 33, 154, 1)',
    'rgba(75, 8, 105, 1)',
  ];
  const SoundsData = [
    {
      id: 1,
      title: 'Rain',
      artist: 'Codebook IT',
      artwork: require('../../assets/icons/Rain.png'),
      url: 'https://firebasestorage.googleapis.com/v0/b/sleepmate-6699e.appspot.com/o/rain.mp3?alt=media&token=ad2536bb-cb3f-4f14-a8e6-0f5685fffa36',
    },
    {
      id: 2,
      title: 'Leaf Rain',
      artist: 'Codebook IT',
      artwork: require('../../assets/icons/LeafRain.png'),
      url: 'https://firebasestorage.googleapis.com/v0/b/sleepmate-6699e.appspot.com/o/leaf.mp3?alt=media&token=3cf54715-a64a-4617-9be7-d595313ea98d',
    },
    {
      id: 3,
      title: 'Strom',
      artist: 'Codebook IT',
      artwork: require('../../assets/icons/Strom.png'),
      url: 'https://firebasestorage.googleapis.com/v0/b/sleepmate-6699e.appspot.com/o/Strom.mp3?alt=media&token=7824b0f8-0853-4085-aa32-5d011c58883a',
    },
    {
      id: 4,
      title: 'Thunder',
      artist: 'Codebook IT',
      artwork: require('../../assets/icons/Thunder.png'),
      url: 'https://firebasestorage.googleapis.com/v0/b/sleepmate-6699e.appspot.com/o/thunder.mp3?alt=media&token=edd74cf9-7f07-4d98-8812-b76822ea5931',
    },
    {
      id: 5,
      title: 'Water',
      artist: 'Codebook IT',
      artwork: require('../../assets/icons/Water.png'),
      url: 'https://firebasestorage.googleapis.com/v0/b/sleepmate-6699e.appspot.com/o/water.mp3?alt=media&token=2eaf787f-2c02-48fd-8806-96e467e08337',
    },
    {
      id: 6,
      title: 'Wind',
      artist: 'Codebook IT',
      artwork: require('../../assets/icons/Wind.png'),
      url: 'https://firebasestorage.googleapis.com/v0/b/sleepmate-6699e.appspot.com/o/wind.mp3?alt=media&token=4c1069c4-f86e-4f2b-b2e6-2b4522dd7a0c',
    },
    {
      id: 7,
      title: 'Snow Rain',
      artist: 'Codebook IT',
      artwork: require('../../assets/icons/Snow.png'),
      url: 'https://firebasestorage.googleapis.com/v0/b/sleepmate-6699e.appspot.com/o/snow.mp3?alt=media&token=e01a25b3-0e03-490b-8519-74ebb991a3c1',
    },
    {
      id: 8,
      title: 'Forest',
      artist: 'Codebook IT',
      artwork: require('../../assets/icons/Forest.png'),
      url: 'https://firebasestorage.googleapis.com/v0/b/sleepmate-6699e.appspot.com/o/Forest1.mp3?alt=media&token=28ecad35-2328-4ca5-b9f8-b2b6d2cdef82',
    },
    {
      id: 9,
      title: 'Fire',
      artist: 'Codebook IT',
      artwork: require('../../assets/icons/Fire.png'),
      url: 'https://firebasestorage.googleapis.com/v0/b/sleepmate-6699e.appspot.com/o/fire.mp3?alt=media&token=571ad49b-470b-49c6-add6-5c4f097b1cac',
    },
    {
      id: 10,
      title: 'Water Drops',
      artist: 'Codebook IT',
      artwork: require('../../assets/icons/WaterDrops.png'),
      url: 'https://firebasestorage.googleapis.com/v0/b/sleepmate-6699e.appspot.com/o/waterdrop.mp3?alt=media&token=df4b1840-da0c-40fa-ab73-786c3fc6d61c',
    },
    {
      id: 11,
      title: 'River',
      artist: 'Codebook IT',
      artwork: require('../../assets/icons/River.png'),
      url: 'https://firebasestorage.googleapis.com/v0/b/sleepmate-6699e.appspot.com/o/river.mp3?alt=media&token=15b5959a-79ea-4318-8de2-0c32ad472019',
    },
    {
      id: 12,
      title: 'House Rain',
      artist: 'Codebook IT',
      artwork: require('../../assets/icons/HouseRain.png'),
      url: 'https://firebasestorage.googleapis.com/v0/b/sleepmate-6699e.appspot.com/o/rain.mp3?alt=media&token=ad2536bb-cb3f-4f14-a8e6-0f5685fffa36',
    },
    {
      id: 13,
      title: 'Deep Night',
      artist: 'Codebook IT',
      artwork: require('../../assets/icons/DeepNight.png'),
      url: 'https://firebasestorage.googleapis.com/v0/b/sleepmate-6699e.appspot.com/o/deep_night.mp3?alt=media&token=a0544b16-228e-4554-8682-dfb5fc36d639',
    },
    {
      id: 14,
      title: 'Bird',
      artist: 'Codebook IT',
      artwork: require('../../assets/icons/Bird.png'),
      url: 'https://firebasestorage.googleapis.com/v0/b/sleepmate-6699e.appspot.com/o/Bird.mp3?alt=media&token=9f93e998-d49c-42c5-993f-4ae75f2ebe8f',
    },
    {
      id: 15,
      title: 'Train',
      artist: 'Codebook IT',
      artwork: require('../../assets/icons/train.png'),
      url: 'https://firebasestorage.googleapis.com/v0/b/sleepmate-6699e.appspot.com/o/train.mp3?alt=media&token=7f9739c7-dfe5-42ea-9223-9fb7a33408c9',
    },
    {
      id: 16,
      title: 'Piano',
      artist: 'Codebook IT',
      artwork: require('../../assets/icons/Piano.png'),
      url: 'https://firebasestorage.googleapis.com/v0/b/sleepmate-6699e.appspot.com/o/piano.mp3?alt=media&token=ae62b60b-adb5-4a8e-a326-cbae8f7b32a8',
    },
    {
      id: 17,
      title: 'Flute',
      artist: 'Codebook IT',
      artwork: require('../../assets/icons/flute.png'),
      url: 'https://firebasestorage.googleapis.com/v0/b/sleepmate-6699e.appspot.com/o/flute.mp3?alt=media&token=89dc717f-976f-4fbd-abd0-9c968bcb7328',
    },
    {
      id: 18,
      title: 'Owl',
      artist: 'Codebook IT',
      artwork: require('../../assets/icons/Owl.png'),
      url: 'https://firebasestorage.googleapis.com/v0/b/sleepmate-6699e.appspot.com/o/owl.mp3?alt=media&token=d217af73-0a3d-41ee-b9eb-c808633c9434',
    },
  ];
  const sound1 = SoundsData.slice(0, 9);
  const sound2 = SoundsData.slice(9, 18);

  // Reset Method
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
      setisPlaying(false);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log('Not Available');
    }

    if (leaf_rain_sound !== null) {
      leaf_rain_sound.pauseAsync();
      leaf_rain_sound.unloadAsync();
      setisPlaying(false);
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log('Not Available');
    }

    if (strom_sound !== null) {
      strom_sound.pauseAsync();
      strom_sound.unloadAsync();
      setisPlaying(false);
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log('Not Available');
    }

    if (thunder_sound !== null) {
      thunder_sound.pauseAsync();
      thunder_sound.unloadAsync();
      setisPlaying(false);
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log('Not Available');
    }

    if (water_sound !== null) {
      water_sound.pauseAsync();
      water_sound.unloadAsync();
      setisPlaying(false);
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log('Not Available');
    }

    if (wind_sound !== null) {
      wind_sound.pauseAsync();
      wind_sound.unloadAsync();
      setisPlaying(false);
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log('Not Available');
    }

    if (snowrain_sound !== null) {
      snowrain_sound.pauseAsync();
      snowrain_sound.unloadAsync();
      setisPlaying(false);
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log('Not Available');
    }

    if (forest_sound !== null) {
      forest_sound.pauseAsync();
      forest_sound.unloadAsync();
      setisPlaying(false);
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log('Not Available');
    }

    if (fire_sound !== null) {
      fire_sound.pauseAsync();
      fire_sound.unloadAsync();
      setisPlaying(false);
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log('Not Available');
    }

    if (waterdrops_sound !== null) {
      waterdrops_sound.pauseAsync();
      waterdrops_sound.unloadAsync();
      setisPlaying(false);
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log('Not Available');
    }

    if (river_sound !== null) {
      river_sound.pauseAsync();
      river_sound.unloadAsync();
      setisPlaying(false);
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log('Not Available');
    }

    if (houserain_sound !== null) {
      houserain_sound.pauseAsync();
      houserain_sound.unloadAsync();
      setisPlaying(false);
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log('Not Available');
    }

    if (deepnight_sound !== null) {
      deepnight_sound.pauseAsync();
      deepnight_sound.unloadAsync();
      setisPlaying(false);
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log('Not Available');
    }

    if (bird_sound !== null) {
      bird_sound.pauseAsync();
      bird_sound.unloadAsync();
      setisPlaying(false);
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log('Not Available');
    }

    if (train_sound !== null) {
      train_sound.pauseAsync();
      train_sound.unloadAsync();
      setisPlaying(false);
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log('Not Available');
    }

    if (piano_sound !== null) {
      piano_sound.pauseAsync();
      piano_sound.unloadAsync();
      setisPlaying(false);
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log('Not Available');
    }

    if (flute_sound !== null) {
      flute_sound.pauseAsync();
      flute_sound.unloadAsync();
      setisPlaying(false);
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log('Not Available');
    }

    if (owl_sound !== null) {
      owl_sound.pauseAsync();
      owl_sound.unloadAsync();
      setisPlaying(false);
      setPlayingSounds([]);
      setUserItem([]);
      setEditMusic([]);
    } else {
      console.log('Not Available');
    }
  };

  //Playing Audios
  const Play_Audio = async item => {
    try {
      // Check if the audio is already playing
      if (playingSounds.some(playingSound => playingSound._uri === item.url)) {
        console.log(`${item.title} is already playing`);
        return; // Do nothing if the audio is already playing
      }

      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
        shouldDuckAndroid: false,
      });
      setisPlaying(true);
      const {sound, status} = await Audio.Sound.createAsync(
        {uri: item.url},
        {
          shouldPlay: true,
        },
      );

      setEditMusicSound(prevSounds => [...prevSounds, sound]);

      console.log(apply_sound);

      if (item.title === 'Rain') {
        set_rain_sound(sound);
        console.log('Added SuccessFull');
      } else if (item.title === 'Leaf Rain') {
        set_leaf_rain_sound(sound);
        console.log('Leaf Rain Added');
      } else if (item.title === 'Strom') {
        set_strom_sound(sound);
        console.log('Strom Added');
      } else if (item.title === 'Thunder') {
        set_thunder_sound(sound);
        console.log('Thunder Added');
      } else if (item.title === 'Water') {
        set_water_sound(sound);
        console.log('Water Added');
      } else if (item.title === 'Wind') {
        set_wind_sound(sound);
        console.log('Wind Added');
      } else if (item.title === 'Snow Rain') {
        set_snowrain_sound(sound);
        console.log('Snow Rain Added Added');
      } else if (item.title === 'Forest') {
        set_forest_sound(sound);
        console.log('Forest Added');
      } else if (item.title === 'Fire') {
        set_fire_sound(sound);
        console.log('Fire Added');
      } else if (item.title === 'Water Drops') {
        set_waterdrops_sound(sound);
        console.log('Water Drops Added');
      } else if (item.title === 'River') {
        set_river_sound(sound);
        console.log('River Added');
      } else if (item.title === 'House Rain') {
        set_houserain_sound(sound);
        console.log('House Rain Added');
      } else if (item.title === 'Deep Night') {
        set_deepnight_sound(sound);
        console.log('Deep Night Added');
      } else if (item.title === 'Bird') {
        set_bird_sound(sound);
        console.log('Bird Added');
      } else if (item.title === 'Train') {
        set_train_sound(sound);
        console.log('Train Added');
      } else if (item.title === 'Piano') {
        set_piano_sound(sound);
        console.log('Piano Added');
      } else if (item.title === 'Flute') {
        set_flute_sound(sound);
        console.log('Flute Added');
      } else if (item.title === 'Owl') {
        set_owl_sound(sound);
        console.log('Owl Added');
      }
      await sound.setVolumeAsync(2 / 10);

      const updateVolume = async value => {
        await sound.setVolumeAsync(value / 10);
      };

      const updatedPlayingSounds = [...playingSounds, sound];

      setCurrentSoundVolume({sound, updateVolume});

      setPlayingSounds(updatedPlayingSounds);

      // Clean up the playingSounds array when the sound finishes
      sound.setOnPlaybackStatusUpdate(status => {
        if (status.didJustFinish) {
          const index = updatedPlayingSounds.indexOf(sound);
          if (index !== -1) {
            updatedPlayingSounds.splice(index, 1);
            setPlayingSounds(updatedPlayingSounds);
          }
        }
      });

      return {sound, status, updateVolume};
    } catch (error) {
      console.error('Error loading or playing the audio', error);
    }
  };

  //Controlling Volume
  const handleVolumeChange = (value, itemId) => {
    setVolume(prevVolume => ({...prevVolume, [itemId]: value}));
    // You can also update the volume of the currently playing sound if needed
    const playingSound = playingSounds.find(sound => sound._loaded); // Get the currently playing sound
    if (playingSound) {
      playingSound.setVolumeAsync(value);
    }
  };

  const handle_edit_music = item => {
    setUserItem(prevSelectedItems => {
      if (prevSelectedItems.includes(item.id)) {
        return prevSelectedItems.filter(
          selectedItem => selectedItem !== item.id,
        );
      } else {
        return [...prevSelectedItems, item.id];
      }
    });
    const {sound, updateVolume} = Play_Audio(item);
    if (!EditMusic.some(existingItem => areObjectsEqual(existingItem, item))) {
      setEditMusic(prevArray => [...prevArray, item]);
    }
    if (currentSoundVolume) {
      currentSoundVolume.updateVolume = updateVolume; // Update the updateVolume function in currentSound
    }
  };

  //Avoiding Same Audio Playing
  const areObjectsEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  };

  //Stopping Audio According User
  const delete_sounds = sound_item => {
    if (sound_item.title === 'Rain') {
      rain_sound.pauseAsync();
      rain_sound.unloadAsync();
      set_rain_sound(null);
    } else if (sound_item.title === 'Leaf Rain') {
      leaf_rain_sound.pauseAsync();
      leaf_rain_sound.unloadAsync();
      set_leaf_rain_sound(null);
    } else if (sound_item.title === 'Strom') {
      strom_sound.pauseAsync();
      strom_sound.unloadAsync();
      set_strom_sound(null);
    } else if (sound_item.title === 'Thunder') {
      thunder_sound.pauseAsync();
      thunder_sound.unloadAsync();
      set_thunder_sound(null);
    } else if (sound_item.title === 'Water') {
      water_sound.pauseAsync();
      water_sound.unloadAsync();
      set_water_sound(null);
    } else if (sound_item.title === 'Wind') {
      wind_sound.pauseAsync();
      wind_sound.unloadAsync();
      set_wind_sound(null);
    } else if (sound_item.title === 'Snow Rain') {
      snowrain_sound.pauseAsync();
      snowrain_sound.unloadAsync();
      set_snowrain_sound(null);
    } else if (sound_item.title === 'Forest') {
      forest_sound.pauseAsync();
      forest_sound.unloadAsync();
      set_forest_sound(null);
    } else if (sound_item.title === 'Fire') {
      fire_sound.pauseAsync();
      fire_sound.unloadAsync();
      set_fire_sound(null);
    } else if (sound_item.title === 'Water Drops') {
      waterdrops_sound.pauseAsync();
      waterdrops_sound.unloadAsync();
      set_waterdrops_sound(null);
    } else if (sound_item.title === 'River') {
      river_sound.pauseAsync();
      river_sound.unloadAsync();
      set_river_sound(null);
    } else if (sound_item.title === 'House Rain') {
      houserain_sound.pauseAsync();
      houserain_sound.unloadAsync();
      set_houserain_sound(null);
    } else if (sound_item.title === 'Deep Night') {
      deepnight_sound.pauseAsync();
      deepnight_sound.unloadAsync();
      set_deepnight_sound(null);
    } else if (sound_item.title === 'Bird') {
      bird_sound.pauseAsync();
      bird_sound.unloadAsync();
      set_bird_sound(null);
    } else if (sound_item.title === 'Train') {
      train_sound.pauseAsync();
      train_sound.unloadAsync();
      set_train_sound(null);
    } else if (sound_item.title === 'Piano') {
      piano_sound.pauseAsync();
      piano_sound.unloadAsync();
      set_piano_sound(null);
    } else if (sound_item.title === 'Flute') {
      flute_sound.pauseAsync();
      flute_sound.unloadAsync();
      set_flute_sound(null);
    } else if (sound_item.title === 'Owl') {
      owl_sound.pauseAsync();
      owl_sound.unloadAsync();
      set_owl_sound(null);
    }

    setEditMusic(prevEditMusic =>
      prevEditMusic.filter(item => item.id !== sound_item.id),
    );
    setUserItem(prevUserItem =>
      prevUserItem.filter(item => item !== sound_item.id),
    );
  };


  useEffect(() => {
    const audio_status = async () => {
      const piano_status = await piano_sound.getStatusAsync();
       if(playBackState.state=== State.Stopped){
        await piano_sound.stopAsync();
       }
      if (!piano_status.isPlaying && minutes >= 0 && piano_sound) {
      
      
        if (seconds === 0) {
          console.log('Stop Executed')
          await piano_sound.stopAsync();
        } else {
          await piano_sound.stopAsync();
          await piano_sound.playAsync();
          await TrackPlayer.setVolume(0.1);
        }
      }
    };
    audio_status();
  }, [seconds]);

  useEffect(() => {
    const audio_status = async () => {
      const owl_status = await owl_sound.getStatusAsync();
      if (!owl_status.isPlaying && minutes >= 0 && owl_sound) {
        console.log('Entering....owl');
        
        if (seconds === 1) {
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

  const playBackState = usePlaybackState();

  const thumb_image = require('../../assets/icons/circle.png');
  return (
    <Modal
      statusBarTranslucent={true}
      transparent={true}
      animationType="slide"
      visible={editModalVisible}>
      <LinearGradient
        style={[{flex: FLEX.flex_1}, styles.MainView]}
        colors={TimeColor}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          {EditMusic.length > 0 ? (
            <Pressable style={styles.TimerView}>
              <View style={styles.closeBtnContainer}>
                <View style={styles.closeBtnChild2}></View>
              </View>
            </Pressable>
          ) : (
            <Pressable
              style={styles.TimerView}
              onPress={() => {
                setEditModalVisible(false);
                //handle_reset();
                setLoadedSounds([]);
                setUserItem([]);
              }}>
              <View style={styles.closeBtnContainer}>
                <View style={styles.closeBtnChild}>
                  <AntDesign style={styles.closeBtnIcon} name="close" />
                </View>
              </View>
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
          )}
          <View
            style={[
              styles.current_selection_container,
              {gap: GAP.gap_20, paddingHorizontal: 10},
            ]}>
            <Text style={[styles.current_selection_text]}>
              Current Selections
            </Text>
            <FlatList
              data={EditMusic}
              numColumns={3}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <View style={[styles.SoundIconContainer_ContentBox]}>
                  <LinearGradient
                    style={[styles.IconBox, {marginTop: 10}]}
                    colors={Apply_Color}>
                    <TouchableOpacity
                      onPress={() => {
                        delete_sounds(item);
                  
                      }}
                      style={styles.sound_box}>
                      <Entypo style={styles.Sound_cross_Icon} name="cross" />
                    </TouchableOpacity>
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
                      onValueChange={value =>
                        handleVolumeChange(value, item.id)
                      }
                    />
                  </View>
                </View>
              )}
            />
            <Text style={styles.slider_container_Text}>All Sounds</Text>
            <View style={[styles.child_container]}>
              <Swiper
                dot={<View style={styles.dotDesign} />}
                activeDot={<View style={styles.activeDotDesign} />}>
                <View style={styles.soundItemsRow}>
                  <FlatList
                    contentContainerStyle={styles.soundItemsRowBox}
                    numColumns={3}
                    data={sound1}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item, index}) => (
                      <TouchableOpacity
                        onPress={() => {
                          console.log(item);
                          handle_edit_music(item);
                          setSelectedItem(item.id);
                          set_user_item(item);
                        }}
                        disabled={userItem && userItem.includes(item.id)}
                        style={styles.soundItemsBox}
                        key={index}>
                        {EditMusic.some(
                          edit_item => edit_item.id === item.id,
                        ) ? (
                          <>
                            <LinearGradient
                              colors={Apply_Color}
                              style={styles.IconBox}>
                              <Image
                                style={styles.SoundsIconImage}
                                source={item.artwork}
                              />
                            </LinearGradient>
                            <Text
                              style={[styles.SoundName, styles.white_color]}>
                              {item.title}
                            </Text>
                          </>
                        ) : (
                          <>
                            <View style={styles.IconBox}>
                              <Image
                                style={[
                                  styles.SoundsIconImage,
                                  {opacity: 0.68},
                                ]}
                                source={item.artwork}
                              />
                            </View>
                            <Text
                              style={[styles.SoundName, styles.white_color]}>
                              {item.title}
                            </Text>
                          </>
                        )}
                      </TouchableOpacity>
                    )}
                  />
                </View>

                <View style={styles.soundItemsRow}>
                  <FlatList
                    contentContainerStyle={styles.soundItemsRowBox}
                    numColumns={3}
                    data={sound2}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item, index}) => (
                      <TouchableOpacity
                        onPress={() => {
                          handle_edit_music(item);
                          setSelectedItem(item.id);
                          set_user_item(item);
                        }}
                        disabled={userItem && userItem.includes(item.id)}
                        style={styles.soundItemsBox}
                        key={index}>
                        {EditMusic.some(
                          edit_item => edit_item.id === item.id,
                        ) ? (
                          <>
                            <LinearGradient
                              colors={Apply_Color}
                              style={styles.IconBox}>
                              <Image
                                style={styles.SoundsIconImage}
                                source={item.artwork}
                              />
                            </LinearGradient>
                            <Text
                              style={[styles.SoundName, styles.white_color]}>
                              {item.title}
                            </Text>
                          </>
                        ) : (
                          <>
                            <View style={styles.IconBox}>
                              <Image
                                style={[
                                  styles.SoundsIconImage,
                                  {opacity: 0.68},
                                ]}
                                source={item.artwork}
                              />
                            </View>
                            <Text
                              style={[styles.SoundName, styles.white_color]}>
                              {item.title}
                            </Text>
                          </>
                        )}
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </Swiper>
            </View>
            <View style={styles.sound_btn_container}>
              <TouchableOpacity
                onPress={() => {
                  handle_reset();
                  setLoadedSounds([]);
                  setUserItem([]);
                }}
                style={[
                  styles.resetBtn,
                  {opacity: EditMusic.length === 0 ? 0.48 : null},
                ]}
                disabled={EditMusic.length === 0}>
                <Image
                  style={styles.resetIcon}
                  source={require('../../assets/icons/reset.png')}
                />
                <Text style={styles.resetText}>Reset</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.Apply_Box}
                onPress={async () => {
                  // if(!isPlaying){
                  //   handleApplyFunc()
                  // }
                  if (playBackState.state === State.Stopped) {
                    await TrackPlayer.skip(item.id - 1);
                    await TrackPlayer.play();

                    setCurrentTrack(true);
                  } else {
                    setMode(true);
                  }
                  setEditModalVisible(false);
                }}
                disabled={EditMusic.length === 0}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 0.7, y: 0}}
                  style={[
                    styles.Apply_Box_linearGradient,
                    {opacity: EditMusic.length === 0 ? 0.48 : null},
                  ]}
                  colors={TrailColor}>
                  <Text style={styles.ApplyText}>Apply Now</Text>
                  <Image
                    style={styles.rightIcon}
                    source={require('../../assets/icons/right.png')}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </Modal>
  );
};

export default EditModal;

const styles = StyleSheet.create({
  MainView: {
    flex: FLEX.flex_1,
    paddingHorizontal: 16,
  },
  TimerView: {marginTop: 40, gap: GAP.gap_6},
  closeBtnContainer: {flexDirection: 'row', justifyContent: 'flex-end'},
  closeBtnChild: {
    height: HEIGHT.height_40,
    width: WIDTH.width_40,
    padding: 10,
    backgroundColor: COLOR.white_color6,
    borderRadius: 20,
  },
  closeBtnChild2: {
    height: HEIGHT.height_40,
    width: WIDTH.width_40,
    padding: 10,

    borderRadius: 20,
  },
  closeBtnIcon: {
    lineHeight: 20,
    textAlign: 'center',
    fontSize: FONTSIZE.fontSize_20,
    color: COLOR.secondary_color,
  },
  closeText: {
    alignSelf: 'flex-end',
    fontSize: FONTSIZE.fontSize_14,
    lineHeight: 15.4,
    fontFamily: 'RobotoCondensed_400',
    color: COLOR.white_color,
    textAlign: 'center',
    right: 5,
  },
  current_selection_text: {
    color: COLOR.white_color,
    fontWeight: FONTWEIGHT.fontWeight_700,
    fontSize: FONTSIZE.fontSize_17,
    lineHeight: 17.6,
    fontFamily: 'RobotoCondensed_400',
  },
  SoundIconContainer_ContentBox: {
    alignItems: 'center',
    gap: 10,
  },
  IconBox: {
    backgroundColor: COLOR.white_color32,
    borderRadius: 8,
    minHeight: 66,
    minWidth: 66,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sound_box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 14,
    height: 14,
    position: 'absolute',
    backgroundColor: 'rgba(221, 215, 229, 1)',
    borderRadius: 10,
    top: -5,
    bottom: 0,
    left: 55,
  },
  Sound_cross_Icon: {
    fontSize: 8,
    fontWeight: '900',
    color: 'rgba(85, 53, 124, 1)',
    textAlign: 'center',
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
  white_color: {
    color: COLOR.white_color,
  },
  slider_container_Text: {
    color: COLOR.white_color,
    fontWeight: FONTWEIGHT.fontWeight_700,
    fontSize: FONTSIZE.fontSize_16,
    lineHeight: 17.6,
    fontFamily: 'RobotoCondensed_400',
  },
  child_container: {
    flexDirection: 'row',
    maxHeight: 450,
    alignItems: 'center',
  },
  dotDesign: {
    backgroundColor: 'rgba(255, 255, 255, 0.48)',
    width: WIDTH.width_10,
    height: HEIGHT.height_10,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    top: -60,
  },
  activeDotDesign: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: WIDTH.width_10,
    height: HEIGHT.height_10,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    top: -60,
  },
  soundItemsRow: {
    width: '100%',
  },
  soundItemsRowBox: {
    gap: 20,
    display: 'flex',
    justifyContent: 'space-between',
  },
  soundItemsBox: {
    alignItems: 'center',
    gap: 8,
    left: -15,
    marginHorizontal: '7%',
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
  SoundName: {
    fontFamily: 'RobotoCondensed_400',
    fontWeight: FONTWEIGHT.fontWeight_500,
    lineHeight: 15.4,
    fontSize: FONTSIZE.fontSize_14,
    textAlign: 'center',
  },
  sound_btn_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  resetBtn: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: COLOR.white_color32,
    width: '35%',
    height: 46,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetIcon: {height: 20, width: 20, resizeMode: 'contain'},
  resetText: {
    fontSize: FONTSIZE.fontSize_16,
    color: COLOR.white_color,
    fontFamily: 'RobotoCondensed_400',
    fontWeight: FONTWEIGHT.fontWeight_500,
    lineHeight: 18.75,
  },
  Apply_Box: {
    width: '55%',
  },
  Apply_Box_linearGradient: {
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 20,
    gap: 10,
  },
  ApplyText: {
    fontFamily: 'RobotoCondensed_400',
    color: '#fff',
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: 'center',
  },
  rightIcon: {height: 20, width: 20, resizeMode: 'contain'},
  slider: {
    width: 100,
    marginTop: 0,
  },
});
