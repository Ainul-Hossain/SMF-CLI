import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { FONTSIZE, COLOR, WIDTH, FONTWEIGHT, GAP, HEIGHT } from '../Theme/theme'
import { Player } from '../Context/PlayerContext'
const Category =() => {
  const { Allcategory, set_Allcategory } = useContext(Player);
  console.log('This Line is From Category')
  const color = [
    "rgba(28, 17, 44, 1)",
    "rgba(41, 25, 67, 0.6)",
    "rgba(46, 29, 76, 1)",
    "rgba(85, 53, 124, 0.6)",
  ];
  const categories = [
    "All",
    "Rains",
    "Nature",
    "Birds",
    "Water",
    "Relax",
    "Rock",
    "Transport",
    "Spring",
    "Romantic",
   
  ];

  //
  const [pressedCategories, setPressedCategories] = useState(
    categories.map(() => false)
  );
  
  //Handle Button Pressed By User
  const handlePressed = (cat, index) => {
    setPressedCategories((prev) => {
      const newPressedCategories = [...prev];

      // If "All" is pressed, clear selections for other categories
      if (categories[index] === "All") {
        return newPressedCategories.map((_, i) => (i === 0 ? !prev[0] : false));
      }

      // Toggle the selection for the pressed category
      newPressedCategories[index] = !newPressedCategories[index];

      // If "All" is selected, deselect all other categories
      if (newPressedCategories[0]) {
        return newPressedCategories.map((_, i) => (i === index ? true : false));
      }

      return newPressedCategories;
    });

    // Update the selected categories
    set_Allcategory((prevArray) => {
      if (cat === "All") {
        // If "All" is selected, remove all other categories
        return ["All"];
      } else {
        // If an individual category is selected, update the array accordingly
        const newArray = prevArray.filter((item) => item !== "All");

        // Check if the category is already present, if yes, remove it; otherwise, add it
        if (newArray.includes(cat)) {
          const updatedArray = newArray.filter((item) => item !== cat);
          return updatedArray;
        } else {
          newArray.push(cat);
          return newArray;
        }
      }
    });
  };

  return (
    <LinearGradient
      style={[styles.SearchMoodBox]}
      colors={color}
    >
      <View style={[styles.MoodCatView, styles.gap10]}>
        <View style={styles.mt10}>
          <Text style={[styles.MoodText, styles.white_color]}>
            Searches Mood ___
          </Text>
        </View>

        <View style={styles.catgoryContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                handlePressed(category, index);
              }}
              style={[
                styles.catBox,
                {
                  backgroundColor: Allcategory.length === categories.length-1 ? COLOR.white_color : pressedCategories[index] ||
                  (category === "All" && !pressedCategories.includes(true))
                    ? COLOR.white_color
                    : "transparent" ,
                    
                  opacity: Allcategory.length === categories.length-1? null : pressedCategories[index] ||
                  (category === "All" && !pressedCategories.includes(true))
                    ? null
                    : 0.68,
                    
                },
              ]}
            >
              <Text
                style={[
                  styles.catText,
                  {
                    color: Allcategory.length === categories.length-1 ? COLOR.secondary_color : 
                    pressedCategories[index] ||
                    (category === "All" && !pressedCategories.includes(true))
                      ? COLOR.secondary_color
                      : COLOR.white_color,
                  },
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Image
        style={styles.MoodBoxImage}
        source={require("../../assets/Images/Women.png")}
      />
    </LinearGradient>
  );
};

export default Category

const styles = StyleSheet.create({
  SearchMoodBox: {
    borderRadius: 12,
    zIndex: 1,
    elevation: 4,
    overflow: "hidden",
    marginTop:8,
  },
  MoodCatView: {
    paddingHorizontal: 12,
    // paddingVertical:20
    paddingTop: 5,
    paddingBottom:15,
  },
  mt10: { marginTop: 10 },
  MoodText: {
    fontSize: FONTSIZE.fontSize_16,
    lineHeight: 18.5,
    fontFamily: "RobotoCondensed_400",
    fontWeight: "500",
    fontWeight: FONTWEIGHT.fontWeight_500,
  },
  white_color: {
    color: COLOR.white_color,
  },
  catgoryContainer: {
    marginTop:10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: GAP.gap_8,
  },
  catBox: {
    borderWidth: 1,
    borderColor: COLOR.white_color,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  catText: {
    fontFamily: "RobotoCondensed_400",
    fontSize: FONTSIZE.fontSize_12,
  },
  MoodBoxImage: {
    height: HEIGHT.height_100per,
    width: WIDTH.width_60per,
    resizeMode: "stretch",
    right: 0,
    opacity: 0.6,
    position: "absolute",
    zIndex: -1,
  },
  
})