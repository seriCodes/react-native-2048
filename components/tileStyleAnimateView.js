import {Animated, View, StyleSheet, Text} from 'react-native';

export function tileStyleAnimateView(number,gameGridCellNTileSquareSize ){
// console.log('tileStyleAnimateView', )
    let font_size= gameGridCellNTileSquareSize/1.3;
    let background_Color= '#FFFFFF';
    let font_Color= '#FFFFFF';

    switch (number) {
        case 2: 
           background_Color='#eee4da';
          font_Color=  '#776e65';
          break;
        case 4:
    
          background_Color='#ede0c8';
          font_Color=  '#776e65';
    
          break;
        case 8:
          background_Color='#f2b179';
          font_Color= '#f9f6f2';
    
          break;
        case 16:
          background_Color='#f59563';
          font_Color='#f9f6f2';
          font_size=font_size/1.6;
          break;
        case 32:
          background_Color='#f67c5f';
          font_Color='#f9f6f2';
          font_size=font_size ;
    
        case 64:
          background_Color='#f65e3b';
          font_Color= '#f9f6f2';
          font_size=font_size/1.6;
    
          break;
        case 128:
          background_Color='#edcf72';
          font_Color= '#f9f6f2';
          font_size= (gameGridCellNTileSquareSize/2.3);
          font_size=font_size ;
    
          break;
        case 256:
          console.log('case 256:');
          background_Color='#edcc61';
          font_Color=  '#f9f6f2';
          font_size=font_size/1.9 ;
    
          break;
          case 512:
          console.log('case 512:');
          background_Color= '#edc850';
          font_Color=  '#f9f6f2';
          font_size=font_size/1.9 ;
          break;
          case 1024:
          console.log('case 1024:');
          background_Color= '#edc53f';
          font_Color=  '#f9f6f2';
          font_size=font_size/2.3 ;
          break;
          case 2048:
          console.log('case 2048:');
          background_Color= '#edc22e';
          font_Color=  'red';
          font_size=font_size/2.3 ;
          break;
      }
      const styleResponsiveDynamic = StyleSheet.create({
        Various:{
            width: gameGridCellNTileSquareSize,
            height: gameGridCellNTileSquareSize,
            backgroundColor: background_Color,
                },     
      })
      let result;
      result=[styleResponsiveDynamic.Various,{
        // borderStyle: 'solid',
        // borderWidth: 1,
        // borderColor:'red',
        justifyContent: 'center',
        borderRadius: 5,
    }]

      // console.log('styleResponsiveDynamic', result)

    return result
}

