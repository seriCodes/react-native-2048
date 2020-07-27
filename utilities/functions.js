import React, {useState, useEffect} from 'react';
import {create} from 'react-test-renderer';
// import UUIDGenerator from 'react-native-uuid-generator';
import { Alert, AsyncStorage } from "react-native";

var prevArray = [[], [], [], []];

var score = 0;
export {score};
export function makeScoreZero(){
  console.log('makeScoreZero')
  score = 0;
}
// var uniqid = require('uniqid');// doesn't work 
// var uniqid =require('react-native-uuid');// doesn't work
// var uniqid = UUIDGenerator.getRandomUUID// doesn't work
// console.log('id');
// console.log(new Date().getTime());
// var uniqid= new Date().getTime()


// let gameArray= [ //not all make moves are abled

//       [{value:2,isMergedThisTurn:false},
//         {value:2,isMergedThisTurn:false},
//         {value:2,isMergedThisTurn:false},
//         {value:2,isMergedThisTurn:false}],

//     [{value:2,isMergedThisTurn:false},
//         {value:2,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false},
//         {value:2,isMergedThisTurn:false}],

//     [{value:2,isMergedThisTurn:false},
//         {value:2,isMergedThisTurn:false},
//         {value:2,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false}],

//     [{value:2,isMergedThisTurn:false},
//     {value:0,isMergedThisTurn:false},
//     {value:2,isMergedThisTurn:false},
//     {value:2,isMergedThisTurn:false}]
// ]

// let gameArray= [ //not all make moves are abled

//     [{value:4,isMergedThisTurn:false},
//         {value:4,isMergedThisTurn:false},
//         {value:4,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false}],

//   [{value:0,isMergedThisTurn:false},
//   {value:4,isMergedThisTurn:false},
//   {value:4,isMergedThisTurn:false},
//   {value:4,isMergedThisTurn:false}
// ],

//     [{value:4,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false},
//         {value:4,isMergedThisTurn:false},
//         {value:4,isMergedThisTurn:false}],

//   [{value:4,isMergedThisTurn:false},
//     {value:4,isMergedThisTurn:false},
//     {value:4,isMergedThisTurn:false},
//     {value:0,isMergedThisTurn:false}]
// ]

// export let gameArray = [
//   //start

//   [
//     {value: 0, isMergedThisTurn: false, uniqid: ['1', '2']},
//     {value: 0, isMergedThisTurn: false, uniqid: ['3', '4']},

//     {value: 0, isMergedThisTurn: false, uniqid: ['5']},
//     {value: 16, isMergedThisTurn: false, uniqid: ['6']},
//   ],

//   [
//     {value: 32, isMergedThisTurn: false, uniqid: ['7']},
//     {value: 64, isMergedThisTurn: false, uniqid: ['8']},
//     {value: 128, isMergedThisTurn: false, uniqid: ['9']},
//     {value: 256, isMergedThisTurn: false, uniqid: ['10']},
//   ],

//   [
//     {value: 512, isMergedThisTurn: false, uniqid: ['11']},
//     {value: 1024, isMergedThisTurn: false, uniqid: ['26']},
//     {value: 0, isMergedThisTurn: false, uniqid: ['37']},
//     {value: 0, isMergedThisTurn: false, uniqid: ['46']},
//   ],

//   [
//     {value: 16, isMergedThisTurn: false, uniqid: ['56']},
//     {value: 8, isMergedThisTurn: false, uniqid: ['66']},
//     {value: 4, isMergedThisTurn: false, uniqid: ['76']},
//     {value: 2, isMergedThisTurn: false, uniqid: ['88']},
//   ],
// ];

