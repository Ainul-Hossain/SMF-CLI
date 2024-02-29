import {
  FlatList,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import Header from '../Header/Header';
import {Card} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {MainLinearColor} from '../Styles/Styles';
import {WIDTH, HEIGHT, FONTWEIGHT, FONTSIZE, COLOR} from '../Theme/theme';
import {MusicDatas} from '../Data/Data';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AllAudio from '../Components/AllAudio';
import Category from '../Components/Category';
import MusicModal from '../Modals/MusicModal';
import MiniPlayer from '../Components/MiniPlayer';
import { Player } from '../Context/PlayerContext';
import RainMusic from '../Components/RainMusic';
import NatureMusic from '../Components/NatureMusic';
import BirdMusic from '../Components/BirdMusic';
import WaterMusic from '../Components/WaterMusic';
import RelaxMusic from '../Components/RelaxMusic';
import RockMusic from '../Components/RockMusic';
import TransportMusic from '../Components/TransportMusic';
import SpringMusic from '../Components/SpringMusic';
import RomanticMusic from '../Components/RomanticMusic';
const HomeScreen = () => {
  const { miniPlayer,setminiPlayer} = useContext(Player)
  console.log('From HomeScreen.js...');
  const [MusicModalVisible, setMusicModalVisible] = useState(false)
  const [filter_Rain, set_filter_Rain] = useState([]);
  const [filter_Nature, set_filter_Nature] = useState([]);
  const [filter_Bird, set_filter_Bird] = useState([]);
  const [filter_Water, set_filter_Water] = useState([]);
  const [filter_Relax, set_filter_Relax] = useState([]);
  const [filter_Rock, set_filter_Rock] = useState([]);
  const [filter_Transport, set_filter_Transport] = useState([]);
  const [filter_Spring, set_filter_Spring] = useState([]);
  const [filter_Romantic, set_filter_Romantic] = useState([]);
  const [filter_Forest, set_filter_Forest] = useState([]);
  const { Allcategory, set_Allcategory } = useContext(Player)
  useEffect(()=>{
    set_filter_Rain(MusicDatas.filter((music) => music.category === "Rains"));
    set_filter_Forest(MusicDatas.filter((music) => music.category === "Forest"));
    set_filter_Romantic(MusicDatas.filter((music) => music.category === "Romantic"));
    set_filter_Spring(MusicDatas.filter((music) => music.category === "Spring"));
    set_filter_Transport(MusicDatas.filter((music) => music.category === "Transport"));
    set_filter_Rock(MusicDatas.filter((music) => music.category === "Rock"));
    set_filter_Relax(MusicDatas.filter((music) => music.category === "Relax"));
    set_filter_Water(MusicDatas.filter((music) => music.category === "Water"));
    set_filter_Nature(MusicDatas.filter((music) => music.category === "Nature"));
    set_filter_Bird(MusicDatas.filter((music) => music.category === "Birds"));
  },[])

 
  return (
    <>
    <LinearGradient colors={MainLinearColor} style={styles.container}>
     
      <Header />

      {/* Category Section */}
      <Category/>
      <ScrollView>
        <View style={{marginBottom:60, marginTop:10}}>
        {/* All Audio Data Showing */}
        {Allcategory.find((cat) => cat === "All") ||
            Allcategory.length === 0 ? (
              <AllAudio MusicModalVisible={MusicModalVisible} setMusicModalVisible={setMusicModalVisible}/>
        ) : null}

       {Allcategory.find((cat) => cat === "Rains") ? (
              <RainMusic filter_Rain={filter_Rain}  setMusicModalVisible={setMusicModalVisible}/>
        ) : null}

      {Allcategory.find((cat) => cat === "Nature") ? (
             <NatureMusic filter_Nature={filter_Nature}  setMusicModalVisible={setMusicModalVisible}/>
        ) : null}

      {Allcategory.find((cat) => cat === "Birds") ? (
              <BirdMusic filter_Bird={filter_Bird} setMusicModalVisible={setMusicModalVisible}/>
       ) : null}

      {Allcategory.find((cat) => cat === "Water") ? (
              <WaterMusic filter_Water={filter_Water} setMusicModalVisible={setMusicModalVisible} />
      ) : null}

     {Allcategory.find((cat) => cat === "Relax") ? (
              <RelaxMusic filter_Relax={filter_Relax} setMusicModalVisible={setMusicModalVisible}  />
      ) : null}

    {Allcategory.find((cat) => cat === "Rock") ? (
              <RockMusic filter_Rock={filter_Rock} setMusicModalVisible={setMusicModalVisible} />
      ) : null}
    
    {Allcategory.find((cat) => cat === "Transport") ? (
              <TransportMusic
              filter_Transport={filter_Transport} setMusicModalVisible={setMusicModalVisible}
              />
            ) : null}
        
        {Allcategory.find((cat) => cat === "Spring") ? (
              <SpringMusic
               filter_Spring={filter_Spring} setMusicModalVisible={setMusicModalVisible}
              />
            ) : null}
        
        {Allcategory.find((cat) => cat === "Romantic") ? (
              <RomanticMusic
              filter_Romantic={filter_Romantic} setMusicModalVisible={setMusicModalVisible}
              />
            ) : null}

          
      </View>
     </ScrollView>
     <MusicModal MusicModalVisible={MusicModalVisible} setMusicModalVisible={setMusicModalVisible}/>
    </LinearGradient>
    {miniPlayer && (
      <MiniPlayer setMusicModalVisible={setMusicModalVisible} setminiPlayer={setminiPlayer}/>
    )}
    </>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
   
  },
  AllMusic_View: {
    marginHorizontal: -1,
    flex: 1,
  },
  Box: {
    elevation: 4,
    maxHeight: 140,
  },
  secondary_color: {
    backgroundColor: COLOR.secondary_color,
  },
  newTagContainer: {
    flexDirection: 'row',
    top: 4,
    width: WIDTH.width_100,
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 1,
  },
  Opacity_White: {
    backgroundColor: COLOR.white_color82,
  },
  newTagBox: {
    width: 20,
    height: 9,
    right: 5,
    paddingHorizontal: 3,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newText: {
    fontSize: FONTSIZE.fontSize_6,
    fontFamily: 'RobotoCondensed_400',
    fontWeight: FONTWEIGHT.fontWeight_500,
    lineHeight: 7.2,
    color: COLOR.secondary_color,
    textAlign: 'center',
  },
  love_icon_Box: {
    borderRadius: 10,
    height: HEIGHT.height_10,
    width: WIDTH.width_10,
    right: 5,
  },
  purple_light: {
    backgroundColor: '#fff',
  },
  love_Icon: {alignSelf: 'center', top: '20%'},
  ImageBox: {
    height: '60%',
    resizeMode: 'contain',
    borderRadius: 8,
    backgroundColor: COLOR.secondary_color,
  },
  InfoBox: {marginTop: 6, paddingHorizontal: 6},
  name_item_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  songNameText: {
    fontSize: FONTSIZE.fontSize_12,
    color: COLOR.white_color,
    fontFamily: 'RobotoCondensed_400',
    lineHeight: 13.2,
  },
  white_color: {
    color: COLOR.white_color,
  },
  songTime: {
    fontFamily: 'RobotoCondensed_400',
    fontSize: FONTSIZE.fontSize_8,
    lineHeight: 16,
  },
  categoryContainer: {
    minWidth: 33,
    width: '30%',
    padding: 3,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderWidth: 0.6,
  },
  CategoryText: {
    color: COLOR.secondary_color,
    fontFamily: 'RobotoCondensed_400',
    fontSize: FONTSIZE.fontSize_8,
    lineHeight: 9.38,
    textAlign: 'center',
  },
  Google_Adv_View: {marginVertical: 16, flex: 1, padding: 5},
  googleAdvContainer: {
    height: HEIGHT.height_60,
    backgroundColor: COLOR.black_color04,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AdvImage: {height: HEIGHT.height_44, width: WIDTH.width_158},
});
