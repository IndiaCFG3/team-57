import React from "react";
import FontAwesome from "react-native-vector-icons/Feather";
import {TouchableOpacity} from "react-native";

import {openDrawer} from "./RootNavigation";

const openDrawerButton=()=>(
    <TouchableOpacity onPress={openDrawer} style={{marginLeft:20, marginRight: 0}}>
    <FontAwesome
          name={'menu'}
          color='white'
          size={30}
        />
    </TouchableOpacity>
  
  );

  
export default openDrawerButton;