export let gameArray = [
  //start

  [
    {value: 0, isMergedThisTurn: false, uniqid: ['1', '2']},
    {value: 0, isMergedThisTurn: false, uniqid: ['3', '4']},

    {value: 0, isMergedThisTurn: false, uniqid: ['5']},
    {value: 0, isMergedThisTurn: false, uniqid: ['6']},
  ],

  [
    {value: 0, isMergedThisTurn: false, uniqid: ['7']},
    {value: 0, isMergedThisTurn: false, uniqid: ['8']},
    {value: 0, isMergedThisTurn: false, uniqid: ['9']},
    {value: 0, isMergedThisTurn: false, uniqid: ['10']},
  ],

  [
    {value: 0, isMergedThisTurn: false, uniqid: ['11']},
    {value:2, isMergedThisTurn: false, uniqid: ['26']},
    {value: 0, isMergedThisTurn: false, uniqid: ['37']},
    {value: 0, isMergedThisTurn: false, uniqid: ['46']},
  ],

  [
    {value: 0, isMergedThisTurn: false, uniqid: ['56']},
    {value: 0, isMergedThisTurn: false, uniqid: ['66']},
    {value: 0, isMergedThisTurn: false, uniqid: ['76']},
    {value: 0, isMergedThisTurn: false, uniqid: ['88']},
  ],
];

// export let gameArray= [
// //all numbers
//   [
//     {value: 16, isMergedThisTurn: false, uniqid: ['1', '2']},
//     {value: 8, isMergedThisTurn: false, uniqid: ['3', '4']},

//     {value: 4, isMergedThisTurn: false, uniqid: ['5']},
//     {value: 2, isMergedThisTurn: false, uniqid: ['6']},
//   ],

//   [
//     {value: 32, isMergedThisTurn: false, uniqid: ['7']},
//     {value: 64, isMergedThisTurn: false, uniqid: ['8']},
//     {value: 128, isMergedThisTurn: false, uniqid: ['9']},
//     {value: 256, isMergedThisTurn: false, uniqid: ['10']},
//   ],

//   [
//     {value: 512, isMergedThisTurn: false, uniqid: ['11']},
//     {value: 1024, isMergedThisTurn: false, uniqid: ['26']},
//     {value: 2048, isMergedThisTurn: false, uniqid: ['37']},
//     {value: 512, isMergedThisTurn: false, uniqid: ['46']},
//   ],

//   [
//     {value: 2, isMergedThisTurn: false, uniqid: ['56']},
//     {value: 4, isMergedThisTurn: false, uniqid: ['66']},
//     {value: 8, isMergedThisTurn: false, uniqid: ['76']},
//     {value: 32, isMergedThisTurn: false, uniqid: ['88']},
//   ],
// ];

// let gameArray= [ //start

//     [{value:0,isMergedThisTurn:false,uniqid: ["3","4"]},
//     {value:0,isMergedThisTurn:false,uniqid: ["3","4"]},

//         {value:0,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false}],

//     [{value:0,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false,uniqid: ["6"]}],

//     [{value:0,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false,uniqid: ["7"]},
//         {value:0,isMergedThisTurn:false}],

//     [{value:0,isMergedThisTurn:false},
//     {value:0,isMergedThisTurn:false},
//     {value:0,isMergedThisTurn:false},
//     {value:0,isMergedThisTurn:false,uniqid: ["8"]}]
// ]

// let gameArray= [

//     [{value:2,isMergedThisTurn:false},{value:2,isMergedThisTurn:false},{value:2,isMergedThisTurn:false},{value:2,isMergedThisTurn:false}],

//     [{value:4,isMergedThisTurn:false},{value:4,isMergedThisTurn:false},{value:4,isMergedThisTurn:false},{value:4,isMergedThisTurn:false}],

//     [{value:0,isMergedThisTurn:false},{value:0,isMergedThisTurn:false},{value:4,isMergedThisTurn:false},{value:8,isMergedThisTurn:false}],

//     [{value:0,isMergedThisTurn:false},{value:2,isMergedThisTurn:false},
//     {value:0,isMergedThisTurn:false},{value:8,isMergedThisTurn:false}]
// ]


// let gameArray= [// gameover 1

//     [{value:0,isMergedThisTurn:false},
//         {value:8,isMergedThisTurn:false},
//         {value:4,isMergedThisTurn:false},
//         {value:4,isMergedThisTurn:false}],

//     [{value:8,isMergedThisTurn:false},
//         {value:32,isMergedThisTurn:false},
//         {value:256,isMergedThisTurn:false},
//         {value:32,isMergedThisTurn:false}],

