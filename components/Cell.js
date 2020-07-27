import React, {useEffect, useState} from 'react';
import {Animated, View, StyleSheet, Text} from 'react-native';
import {UtilsContext} from '../utilities/utilsContext';
 import {gameArray} from '../utilities/functions';

export const Cell = props => {
  const {UtilsState, UtilsDispatch} = React.useContext(UtilsContext);
  const [newRender, setNewRender] = useState(true);
  const [tileState, setTileState] = useState(null);

  // let widthNheighetSize= props.squareSize;
  let widthNheighetSize = props.cellNtileSize;

  let responsiveStyle = StyleSheet.create({
    gameGridCllSize: {
      backgroundColor: 'rgba(238, 228, 218, 0.35)',
      width: widthNheighetSize,
      height: widthNheighetSize,
      borderRadius: 5,
    },
  });

  let _onLayout;
 
  _onLayout = ({
    nativeEvent: {
      layout: {x, y, width, height},
    },
  }) => {

     if (props.rowSerialNumber == 0) {
      UtilsDispatch({
        type: 'XcoordinateArray',
        payload: x,
       });
    }
    
  };
   return (
    <View style={responsiveStyle.gameGridCllSize} onLayout={_onLayout}>{props.children}
    </View>
  );
};
