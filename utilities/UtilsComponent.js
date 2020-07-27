import React,{useEffect} from 'react';
import {Dimensions} from 'react-native';
import {useResponsiveWidth,
} from 'react-native-responsive-dimensions';
import {UtilsContext} from './utilsContext';

const UtilsComponent = () => {
  const {UtilsState, UtilsDispatch} = React.useContext(UtilsContext);
  console.log('UtilsState from Utils-Component');
  
  console.log(UtilsState);
  // React.useEffect(()=>{
  //   console.log('useEffect from Utils-Component');

  //   UtilsDispatch({
  //     type: 'SET_CURRENT_ARRAY',
  //     payload: [888],
  //   },[]);
  // })

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  const onChange = ({ window, screen }) => {
    // console.log('window.width')

    // console.log(window.width)

    // setDimensions({ window, screen });
    UtilsDispatch({
        type: 'windowSize',
        payload:{
          width:window.width,
                height:window.height,
        } 
      });


    

  };

  // UtilsDispatch({
  //   type: 'windowwidth',
  //   payload: useResponsiveWidth(100),
  // });

  return (
    <>
      
    </>
  );
};
export {UtilsComponent};