//     [{value:4,isMergedThisTurn:false},
//         {value:8,isMergedThisTurn:false},
//         {value:128,isMergedThisTurn:false},
//         {value:16,isMergedThisTurn:false}],

//     [{value:2,isMergedThisTurn:false},
//     {value:4,isMergedThisTurn:false},
//     {value:16,isMergedThisTurn:false},
//     {value:8,isMergedThisTurn:false}]
// ]
// let gameArray= [//

//     [{value:0,isMergedThisTurn:false},
//         {value:8,isMergedThisTurn:false},
//         {value:4,isMergedThisTurn:false},
//         {value:4,isMergedThisTurn:false}],

//     [{value:0,isMergedThisTurn:false},
//         {value:2,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false},
//         {value:8,isMergedThisTurn:false}],

//     [{value:0,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false},
//         {value:4,isMergedThisTurn:false}],

//     [{value:0,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false},
//     {value:0,isMergedThisTurn:false},
//     {value:2,isMergedThisTurn:false}]
// ]

let gameArrayCopy = [
  [{}, {}, {}, {}],
  [{}, {}, {}, {}],
  [{}, {}, {}, {}],
  [{}, {}, {}, {}],
];

export function iterateAllItemsInArray(arr, callback) {
  let result=[]
  for (var row = 0; row < arr.length; row++) {
    for (var column = 0; column < arr.length; column++) {  
      // console.log('iterateAllItemsInArray')
      result.push(callback(row, column, arr[row][column]))
    }
  }
  return result;
}

export function iterateAllItemsInArrayAndMakeSideEffect(arr, callback) {
  for (var row = 0; row < arr.length; row++) {
    for (var column = 0; column < arr.length; column++) {  
      // console.log('iterateAllItemsInArray')
      callback(row, column, arr[row][column])
    }
  }
}
export function iterateAllItemsInArrayAndMakeSideEffectToObjects(arr, callback) {
  for (var row = 0; row < arr.length; row++) {
    for (var column = 0; column < arr.length; column++) {  
      // console.log('iterateAllItemsInArray')
      callback(arr[row][column])
    }
  }

}


export function returnNoneZeroValueindexesInArray(row, column,item) {
  // console.log('item.value')
  // console.log(item.value)

      if(item.value!=0){
          return row + '' + column
      }

}

export function returnZeroValueindexesInArray(row, column,item) {
  // console.log('item.value')
  // console.log(item.value)

      if(item.value==0){
          return row + '' + column
      }

}
 

function choose2or4() {
  if (Math.random() >= 0.5) {
    return 4;
  } else {
    return 2;
  }
}

export function makeArrayObjectsPositionStaticId() {
  // gameArrayCopy=

  for (var row = 0; row < 4; row++) {
    for (var column = 0; column < 4; column++) {
      gameArray[row][column].StaticPositinId = row + '' + column;
    }
  }
}


