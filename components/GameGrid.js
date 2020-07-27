import React, {useEffect, useState} from 'react';
import {Button,Animated, View, StyleSheet, Text} from 'react-native';
import styles from './gamegrid.Style';
import {UtilsContext} from '../utilities/utilsContext';
import {Row} from './Row';
import {Cell} from './Cell';

 
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {makeStyleResponsiveDynamic} from './tileStylesFunctions';
import {tileStyleAnimateView} from './tileStyleAnimateView';

import {
  makeMove,
  copyOne2DarrayToAnotherByExchangeInnerArrays,
  gameArray,
  createEmptyGameArrayWithRowsOnly,
  CopyGameArray,
  returnNoneZeroValueindexesInArray,
  iterateAllItemsInArray,
  createEmptyGameArrayWithEmptyOBjects, iterateAllItemsInArrayAndMakeSideEffect,
  makeInitialGameSetToEmptyObjcts,
   add2or4toArray, 
   getRelativeCellPositionFromTwoArraysAccordingToId,
   makeIsMergedThisTurnFale,
   iterateAllItemsInArrayAndMakeSideEffectToObjects,
   isWon,
   isLose,
   score,
   makeScoreZero
} from '../utilities/functions';
 let initialOrPreviousGameArray
let currentArray=[]
let renderCounterGrid=0
let objTest=[0]
let currentArrayAfterAnimation
let counterInsideFirstSetTimeout=0;
const animatedTimingDuration=900;
let TileStyleArray=[];
let TileStyleAnimateViewArray=[];
let enableSwipeEvent=true;



