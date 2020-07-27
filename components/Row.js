import React from 'react';
import {Animated, View, StyleSheet, Text} from 'react-native';
import {Cell} from './Cell';
// import {UtilsContext} from '../utilities/utilsContext';

export const Row = props => {
  // const {UtilsState,UtilsDispatch} = React.useContext(UtilsContext);

  let widthNheighetSize = props.cellSquareSize;

  let responsiveStyle = StyleSheet.create({
    gameGridRowSize: {
      flexDirection: 'row',
      justifyContent: 'center',

      alignItems: 'center', 
      borderStyle: 'solid',
       borderColor: 'red',
      justifyContent: 'space-around',
     },
  });

  let cells = [];

  for (var i = 0; i < props.cellsAmount; i++) {
    cells.push(
      <Cell
        key={i}
        rowSerialNumber={props.serialRowNumber}
        serialCellNumber={'' + i} //doesn't work without ""
      />,
    );
  }

  React.useEffect(()=>{
    console.log('inside useEffect in Row')
  },[]    )

  let _onLayout;

  _onLayout = ({
    nativeEvent: {
      layout: {x, y, width, height},
    },
  }) => { 
  };
   return (
    <View style={responsiveStyle.gameGridRowSize} onLayout={_onLayout}>
      
{props.children}
    </View>
  );
};