export function getRelativeCellPositionFromTwoArraysAccordingToId(oldArr,newArr, checkRow, checkColunm){
  console.log('getRelativeCellPositionFromTwoArraysAccordingToId inside')
  // console.log(oldArr)
  // console.log(newArr)

  // for (var row = 0; row < newArr.length; row++) {
  //   for (var column = 0; column < newArr.length; column++) {
      for (var rowNewArr = 0; rowNewArr < newArr.length; rowNewArr++) {
      
      for (var columnNewArr = 0; columnNewArr < newArr.length; columnNewArr++) {

        
        if(
          oldArr[checkRow][checkColunm].value!=0
          // &&
          // oldArr[row][column].uniqid
          &&
          newArr[rowNewArr][columnNewArr].value!=0
          &&
          (
            oldArr[checkRow][checkColunm].uniqid.includes(newArr[rowNewArr][columnNewArr].uniqid[0]) 
          ||
          oldArr[checkRow][checkColunm].uniqid.includes(newArr[rowNewArr][columnNewArr].uniqid[1]) 
          )
          ){

  console.log('getRelativeCellPositionFromTwoArraysAccordingToId new row',checkRow+' new column',checkColunm)

  console.log('newArr from getRelativeCellPositionFromTwoArraysAccordingToId')
  console.log(JSON.stringify(newArr))
  console.log('oldArr from getRelativeCellPositionFromTwoArraysAccordingToId')
  console.log(JSON.stringify(oldArr))

          return {
            rowDiff:(checkRow-rowNewArr)*(+1),
            columnDiff: (checkColunm-columnNewArr)*(+1),
          }
        }
  //   }
  // }
      }
    }
      console.log('checkRow ', checkRow +' checkColunm ',checkColunm )  

      if(oldArr[checkRow][checkColunm].value!=0){


          console.log('oldArr[checkRow][checkColunm]')          
          console.log(JSON.stringify(oldArr[checkRow][checkColunm]))  
          console.log('newArr[checkRow][checkColunm]')          
          console.log(JSON.stringify(newArr[checkRow][checkColunm]))  


          console.log('newArr[checkRow][checkColunm].uniqid', newArr[checkRow][checkColunm].uniqid)  
          console.log('newArr[checkRow][checkColunm].value', newArr[checkRow][checkColunm].value)        
          // console.log('oldArr[row][column].uniqid[0]', oldArr[row][column].uniqid[0])        
          // console.log('oldArr[row][column].uniqid[1]', oldArr[row][column].uniqid[1])    

          console.log(newArr)  
          console.log( oldArr)  
          console.log(row, column)

          console.log(newArr[row][column].value)
          console.log(newArr[row][column].uniqid)
          console.log(oldArr[checkRow][checkColunm].uniqid)

        }
      
  return null
}




export function comparePrevArrayToGameArrayAndRenderAnimation() {
  console.log(JSON.stringify(gameArray));
  console.log(JSON.stringify(prevArray));

  let currentPosition;

  for (var row = 0; row < 4; row++) {
    for (var column = 0; column < 4; column++) {
      if (prevArray[row][column].value != 0) {
        currentPosition = getPositionInCurrentArray(
          prevArray[row][column].uniqid[0],
        );
        // console.log(currentPosition.row+""+currentPosition.column)
        makeSlideAnimation(currentPosition, row, column);
      }
    }
  }
}



function getPositionInCurrentArray(id) {
  for (var row = 0; row < 4; row++) {
    for (var column = 0; column < 4; column++) {
      if (
        gameArray[row][column].uniqid &&
        gameArray[row][column].uniqid.includes(id)
      ) {
        return {row, column};
      }
    }
  }
}

export function getElementXYposition(position) {
  let parentContainerDiv = document.getElementById(position);

  let divToSlide = parentContainerDiv.children[0];

  let data = divToSlide.getBoundingClientRect();
  //    console.log(divToSlide)

  console.log(data.x);
  console.log(data.y);

  return {x: data.x, y: data.y};
}

export function copyOne2DarrayToAnotherByExchangeInnerArrays(gameArray, rotatedArray) {
  for (var row = 0; row < gameArray.length; row++) {
    gameArray[row] = rotatedArray[row];
  }
  return gameArray
}


