const utilsReducer = (state, action) => {
  switch (action.type) {
    case 'windowSize':
      console.log('windowSize Reducer');
      console.log(action.payload);

      return {
        ...state,
        width: action.payload.width,
        height: action.payload.height,
      };

    case 'cellNtileSize':
      console.log(action.payload);
      console.log('cellNtileSize ');

      return {
        ...state,
        cellNtileSize: action.payload.gameGridCellNTileSquareSize,
      };
    case 'SET_CURRENT_ARRAY':
      console.log('SET_CURRENT_ARRAY reducer');

      return {...state, currentArray: action.payload};

    case 'SET_PREVIOUS_ARRAY':
      console.log('SET_PREVIOUS_ARRAY reducer');

      return {...state, previousArray: action.payload};
      case 'SET_PREVIOUS_AND_CURRENT_ARRAY':
        console.log('SET_PREVIOUS_AND_CURRENT_ARRAY reducer');
  
        return {...state, previousArray: action.payload.previousArray, currentArray: action.payload.newArray};
  
    case 'YcoordinateArray':
      return {
        ...state,
        // YcoordinateArray: state.YcoordinateArray.push(action.payload)
        // };
        YcoordinateArray: [...state.YcoordinateArray, action.payload],
      };

    case 'XcoordinateArray':
      return {
        ...state,
        // YcoordinateArray: state.YcoordinateArray.push(action.payload)
        // };
        XcoordinateArray: [...state.XcoordinateArray, action.payload],
      };
    case 'CHANGE_enableGetRelativeCellPositionFromTwoArraysAccordingToIdAfterSwipeEvent':
console.log('inside CHANGE_enableGetRelativeCellPositionFromTwoArraysAccordingToIdAfterSwipeEvent', action.payload)
    return {...state, enableGetRelativeCellPositionFromTwoArraysAccordingToIdAfterSwipeEvent: action.payload};
    case 'cellMovingDistance':
      return {...state, cellMovingDistance: action.payload};
    case 'CHANGE_animatedOldTilesFinished':
      
    // console.log('CHANGE_animatedOldTilesFinished');
      console.log('state.animatedOldTilesFinished before- REDUCER');
      console.log(JSON.stringify(state.animatedOldTilesFinished));
console.log(action)
      console.log(state.animatedOldTilesFinished)

      state.animatedOldTilesFinished[action.row][action.column] = action.payload
      // state.animatedOldTilesFinished[action.endRow][action.endColumn] = action.payload

      
      console.log('state.animatedOldTilesFinished AFTER');
      console.log(JSON.stringify(state.animatedOldTilesFinished));
// if(action.row==3 && action.column==3){
//   // alert('3333333333')//weirdly the alert works and only somrtimes the console works
//     // console.log("33!!!!!!!! "+action.column+" " +state.animatedOldTilesFinished[3][3] )
// }

      return {...state};



    default:
      console.log(
        'SOMETHING WENT WRONG!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! - UTILS DEFAULT REDUCER',
      );
      return state;
  }
};
export default utilsReducer;
