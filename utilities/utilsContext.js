import React from 'react';
import utilsReducer from './utilsReducer';
import dimension from './dimensions';

var UtilsContext = React.createContext();
export {UtilsContext};
const initialState = {
  width: dimension.width,
  height: dimension.height,
  cellNtileSize:199,
  YcoordinateArray:[],
  XcoordinateArray:[],
  cellMovingDistance:100,
  currentArray:[],
  previousArray:[],
  animatedOldTilesFinished:[
    [true,true,true,true,],
    [true,true,true,true,],
    [true,true,true,true,],
    [true,true,true,true,],
],
enableGetRelativeCellPositionFromTwoArraysAccordingToIdAfterSwipeEvent:true,

};

const UtilsProvider = props => {
  const [UtilsState, UtilsDispatch] = React.useReducer(
    utilsReducer,
    initialState,
  );
  console.log('UtilsState f/m utilsContext');

  console.log(UtilsState);
  const valueProp = {UtilsState, UtilsDispatch};
  
  // React.useEffect(()=>{
  //   UtilsDispatch({
  //     type: 'SET_CURRENT_ARRAY',
  //     payload: [666],
  //   },[]);
  // })
  

  return (
    <UtilsContext.Provider value={valueProp}>
      {props.children}
    </UtilsContext.Provider>
  );
};

export {UtilsProvider};