const GameGrid = props => {
useEffect(()=>{
  makeScoreZero()
},[])  

  let makeAnimation=false;
  const [newRender1, setNewRender1]=useState(false)
  const [newRender2, setNewRender2]=useState(false)
  const [newRender3, setNewRender3]=useState(false)

  console.log('score',score)
  renderCounterGrid++
   console.log('renderCounterGrid',renderCounterGrid)
  console.log('currentArray',currentArray)

  const {UtilsState, UtilsDispatch} = React.useContext(UtilsContext);
  let cellsRowAmount = props.cellsRowAmount;
  let tileDistanceInCoordinates= UtilsState.XcoordinateArray[0]-UtilsState.XcoordinateArray[1]
console.log('tileDistanceInCoordinates in grid',tileDistanceInCoordinates)

 let smoothTransitionDistancesAnimArray=new Array(4)
for (var row = 0; row < smoothTransitionDistancesAnimArray.length; row++) {
  smoothTransitionDistancesAnimArray[row]=new Array(4)
}
for (var row = 0; row < currentArray.length; row++) {
  for (var column = 0; column < currentArray.length; column++) { 

    smoothTransitionDistancesAnimArray[row][column]=new Animated.ValueXY({x: 0 ,y:0})
  }
}
console.log('smoothTransitionDistancesAnimArray new Animated.ValueXY', JSON.stringify(smoothTransitionDistancesAnimArray))
 
  let smallDimensionLimitation = UtilsState.width;
  if (UtilsState.width > UtilsState.height) {
    smallDimensionLimitation = UtilsState.height;
  }
  let gameGridSizeRatio = 85 / 100;
  let gameGridSquareSize = gameGridSizeRatio * smallDimensionLimitation;
  let marginSquareSize = 5;
  let gameGridCellNTileSquareSize =
    (gameGridSquareSize - marginSquareSize * cellsRowAmount * 2) /
    cellsRowAmount;
 

    React.useEffect(() => { 
      TileStyleArray=[]
    for (var row = 0; row < currentArray.length; row++) {
      for (var column = 0; column < currentArray.length; column++) { 
        TileStyleArray.push(makeStyleResponsiveDynamic(currentArray[row][column].value,gameGridCellNTileSquareSize)) 
      }
    }
 TileStyleAnimateViewArray=[] 
for (var row = 0; row < currentArray.length; row++) {
  for (var column = 0; column < currentArray.length; column++) { 
    TileStyleAnimateViewArray.push(tileStyleAnimateView(currentArray[row][column].value,gameGridCellNTileSquareSize)) 
  }
}
console.log('tileStyleAnimateView finishes arr', TileStyleAnimateViewArray)
 })
   React.useEffect(() => { 
    UtilsDispatch({
      type: 'cellNtileSize',
      payload: {
        gameGridCellNTileSquareSize,
      },
    });

    initialOrPreviousGameArray =createEmptyGameArrayWithEmptyOBjects(props.cellsRowAmount)
 
iterateAllItemsInArrayAndMakeSideEffect(initialOrPreviousGameArray, makeInitialGameSetToEmptyObjcts)
 


add2or4toArray(initialOrPreviousGameArray)
add2or4toArray(initialOrPreviousGameArray)

 
currentArray = CopyGameArray(initialOrPreviousGameArray);
 
console.log(currentArray)
objTest=currentArray
 
/////////////////////
  }, [props.cellsRowAmount]);

  let responsiveStyle = StyleSheet.create({
    gameGridSize: {
      width: gameGridSquareSize,
      height: gameGridSquareSize,
      borderStyle: 'solid',
       backgroundColor: '#bbada0',
      justifyContent: 'space-around',
      borderRadius: 5,
    },
    parent: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
     },
  });
 


  const onSwipeUp = gestureName => {
    console.log('onSwipeUp');

  };

  const onSwipeDown = gestureName => {
    console.log('onSwipeDown');
  };

  const onSwipeLeft = gestureName => {
    console.log('onSwipeLeft');
  };

  const onSwipeRight = gestureName => {
    console.log('onSwipeRight');
  };

  const onSwipe = gestureName => {
    console.log('onSwipe', gestureName);
    console.log('renderCounterGrid onSwipe',renderCounterGrid)
if(!enableSwipeEvent){
 return
}
enableSwipeEvent=false
 
    initialOrPreviousGameArray = CopyGameArray(currentArray);
 

  if(gestureName=='SWIPE_LEFT'||gestureName=='SWIPE_RIGHT' ){
    gestureName= gestureName=='SWIPE_LEFT'?'SWIPE_RIGHT':'SWIPE_LEFT'
  }
  console.log('gestureName fixed', gestureName)
  
    currentArray = makeMove(gestureName,currentArray);

    //falsify non-impact swipes to prevent adding new tiles
    let countSameCells=0
    let noneZeroIndexesInOldArray=iterateAllItemsInArray(initialOrPreviousGameArray,returnNoneZeroValueindexesInArray).filter((cell)=>{if(cell!=undefined){return cell}})
    console.log('noneZeroIndexesIn OldArray  ');
    console.log(noneZeroIndexesInOldArray);
    console.log('currentArray same', JSON.stringify(currentArray))

    console.log('initialOrPreviousGameArray same', JSON.stringify(initialOrPreviousGameArray))
    for (var row = 0; row < currentArray.length; row++) {
      for (var column = 0; column < currentArray.length; column++) {
       if(currentArray[row][column].value==        initialOrPreviousGameArray[row][column].value && currentArray[row][column].value!=0){
        countSameCells++ 

       }
      }
    }
    console.log('countSameCells',countSameCells)
    console.log('noneZeroIndexesInOldArray.length',noneZeroIndexesInOldArray.length)


if(countSameCells==noneZeroIndexesInOldArray.length){
   enableSwipeEvent=true
   return
  }

    //////////////////
    console.log('after newArray= makeMove');

    

    let noneZeroIndexesInNewArray = iterateAllItemsInArray(currentArray, returnNoneZeroValueindexesInArray).filter((cell)=>{if(cell!=undefined){return cell}})
    console.log('noneZeroIndexesInNewArray');

    console.log('arrayOfnoneZeroIndexesInNewAndOldArrayCombined');

    let arrayOfnoneZeroIndexesInNewAndOldArrayCombined=[...noneZeroIndexesInNewArray,...noneZeroIndexesInOldArray];////erase double indexes when refactoring

  
 
    console.log('initialOrPreviousGameArray after currentArray= makeMove');

    console.log(initialOrPreviousGameArray);
    console.log('currentArray');

    console.log(currentArray);


    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    // console.log(gestureName);

    switch (gestureName) {
      case SWIPE_UP:
        // console.log(gestureName);
        break;
      case SWIPE_DOWN:
        // console.log(gestureName);
        break;
      case SWIPE_LEFT:
        // console.log(gestureName);
        break;
      case SWIPE_RIGHT:
        // console.log(gestureName);
        break;
    }
    

///////animation array build/////
let positionsArray=new Array(4)
for (var row = 0; row < positionsArray.length; row++) {
  positionsArray[row]=new Array(4)
}
 
for (var row = 0; row < currentArray.length; row++) {
  for (var column = 0; column < currentArray.length; column++) { 

    positionsArray[row][column]=(getRelativeCellPositionFromTwoArraysAccordingToId(initialOrPreviousGameArray,currentArray,row,column)) 
  }
}
console.log('positionsArray swipe', positionsArray)


for (var row = 0; row < currentArray.length; row++) {
  for (var column = 0; column < currentArray.length; column++) { 
    if(positionsArray[row][column]){
      endRelativeYpositionAnimation = (tileDistanceInCoordinates)*positionsArray[row][column].rowDiff
      endRelativeXpositionAnimation  = (tileDistanceInCoordinates)*(+1*positionsArray[row][column].columnDiff)
      console.log('endRelativeXpositionAnimation')
    
      console.log(endRelativeXpositionAnimation)
      
      console.log('endRelativeYpositionAnimation')
      console.log(endRelativeYpositionAnimation)
      console.log('smoothTransitionDistancesAnimArray swipe',JSON.stringify(smoothTransitionDistancesAnimArray))

      console.log('smoothTransitionDistancesAnimArray swipe obj'+row+' '+ row+ JSON.stringify(smoothTransitionDistancesAnimArray[row][column]))

    
      Animated.timing(smoothTransitionDistancesAnimArray[row][column], {
        toValue:  { x:endRelativeXpositionAnimation , y:endRelativeYpositionAnimation
        } ,
        duration: 50,
        useNativeDriver: true,
      }).start(({ finished }) => {
         console.log('finished animation ', finished )
      }
      )    
    }
  }
}

///////////////////////////////

iterateAllItemsInArrayAndMakeSideEffectToObjects(currentArray,makeIsMergedThisTurnFale)
iterateAllItemsInArrayAndMakeSideEffectToObjects(currentArray,isWon)
isLose(currentArray)
add2or4toArray(currentArray)

///////style array build/////

TileStyleArray=[]
for (var row = 0; row < currentArray.length; row++) {
  for (var column = 0; column < currentArray.length; column++) { 
    TileStyleArray.push(makeStyleResponsiveDynamic(currentArray[row][column].value,gameGridCellNTileSquareSize)) 
  }
}
console.log('TileStyleArray swipe', TileStyleArray)
 TileStyleAnimateViewArray=[] 
for (var row = 0; row < currentArray.length; row++) {
for (var column = 0; column < currentArray.length; column++) { 
TileStyleAnimateViewArray.push(tileStyleAnimateView(currentArray[row][column].value,gameGridCellNTileSquareSize)) 
}
}
console.log('tileStyleAnimateView finishes arr swipe', TileStyleAnimateViewArray)



setTimeout(()=>{

  enableSwipeEvent=true
  setNewRender1(!newRender1) 
 },100)
  console.log("end of swipe event, direction is", gestureName)
  }; 
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 120,
  };

  return (
    <View style={responsiveStyle.parent}>
 
<View style={{
  marginTop: 55,
  marginBottom: 15,
   borderRadius: 3,
  marginLeft: 10, 
  width: 185,
  backgroundColor:'#B8860B',
  paddingTop:20,
  display:"flex",
 justifyContent: "center",
alignItems: "center",  
paddingBottom:20,

}}    >
      <Text>score is: {score} </Text>
      </View>

      <GestureRecognizer
        onSwipe={onSwipe}
        onSwipeUp={onSwipeUp}
        onSwipeDown={onSwipeDown}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        config={config}>
 
        <View style={responsiveStyle.gameGridSize}>
      
        
        <Row cellSquareSize={gameGridCellNTileSquareSize}
        cellsAmount={cellsRowAmount}
        serialRowNumber={ 0}
        >  
<Cell key={0} rowSerialNumber={0} serialCellNumber={0} cellNtileSize={gameGridCellNTileSquareSize}
>  
{
  currentArray!=undefined &&
  currentArray.length!=0 && 
  currentArray[0][0].value!=0  &&
//   TileStyleArray!=undefined &&
//  TileStyleArray.length!=0 &&

//  style={TileStyleArray[0][0]}
  <Animated.View style={ [TileStyleAnimateViewArray[0],{
    transform: [
      { translateX: smoothTransitionDistancesAnimArray[0][0].x }, 
      { translateY:smoothTransitionDistancesAnimArray[0][0].y },
      ]
  }]}> 
      <Text style={TileStyleArray[0]}  >{currentArray[0][0].value}</Text>
      </Animated.View>}
</Cell>
<Cell key={1} rowSerialNumber={0} serialCellNumber={1}  cellNtileSize={gameGridCellNTileSquareSize}
> 
{
  currentArray!=undefined &&

  currentArray.length!=0 && 

  currentArray[0][1].value!=0
  &&
  <Animated.View style={ [TileStyleAnimateViewArray[1],{
    transform: [
      { translateX: smoothTransitionDistancesAnimArray[0][1].x }, 
      { translateY:smoothTransitionDistancesAnimArray[0][1].y },
    ]
  }]}> 
      <Text style={TileStyleArray[1]}  >
      {currentArray[0][1].value}</Text>
      </Animated.View>
    }

</Cell>
<Cell key={2} rowSerialNumber={0} serialCellNumber={2}  cellNtileSize={gameGridCellNTileSquareSize}
> 
{
  currentArray!=undefined &&

  currentArray.length!=0 && 


currentArray[0][2].value!=0  &&

<Animated.View style={[TileStyleAnimateViewArray[2],{
  transform: [
    { translateX: smoothTransitionDistancesAnimArray[0][2].x }, 
    { translateY:smoothTransitionDistancesAnimArray[0][2].y },
  ]
}]}> 
<Text style={TileStyleArray[2]}  >
{currentArray[0][2].value}</Text>
</Animated.View>
}
</Cell>
<Cell key={3} rowSerialNumber={0} serialCellNumber={3}  cellNtileSize={gameGridCellNTileSquareSize}
> 

{
  currentArray!=undefined &&

  currentArray.length!=0 && 


currentArray[0][3].value!=0  &&
<Animated.View style={[ TileStyleAnimateViewArray[3],{
  transform: [
    { translateX: smoothTransitionDistancesAnimArray[0][3].x }, 
    { translateY:smoothTransitionDistancesAnimArray[0][3].y },
  ]
}]}> 
<Text style={TileStyleArray[3]}  >
{currentArray[0][3].value}</Text>
</Animated.View>}
</Cell>

        </Row>
       
        <Row cellSquareSize={gameGridCellNTileSquareSize}
        cellsAmount={cellsRowAmount}
        serialRowNumber={1}>

        <Cell key={4} rowSerialNumber={1} serialCellNumber={0}
        cellNtileSize={gameGridCellNTileSquareSize}
        >
        {
          currentArray!=undefined &&

  currentArray.length!=0 && 


        currentArray[1][0].value!=0  &&
        <Animated.View style={[TileStyleAnimateViewArray[4],{
          transform: [
            { translateX: smoothTransitionDistancesAnimArray[1][0].x }, 
            { translateY:smoothTransitionDistancesAnimArray[1][0].y },
          ]
        }]}> 
        <Text style={TileStyleArray[4]}  >
        {currentArray[1][0].value}</Text>
        </Animated.View>
        }        
</Cell>

<Cell key={5} rowSerialNumber={1} serialCellNumber={1}  cellNtileSize={gameGridCellNTileSquareSize}
> 
{
  currentArray!=undefined &&

  currentArray.length!=0 &&  
currentArray[1][1].value!=0  &&
<Animated.View style={[ TileStyleAnimateViewArray[5],{
  transform: [
    { translateX: smoothTransitionDistancesAnimArray[1][1].x }, 
    { translateY:smoothTransitionDistancesAnimArray[1][1].y },
  ]
}]}> 
<Text style={TileStyleArray[5]}  >
{currentArray[1][1].value}</Text>
</Animated.View>


}
</Cell>

<Cell key={6} rowSerialNumber={1} serialCellNumber={2}  cellNtileSize={gameGridCellNTileSquareSize}
> 
{
  currentArray!=undefined &&

  currentArray.length!=0 && 


currentArray[1][2].value!=0  &&
<Animated.View style={ [TileStyleAnimateViewArray[6],{
  transform: [
  { translateX: smoothTransitionDistancesAnimArray[1][2].x }, 
  { translateY:smoothTransitionDistancesAnimArray[1][2].y },
]
}]}> 
<Text style={TileStyleArray[6]}  >
{currentArray[1][2].value}</Text>
</Animated.View>


}
</Cell>
<Cell key={7} rowSerialNumber={1} serialCellNumber={3}  cellNtileSize={gameGridCellNTileSquareSize}
> 
{
  currentArray!=undefined &&

  currentArray.length!=0 && 


currentArray[1][3].value!=0  &&
<Animated.View style={ [TileStyleAnimateViewArray[7],{
  transform: [
  { translateX: smoothTransitionDistancesAnimArray[1][3].x }, 
  { translateY:smoothTransitionDistancesAnimArray[1][3].y },
]
}]}> 
<Text style={TileStyleArray[7]}  >
{currentArray[1][3].value}</Text>
</Animated.View>
}
</Cell>     
        </Row>
       
        <Row cellSquareSize={gameGridCellNTileSquareSize}
cellsAmount={cellsRowAmount}
serialRowNumber={2}>
<Cell key={8} rowSerialNumber={2} serialCellNumber={0}  cellNtileSize={gameGridCellNTileSquareSize}
> 
{
  currentArray!=undefined &&
  currentArray.length!=0 && 

currentArray[2][0].value!=0  &&
<Animated.View style={ [TileStyleAnimateViewArray[8],{
  transform: [
  { translateX: smoothTransitionDistancesAnimArray[2][0].x }, 
  { translateY:smoothTransitionDistancesAnimArray[2][0].y },
]
}]}> 
<Text style={TileStyleArray[8]}  >
{currentArray[2][0].value}</Text>
</Animated.View>

}
</Cell>     
<Cell key={9} rowSerialNumber={2} serialCellNumber={1}  cellNtileSize={gameGridCellNTileSquareSize}
> 
{
  currentArray!=undefined &&
  currentArray.length!=0 && 

currentArray[2][1].value!=0  &&
<Animated.View style={ [TileStyleAnimateViewArray[9],{
  transform: [
  { translateX: smoothTransitionDistancesAnimArray[2][1].x }, 
  { translateY:smoothTransitionDistancesAnimArray[2][1].y },
]
}]}> 
<Text style={TileStyleArray[9]}  >
{currentArray[2][1].value}</Text>
</Animated.View>}
</Cell>

<Cell key={10} rowSerialNumber={2} serialCellNumber={2}   cellNtileSize={gameGridCellNTileSquareSize}
> 
{
  currentArray!=undefined &&
  currentArray.length!=0 && 

currentArray[2][2].value!=0  &&
<Animated.View style={ [TileStyleAnimateViewArray[10],{
  transform: [
  { translateX: smoothTransitionDistancesAnimArray[2][2].x }, 
  { translateY:smoothTransitionDistancesAnimArray[2][2].y },
]
}]}> 
<Text style={TileStyleArray[10]}  >
{currentArray[2][2].value}</Text>
</Animated.View>
}
</Cell>

<Cell key={11} rowSerialNumber={2} serialCellNumber={3}   cellNtileSize={gameGridCellNTileSquareSize}
> 
{
  currentArray!=undefined &&
  currentArray.length!=0 && 

currentArray[2][3].value!=0  &&
<Animated.View style={ [TileStyleAnimateViewArray[11],{
  transform: [
  { translateX: smoothTransitionDistancesAnimArray[2][3].x }, 
  { translateY:smoothTransitionDistancesAnimArray[2][3].y },
]
}]}> 
<Text style={TileStyleArray[11]}  >
{currentArray[2][3].value}</Text>
</Animated.View>
}
</Cell>
</Row>

<Row cellSquareSize={gameGridCellNTileSquareSize}
cellsAmount={cellsRowAmount}
serialRowNumber={3}> 
<Cell key={12} rowSerialNumber={3} serialCellNumber={0}   cellNtileSize={gameGridCellNTileSquareSize}
>
{
  currentArray!=undefined &&
  currentArray.length!=0 && 

currentArray[3][0].value!=0  &&
<Animated.View style={ [TileStyleAnimateViewArray[12],{
  transform: [
  { translateX: smoothTransitionDistancesAnimArray[3][0].x }, 
  { translateY:smoothTransitionDistancesAnimArray[3][0].y },
]
}]}> 
<Text style={TileStyleArray[12]}  >
{currentArray[3][0].value}</Text>
</Animated.View>}
</Cell>
 
<Cell key={13} rowSerialNumber={3} serialCellNumber={1}   cellNtileSize={gameGridCellNTileSquareSize}
>
{
  currentArray!=undefined &&
  currentArray.length!=0 && 

currentArray[3][1].value!=0  &&
<Animated.View style={ [TileStyleAnimateViewArray[13],{
  transform: [
  { translateX: smoothTransitionDistancesAnimArray[3][1].x }, 
  { translateY:smoothTransitionDistancesAnimArray[3][1].y },
]
}]}> 
<Text style={TileStyleArray[13]}  >
{currentArray[3][1].value}</Text>
</Animated.View>
}
</Cell>
<Cell key={14} rowSerialNumber={3} serialCellNumber={2}   cellNtileSize={gameGridCellNTileSquareSize}
>
{
  currentArray!=undefined &&
  currentArray.length!=0 && 

currentArray[3][2].value!=0  &&
<Animated.View style={ [TileStyleAnimateViewArray[14],{
  transform: [
  { translateX: smoothTransitionDistancesAnimArray[3][2].x }, 
  { translateY:smoothTransitionDistancesAnimArray[3][2].y },
]
}]}> 
<Text style={TileStyleArray[14]}  >
{currentArray[3][2].value}</Text>
</Animated.View>
}
</Cell>
<Cell key={15} rowSerialNumber={3} serialCellNumber={3}   cellNtileSize={gameGridCellNTileSquareSize}
>
{
  currentArray!=undefined &&
  currentArray.length!=0 && 

currentArray[3][3].value!=0  &&
<Animated.View style={ [TileStyleAnimateViewArray[15],{
  transform: [
  { translateX: smoothTransitionDistancesAnimArray[3][3].x }, 
  { translateY:smoothTransitionDistancesAnimArray[3][3].y },
]
}]}> 
<Text style={TileStyleArray[15]}  >
{currentArray[3][3].value}</Text>
</Animated.View>
}
</Cell>
</Row>
        </View>
      </GestureRecognizer>

      
  
    </View>
  );
};

export {GameGrid};

