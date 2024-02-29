import { StyleSheet, Text, View, FlatList, Pressable, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import {Card} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {WIDTH, HEIGHT, FONTWEIGHT, FONTSIZE, COLOR} from '../Theme/theme';
import { Player } from '../Context/PlayerContext';
import TrackPlayer from 'react-native-track-player';

const  BirdMusic = ({filter_Bird, setMusicModalVisible}) => {
  const {item,setItem, setCurrentTrack} = useContext(Player)
  return (
  <View style={{marginTop:10}}>
    <Text
        style={styles.Cat_Title}
      >
        Bird__
      </Text>
    <FlatList
      data={filter_Bird}
      scrollEnabled={false}
      keyExtractor={music => music.id.toString()} // Ensure id is a string
      renderItem={(
        {item, index}, // Change music to item
      ) => (
        <View style={styles.AllMusic_View}>
          <Pressable style={{margin: 6}} onPress={async() => {
            await TrackPlayer.stop()
            setCurrentTrack(false)
            setItem(item)
            console.log(item)
            setMusicModalVisible(true)
          }}>
            <Card style={[styles.Box, styles.secondary_color]}>
              <View style={styles.newTagContainer}>
                {item.status === 1 ? (
                  <View style={[styles.newTagBox, styles.Opacity_White]}>
                    <Text style={styles.newText}>NEW</Text>
                  </View>
                ) : (
                  <View style={styles.newTagBox}></View>
                )}
                <TouchableOpacity
                  onPress={() => {}}
                  style={[styles.love_icon_Box, styles.purple_light]}>
                  {/* <FontAwesomeIcon
                  style={styles.love_Icon}
                  size={FONTSIZE.fontSize_6}
                  color={COLOR.purple_color}
                  icon={faHeart}
                /> */}
                  <AntDesign
                    style={styles.love_Icon}
                    size={FONTSIZE.fontSize_6}
                    color={COLOR.purple_color}
                    name={'heart'}
                  />
                </TouchableOpacity>
              </View>

              <Card.Cover style={styles.ImageBox} source={item.artwork} />
              <Card.Content style={styles.InfoBox}>
                <View style={styles.name_item_container}>
                  <Text style={styles.songNameText}>{item.title}</Text>
                  <Text style={[styles.white_color, styles.songTime]}>
                    {item.t_data}
                  </Text>
                </View>
                <View style={styles.categoryContainer}>
                  <Text style={styles.CategoryText}>{item.category}</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>

         
         
        </View>
      )}
      numColumns={2}
    />
  </View>

  )
}

export default BirdMusic

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  AllMusic_View: {
    marginHorizontal: -1,
    flex: 1,
  },
  Cat_Title: {
    fontSize: FONTSIZE.fontSize_17,
    marginLeft: 5,
    color: "#fff",
    fontFamily: "RobotoCondensed_700",
    lineHeight: 17.6,
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