export function add2or4toArray(arr) {
  console.log('add2or4toArray');
  let zeroValueIndexes = iterateAllItemsInArray(arr,returnZeroValueindexesInArray).filter((item)=>{if(item!=undefined){return item}})

  
  console.log(zeroValueIndexes);
  let arrayPosition =
    zeroValueIndexes[Math.floor(Math.random() * zeroValueIndexes.length)];

  let value = choose2or4();

  arr[arrayPosition[0]][arrayPosition[1]] = {
    // arr[0][0] = {

    value,
    isMergedThisTurn: false,
    isNew: true,
    uniqid: [new Date().getTime()+Math.random()+"",],
  };
}
export function makeMove(gestureName,gameArray) {
  console.log(gestureName);
  // let relativeRowIndex = null;
  let relativeColumnIndex = null;

  console.log(
    'gameArray from start makemove gggggggggggggggggggggggggggggggggg',
  );

  console.log(JSON.stringify(gameArray));//needs to be an argument

  let rotationBeforMakeMove = 0;
// let preventSimultenouosEvents;
// if(gestureName){
//   preventSimultenouosEvents=false
// }

  switch (gestureName) {
    case 'SWIPE_UP':
      console.log(
        'SWIPE_UP',
      );
      console.log(gameArray);
      //   return makeLeft(37, makeMoveCount);

       break;
      rotationBeforMakeMove = 0;
    // NO ROTATION
    case 'SWIPE_DOWN':
      console.log('SWIPE_DOWN  key is pressed');
      rotationBeforMakeMove = 2;

    //   return makeUp(38, makeMoveCount);
     break;
    case 'SWIPE_LEFT':
      console.log('SWIPE_LEFT key is pressed');
      rotationBeforMakeMove = 1;
    //   return makeRight(39, makeMoveCount);
    break;
    case 'SWIPE_RIGHT':
      console.log('SWIPE_RIGHT key is pressed');
      rotationBeforMakeMove = 3;
    //   return makeDown(40, makeMoveCount);
    break;
    default:
      console.log('I AM IN DEFAULT! SOMETHING IS TERRIBLY WRONG');
      rotationBeforMakeMove = null;

    break;

  }
console.log('rotationBeforMakeMove', rotationBeforMakeMove)
  if (rotationBeforMakeMove) {
    let rotatedArray = rotateSquareArrayRight(gameArray);
    for (
      var rotationCount = 0;
      rotationCount < rotationBeforMakeMove - 1;
      rotationCount++
    ) {
      rotatedArray = rotateSquareArrayRight(rotatedArray);
      console.log('rotationCount',rotationCount)
    }
    console.log('if(rotationBeforMakeMove)');
    //  let rotatedArray= rotateSquareArrayRight(gameArray)

    copyOne2DarrayToAnotherByExchangeInnerArrays(gameArray, rotatedArray);
  }

  console.log('gameArray after rotations before the makemove loops');

  console.log(JSON.stringify(gameArray));

  let gameArrayCellsInRow = gameArray[0].length;
  console.log('gameArrayCellsInRow', gameArrayCellsInRow);

  let relativeRowIndex = -1;
  let endRowPosition;

  /////make move up for all events ////
  for (var steps = 0; steps < gameArrayCellsInRow - 1; steps++) {
    console.log('steps', steps);
    for (var row = 0; row < gameArrayCellsInRow; row++) {
      for (var column = 0; column < gameArrayCellsInRow; column++) {
        endRowPosition = row + relativeRowIndex;
        console.log('steps from inner loop', steps);

        numberID = gameArray[row][column].uniqid;

        if (
          endRowPosition < 0 ||
          endRowPosition > gameArrayCellsInRow - 1 ||
          gameArray[row][column].value == 0
        ) {
          continue;
        } else if (gameArray[endRowPosition][column].value == 0) {
          assignNumber(
            endRowPosition,
            column,
            gameArray[row][column].value,
            gameArray,
            numberID,
          );

          // slideTileInbrowser(row+""+column,endRowPosition+""+ column)

          assignZero(row, column, gameArray);

          console.log('after assignNumber & assignZero---------------------');

          console.log(JSON.stringify(gameArray));

          // madeMove = true;
        } else {
          if (
            gameArray[endRowPosition][column].value ==
              gameArray[row][column].value &&
            gameArray[endRowPosition][column].isMergedThisTurn == false &&
            gameArray[row][column].isMergedThisTurn == false
          ) {
            assignDoubleNumber(
              endRowPosition,
              column,
              gameArray,
              gameArray[endRowPosition][column].uniqid,
              gameArray[row][column].uniqid,
            );

            // slideTileInbrowser(row+""+column,endRowPosition+""+ column)

            assignZero(row, column, gameArray);
            //   console.log(gameArray);
            console.log('after assignDoubleNumber ---------------------');

            console.log(JSON.stringify(gameArray));
          }
        }
      }
    }
  }
  console.log('gameArray END MOVE aaaaaaaaaa');
  console.log(gameArray);

  ////rotate array back to original position////
let rotationAfterMakeMove= 4-rotationBeforMakeMove;

if (rotationAfterMakeMove) {
  let rotatedArray = rotateSquareArrayRight(gameArray);
  for (
    var rotationCount = 0;
    rotationCount < rotationAfterMakeMove - 1;
    rotationCount++
  ) {
    rotatedArray = rotateSquareArrayRight(rotatedArray);
    console.log('rotationCount after makeMove loops',rotationCount)
  }
  console.log('if(rotationAfterMakeMove)');
 
  copyOne2DarrayToAnotherByExchangeInnerArrays(gameArray, rotatedArray);
}
console.log('gameArray after rotations AFTER the makemove loops');

console.log(JSON.stringify(gameArray));

return gameArray
}

