import { createContext, useState } from "react";

const Player = createContext();
const PlayerContext = ({ children }) => {
  const [item, setItem] = useState([])
  const [playingSounds, setPlayingSounds] = useState([]);
  const [ miniPlayer,setminiPlayer] = useState(false)
  const [userItem, setUserItem] = useState([]);
  const [currentSound, setcurrentSound] = useState(false);
  const [user_given_time, set_user_given_time] = useState(0);
  const [Allcategory, set_Allcategory] = useState(["All"]);
  const [EditMusic,setEditMusic] = useState([]) 
  const [currentTrack, setCurrentTrack] = useState(false)
  const [loadedSounds, setLoadedSounds] = useState([]);
  const [seconds, setSeconds] = useState(1)
  const [minutes, setMinutes] = useState(0)
  const [editMusicSound, setEditMusicSound] = useState([])
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
  const [isPlaying, setisPlaying] = useState(false)
  const [apply_sound, set_apply_sound] = useState([])
  return (
    <Player.Provider
      value={{
        item,
        setItem,
        miniPlayer,
        setminiPlayer,
        userItem, 
        setUserItem,currentSound, setcurrentSound,
        user_given_time, set_user_given_time,
        Allcategory, set_Allcategory,
        EditMusic,setEditMusic,
        currentTrack, setCurrentTrack,
        loadedSounds, setLoadedSounds,
        playingSounds, setPlayingSounds,
        seconds, setSeconds,
        minutes, setMinutes,
        editMusicSound, 
        setEditMusicSound,
        rain_sound, set_rain_sound,
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
        isPlaying, setisPlaying,
        apply_sound, set_apply_sound



        
      }}
    >
      {children}
    </Player.Provider>
  );
};

export { PlayerContext, Player };