function assignNumber(
  row,
  endColumnPosition,
  copiedTileValue,
  gameArray,
  copiedTileUniqueId,
) {
  gameArray[row][endColumnPosition].value = copiedTileValue;
  gameArray[row][endColumnPosition].uniqid = copiedTileUniqueId;
}
function assignZero(row, column, gameArray) {
  gameArray[row][column].value = 0;
  delete gameArray[row][column].uniqid;
}

function assignDoubleNumber(row, column, gameArray, id1, id2) {
  let uniqidArray = [];

  console.log('gameArray from assignDoubleNumber');

  console.log(gameArray);

  gameArray[row][column].value = gameArray[row][column].value * 2;

  gameArray[row][column].uniqid = [id1[0], id2[0]];

  // gameArray[row][column].uniqid=id1.concat(id2);
  // gameArray[row][column].uniqid.push(id1)
  // gameArray[row][column].uniqid.push(id2)
  // if(gameArray[row][column].uniqid){//uniqidArray already exist/ use for 8 & above
  // }else{//use a new uniqidArray = use to form 4 or 8 only

  // }

  gameArray[row][column].isMergedThisTurn = true;
  increaseSCore(gameArray[row][column].value);

  // console.log(gameArray);
}

function increaseSCore(points) {

  console.log(score);

  score = score + points;
  console.log('the score is');
  console.log(score);
  // try {
  //   // const value = 
  //   await AsyncStorage.setItem('score',score);
  //   // if (value !== null) {
  //   //   score.best = value;
  //   // }
  // } catch (error) {
  //   // Error retrieving data
  // }
}
let lastScore;

export function saveCurrentSCore() {
  console.log(score);
  lastScore = score;
  return lastScore;
}
export function getLastScore() {
  return lastScore;
}

export function createEmptyGameArrayWithRowsOnly(cellsPerRow) {
  let emptyArray = [];
  for (var row = 0; row < cellsPerRow; row++) {
    emptyArray.push([]);
    // for (var column = 0; column < cellsPerRow; column++) {
    //   emptyArray[row].push({});
    // }
  }
  console.log(
    'createEmptyGameArray QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ',
  );
  console.log(emptyArray);
  return emptyArray;
}

export function createEmptyGameArrayWithEmptyOBjects(cellsPerRow) {
  let emptyArray = [];
  for (var row = 0; row < cellsPerRow; row++) {
    emptyArray.push([]);
    for (var column = 0; column < cellsPerRow; column++) {
      emptyArray[row].push({});
    }
  }
  console.log(
    'createEmptyGameArray QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ',
  );
  // console.log(createEmptyGameArray);
  return emptyArray;
}

export function makeInitialGameSetToEmptyObjcts(row,column,obj) {
  console.log('obj makeInitialGameSetToEmptyObjcts')

  // console.log(obj)
  obj.value=0
  obj.isMergedThisTurn=false
  // console.log(obj)

}

export function deleteIsNew() {////make argument game array when refactor this
  console.log(gameArray);
  for (var row = 0; row < 4; row++) {
    for (var column = 0; column < 4; column++) {
      if (gameArray[row][column].isNew) {
        console.log('resetIsNew', gameArray);

        delete gameArray[row][column].isNew;
        console.log('resetIsNew', gameArray);
      }
    }
  }
  console.log(gameArray);
}

export function CopyGameArray(gameArray) {
  console.log('gameArray from CopyArray');

  console.log(gameArray);

  // console.log(placeWasCalled_debugger);
  let gameArrayCellsInRow = gameArray[0].length;

  console.log(gameArrayCellsInRow);
  let copyOfArray = createEmptyGameArrayWithRowsOnly(gameArrayCellsInRow);

  for (var row = 0; row < gameArrayCellsInRow; row++) {
    for (var column = 0; column < gameArrayCellsInRow; column++) {
      // copyArray[row][column] = JSON.parse(
      //   JSON.stringify(gameArray[row][column]),
      // );

      copyOfArray[row].push(JSON.parse(JSON.stringify(gameArray[row][column])));

      // console.log(JSON.parse(JSON.stringify(gameArray[row][column])))
      // console.log(JSON.stringify(gameArray[row][column]))
    }
  }
  console.log('copyOfArray');

  console.log(JSON.stringify(copyOfArray));
  // console.log(prevArray)
  return copyOfArray;
}

function rotateSquareArrayRight(gameArray) {
  // var newarr = CopyArray();
  let newarr = [];
  // gameArray.forEach(() => newarr.push(new Array(arr.length)));//futile b/c it's objects inside

  console.log(' function rotateSquareArrayRight');
  for (var row = 0; row < gameArray.length; row++) {
    // for (var column = 0; column< gameArray[0].length; column++) {
    console.log('newarr[row]', row);
    newarr[row] = copyOppositeColumnToRowIndexSentAndReturnArrayFron2Darray(
      row,
      gameArray,
    );

    // newarr[row][column] = getOppositeValueArray2d(gameArray, row, column);
    // }
  }
  console.log('gameArray after rotateSquareArrayRight');
  console.log(JSON.stringify(newarr));

  // gameArray=newarr

  // console.log(JSON.stringify(gameArray))

  return newarr;
  ////copy neearr to gameArray !!!!!!!!!!!!!!!!!!!!!!!!!!!!

  //  console.log(JSON.stringify(gameArray))
}

function copyOppositeColumnToRowIndexSentAndReturnArrayFron2Darray(
  rowIndex,
  array,
) {
  let columnIndexToCopy = array.length - 1 - rowIndex;

  console.log('columnIndexToCopy');
  console.log(columnIndexToCopy);

  let columnInArray = [];
  for (var row = 0; row < array.length; row++) {
    columnInArray.push(array[row][columnIndexToCopy]);
  }
  console.log(JSON.stringify(columnInArray));

  return columnInArray;
}

var getOppositeValueArray2d = function(arr, row, column) {
  let objectCopy = JSON.parse(JSON.stringify(arr[column][row]));

  console.log(object);
  return objectCopy;
};

export function makeIsMergedThisTurnFale(obj) {
// console.log('before falsify')
// console.log(JSON.stringify(obj))

obj.isMergedThisTurn=false

// console.log('AFTER falsify')

// console.log(JSON.stringify(obj))

} 

export function isLose(arr) {///make argumne gameArray
  console.table(arr);
  console.log('before returnZeroValueindexesInArray');
  // console.log(iterateAllItemsInArray(arr,returnZeroValueindexesInArray));

  let zeroValueIndexes = iterateAllItemsInArray(arr,returnZeroValueindexesInArray).filter((item)=>{if(item!=undefined){return item}})

  if (zeroValueIndexes.length == 0) {
    for (var row = 0; row < arr.length; row++) {
      for (var column = 0; column < arr.length; column++) {
        if (row < arr.length-1 && column < arr.length-1) {
          if (
            arr[row][column].value == arr[row + 1][column].value ||
            arr[row][column].value == arr[row][column + 1].value
          ) {
            console.log('not lost');
            return;
          }
        } else if (
          row == arr.length-1 &&
          column < arr.length-1 &&
          arr[row][column].value == arr[row][column + 1].value
        ) {
          console.log('not lost');

          return;
        } else if (
          column == arr.length-1 &&
          row < arr.length-1 &&
          arr[row][column].value == arr[row + 1][column].value
        ) {
          console.log('not lost');

          return;
        }
      }
    }
    Alert.alert('Game Over');
  } else {
    console.log('there is zero');
    return;
  } 
  console.log('not suppose to be here');
}

export function isWon(obj) {///make argumne gameArray
 
      if (obj.value == 2048) {
        
        Alert.alert('You WON');
        // window.location.reload(false);
      
  }
}
